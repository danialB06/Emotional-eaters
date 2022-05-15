import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useState, useEffect } from 'react';

export default function BodyScanBodyMap({ navigation }) {

  //Bodypart evaluation scores
  const [evalForehead, setEvalForehead] = useState(1);
  const [evalEyes, setEvalEyes] = useState(1);
  const [evalJaw, setEvalJaw] = useState(1);
  const [evalShoulders, setevalShoulders] = useState(1);

  if(evalForehead == 1){
    var foreheadImg = require("../../assets/bodyscan/headForehead.png");
  }else{
    var foreheadImg = require("../../assets/bodyscan/headForeheadB.png");
  }

  if(evalEyes == 1){
    var eyesImg = require("../../assets/bodyscan/headEyes.png");
  }else{
    var eyesImg = require("../../assets/bodyscan/headEyesB.png");
  }

  if(evalJaw == 1){
    var jawImg = require("../../assets/bodyscan/headJaw.png");
  }else{
    var jawImg = require("../../assets/bodyscan/headJawB.png");
  }

  if(evalShoulders == 1){
    var shoulderImg = require("../../assets/bodyscan/bodyShoulders.png");
  }else{
    var shoulderImg = require("../../assets/bodyscan/bodyShouldersB.png");
  }

  return(
  <View style={styles.container}>
      <Text style={styles.pageTitle}>Bodymap</Text>
        <Image //Head
          style={styles.bodyImage}
          source={foreheadImg}
        />
        <Image
          style={styles.bodyImage}
          source={eyesImg}
        />
        <Image
          style={styles.bodyImage}
          source={jawImg}
        />

        <Image //Body
          style={styles.bodyImage}
          source={shoulderImg}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/bodyChest.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/bodyGut.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/bodyCrotch.png")}
        />

        <Image //Arms
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/armsHands.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/armsLower.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/armsUpper.png")}
        />

        <Image //Legs
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/legsUpper.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/legsLower.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/legsFeet.png")}
        />

        <Image //Body outline - needs to be drawn last!
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/body.png")}
        />

        <Pressable 
          style={bodyParts.bodyForehead}
          onPress={()=>setEvalForehead(evalForehead * -1)}
        />
        <Pressable 
          style={bodyParts.bodyEyes}
          onPress={()=>setEvalEyes(evalEyes * -1)}
        />
        <Pressable 
          style={bodyParts.bodyJaw}
          onPress={()=>setEvalJaw(evalJaw * -1)}
        />

        <Pressable 
          style={bodyParts.bodyShoulders}
          onPress={()=>setevalShoulders(evalShoulders * -1)}
        />
        <Pressable 
          style={bodyParts.bodyChest}
        />
        <Pressable 
          style={bodyParts.bodyGut}
        />
        <Pressable 
          style={bodyParts.bodyCrotch}
        />

        <Pressable 
          style={bodyParts.bodyUpperlegs}
        />
        <Pressable 
          style={bodyParts.bodyLowerLegs}
        />
        <Pressable 
          style={bodyParts.bodyFeet}
        />

        <Pressable 
          style={bodyParts.bodyUpperArmLeft}
        />
        <Pressable 
          style={bodyParts.bodyUpperArmRight}
        />
        <Pressable 
          style={bodyParts.bodyLowerArmLeft}
        />
        <Pressable 
          style={bodyParts.bodyLowerArmRight}
        />    
        <Pressable 
          style={bodyParts.bodyHandLeft}
        />
        <Pressable 
          style={bodyParts.bodyHandRight}
        />                                 
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
    fontSize: 40,
    paddingTop: "4%",
  },
  exerExpl:{
    padding: 40,
    marginTop: "15%",
    marginBottom: "20%",
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    borderColor: "#000000",
    borderWidth: 2,
    fontSize: 15,
    width: "90%",
    fontSize: 20,
  },
  bodyImage:{
    padding: 40,
    top: 80,
    position: "absolute",
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