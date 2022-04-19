import { Button } from "react-native";
import * as React from "react";
//Navigation 
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigators/stackNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}