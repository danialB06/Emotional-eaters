import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function OppositeGameFirstPracticeScreen({ navigation }) {
  const [option1, setOption1] = useState(-1);
  const [option2, setOption2] = useState(-1);
  const [option3, setOption3] = useState(-1);

  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game Practice 1/3</Text>
      <Text style={styles.title}>
        What behaviour is associated with happiness?
      </Text>
      <TouchableOpacity
        style={option1 == 1 ? styles.optionsActive : styles.options}
        onPress={() => [
          setOption1(option1 * -1),
          setOption2(-1),
          setOption3(-1),
        ]}
      >
        <Text style={styles.optionsText}>Avoidance or running away</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={option2 == 1 ? styles.optionsActive : styles.options}
        onPress={() => [
          setOption2(option2 * -1),
          setOption1(-1),
          setOption3(-1),
        ]}
      >
        <Text style={styles.optionsText}>Staying in bed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={option3 == 1 ? styles.optionsActive : styles.options}
        onPress={() => [
          setOption3(option3 * -1),
          setOption1(-1),
          setOption2(-1),
        ]}
      >
        <Text style={styles.optionsText}>Socializing</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            navigation.navigate("OppositeGameSecondPracticeScreen")
          }
        >
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
  options: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    height: 100,
    justifyContent: "center",
    width: "60%",
  },
  optionsActive: {
    alignItems: "center",
    backgroundColor: "#2c6975",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    height: 100,
    justifyContent: "center",
    width: "60%",
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
