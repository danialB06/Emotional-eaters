import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function BodyScanReflection2({ navigation }) {
  
  const [answer1, setAnswer1] = useState(1); 
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);

  var answer1colour = answer1 == 1 ? "#F3F3F3": "#2c6975";
  var answer2colour = answer2 == 1 ? "#F3F3F3": "#2c6975";
  var answer3colour = answer3 == 1 ? "#F3F3F3": "#2c6975";

  //Active buttons
  var answer1prop = {backgroundColor: answer1colour, borderWidth: 2, borderRadius: 30, padding: 20, width: "80%", margin: 10, textAlign: "center"}
  var answer2prop = {backgroundColor: answer2colour, borderWidth: 2, borderRadius: 30, padding: 20, width: "80%", margin: 10, textAlign: "center"}
  var answer3prop = {backgroundColor: answer3colour, borderWidth: 2, borderRadius: 30, padding: 20, width: "80%", margin: 10, textAlign: "center"}
  
  return (
    <LinearGradient
      colors={["#FFFFFF", "#CDE0C9"]}
      style={styles.gradientBG}
    >
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        What you have felt in your body can be explained by:
      </Text>

      <Pressable style={answer1prop} onPress={()=>{[setAnswer1(answer1 * -1), setAnswer2(1), setAnswer3(1)]}}>
        <Text style={{fontSize: 20}}>
          Biological process {"\n"}
          (e.g. hunger- or muscle pain)
        </Text>
      </Pressable>

      <Pressable style={answer2prop} onPress={()=>[setAnswer2(answer2 * -1), setAnswer1(1), setAnswer3(1)]}>
        <Text style={{fontSize: 20}}>
          Emotions
        </Text>
      </Pressable>

      <Pressable style={answer3prop} onPress={()=>[setAnswer3(answer3 * -1), setAnswer2(1), setAnswer1(1)]}>
        <Text style={{fontSize: 20}}>
          Other
        </Text>
      </Pressable>

      <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("BodyScanReflection3")}>
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
  pageTitle:{
    width: "80%",
    fontSize: 30,
    paddingTop: "5%",
    textAlign: "center",
    marginBottom: "5%",
    fontWeight: "bold",
  },
  exerExpl:{
    padding: 20,
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
  answerBox:{
    borderWidth: 2,
    borderRadius: 30,
    padding: 10,
    marginTop: "5%",
    width: "80%",
    justifyContent: "center",
    fontSize: 20,
    backgroundColor: "#BAC7E9",
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