import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function OppositeActionFirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opposite Game</Text>

      <View style={styles.instructions}>
        <Text>
          <Text style={styles.boldText}>
            Powerful emotions can often influence our behavior{" "}
          </Text>
          {"\n"}
          {"\n"}
          Sadness can make us stay in bed for longer. Happiness can make us feel
          energetic. {"\n"}
          {"\n"}Did you know that behaviour can also influence our emotions?{" "}
          {"\n"}
          {"\n"}The influence is not a one-way street! {"\n"}
          {"\n"}
          <Text style={styles.boldText}>The opposite game</Text>
          {"\n"}
          {"\n"}Let’s figure out what our behaviour is like now and whether our
          emotions have influenced it. {"\n"}
          {"\n"}We can take back control of our bodies once we figured it out!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("OppositeGameFirstPracticeScreen")}
        >
          <Text style={styles.submitText}>Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("OppositeGameFirstExerciseScreen")}
        >
          <Text style={styles.submitText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "#B9D5EB",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  instructions: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 20,
    width: "80%",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
  },
  title: {
    fontSize: 30,
    paddingTop: "10%",
    fontWeight: "bold",
    fontStyle: "italic",
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
});
