import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";


export default function NewAlarmScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Notification</Text>
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
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
