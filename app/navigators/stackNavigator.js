import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import HomeScreen from "../screens/homeScreen";
import ChatScreen from "../screens/chatScreen";
import DiaryScreen from "../screens/diaryScreen"
import ExercisesScreen from "../screens/exercisesScreen";
import BodyScanFirstScreen from "../screens/bodyScanFirstScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "dodgerblue",
      },
      headerRight: () => (
        <Button
          onPress={() => alert("This is a button!")}
          title="Profile"
          color="black"
        />
      ),
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ChatScreen" component={ChatScreen} />
    <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
    <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} />
    <Stack.Screen name="BodyScanFirstScreen" component={BodyScanFirstScreen} />
  </Stack.Navigator>
    )
}
export default StackNavigator;