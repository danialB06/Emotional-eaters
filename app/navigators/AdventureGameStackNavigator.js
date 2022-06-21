import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import StartGameScreen from "../screens/gameScreens/StartGameScreen";
import MapGameScreen from "../screens/gameScreens/MapGameScreen";
import AvatarCustomizeScreen from "../screens/gameScreens/AvatarCustomizeScreen";

const Stack = createNativeStackNavigator();

const AdventureGameStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Adventuria"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2f9676",
        },
        headerTitleStyle: {
          color: "#C2C2C2",
        },
      }}
    >
        <Stack.Screen name="Adventure Game" component={StartGameScreen} />
        <Stack.Screen name="MapGameScreen" component={MapGameScreen} />
        <Stack.Screen name="AvatarCustomizeScreen" component={AvatarCustomizeScreen} />
    </Stack.Navigator>
  );
};
export default AdventureGameStackNavigator;
