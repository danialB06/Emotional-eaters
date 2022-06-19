import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  //use this to make profilescreen funtionable in other screens
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          {/* <FontAwesome name="user" size={40} color="white" /> */}
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/profile.png")}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <LinearGradient
    colors={["#FFFFFF", "#CDE0C9"]}
    style={styles.gradientBG}
    >
      <View style={styles.container}>
          <LinearGradient
            colors={["#FFFFFF","#E0ECDE","#68B2A0"]}
            style={[styles.streakCircle]}
          >
            <Text style={styles.streakText}>Exercise Streak</Text>
            <View style={styles.streakNumberContainer}>
              <FontAwesome5 name="fire" size={51} color="#2C6975" />
              {/* <Image source={require("../../assets/homescreen/streakFire.png")} /> */}
              <Text style={styles.streakNumber}>1</Text>
            </View>
          </LinearGradient>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AllGoalsScreen")}
        >
          <View style={styles.goalsButton}>
            <View style={styles.flagImage}>
              <Ionicons name="flag-sharp" size={24} color="white" />
            </View>
            {/* <Image
              style={styles.flagImage}
              source={require("../../assets/homescreen/flag.png")}
            /> */}
            <Text style={styles.goalsText}>Goals</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("AlarmsScreen")}
        >
          <View style={styles.alarmButton}>
            <View style={styles.flagImage}>
              <Ionicons name="md-alarm-sharp" size={24} color="white" />
            </View>
            {/* <Image
              style={styles.alarmImage}
              source={require("../../assets/homescreen/alarm.png")}
            /> */}
            <Text style={styles.alarmText}>Alarms</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    width: "50%",
  },
  button2: {
    marginTop: 50,
    width: "50%",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  streakCircle: {
    backgroundColor: "#fff",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#2C6975",
    width: "75%",
    height: "45%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  goalsButton: {
    backgroundColor: "#6A869B",
    flexDirection: "row",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  goalsText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
  alarmButton: {
    backgroundColor: "#6A869B",
    flexDirection: "row",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  alarmText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
  alarmImage: {
    marginTop: 10,
    width: 24,
    height: 25,
  },
  streakText: {
    color: "#2C6975",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  streakNumberContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  streakNumber: {
    color: "#2C6975",
    fontSize: 60,
    fontWeight: "900",
    textAlign: "center",
  },
  flagImage: {
    marginTop: 10,
    width: 24,
    height: 25,
  },
  gradientBG:{
    height: "100%",
    width: "100%",
  },
});
