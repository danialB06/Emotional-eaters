import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ChatScreen from "../screens/chatScreens/ChatScreen";
import { TouchableOpacity, Image } from "react-native";

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
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              alert("This is a button!");
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/profile.png")}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};
export default ChatStackNavigator;
