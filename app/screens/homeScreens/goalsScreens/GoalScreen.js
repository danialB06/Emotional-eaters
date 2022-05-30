import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";

export default function GoalScreen({ route }) {
  const { title } = route.params;
  const { description } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.deleteButton}
          source={require("../../../assets/homescreen/goalsscreen/delete.png")}
        />
      </TouchableOpacity>
      <View style={styles.goalTitleContainer}>
        <TextInput
          style={styles.goalTitle}
          keyboardType="default"
          returnKeyType="done"
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
          onSubmitEditing={Keyboard.dismiss}
        >
          {description}
        </TextInput>
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
  },
  goalText: {
    paddingTop: 15,
    marginLeft: 20,
    fontSize: 18,
  },
});
