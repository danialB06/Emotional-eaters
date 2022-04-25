import { View, StyleSheet, Text, Button } from "react-native";

export default function ExercisesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ExercisesScreen</Text>
      <Button
        title="BodyScan Exercise"
        onPress={() => navigation.navigate("BodyScanFirstScreen")}
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
