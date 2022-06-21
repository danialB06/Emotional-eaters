import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function OppositeGameSecondExerciseScreen({
  navigation,
  question1,
}) {
  const question = useState(question1);
  const [option1, setOption1] = useState(-1);
  const [option2, setOption2] = useState(-1);
  const [option3, setOption3] = useState(-1);
  const [option4, setOption4] = useState(-1);
  const [option5, setOption5] = useState(-1);
  const [option6, setOption6] = useState(-1);
  const [option7, setOption7] = useState(-1);
  const [option8, setOption8] = useState(-1);
  const [option9, setOption9] = useState(-1);
  const [option10, setOption10] = useState(-1);
  const [emotions, setEmotions] = useState([]);

  function Emotions() {
    const emotionList = [];

    if (option1 === 1) emotionList.push("Fear");

    if (option2 === 1) emotionList.push("Anger");

    if (option3 === 1) emotionList.push("Shame");

    if (option4 === 1) emotionList.push("Confusion");

    if (option5 === 1) emotionList.push("Indifferent");

    if (option6 === 1) emotionList.push("Sadness");

    if (option7 === 1) emotionList.push("Guilt");

    if (option8 === 1) emotionList.push("Disgust");

    if (option9 === 1) emotionList.push("Powerless");

    if (option10 === 1) emotionList.push("Love");

    console.log(question1);
    navigation.navigate("OppositeGameThirdExerciseScreen", {
      question1: question1,
      emotions: emotionList,
    });
    return emotionList;
  }

  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game 2/4</Text>
      <Text style={styles.title}>What did the situation make you feel?</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option1 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption1(option1 * -1)}
          >
            <Text style={styles.optionsText}>Fear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option2 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption2(option2 * -1)}
          >
            <Text style={styles.optionsText}>Anger</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option3 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption3(option3 * -1)}
          >
            <Text style={styles.optionsText}>Shame</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option4 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption4(option4 * -1)}
          >
            <Text style={styles.optionsText}>Confusion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option5 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption5(option5 * -1)}
          >
            <Text style={styles.optionsText}>Indifferent</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option6 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption6(option6 * -1)}
          >
            <Text style={styles.optionsText}>Sadness</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option7 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption7(option7 * -1)}
          >
            <Text style={styles.optionsText}>Guilt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option8 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption8(option8 * -1)}
          >
            <Text style={styles.optionsText}>Disgust</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option9 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption9(option9 * -1)}
          >
            <Text style={styles.optionsText}>Powerless</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionsBox,
              option10 == 1 ? styles.optionsActive : styles.optionsNotActive,
            ]}
            onPress={() => setOption10(option10 * -1)}
          >
            <Text style={styles.optionsText}>Love</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.submitButton} onPress={Emotions}>
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
  column: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  optionsBox: {
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#000000",
    borderWidth: 2,
    justifyContent: "center",
    height: "15%",
  },
  optionsActive: { backgroundColor: "#2c6975" },
  optionsNotActive: { backgroundColor: "#F3F3F3" },
  optionsText: {
    fontSize: 19,
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
  row: {
    flexDirection: "row",
    width: "100%",
    height: "70%",
    padding: 10,
  },
});
