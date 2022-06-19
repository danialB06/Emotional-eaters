import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";

export default function BodyScanBodyMap({ navigation }) {
  //Bodypart evaluation scores
  const [evalForehead, setEvalForehead] = useState(0);
  const [evalEyes, setEvalEyes] = useState(0);
  const [evalJaw, setEvalJaw] = useState(0);
  const [evalShoulders, setEvalShoulders] = useState(0);
  const [evalChest, setEvalChest] = useState(0);
  const [evalGut, setEvalGut] = useState(0);
  const [evalCrotch, setEvalCrotch] = useState(0);
  const [evalUpperLegs, setEvalUpperLegs] = useState(0);
  const [evalLowerLegs, setEvalLowerLegs] = useState(0);
  const [evalFeet, setEvalFeet] = useState(0);
  const [evalUpperArms, setEvalUpperArms] = useState(0);
  const [evalLowerArms, setEvalLowerArms] = useState(0);
  const [evalHands, setEvalHands] = useState(0);

  function ImgHandler(bodyPartEval){
    switch (bodyPartEval){
      case "Forehead":
        var newValue = evalForehead == 2 ? -2 : +1;
        setEvalForehead(evalForehead + newValue);
      break;
      case "Eyes":
        var newValue = evalEyes == 2 ? -2 : +1;
        setEvalEyes(evalEyes + newValue);
      break;
      case "Jaw":
        var newValue = evalJaw == 2 ? -2 : +1;
        setEvalJaw(evalJaw + newValue);
      break;
      case "Shoulders":
        var newValue = evalShoulders == 2 ? -2 : +1;
        setEvalShoulders(evalShoulders + newValue);
      break;
      case "UpperArms":
        var newValue = evalUpperArms == 2 ? -2 : +1;
        setEvalUpperArms(evalUpperArms + newValue);
      break;
      case "LowerArms":
        var newValue = evalLowerArms == 2 ? -2 : +1;
        setEvalLowerArms(evalLowerArms + newValue);
      break;
      case "Hands":
        var newValue = evalHands == 2 ? -2 : +1;
        setEvalHands(evalHands + newValue);
      break;
      case "Chest":
        var newValue = evalChest == 2 ? -2 : +1;
        setEvalChest(evalChest + newValue);
      break;
      case "Gut":
        var newValue = evalGut== 2 ? -2 : +1;
        setEvalGut(evalGut + newValue);
      break;
      case "Crotch":
        var newValue = evalCrotch== 2 ? -2 : +1;
        setEvalCrotch(evalCrotch + newValue);
      break;
      case "UpperLegs":
        var newValue = evalUpperLegs== 2 ? -2 : +1;
        setEvalUpperLegs(evalUpperLegs + newValue);
      break;
      case "LowerLegs":
        var newValue = evalLowerLegs== 2 ? -2 : +1;
        setEvalLowerLegs(evalLowerLegs + newValue);
      break;
      case "Feet":
        var newValue = evalFeet== 2 ? -2 : +1;
        setEvalFeet(evalFeet + newValue);
      break;
    }
  }

  var foreheadImg = [require("../../../assets/bodyscan/headForeheadC.png"), require("../../../assets/bodyscan/headForehead.png"),  require("../../../assets/bodyscan/headForeheadB.png")];
  var eyesImg = [require("../../../assets/bodyscan/headEyesC.png"), require("../../../assets/bodyscan/headEyes.png"), require("../../../assets/bodyscan/headEyesB.png")];
  var jawImg = [require("../../../assets/bodyscan/headJawC.png"), require("../../../assets/bodyscan/headJaw.png"), require("../../../assets/bodyscan/headJawB.png")]
  var shoulderImg = [require("../../../assets/bodyscan/bodyShouldersC.png"), require("../../../assets/bodyscan/bodyShoulders.png"), require("../../../assets/bodyscan/bodyShouldersB.png") ]
  var chestImg = [require("../../../assets/bodyscan/bodyChestC.png"), require("../../../assets/bodyscan/bodyChest.png"), require("../../../assets/bodyscan/bodyChestB.png")];
  var gutImg = [require("../../../assets/bodyscan/bodyGutC.png"), require("../../../assets/bodyscan/bodyGut.png"), require("../../../assets/bodyscan/bodyGutB.png")];
  var crotchImg = [require("../../../assets/bodyscan/bodyCrotchC.png"), require("../../../assets/bodyscan/bodyCrotch.png"), require("../../../assets/bodyscan/bodyCrotchB.png")];
  var upperLegsImg = [require("../../../assets/bodyscan/legsUpperC.png"), require("../../../assets/bodyscan/legsUpper.png"), require("../../../assets/bodyscan/legsUpperB.png")];
  var lowerLegsImg = [require("../../../assets/bodyscan/legsLowerC.png"), require("../../../assets/bodyscan/legsLower.png"), require("../../../assets/bodyscan/legsLowerB.png")]
  var feetImg = [require("../../../assets/bodyscan/legsFeetC.png"), require("../../../assets/bodyscan/legsFeet.png"), require("../../../assets/bodyscan/legsFeetB.png")]
  var upperArmsImg = [require("../../../assets/bodyscan/armsUpperC.png"), require("../../../assets/bodyscan/armsUpper.png"), require("../../../assets/bodyscan/armsUpperB.png")];
  var lowerArmsImg = [require("../../../assets/bodyscan/armsLowerC.png"), require("../../../assets/bodyscan/armsLower.png"), require("../../../assets/bodyscan/armsLowerB.png")]
  var handsImg = [require("../../../assets/bodyscan/armsHandsC.png"),  require("../../../assets/bodyscan/armsHands.png"),  require("../../../assets/bodyscan/armsHandsB.png")]

  return(
    <LinearGradient
    colors={["#FFFFFF", "#CDE0C9"]}
    style={styles.gradientBG}
    >
      <View style={styles.container}>
        <Text style={styles.exerExpl}>
          <Text style={styles.greenText}>Green</Text> = pleasant. <Text style={styles.redText}>Red</Text> = unpleasant.
        </Text>
        <View style={styles.bodyMapContainer}>
          <Image style={styles.bodyImage} source={foreheadImg[evalForehead]}/>
          <Image style={styles.bodyImage} source={eyesImg[evalEyes]}/>
          <Image style={styles.bodyImage} source={jawImg[evalJaw]}/>
          <Image style={styles.bodyImage}source={shoulderImg[evalShoulders]}/>
          <Image style={styles.bodyImage} source={chestImg[evalChest]}/>
          <Image style={styles.bodyImage} source={gutImg[evalGut]}/>
          <Image style={styles.bodyImage} source={crotchImg[evalCrotch]}/>
          <Image style={styles.bodyImage} source={handsImg[evalHands]}/>
          <Image style={styles.bodyImage} source={lowerArmsImg[evalLowerArms]}/>
          <Image style={styles.bodyImage} source={upperArmsImg[evalUpperArms]}/>
          <Image style={styles.bodyImage} source={upperLegsImg[evalUpperLegs]}/>
          <Image style={styles.bodyImage} source={lowerLegsImg[evalLowerLegs]}/>
          <Image style={styles.bodyImage} source={feetImg[evalFeet]}/>
          <Image style={styles.bodyImage} source={require("../../../assets/bodyscan/body.png")}/>

          <Pressable style={bodyParts.bodyForehead} onPress={()=>ImgHandler("Forehead")}/>
          <Pressable style={bodyParts.bodyEyes} onPress={()=>ImgHandler("Eyes")}/>
          <Pressable style={bodyParts.bodyJaw} onPress={()=>ImgHandler("Jaw")}/>
          <Pressable style={bodyParts.bodyShoulders} onPress={()=>ImgHandler("Shoulders")}/>
          <Pressable style={bodyParts.bodyChest} onPress={()=>ImgHandler("Chest")}/>
          <Pressable style={bodyParts.bodyGut} onPress={()=>ImgHandler("Gut")}/>
          <Pressable style={bodyParts.bodyCrotch} onPress={()=>ImgHandler("Crotch")}/>
          <Pressable style={bodyParts.bodyUpperlegs} onPress={()=>ImgHandler("UpperLegs")}/>
          <Pressable style={bodyParts.bodyLowerLegs} onPress={()=>ImgHandler("LowerLegs")}/>
          <Pressable style={bodyParts.bodyFeet} onPress={()=> ImgHandler("Feet")}/>
          <Pressable style={bodyParts.bodyUpperArmLeft} onPress={()=>ImgHandler("UpperArms")}/>
          <Pressable style={bodyParts.bodyUpperArmRight} onPress={()=>ImgHandler("UpperArms")}/>
          <Pressable style={bodyParts.bodyLowerArmLeft} onPress={()=>ImgHandler("LowerArms")} />
          <Pressable style={bodyParts.bodyLowerArmRight} onPress={()=>ImgHandler("LowerArms")}/>   
          <Pressable style={bodyParts.bodyHandLeft} onPress={()=>ImgHandler("Hands")}/>
          <Pressable style={bodyParts.bodyHandRight} onPress={()=>ImgHandler("Hands")}/>
        </View>
        <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("BodyScanReflection1")}>
          <Text style={styles.startText}>
            Submit
          </Text>
        </Pressable >
      </View> 
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBG: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -2,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  bodyMapContainer:{
    alignItems: "center",
    top: -155,
  },
  pageTitle:{
    fontSize: 40,
    paddingTop: "4%",
  },
  exerExpl:{
    padding: 10,
    textAlign: "center",
    marginTop: 10,
    marginBottom: "20%",
    borderRadius: 30,
    borderColor: "#000000",
    borderWidth: 2,
    width: "90%",
    fontSize: 20,
  },
  greenText:{
    fontWeight: "bold",
    color: "#2ABD4E",
  },
  redText:{
    fontWeight: "bold",
    color: "#E8594E",
  },
  bodyImage:{
    top: 80,
    padding: 40,
    position: "absolute",
  },
  startButton:{
    alignItems: "center",
    backgroundColor: "#2C6975",
    padding: 15,
    width: 140,
    borderRadius: 100,
    bottom: 4,
    position: "absolute",
  },
  startText:{
    fontSize: 20,
    color: "#E0ECDE",
  },
  gradientBG:{
    height: "100%",
    width: "100%",
  },
});

const bodyParts = StyleSheet.create({
  bodyPartContainer:{
    flexDirection: 'row',
  },
  bodyForehead:{
    position: "absolute",
    top: 80,
    width: 129,
    height: 44,
  },
  bodyEyes:{
    position: "absolute",
    top: 124,
    width: 126,
    height: 34,
  },
  bodyJaw:{
    position: "absolute",
    top: 158,
    width: 126,
    height: 34,
  },
  bodyShoulders:{
    position: "absolute",
    top: 190,
    width: 184,
    height: 40,
  },
  bodyChest:{
    position: "absolute",
    top: 230,
    width: 94,
    height: 56,
  }
  ,
  bodyUpperArmLeft:{
    position: "absolute",
    top: 230,
    left: 48,
    width: 60,
    height: 50,
  },
  bodyUpperArmRight:{
    position: "absolute",
    top: 230,
    right: 48,
    width: 60,
    height: 50,
  },
  bodyGut:{
    position: "absolute",
    top: 286,
    width: 98,
    height: 44,
  },
  bodyCrotch:{
    position: "absolute",
    top: 328,
    width: 128,
    height: 48,
  },
  bodyUpperlegs:{
    position: "absolute",
    top: 376,
    width: 140,
    height: 84,
  },
  bodyLowerLegs:{
    position: "absolute",
    top: 460,
    width: 172,
    height: 96,
  },
  bodyFeet:{
    position: "absolute",
    top: 552,
    width: 212,
    height: 54,
  },
  bodyLowerArmLeft:{
    position: "absolute",
    top: 280,
    left: 80,
    width: 64,
    height: 60,
  },
  bodyHandLeft:{
    position: "absolute",
    top: 338,
    left: 62,
    width: 72,
    height: 78,   
  },
  bodyLowerArmRight:{
    position: "absolute",
    top: 280,
    right: 80,
    width: 64,
    height: 60,
  },
  bodyHandRight:{
    position: "absolute",
    top: 338,
    right: 62,
    width: 72,
    height: 78, 
  },
});