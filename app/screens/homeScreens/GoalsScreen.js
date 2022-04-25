import { View, StyleSheet, Text, Button } from "react-native";

export default function GoalsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Goals</Text>
      <Button
        title="NewGoals"
        onPress={() => navigation.navigate("NewGoalScreen")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
