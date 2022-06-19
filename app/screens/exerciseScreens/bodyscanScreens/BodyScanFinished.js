import { View, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BodyScanFinished({ navigation }) {
  return (
    <LinearGradient
    colors={["#FFFFFF", "#CDE0C9"]}
    style={styles.gradientBG}
    >
      <View style={styles.container}>
        <Text style={styles.exerExpl}>
          <Text style={{fontWeight: 'bold'}}>Finished!</Text>
          {"\n"}{"\n"}{"\n"}
          Good job! You did the body scan exercise and earned 100 points! Your progress has been saved to your diary.
        </Text>
        <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("ExercisesScreen")}>
          <Text style={styles.startText}>
            Done
          </Text>
        </Pressable >
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  exerExpl:{
    padding: 40,
    marginTop: "45%",
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
    backgroundColor: "#6b869a",
    padding: 15,
    width: 150,
    borderRadius: 100,
    bottom: "10%",
    position: "absolute",
  },
  startText:{
    fontSize: 20,
    color: "white",
  },
  gradientBG:{
    height: "100%",
    width: "100%",
  },
});