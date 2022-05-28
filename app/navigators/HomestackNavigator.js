import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import HomeScreen from "../screens/homeScreens/HomeScreen";
import NewGoalScreen from "../screens/homeScreens/goalsScreens/NewGoalScreen";
import AlarmsScreen from "../screens/homeScreens/AlarmsScreen";
import AllGoalsScreen from "../screens/homeScreens/goalsScreens/AllGoalsScreen";
import GoalScreen from "../screens/homeScreens/goalsScreens/GoalScreen";
import { TouchableOpacity, Image } from "react-native";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#063559",
        },
        headerTitleStyle: {
          color: "#C2C2C2",
        },
        headerTintColor: {
          color: "#C2C2C2",
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              alert("This is a button!");
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/profile.png")}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AllGoalsScreen" component={AllGoalsScreen} />
      <Stack.Screen name="NewGoalScreen" component={NewGoalScreen} />
      <Stack.Screen name="AlarmsScreen" component={AlarmsScreen} />
      <Stack.Screen name="GoalScreen" component={GoalScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
