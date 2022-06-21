import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PositiveReframingInstructionScreen({ navigation }) {
  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <Text style={styles.title}>Positive reframing exercise</Text>

      <View style={styles.instructions}>
        <Text style={{ textAlign: "justify" }}>
          This exercise will challenge you to look at an unpleasant situation
          from a positive angle. How we feel is strongly influenced by how we
          think about a particular situation. Take these two examples:{"\n"}
          {"\n"}
          <Text style={styles.boldText}>Example 1:</Text>
          You have a conflict with your partner -{">"} You think, "Ah, I hate
          him! I wish he would leave."{"\n"}
          {"\n"}
          <Text style={styles.boldText}>Example 2:</Text>
          You have a conflict with your partner -{">"} You think, "Ah, maybe
          he's had a bad day at work."{"\n"}
          {"\n"}
          Do you notice the difference? Chances are that you will feel more
          positive after reading example 2. {"\n"} {"\n"}With the positive
          reframing exercise you can now practice daily reinterpreting
          unpleasant situations. {"\n"} {"\n"}The exercise will last a maximum
          of 15 minutes. Good luck and have fun practicing!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("PositiveReframingFirstScreen")}
        >
          <Text style={styles.submitText}>Start</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
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
    width: "85%",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 2,
  },
  title: {
    fontSize: 27,
    paddingTop: "6%",
    paddingHorizontal: "5%",
    paddingBottom: "3%",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    marginTop: 10,
    width: 130,
    height: 50,
    borderRadius: 36,
    borderColor: "#000000",
    borderWidth: 2,
  },
  submitText: {
    fontSize: 20,
  },
});
