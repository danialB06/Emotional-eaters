import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import StartGameScreen from "../screens/gameScreens/StartGameScreen";
import MapGameScreen from "../screens/gameScreens/MapGameScreen";


const Stack = createNativeStackNavigator();

const AdventureGameStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Adventure Game"
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
        <Stack.Screen name="Adventure Game" component={StartGameScreen} />
        <Stack.Screen name="MapGameScreen" component={MapGameScreen} />
    </Stack.Navigator>
  );
};
export default AdventureGameStackNavigator;
