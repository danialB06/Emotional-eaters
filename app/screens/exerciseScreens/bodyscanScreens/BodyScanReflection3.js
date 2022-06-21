import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function BodyScanReflection3({ navigation }) {
  
  const [answer, setAnswer] = useState(""); 
  
  return (
    <LinearGradient
    colors={["#FFFFFF", "#CDE0C9"]}
    style={styles.gradientBG}
    >
      <View style={styles.container}>
        <Text style={styles.pageTitle}>
          What emotion {"\n"}did you feel?
        </Text>

        <View style={{flexDirection: "row"}}>
          <Pressable 
            style={answer == "Fear" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Fear")}}
          >  
            <Text style={answer == "Fear" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
              Fear
            </Text>
          </Pressable>

          <Pressable 
            style={answer == "Sadness" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Sadness")}}
          >  
            <Text style={answer == "Sadness" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
            Sadness
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: "row"}}>
          <Pressable 
              style={answer == "Anger" ? styles.answerBoxActive : styles.answerBox}
              onPress={()=>{setAnswer("Anger")}}
            >  
            <Text style={answer == "Anger" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
            Anger
            </Text>
          </Pressable>
          <Pressable 
              style={answer == "Guilt" ? styles.answerBoxActive : styles.answerBox}
              onPress={()=>{setAnswer("Guilt")}}
            >  
            <Text style={answer == "Guilt" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
            Guilt
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: "row"}}>
          <Pressable 
            style={answer == "Shame" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Shame")}}
          >  
            <Text style={answer == "Shame" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
              Shame
            </Text>
          </Pressable>
          <Pressable 
            style={answer == "Disgust" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Disgust")}}
          >  
            <Text style={answer == "Disgust" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
              Disgust
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: "row"}}>
          <Pressable 
            style={answer == "Confusion" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Confusion")}}
          >  
            <Text style={answer == "Confusion" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
              Confusion
            </Text>
          </Pressable>
          <Pressable 
            style={answer == "Powerless" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Powerless")}}
          >  
            <Text style={answer == "Powerless" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
              Powerless
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: "row"}}>
          <Pressable 
            style={answer == "Indifferent" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Indifferent")}}
          >  
            <Text style={answer == "Indifferent" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
              Indifferent
            </Text>
          </Pressable>

          <Pressable 
            style={answer == "Love" ? styles.answerBoxActive : styles.answerBox}
            onPress={()=>{setAnswer("Love")}}
          >  
            <Text style={answer == "Love" ? styles.answerBoxActiveTxt : styles.answerBoxTxt}>
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  answerBoxActive:{
    backgroundColor: "#2c6975",
    borderRadius: 30,
    padding: 10,
    marginRight: "2%",
    marginLeft: "2%",
    marginTop: "4%",
    marginBottom: "4%",
    width: "40%",
    justifyContent: "center",
  },
  answerBoxActiveTxt:{
    fontSize: 20, 
    textAlign: "center",
    color: "white",
  },
  answerBoxTxt:{
    fontSize: 20, 
    textAlign: "center",
    color: "black",
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