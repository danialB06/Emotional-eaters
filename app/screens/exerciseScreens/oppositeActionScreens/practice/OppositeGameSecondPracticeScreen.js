import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function OppositeGameSecondPracticeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game Practice 2/3</Text>
      <Text style={styles.title}>
        What emotion is associated with getting bored with your own hobbies?
      </Text>
      <View style={styles.options}>
        <Text style={styles.optionsText}>Sadness</Text>
      </View>
      <View style={styles.options}>
        <Text style={styles.optionsText}>Anger</Text>
      </View>
      <View style={styles.options}>
        <Text style={styles.optionsText}>Happiness</Text>
      </View>
      <View style={styles.options}>
        <Text style={styles.optionsText}>Fear</Text>
      </View>
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
  options: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
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
