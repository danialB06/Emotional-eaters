import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ProfileScreen from "../screens/ProfileScreen";
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
      }}
    >
      <Stack.Screen
        options={{ title: "" }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ title: "Goals" }}
        name="AllGoalsScreen"
        component={AllGoalsScreen}
      />
      <Stack.Screen
        options={{ title: "New Goal" }}
        name="NewGoalScreen"
        component={NewGoalScreen}
      />
      <Stack.Screen
        options={{ title: "Alarm" }}
        name="AlarmsScreen"
        component={AlarmsScreen}
      />
      <Stack.Screen
        options={{ title: "Goal" }}
        name="GoalScreen"
        component={GoalScreen}
      />
      <Stack.Screen
        options={{ title: "Profile" }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
