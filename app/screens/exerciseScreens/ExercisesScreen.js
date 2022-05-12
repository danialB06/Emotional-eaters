import { View, StyleSheet, Text, Button } from "react-native";

export default function ExercisesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.exerciseButton}>
          <Button
            color={"black"}
            title="Body Scan"
            onPress={() => navigation.navigate("BodyScanFirstScreen")}
          />
        </View>
        <View style={styles.exerciseButton}>
          <Button
            color={"black"}
            title="Opposite Action"
            onPress={() => navigation.navigate("OppositeActionFirstScreen")}
          />
        </View>
        <View style={styles.exerciseButton}>
          <Button color={"black"} title="Positive Reframing" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 50,
    justifyContent: "space-between",
    height: "70%",
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingBottom: 50,
  },
  exerciseButton: {
    backgroundColor: "#F3F3F3",
    paddingTop: 30,
    paddingBottom: 30,
    width: 228,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
