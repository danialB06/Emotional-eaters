import { useEffect } from "react";
import { View, StyleSheet, Text, Button, Image, Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ExercisesScreen({ navigation }) {
  // To add the profile Button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
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
      <Text style={styles.title}>Exercises</Text>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.exerciseButton} onPress={() => navigation.navigate("BodyScanFirstScreen")}>
          <Text style={styles.exercButtonText}>Body Scan</Text>
        </Pressable>
        <Pressable style={styles.exerciseButton} onPress={() => navigation.navigate("OppositeActionFirstScreen")}>
          <Text style={styles.exercButtonText}>Opposite Action</Text>
        </Pressable>
        <Pressable style={styles.exerciseButton} onPress={() => navigation.navigate("PositiveReframingInstructionScreen")}>
          <Text style={styles.exercButtonText}>Positive Reframing</Text>
        </Pressable>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 50,
    justifyContent: "space-between",
    height: "70%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingBottom: 50,
  },
  exerciseButton: {
    backgroundColor: "#F3F3F3",
    paddingTop: 30,
    paddingBottom: 30,
    width: 228,
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    alignItems:"center",
  },
  exercButtonText:{
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  gradientBG:{
    height: "100%",
    width: "100%",
  },
});
