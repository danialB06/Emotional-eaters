import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OppositeGameFirstExerciseScreen({ navigation }) {
  const [question1, setQuestion1] = useState("");
  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game 1/4</Text>
      <Text style={styles.title}>
        We’re going to reflect on a situation of yours today.
      </Text>
      <Text style={styles.question}>What was the situation?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here.."
        keyboardType="default"
        multiline={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="done"
        onChangeText={(newText) => setQuestion1(newText)}
      />
      <View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            navigation.navigate(
              "OppositeGameSecondExerciseScreen",
              {
                question1: question1,
              } && console.log(question1)
            )
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
  textInput: {
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    height: "60%",
    width: "80%",
    padding: 10,
  },
  title: {
    fontSize: 20,
    paddingTop: "10%",
    paddingRight: "8%",
    paddingLeft: "8%",
    fontWeight: "bold",
    textAlign: "center",
  },
  question: {
    fontSize: 22,
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
