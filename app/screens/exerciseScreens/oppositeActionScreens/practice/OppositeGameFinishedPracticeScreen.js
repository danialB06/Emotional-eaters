import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OppositeGameFinishedPracticeScreen({ navigation }) {
  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.submitText}>
          <Text style={styles.boldText}>
            Finished!{"\n"}
            {"\n"}
          </Text>
          You can recognize the emotions behind our behaviour now. {"\n"}
          {"\n"}You also know how to what behaviour can counteract our emotions!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.submitText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text
            style={styles.submitText}
            onPress={() =>
              navigation.navigate("OppositeGameFirstExerciseScreen")
            }
          >
            Start Game
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
    textAlign: "center",
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
  textContainer: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
    marginTop: "20%",
    height: "50%",
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
  submitText: {
    fontSize: 20,
  },
});
