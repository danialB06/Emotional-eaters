import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function GoalButton({ name, onPress }) {
  return (
    <TouchableOpacity style={styles.goalContainer} onPress={onPress}>
      <Text style={styles.goalText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 50,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  goalText: {
    marginLeft: 20,
    fontSize: 18,
  },
});
