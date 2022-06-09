import { View, StyleSheet,Image, Text, Button } from "react-native";
import { Pressable } from "react-native";

export default function AlarmsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Pressable onPress={() => navigation.navigate("NewAlarmScreen")}
      >
        <Image style={styles.addImage} source={require("../../assets/homescreen/goalsscreen/add.png")}/>
      </Pressable>
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
  addImage: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: "flex-end",
  },
});
