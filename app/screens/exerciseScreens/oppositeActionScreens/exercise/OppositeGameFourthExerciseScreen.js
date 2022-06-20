import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { db } from "../../../../api/Firebase";
import { LinearGradient } from "expo-linear-gradient";

export default function OppositeGameFourthExerciseScreen({
  navigation,
  question1,
  question2,
  emotions,
}) {
  const [option1, setOption1] = useState(-1);
  const [option2, setOption2] = useState(-1);
  const [option3, setOption3] = useState(-1);
  const [question, setQuestion] = useState("");

  const SaveExercise = () => {
    let result = {
      question1: question1,
      question2: question2,
      emotions: emotions,
      question3: "",
      exercise: "Opposite Action",
    };
    result.question3 = question;
    console.log(emotions);
    console.log(question1);
    console.log(question2);
    console.log(result.exercise);
    console.log(result.question3);

    //does not work because the data is undefined
    //db.collection("oppositeAction").add(result);

    navigation.navigate("OppositeGameFinishedExerciseScreen");
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game 4/4</Text>
      <Text style={styles.title}>What would the opposite action be?</Text>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option1 == 1 ? styles.optionsActive : styles.optionsNotActive,
        ]}
        onPress={() => [
          setOption1(option1 * -1),
          setOption2(-1),
          setOption3(-1),
          setQuestion("Try again"),
        ]}
      >
        <Text style={styles.optionsText}>Try again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option2 == 1 ? styles.optionsActive : styles.optionsNotActive,
        ]}
        onPress={() => [
          setOption2(option2 * -1),
          setOption1(-1),
          setOption3(-1),
          setQuestion("Try something else"),
        ]}
      >
        <Text style={styles.optionsText}>Try something else</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option3 == 1 ? styles.optionsActive : styles.optionsNotActive,
        ]}
        onPress={() => [
          setOption3(option3 * -1),
          setOption1(-1),
          setOption2(-1),
          setQuestion("Ask for help"),
        ]}
      >
        <Text style={styles.optionsText}>Ask for help</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.submitButton} onPress={SaveExercise}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9D5EB",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  optionsBox: {
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    height: 100,
    justifyContent: "center",
    width: "60%",
  },
  optionsNotActive: {
    backgroundColor: "#F3F3F3",
  },
  optionsActive: {
    backgroundColor: "#2c6975",
  },
  optionsText: {
    fontSize: 21,
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    paddingTop: "10%",
    paddingRight: "5%",
    paddingLeft: "5%",
    fontWeight: "bold",
    textAlign: "center",
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    paddingTop: 20,
    paddingBottom: 20,
    width: 130,
    borderRadius: 36,
    borderColor: "#000000",
    borderWidth: 2,
  },
  submitText: {
    fontSize: 20,
  },
  stepCounter: {
    position: "absolute",
    right: 20,
    paddingTop: "3%",
  },
});
