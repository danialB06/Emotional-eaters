import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function OppositeGameFinishedExerciseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          <Text style={styles.boldText}>
            Great job!{"\n"}
            {"\n"}
          </Text>
          The exercise will be saved to your diary.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.text}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#B9D5EB",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 50,
  },
  textContainer: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    marginTop: "20%",
    height: "40%",
    width: "80%",
    justifyContent: "center",
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
  text: {
    fontSize: 20,
    padding: 10,
  },
});
