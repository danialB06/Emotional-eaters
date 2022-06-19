import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState, useEffect } from 'react';

export default function BodyScanReflection3({ navigation }) {
  
  const [answered, setAnswered] = useState(0);
  const [answer1, setAnswer1] = useState(1); 
  const [answer2, setAnswer2] = useState(1);
  const [answer3, setAnswer3] = useState(1);

  var answer1colour = answer1 == 1 ? "#F3F3F3": "#BAC7E9";
  var answer2colour = answer2 == 1 ? "#F3F3F3": "#BAC7E9";
  var answer3colour = answer3 == 1 ? "#F3F3F3": "#BAC7E9";

  //Active buttons
  var answer1prop = {backgroundColor: answer1colour, borderWidth: 2, borderRadius: 30, padding: 10, width: "30%", margin: 10, textAlign: "center"}
  var answer2prop = {backgroundColor: answer2colour, borderWidth: 2, borderRadius: 30, padding: 10, width: "30%", margin: 10, textAlign: "center"}
  var answer3prop = {backgroundColor: answer3colour, borderWidth: 2, borderRadius: 30, padding: 10, width: "30%", margin: 10, textAlign: "center"}
  
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        What emotion did you feel?
      </Text>

      <View style={{flexDirection: "row"}}>
        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Fear
          </Text>
        </Pressable>

        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Sadness
          </Text>
        </Pressable>
      </View>

      <View style={{flexDirection: "row"}}>
        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Anger
          </Text>
        </Pressable>

        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Guilt
          </Text>
        </Pressable>
      </View>

      <View style={{flexDirection: "row"}}>
        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Shame
          </Text>
        </Pressable>

        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Disgust
          </Text>
        </Pressable>
      </View>

      <View style={{flexDirection: "row"}}>
        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Confusion
          </Text>
        </Pressable>

        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Powerlesss
          </Text>
        </Pressable>
      </View>

      <View style={{flexDirection: "row"}}>
        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Indifferent
          </Text>
        </Pressable>

        <Pressable style={styles.answerBox}>
          <Text style={{fontSize: 20, textAlign: "center"}}>
            Love
          </Text>
        </Pressable>
      </View>


      <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("BodyScanFinished")}>
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
  answerPair:{
    flexDirection: "row",
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
    marginRight: "2%",
    marginLeft: "2%",
    marginTop: "4%",
    marginBottom: "4%",
    width: "40%",
    justifyContent: "center",
    fontSize: 20,
    backgroundColor: "#F3F3F3",
  },
  startButton:{
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 20,
    width: 150,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 2,
    bottom: "8%",
    position: "absolute",
  },
  startText:{
    fontSize: 20,
  }
});