import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("ProfileScreen")}
          title="Profile"
          color="black"
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.streakCircle}>
        <Text style={styles.streakText}>Exercise Streak</Text>
        <View style={styles.streakNumberContainer}>
          <Image source={require("../../assets/homescreen/streakFire.png")} />
          <Text style={styles.streakNumber}>1</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AllGoalsScreen")}
      >
        <View style={styles.goalsButton}>
          <Image
            style={styles.flagImage}
            source={require("../../assets/homescreen/flag.png")}
          />
          <Text style={styles.goalsText}>Goals</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
    alignItems: "center",
  },
  streakCircle: {
    backgroundColor: "#fff",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#063559",
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
  streakText: {
    color: "#063559",
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
    color: "#063559",
    fontSize: 60,
    fontWeight: "900",
    textAlign: "center",
  },
  flagImage: {
    marginTop: 10,
    width: 24,
    height: 25,
  },
});
