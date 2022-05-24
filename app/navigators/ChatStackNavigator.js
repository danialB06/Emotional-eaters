import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
// screens
import ChatScreen from "../screens/chatScreens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();


const ChatStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "dodgerblue",
        },
        // headerRight: () => (
        //   <Button
        //     onPress={(props) => props.navigation.navigate("ProfileScreen")}
        //     title="Profile"
        //     color="black"
        //   />
        // ),
      }}
    >
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}

      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
export default ChatStackNavigator;
