import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ChatScreen from "../screens/chatScreens/ChatScreen";

const Stack = createNativeStackNavigator();

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
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
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
export default ChatStackNavigator;
