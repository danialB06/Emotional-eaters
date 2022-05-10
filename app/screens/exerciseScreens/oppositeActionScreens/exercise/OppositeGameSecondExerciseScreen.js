import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function OppositeGameSecondExerciseScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.stepCounter}>Opposite Game 2/4</Text>
      <Text style={styles.title}>What did the situation make you feel?</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Fear</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Anger</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Shame</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Confusion</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Indifferent</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Sadness</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Guilt</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Disgust</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Powerless</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionsText}>Love</Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("OppositeGameThirdExerciseScreen")}
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
  column: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  options: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    borderColor: "#000000",
    borderWidth: 2,
    justifyContent: "center",
    height: "15%",
  },
  optionsText: {
    fontSize: 19,
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
  row: {
    flexDirection: "row",
    width: "100%",
    height: "70%",
    padding: 10,
  },
});
