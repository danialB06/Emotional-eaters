import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { Text, View } from "react-native";
//navigaotr
import HomeStackNavigator from "./HomestackNavigator";
import DiaryStackNavigator from "./DiaryStackNavigator";
import ExercisesStackNavigator from "./ExercisesStackNavigator";
import ChatStackNavigator from "./ChatStackNavigator";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        tabBarStyle:{
          height: 60,
        },
        tabBarItemStyle:{
          backgroundColor: "#cde0ca",
          borderTopWidth: 3,
          borderColor: "#2f9676",
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={"home"}
              color={focused ? "#063559" : "#2f9676"}
              size={35}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? "#063559" : "#2f9676", fontSize: 12, fontWeight:"bold" }}>
              Home
            </Text>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={ChatStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={"chatbox"}
              color={focused ? "#2C9675" : color}
              size={size}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? "#2C9675" : color }}>Chat</Text>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Exercises"
        component={ExercisesStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={"heart-multiple"}
              color={focused ? "#063559" : "#2f9676"}
              size={35}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? "#063559" : "#2f9676", fontSize: 12, fontWeight:"bold" }}>
              Exercise
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Dairy"
        component={DiaryStackNavigator}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Foundation
              name={"clipboard-notes"}
              color={focused ? "#063559" : "#2f9676"}
              size={35}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text style={{ color: focused ? "#063559" : "#2f9676", fontSize: 12, fontWeight:"bold" }}>
              Dairy
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
