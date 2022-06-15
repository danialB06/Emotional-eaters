import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard, Alert } from "react-native";
import { db } from "../../../database/Config";
import React, { useState, useEffect } from "react";

export default function NewGoalScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveAnswer = () => {
    let goal = {
      title: "",
      description: "",
    };
    goal.title = title;
    goal.description = description;

    db.collection("goals").add(goal);
    Alert.alert("Goal saved!");
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalTitleContainer}>
        <TextInput
          style={styles.goalTitle}
          placeholder="Title"
          keyboardType="default"
          returnKeyType="done"
          onChangeText={(newText) => setTitle(newText)}
        />
      </View>
      <View style={styles.goalTextContainer}>
        <TextInput
          style={styles.goalText}
          placeholder="Type here.."
          keyboardType="default"
          returnKeyType="done"
          multiline={true}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(newText) => setDescription(newText)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          color="#063559"
          onPress={() => navigation.navigate("AllGoalsScreen")}
        />
        <Button title="Save" color="#063559" onPress={saveAnswer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
  },
  goalTitleContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 50,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  goalTitle: {
    marginLeft: 20,
    fontSize: 18,
  },
  goalTextContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "70%",
    borderRadius: 20,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  goalText: {
    paddingTop: 15,
    marginLeft: 20,
    fontSize: 18,
  },
});
