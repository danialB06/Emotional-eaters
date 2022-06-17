import { View, Image, StyleSheet, Text, Pressable } from "react-native";

export default function Body({
  evalForehead,
  evalEyes,
  evalJaw,
  evalShoulders,
  evalChest,
  evalGut,
  evalCrotch,
  evalUpperLegs,
  evalLowerLegs,
  evalFeet,
  evalUpperArms,
  evalLowerArms,
  evalHands,
}) {
  var foreheadImg = [
    require("../../../assets/bodyscan/headForeheadC.png"),
    require("../../../assets/bodyscan/headForehead.png"),
    require("../../../assets/bodyscan/headForeheadB.png"),
  ];
  var eyesImg = [
    require("../../../assets/bodyscan/headEyesC.png"),
    require("../../../assets/bodyscan/headEyes.png"),
    require("../../../assets/bodyscan/headEyesB.png"),
  ];
  var jawImg = [
    require("../../../assets/bodyscan/headJawC.png"),
    require("../../../assets/bodyscan/headJaw.png"),
    require("../../../assets/bodyscan/headJawB.png"),
  ];
  var shoulderImg = [
    require("../../../assets/bodyscan/bodyShouldersC.png"),
    require("../../../assets/bodyscan/bodyShoulders.png"),
    require("../../../assets/bodyscan/bodyShouldersB.png"),
  ];
  var chestImg = [
    require("../../../assets/bodyscan/bodyChestC.png"),
    require("../../../assets/bodyscan/bodyChest.png"),
    require("../../../assets/bodyscan/bodyChestB.png"),
  ];
  var gutImg = [
    require("../../../assets/bodyscan/bodyGutC.png"),
    require("../../../assets/bodyscan/bodyGut.png"),
    require("../../../assets/bodyscan/bodyGutB.png"),
  ];
  var crotchImg = [
    require("../../../assets/bodyscan/bodyCrotchC.png"),
    require("../../../assets/bodyscan/bodyCrotch.png"),
    require("../../../assets/bodyscan/bodyCrotchB.png"),
  ];
  var upperLegsImg = [
    require("../../../assets/bodyscan/legsUpperC.png"),
    require("../../../assets/bodyscan/legsUpper.png"),
    require("../../../assets/bodyscan/legsUpperB.png"),
  ];
  var lowerLegsImg = [
    require("../../../assets/bodyscan/legsLowerC.png"),
    require("../../../assets/bodyscan/legsLower.png"),
    require("../../../assets/bodyscan/legsLowerB.png"),
  ];
  var feetImg = [
    require("../../../assets/bodyscan/legsFeetC.png"),
    require("../../../assets/bodyscan/legsFeet.png"),
    require("../../../assets/bodyscan/legsFeetB.png"),
  ];
  var upperArmsImg = [
    require("../../../assets/bodyscan/armsUpperC.png"),
    require("../../../assets/bodyscan/armsUpper.png"),
    require("../../../assets/bodyscan/armsUpperB.png"),
  ];
  var lowerArmsImg = [
    require("../../../assets/bodyscan/armsLowerC.png"),
    require("../../../assets/bodyscan/armsLower.png"),
    require("../../../assets/bodyscan/armsLowerB.png"),
  ];
  var handsImg = [
    require("../../../assets/bodyscan/armsHandsC.png"),
    require("../../../assets/bodyscan/armsHands.png"),
    require("../../../assets/bodyscan/armsHandsB.png"),
  ];

  return (
    <View style={styles.bodyMapContainer}>
      <Image style={styles.bodyImage} source={foreheadImg[evalForehead]} />
      <Image style={styles.bodyImage} source={eyesImg[evalEyes]} />
      <Image style={styles.bodyImage} source={jawImg[evalJaw]} />
      <Image style={styles.bodyImage} source={shoulderImg[evalShoulders]} />
      <Image style={styles.bodyImage} source={chestImg[evalChest]} />
      <Image style={styles.bodyImage} source={gutImg[evalGut]} />
      <Image style={styles.bodyImage} source={crotchImg[evalCrotch]} />
      <Image style={styles.bodyImage} source={handsImg[evalHands]} />
      <Image style={styles.bodyImage} source={lowerArmsImg[evalLowerArms]} />
      <Image style={styles.bodyImage} source={upperArmsImg[evalUpperArms]} />
      <Image style={styles.bodyImage} source={upperLegsImg[evalUpperLegs]} />
      <Image style={styles.bodyImage} source={lowerLegsImg[evalLowerLegs]} />
      <Image style={styles.bodyImage} source={feetImg[evalFeet]} />
      <Image
        style={styles.bodyImage}
        source={require("../../../assets/bodyscan/body.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyMapContainer: {
    alignItems: "center",
  },
  bodyImage: {
    top: 10,
    position: "absolute",
  },
});

const bodyParts = StyleSheet.create({
  bodyPartContainer: {
    flexDirection: "row",
  },
  bodyForehead: {
    position: "absolute",
    top: 80,
    width: 129,
    height: 44,
  },
  bodyEyes: {
    position: "absolute",
    top: 124,
    width: 126,
    height: 34,
  },
  bodyJaw: {
    position: "absolute",
    top: 158,
    width: 126,
    height: 34,
  },
  bodyShoulders: {
    position: "absolute",
    top: 190,
    width: 184,
    height: 40,
  },
  bodyChest: {
    position: "absolute",
    top: 230,
    width: 94,
    height: 56,
  },
  bodyUpperArmLeft: {
    position: "absolute",
    top: 230,
    left: 48,
    width: 60,
    height: 50,
  },
  bodyUpperArmRight: {
    position: "absolute",
    top: 230,
    right: 48,
    width: 60,
    height: 50,
  },
  bodyGut: {
    position: "absolute",
    top: 286,
    width: 98,
    height: 44,
  },
  bodyCrotch: {
    position: "absolute",
    top: 328,
    width: 128,
    height: 48,
  },
  bodyUpperlegs: {
    position: "absolute",
    top: 376,
    width: 140,
    height: 84,
  },
  bodyLowerLegs: {
    position: "absolute",
    top: 460,
    width: 172,
    height: 96,
  },
  bodyFeet: {
    position: "absolute",
    top: 552,
    width: 212,
    height: 54,
  },
  bodyLowerArmLeft: {
    position: "absolute",
    top: 280,
    left: 80,
    width: 64,
    height: 60,
  },
  bodyHandLeft: {
    position: "absolute",
    top: 338,
    left: 62,
    width: 72,
    height: 78,
  },
  bodyLowerArmRight: {
    position: "absolute",
    top: 280,
    right: 80,
    width: 64,
    height: 60,
  },
  bodyHandRight: {
    position: "absolute",
    top: 338,
    right: 62,
    width: 72,
    height: 78,
  },
});
