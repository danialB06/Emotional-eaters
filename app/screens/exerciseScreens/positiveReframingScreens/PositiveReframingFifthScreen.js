import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PositiveReframingFifthScreen({ navigation }) {
  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <Text style={styles.stepCounter}>Positive Reframing 5/5</Text>
      <Text style={styles.title}>
        Now try to look at the situation from a positive angle
      </Text>

      <Text style={styles.question}>What can you learn from this?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here.."
        keyboardType="default"
        multiline={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="done"
      />
      <Text style={styles.question}>How can this situation help me?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here.."
        keyboardType="default"
        multiline={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="done"
      />
      <View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("PositiveReframingFinishedScreen")}
        >
          <Text style={styles.submitText}>Finish</Text>
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
    height: "20%",
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
    textAlign: "center",
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    paddingTop: 15,
    paddingBottom: 15,
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
