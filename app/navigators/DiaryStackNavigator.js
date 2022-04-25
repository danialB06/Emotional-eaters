import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import DiaryScreen from "../screens/diaryScreens/DiaryScreen";


const Stack = createNativeStackNavigator();

const DiaryStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DiaryScreen"
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
      <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
    </Stack.Navigator>
  );
};
export default DiaryStackNavigator;
