import { View, StyleSheet, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../api/Firebase";
import { LogBox } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function GoalScreen({ navigation, route }) {
  const { title } = route.params;
  const { description } = route.params;
  const { myKey } = route.params;
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const UpdateGoal = () => {
    let newGoal = {
      title: title,
      description: description,
    };

    if (newTitle != "") {
      newGoal.title = newTitle;
    }
    if (newDescription != "") {
      newGoal.description = newDescription;
    }

    const goal = doc(db, "goals", myKey);

    setDoc(goal, newGoal, { merge: true });
  };
  const DeleteGoal = () => {
    const goal = doc(db, "goals", myKey);

    deleteDoc(goal);
    Alert.alert("Goal was deleted");
    navigation.popToTop();
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} /*onPress={DeleteGoal}*/>
        <MaterialIcons
          name="delete"
          size={35}
          color="black"
          style={styles.deleteButton}
        />
      </TouchableOpacity>
      <View style={styles.goalTitleContainer}>
        <TextInput
          style={styles.goalTitle}
          keyboardType="default"
          returnKeyType="done"
          onChangeText={(text) => setNewTitle(text)}
          onSubmitEditing={UpdateGoal}
        >
          {title}
        </TextInput>
      </View>
      <View style={styles.goalTextContainer}>
        <TextInput
          style={styles.goalText}
          keyboardType="default"
          returnKeyType="done"
          multiline={true}
          onSubmitEditing={/*UpdateGoal &&*/ Keyboard.dismiss}
          onChangeText={(text) => setNewDescription(text)}
        >
          {description}
        </TextInput>
      </View>
    </LinearGradient>
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
  deleteButton: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: "flex-end",
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
    textAlign: "justify",
  },
  goalText: {
    paddingTop: 15,
    marginRight: 20,
    marginLeft: 20,
    fontSize: 15,
    textAlign: "justify",
  },
  imageContainer: {
    width: 70,
    alignSelf: "flex-end",
  },
});
