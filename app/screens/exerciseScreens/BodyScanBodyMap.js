import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import { Switch } from 'react-native-switch';

export default function BodyScanBodyMap({ navigation }) {
  //Bodypart evaluation scores
  const [evalForehead, setEvalForehead] = useState(1);
  const [evalEyes, setEvalEyes] = useState(1);
  const [evalJaw, setEvalJaw] = useState(1);
  const [evalShoulders, setEvalShoulders] = useState(1);
  const [evalChest, setEvalChest] = useState(1);
  const [evalGut, setEvalGut] = useState(1);
  const [evalCrotch, setEvalCrotch] = useState(1);
  const [evalUpperLegs, setEvalUpperLegs] = useState(1);
  const [evalLowerLegs, setEvalLowerLegs] = useState(1);
  const [evalFeet, setEvalFeet] = useState(1);
  const [evalUpperArms, setEvalUpperArms] = useState(1);
  const [evalLowerArms, setEvalLowerArms] = useState(1);
  const [evalHands, setEvalHands] = useState(1);
  
  var foreheadImg = evalForehead == 1 ? require("../../assets/bodyscan/headForehead.png") : require("../../assets/bodyscan/headForeheadB.png");
  var eyesImg = evalEyes == 1 ? require("../../assets/bodyscan/headEyes.png") : require("../../assets/bodyscan/headEyesB.png");
  var jawImg = evalJaw == 1 ? require("../../assets/bodyscan/headJaw.png") : require("../../assets/bodyscan/headJawB.png");
  var shoulderImg = evalShoulders == 1 ? require("../../assets/bodyscan/bodyShoulders.png") : require("../../assets/bodyscan/bodyShouldersB.png");
  var chestImg = evalChest == 1 ? require("../../assets/bodyscan/bodyChest.png") : require("../../assets/bodyscan/bodyChestB.png");
  var gutImg = evalGut == 1 ? require("../../assets/bodyscan/bodyGut.png") : require("../../assets/bodyscan/bodyGutB.png");
  var crotchImg = evalCrotch == 1 ?  require("../../assets/bodyscan/bodyCrotch.png") : require("../../assets/bodyscan/bodyCrotchB.png");
  var upperLegsImg = evalUpperLegs == 1 ? require("../../assets/bodyscan/legsUpper.png") : require("../../assets/bodyscan/legsUpperB.png");
  var lowerLegsImg = evalLowerLegs == 1 ? require("../../assets/bodyscan/legsLower.png") : require("../../assets/bodyscan/legsLowerB.png");
  var feetImg = evalFeet == 1 ? require("../../assets/bodyscan/legsFeet.png") : require("../../assets/bodyscan/legsFeetB.png");
  var upperArmsImg = evalUpperArms == 1 ? require("../../assets/bodyscan/armsUpper.png") : require("../../assets/bodyscan/armsUpperB.png");
  var lowerArmsImg = evalLowerArms == 1 ? require("../../assets/bodyscan/armsLower.png") : require("../../assets/bodyscan/armsLowerB.png");
  var handsImg = evalHands == 1 ? require("../../assets/bodyscan/armsHands.png") : require("../../assets/bodyscan/armsHandsB.png");

  return(
    <View style={styles.container}>
      <Text style={styles.exerExpl}>
        <Text style={styles.greenText}>Green</Text> = pleasant. <Text style={styles.redText}>Red</Text> = unpleasant.
      </Text>
      <Switch/>
      <View style={styles.bodyMapContainer}>
        <Image style={styles.bodyImage} source={foreheadImg}/>
        <Image style={styles.bodyImage} source={eyesImg}/>
        <Image style={styles.bodyImage} source={jawImg}/>
        <Image style={styles.bodyImage}source={shoulderImg}/>
        <Image style={styles.bodyImage} source={chestImg}/>
        <Image style={styles.bodyImage} source={gutImg}/>
        <Image style={styles.bodyImage} source={crotchImg}/>
        <Image style={styles.bodyImage} source={handsImg}/>
        <Image style={styles.bodyImage} source={lowerArmsImg}/>
        <Image style={styles.bodyImage} source={upperArmsImg}/>
        <Image style={styles.bodyImage} source={upperLegsImg}/>
        <Image style={styles.bodyImage} source={lowerLegsImg}/>
        <Image style={styles.bodyImage} source={feetImg}/>
        <Image style={styles.bodyImage} source={require("../../assets/bodyscan/body.png")}/>

        <Pressable style={bodyParts.bodyForehead} onPress={()=>setEvalForehead(evalForehead * -1)} />
        <Pressable style={bodyParts.bodyEyes} onPress={()=>setEvalEyes(evalEyes * -1)} />
        <Pressable style={bodyParts.bodyJaw} onPress={()=>setEvalJaw(evalJaw * -1)} />
        <Pressable style={bodyParts.bodyShoulders} onPress={()=>setEvalShoulders(evalShoulders * -1)}/>
        <Pressable style={bodyParts.bodyChest} onPress={()=>setEvalChest(evalChest * -1)} />
        <Pressable style={bodyParts.bodyGut} onPress={()=>setEvalGut(evalGut * -1)} />
        <Pressable style={bodyParts.bodyCrotch} onPress={()=>setEvalCrotch(evalCrotch * -1)} />
        <Pressable style={bodyParts.bodyUpperlegs} onPress={()=>setEvalUpperLegs(evalUpperLegs * -1)} />
        <Pressable style={bodyParts.bodyLowerLegs} onPress={()=>setEvalLowerLegs(evalLowerLegs * -1)} />
        <Pressable style={bodyParts.bodyFeet} onPress={()=>setEvalFeet(evalFeet * -1)} />
        <Pressable style={bodyParts.bodyUpperArmLeft} onPress={()=>setEvalUpperArms(evalUpperArms * -1)} />
        <Pressable style={bodyParts.bodyUpperArmRight} onPress={()=>setEvalUpperArms(evalUpperArms * -1)} />
        <Pressable style={bodyParts.bodyLowerArmLeft} onPress={()=>setEvalLowerArms(evalLowerArms * -1)} />
        <Pressable style={bodyParts.bodyLowerArmRight} onPress={()=>setEvalLowerArms(evalLowerArms * -1)} />   
        <Pressable style={bodyParts.bodyHandLeft} onPress={()=>setEvalHands(evalHands * -1)} />
        <Pressable style={bodyParts.bodyHandRight} onPress={()=>setEvalHands(evalHands * -1)} />
      </View>
      <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("BodyScanReflection1")}>
        <Text style={styles.startText}>
          Submit
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
    backgroundColor: "#F3F3F3",
    padding: 15,
    width: 140,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 2,
    bottom: 8,
    position: "absolute",
  },
  startText:{
    fontSize: 20,
  }
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
    left: 96,
    width: 60,
    height: 50,
  },
  bodyUpperArmRight:{
    position: "absolute",
    top: 230,
    right: 96,
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