import { Button } from "react-native";
import * as React from "react";
//Navigation 
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigators/HomestackNavigator";
import TabNavigator from "./app/navigators/TabNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}