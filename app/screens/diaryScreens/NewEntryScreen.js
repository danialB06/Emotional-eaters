import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";

export default function NewEntryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TextInput
          style={styles.title}
          placeholder="Title"
          keyboardType="default"
          returnKeyType="done"
        />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          placeholder="Type here.."
          keyboardType="default"
          returnKeyType="done"
          multiline={true}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          color="#063559"
          onPress={() => navigation.navigate("DiaryScreen")}
        />
        <Button
          title="Save"
          color="#063559"
          onPress={() => navigation.navigate("DiaryScreen")}
        />
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
  titleContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 50,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "70%",
    borderRadius: 20,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  text: {
    paddingTop: 15,
    marginLeft: 20,
    fontSize: 18,
  },
});
