import { View, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BodyScanReflection1({ navigation }) {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#CDE0C9"]}
      style={styles.gradientBG}
    >
    <View style={styles.container}>
      <Text style={styles.exerExpl}>
        <Text style={{fontWeight: 'bold'}}>Instruction for challenge 2</Text>
        {"\n"}{"\n"}
        <Text style={{fontWeight: 'bold'}}>Step 1: </Text>Think back to the 'body scan exercise'.{"\n"}{"\n"}
        <Text style={{fontWeight: 'bold'}}>Step 2: </Text>Think about a possible explanation for what you have been feeling in your body.{"\n"}{"\n"}
        <Text style={{fontWeight: 'bold'}}>Step 3: </Text>Answer the statement below.
      </Text>
      <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("BodyScanReflection2")}>
        <Text style={styles.startText}>
          Next
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
    marginTop: "20%",
    marginBottom: "20%",
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    borderColor: "#000000",
    borderWidth: 2,
    fontSize: 15,
    width: "90%",
    fontSize: 20,
  },
  startButton:{
    alignItems: "center",
    backgroundColor: "#6b869a",
    padding: 20,
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