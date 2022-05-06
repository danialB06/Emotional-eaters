import { View, Image, StyleSheet, Text } from "react-native";
import ImageMapper from 'react-img-mapper';

export default function BodyScanBodyMap({ navigation }) {
  const URL = "../../assets/bodyscan/body.png";
  const MAP = {
    name: 'my-map',
    areas: '',
  }
  return(
  <View style={styles.container}>
      <Text style={styles.pageTitle}>Bodymap</Text>
        <Image //Head
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/headForehead.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/headEyes.png")}
        />
        <Image
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/headJaw.png")}
        />

        <Image //Body
          style={styles.bodyImage}
          source={require("../../assets/bodyscan/bodyShoulders.png")}
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
    top: '15%',
    position: "absolute",
  },
});
