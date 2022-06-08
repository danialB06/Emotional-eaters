import { View, StyleSheet, Text, Image, Button } from "react-native";

export default function AlarmsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.bodyImage} source={require("../../assets/bodyscan/body.png")}/>

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
