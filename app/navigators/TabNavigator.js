import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
//navigaotr
import HomeStackNavigator from "./HomestackNavigator";
import DiaryStackNavigator from "./DiaryStackNavigator";
import ExercisesStackNavigator from "./ExercisesStackNavigator";
import ChatStackNavigator from "./ChatStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"chatbox"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={ExercisesStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name={"heart-multiple"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dairy"
        component={DiaryStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name={"clipboard-notes"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
