import { View, StyleSheet, Text, Button } from "react-native";

export default function AlarmsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Alarms</Text>
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
