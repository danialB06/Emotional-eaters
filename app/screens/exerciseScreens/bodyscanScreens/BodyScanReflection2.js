import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState, useEffect } from 'react';

export default function BodyScanReflection2({ navigation }) {
  
  const [answered, setAnswered] = useState(0);
  const [answer1, setAnswer1] = useState(1); 
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);

  var answer1colour = answer1 == 1 ? "#F3F3F3": "#BAC7E9";
  var answer2colour = answer2 == 1 ? "#F3F3F3": "#BAC7E9";
  var answer3colour = answer3 == 1 ? "#F3F3F3": "#BAC7E9";

  useEffect(()=> {
    console.log("useeffects")

  })

  //Active buttons
  var answer1prop = {backgroundColor: answer1colour, borderWidth: 2, borderRadius: 30, padding: 20, width: "80%", margin: 10, textAlign: "center"}
  var answer2prop = {backgroundColor: answer2colour, borderWidth: 2, borderRadius: 30, padding: 20, width: "80%", margin: 10, textAlign: "center"}
  var answer3prop = {backgroundColor: answer3colour, borderWidth: 2, borderRadius: 30, padding: 20, width: "80%", margin: 10, textAlign: "center"}
  
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        What you have felt in your body can be explained by one of the following:
      </Text>

      <Pressable style={answer1prop} onPress={()=>{setAnswer1(answer1 * -1)}}>
        <Text style={{fontSize: 20}}>
          Biological process {"\n"}
          (e.g. hunger- or muscle pain)
        </Text>
      </Pressable>

      <Pressable style={answer2prop} onPress={()=>setAnswer2(answer2 * -1)}>
        <Text style={{fontSize: 20}}>
          Emotions
        </Text>
      </Pressable>

      <Pressable style={answer3prop} onPress={()=>setAnswer3(answer3 * -1)}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9D5EB",
    alignItems: "center",
  },
  pageTitle:{
    width: "80%",
    fontSize: 30,
    paddingTop: "5%",
    textAlign: "center",
    marginBottom: "5%",
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
    backgroundColor: "#F3F3F3",
    padding: 15,
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