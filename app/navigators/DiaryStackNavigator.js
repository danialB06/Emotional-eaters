import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import DiaryScreen from "../screens/diaryScreens/DiaryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ExerciseResultsScreen from "../screens/diaryScreens/ExerciseResultsScreen";
import NewEntryScreen from "../screens/diaryScreens/NewEntryScreen";
import { HeaderButton } from "react-navigation-header-buttons";

const Stack = createNativeStackNavigator();

const DiaryStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DiaryScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2f9676",
        },
        headerTitleStyle: {
          color: "#C2C2C2",
        },
        headerTintColor: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        options={{ title: "Profile" }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="DiaryScreen"
        component={DiaryScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="ExerciseResultsScreen"
        component={ExerciseResultsScreen}
      />
      <Stack.Screen
        options={{ title: "New Diary Entry" }}
        name="NewEntryScreen"
        component={NewEntryScreen}
      />
    </Stack.Navigator>
  );
};
export default DiaryStackNavigator;
