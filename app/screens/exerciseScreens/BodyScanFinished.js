import { View, StyleSheet, Text, Pressable } from "react-native";

export default function BodyScanFinished({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.exerExpl}>
        <Text style={{fontWeight: 'bold'}}>Finished!</Text>
        {"\n"}{"\n"}
        Good job! You did the body scan exercise and earned 100 points! Your progress has been saved to your diary.
      </Text>
      <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("ExercisesScreen")}>
        <Text style={styles.startText}>
          Done
        </Text>
      </Pressable >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9D5EB",
    alignItems: "center",
  },
  exerExpl:{
    padding: 40,
    marginTop: "20%",
    marginBottom: "20%",
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    borderColor: "#000000",
    borderWidth: 2,
    fontSize: 15,
    width: "90%",
    fontSize: 20,
    textAlign: "center",
  },
  startButton:{
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 20,
    width: 150,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 2,
    bottom: "10%",
    position: "absolute",
  },
  startText:{
    fontSize: 20,
  }
});