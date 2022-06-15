import { View, StyleSheet, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../../../database/Config";

import { ScrollView } from "react-native-gesture-handler";
import Body from "./Body";

export default function BodyscanAnswer({ myKey, description }) {
  return <Answers myKey={myKey} description={description} />;
}

const Answers = ({ myKey, description }) => {
  const [loading, setLoading] = useState(true);
  const [allAnswers, setAllAnswers] = useState([]);

  let answer = {
    bodyScanMap: "",
    emotions: [],
    exercise: "",
    explanation: "",
  };

  useEffect(() => {
    const getAnswersFromFirebase = [];
    const answers = db.collection("bodyScan").onSnapshot((querySnapshot) => {
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
        answer.bodyScanMap = a.bodyScanMap;
        answer.emotions = a.emotions;
        answer.exercise = a.exercise;
        answer.explanation = a.explanation;
      }
    });
  }

  return (
    <ScrollView snapToInterval={375} decelerationRate="fast" horizontal>
      <ScrollView style={styles.answersContainer}>
        <View style={styles.imageContainer}>
          <BodyMap id={answer.bodyScanMap} />
        </View>
        <Text style={styles.question}>
          What have you felt in your body can be explained by:
        </Text>
        <View style={styles.questionAnswer}>
          <Text style={styles.description}>{answer.explanation}</Text>
        </View>
        <Text style={styles.question}>What emotion did you feel?</Text>
        <View style={styles.questionAnswer}>
          {answer.emotions.map((emotion) => (
            <Text key={emotion} style={styles.description}>
              {" "}
              {emotion}{" "}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const BodyMap = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [allAnswers, setAllAnswers] = useState([]);

  let body = {
    evalForehead: 1,
    evalEyes: 1,
    evalJaw: 1,
    evalShoulders: 1,
    evalChest: 1,
    evalGut: 1,
    evalCrotch: 1,
    evalUpperLegs: 1,
    evalLowerLegs: 1,
    evalFeet: 1,
    evalUpperArms: 1,
    evalLowerArms: 1,
    evalHands: 1,
  };

  useEffect(() => {
    const getAnswersFromFirebase = [];
    const answers = db.collection("Bodyscans").onSnapshot((querySnapshot) => {
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
    allAnswers.forEach((b) => {
      if (b.key === id) {
        body.evalForehead = b.Forehead;
        body.evalEyes = b.Eyes;
        body.evalJaw = b.Jaw;
        body.evalShoulders = b.Shoulders;
        body.evalChest = b.Chest;
        body.evalGut = b.Gut;
        body.evalCrotch = b.Crotch;
        body.evalUpperLegs = b.UpperLegs;
        body.evalLowerLegs = b.LowerLegs;
        body.evalFeet = b.Feet;
        body.evalUpperArms = b.UpperArms;
        body.evalLowerArms = b.LowerArms;
        body.evalHands = b.Hands;
      }
    });
  }

  return (
    <View style={{ height: 550 }}>
      <Body
        evalForehead={body.evalForehead}
        evalEyes={body.evalEyes}
        evalJaw={body.evalJaw}
        evalShoulders={body.evalShoulders}
        evalChest={body.evalChest}
        evalGut={body.evalGut}
        evalCrotch={body.evalCrotch}
        evalUpperLegs={body.evalUpperLegs}
        evalLowerLegs={body.evalLowerLegs}
        evalFeet={body.evalFeet}
        evalUpperArms={body.evalUpperArms}
        evalLowerArms={body.evalLowerArms}
        evalHands={body.evalHands}
      />
    </View>
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
  image: {
    height: "100%",
    width: 280,
    alignSelf: "center",
  },
  imageContainer: {
    width: 335,
    justifyContent: "center",
    alignContent: "center",
  },
});
