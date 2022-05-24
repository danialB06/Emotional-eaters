import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/homeScreens/HomeScreen";
import GoalsScreen from "../screens/homeScreens/GoalsScreen";
import NewGoalScreen from "../screens/homeScreens/NewGoalScreen";
import AlarmsScreen from "../screens/homeScreens/AlarmsScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue"
      },
    }}
  >  
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="GoalsScreen" component={GoalsScreen} />
    <Stack.Screen name="NewGoalScreen" component={NewGoalScreen} />
    <Stack.Screen name="AlarmsScreen" component={AlarmsScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  </Stack.Navigator> 
    )
}
export default HomeStackNavigator;