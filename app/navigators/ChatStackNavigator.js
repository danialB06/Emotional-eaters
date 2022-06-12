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

import { TouchableOpacity, Image } from "react-native";

import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#063559",
        },
        headerTitleStyle: {
          color: "#C2C2C2",
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
        options={{ title: "Chats" }}
        name="ChatScreen"
        component={ChatScreen}
      />
      <Stack.Screen
        options={{ title: "Profile" }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
export default ChatStackNavigator;
