import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function OppositeGameSecondPracticeScreen({ navigation }) {
  const [option1, setOption1] = useState(-1);
  const [option2, setOption2] = useState(-1);
  const [option3, setOption3] = useState(-1);
  const [option4, setOption4] = useState(-1);

  return (
    <View style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game Practice 2/3</Text>
      <Text style={styles.title}>
        What emotion is associated with getting bored with your own hobbies?
      </Text>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option1 == 1 ? styles.optionsSelected : styles.optionsNotSelected,
        ]}
        onPress={() => [
          setOption1(option1 * -1),
          setOption2(-1),
          setOption3(-1),
          setOption4(-1),
        ]}
      >
        <Text style={styles.optionsText}>Sadness</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option2 == 1 ? styles.optionsSelected : styles.optionsNotSelected,
        ]}
        onPress={() => [
          setOption2(option2 * -1),
          setOption1(-1),
          setOption3(-1),
          setOption4(-1),
        ]}
      >
        <Text style={styles.optionsText}>Anger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option3 == 1 ? styles.optionsSelected : styles.optionsNotSelected,
        ]}
        onPress={() => [
          setOption3(option3 * -1),
          setOption1(-1),
          setOption2(-1),
          setOption4(-1),
        ]}
      >
        <Text style={styles.optionsText}>Happiness</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionsBox,
          option4 == 1 ? styles.optionsSelected : styles.optionsNotSelected,
        ]}
        onPress={() => [
          setOption4(option4 * -1),
          setOption1(-1),
          setOption2(-1),
          setOption3(-1),
        ]}
      >
        <Text style={styles.optionsText}>Fear</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("OppositeGameThirdPracticeScreen")}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  optionsNotSelected: {
    backgroundColor: "#F3F3F3",
  },
  optionsSelected: {
    backgroundColor: "#BAC7E9",
  },
  optionsBox: {
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    height: 70,
    justifyContent: "center",
    width: "60%",
  },

  optionsText: {
    fontSize: 21,
    textAlign: "center",
  },
  title: {
    fontSize: 23,
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
