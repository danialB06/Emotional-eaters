import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//navigaotrs
import HomeStackNavigator from "./HomestackNavigator";
import DiaryStackNavigator from "./DiaryStackNavigator";
import ExercisesStackNavigator from "./ExercisesStackNavigator";
import ChatStackNavigator from "./ChatStackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Root"
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Tab.Screen name="Root" component={HomeStackNavigator} />
        <Tab.Screen name="ChatScreen" component={ChatStackNavigator} />
        <Tab.Screen name="ExerviesScreen" component={ExercisesStackNavigator} />
        <Tab.Screen name="DairyScreen" component={DiaryStackNavigator} />
      </Tab.Navigator>
    );
}

export default TabNavigator; 