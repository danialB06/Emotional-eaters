import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";

export default function PositiveReframingFirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.stepCounter}>Positive Reframing 1/5</Text>
      <Text style={styles.title}>Describe the unpleasant situation</Text>
      <Text style={styles.question}>Who was involved?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here.."
        keyboardType="default"
        multiline={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="done"
      />
      <Text style={styles.question}>What happened?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type here.."
        keyboardType="default"
        multiline={true}
        onSubmitEditing={Keyboard.dismiss}
        returnKeyType="done"
      />
      <Text style={styles.question}>Where and when did it happen?</Text>
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
          onPress={() => navigation.navigate("PositiveReframingSecondScreen")}
        >
          <Text style={styles.submitText}>Next</Text>
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
  textInput: {
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    height: "15%",
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
