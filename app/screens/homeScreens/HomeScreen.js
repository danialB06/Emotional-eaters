import { useEffect } from "react";
import { View, StyleSheet, Text, Button} from "react-native";


export default function HomeScreenn({ navigation }) {
  
  // To add the profile Button
  useEffect( () =>{
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate("ProfileScreen")}
        title="Profile"
        color="black"
      />
    ),
  })
});
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Goals"
        onPress={() => navigation.navigate("GoalsScreen")}
      />
      <Button
        title="Alarms"
        onPress={() => navigation.navigate("AlarmsScreen")}
      />
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