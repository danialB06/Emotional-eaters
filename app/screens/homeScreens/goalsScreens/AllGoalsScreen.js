import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import GoalButton from "../components/GoalButton";
import React from "react";
import { db } from "../../../api/Firebase";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function AllGoalsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate("NewGoalScreen")}
      >
        <View style={styles.addImage}>
          <Ionicons name="add-circle" size={35} color="#063559" />
        </View>
        {/* <Image
          style={styles.addImage}
          source={require("../../../assets/homescreen/goalsscreen/add.png")}
        /> */}
      </TouchableOpacity>
      <Goals navigation={navigation} />
    </View>
  );
}

const Goals = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoalsFromFirebase = [];
    const goals = db
      .collection("goals")
      .orderBy("title", "asc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getGoalsFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setGoals(getGoalsFromFirebase);
        setLoading(false);
      });

    return () => goals();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView style={styles.goals}>
      {goals.length > 0 ? (
        goals.map((goal) => (
          <GoalButton
            key={goal.key}
            name={goal.title}
            onPress={() => {
              navigation.navigate("GoalScreen", {
                navigation: navigation,
                title: goal.title,
                description: goal.description,
                myKey: goal.key,
              });
            }}
          />
        ))
      ) : (
        <Text>No Goals</Text>
      )}
    </ScrollView>
  );
};

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
  imageContainer: {
    width: 70,
    alignSelf: "flex-end",
  },
});
