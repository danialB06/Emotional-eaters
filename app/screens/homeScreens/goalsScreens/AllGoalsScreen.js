import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import GoalButton from "../components/GoalButton";

export default function AllGoalsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("NewGoalScreen")}>
        <Image
          style={styles.addImage}
          source={require("../../../assets/homescreen/goalsscreen/add.png")}
        />
      </TouchableOpacity>
      <ScrollView style={styles.goals}>
        <GoalButton
          name="Do exercises daily"
          onPress={() => {
            navigation.navigate("GoalScreen", {
              title: "Do exercises daily",
              description: "blah blah",
            });
          }}
        />
        <GoalButton
          name="Follow eating schedule"
          onPress={() => {
            navigation.navigate("GoalScreen", {
              title: "Follow eating schedule",
              description: "blah blah",
            });
          }}
        />
        <GoalButton
          name="Relieve stress with sport"
          onPress={() => {
            navigation.navigate("GoalScreen", {
              title: "Relieve stress with sport",
              description: "blah blah",
            });
          }}
        />
        <GoalButton
          name="Become healthy"
          onPress={() => {
            navigation.navigate("GoalScreen", {
              title: "Become healthy",
              description: "blah blah",
            });
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  addImage: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
  },
  goals: {},
});
