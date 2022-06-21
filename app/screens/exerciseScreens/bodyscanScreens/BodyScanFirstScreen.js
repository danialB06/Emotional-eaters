import { View, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function BodyScanFirstScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#CDE0C9"]}
      style={styles.gradientBG}
    >
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Bodyscan</Text>
        <Text style={styles.exerExpl}>
          Emotions can affect how our bodies feel and with the help of this exercise our bodies can tell us what emotions we experience. 
          {"\n"}{"\n"}
          Press the button below to start exercise.
        </Text>
        <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("BodyScanBodyMap")}>
          <Text style={styles.startText}>
            Start
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
    fontSize: 40,
    paddingTop: "10%",
    fontWeight: "bold",
    fontStyle: "italic",
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
  startButton:{
    alignItems: "center",
    backgroundColor: "#6b869a",
    padding: 20,
    width: 140,
    borderRadius: 100,
    bottom: "5%",
    position: "absolute",
  },
  startText:{
    fontSize: 20,
    color: "white"
  },
  gradientBG:{
    height: "100%",
    width: "100%",
  },
});
