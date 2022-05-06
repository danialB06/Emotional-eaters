import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ExercisesScreen from "../screens/exerciseScreens/ExercisesScreen";
import BodyScanFirstScreen from "../screens/exerciseScreens/BodyScanFirstScreen";
import BodyScanBodyMap from "../screens/exerciseScreens/BodyScanBodyMap";

const Stack = createNativeStackNavigator();

const ExercisesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExercisesScreen"
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
      <Stack.Screen 
        name="ExercisesScreen" 
        component={ExercisesScreen} />
      <Stack.Screen
        name="BodyScanFirstScreen"
        component={BodyScanFirstScreen}/>
      <Stack.Screen
        name="BodyScanBodyMap"
        component={BodyScanBodyMap}/>
    </Stack.Navigator>
  );
};
export default ExercisesStackNavigator;
