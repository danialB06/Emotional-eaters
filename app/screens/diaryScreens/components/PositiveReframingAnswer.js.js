import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../../../database/Config";
import { ScrollView } from "react-native-gesture-handler";

export default function PositiveReframingAnswer({ myKey, description }) {
  return <Answers myKey={myKey} description={description} />;
}
const Answers = ({ myKey, description }) => {
  const [loading, setLoading] = useState(true);
  const [allAnswers, setAllAnswers] = useState([]);

  let answer = {
    exercise: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
  };

  useEffect(() => {
    const getAnswersFromFirebase = [];
    const answers = db
      .collection("positiveReframing")
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
        answer.exercise = a.exercise;
        answer.question1 = a.question1;
        answer.question2 = a.question2;
        answer.question3 = a.question3;
        answer.question4 = a.question4;
        answer.question5 = a.question5;
        answer.question6 = a.question6;
        answer.question7 = a.question7;
        answer.question8 = a.question8;
        answer.question9 = a.question9;
      }
    });
  }
  return (
    <ScrollView snapToInterval={375} decelerationRate="fast" horizontal>
      <ScrollView style={styles.answersContainer}>
        <Text style={styles.question}>Who was involved?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question1}</Text>
        </View>
        <Text style={styles.question}>What happened?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question2}</Text>
        </View>
        <Text style={styles.question}>Where and when did it happen?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question3}</Text>
        </View>
        <Text style={styles.question}>
          What thoughts went through your head?
        </Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question4}</Text>
        </View>
        <Text style={styles.question}>
          Which emotion(s) did the situation evoke in you?
        </Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question5}</Text>
        </View>
        <Text style={styles.question}>
          What other explanation can you think of for what happened?
        </Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question6}</Text>
        </View>
        <Text style={styles.question}>
          What is nice/good/positive about this situation?
        </Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question7}</Text>
        </View>
        <Text style={styles.question}>What can you learn from this?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question8}</Text>
        </View>
        <Text style={styles.question}>How can this situation help me?</Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.question9}</Text>
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
