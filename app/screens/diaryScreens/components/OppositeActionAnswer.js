import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../../../database/Config";

import { ScrollView } from "react-native-gesture-handler";

export default function OppositeActionAnswer({ myKey, description }) {
  return <Answers myKey={myKey} description={description} />;
}

const Answers = ({ myKey, description }) => {
  const [loading, setLoading] = useState(true);
  const [allAnswers, setAllAnswers] = useState([]);

  let answer = {
    emotions: [],
    exercise: "",
    question1: "",
    question2: "",
    question3: "",
  };

  useEffect(() => {
    const getAnswersFromFirebase = [];
    const answers = db
      .collection("oppositeAction")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getAnswersFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setAllAnswers(getAnswersFromFirebase);
      });

    setLoading(false);
    return () => answers();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (allAnswers.length > 0) {
    allAnswers.forEach((a) => {
      if (a.key === myKey) {
        answer.emotions = a.emotions;
        answer.exercise = a.exercise;
        answer.question1 = a.question1;
        answer.question2 = a.question2;
        answer.question3 = a.question3;
      }
    });
  }
  return (
    <ScrollView snapToInterval={375} decelerationRate="fast" horizontal>
      <ScrollView style={styles.answersContainer}>
        <Text style={styles.question}>What was the situation?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question1}</Text>
        </View>
        <Text style={styles.question}>What emotions did you feel?</Text>
        <View style={styles.questionAnswer}>
          {answer.emotions.map((emotion) => (
            <Text key={emotion} style={styles.description}>
              {" "}
              {emotion}{" "}
            </Text>
          ))}
        </View>
        <Text style={styles.question}>What behaviour did you exhibit?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question2}</Text>
        </View>
        <Text style={styles.question}>What would the opposite action be?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question3}</Text>
        </View>
      </ScrollView>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  answersContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "95%",
    width: 335,
  },

  descriptionContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "90%",
    width: 335,
    borderRadius: 20,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  question: {
    fontSize: 15,
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    fontWeight: "bold",
    textAlign: "justify",
  },
  questionAnswer: {
    backgroundColor: "#FFFF",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    width: "100%",
    paddingBottom: 10,
  },
  description: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
    textAlign: "justify",
    marginRight: 15,
  },
});
