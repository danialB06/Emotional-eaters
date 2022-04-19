import { View, StyleSheet, Text, Button} from "react-native";


export default function HomeScreenn({ navigation} ) {
  return(
  <View style={styles.container}>
  <Text>Home Screen</Text>
  <Button title="Exercises" onPress={() => navigation.navigate("ExercisesScreen")}></Button>
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