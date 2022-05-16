import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ExercisesScreen from "../screens/exerciseScreens/ExercisesScreen";
import BodyScanFirstScreen from "../screens/exerciseScreens/BodyScanFirstScreen";
import BodyScanBodyMap from "../screens/exerciseScreens/BodyScanBodyMap";
import BodyScanReflection1 from "../screens/exerciseScreens/BodyScanReflection1";
import BodyScanReflection2 from "../screens/exerciseScreens/BodyScanReflection2";
import BodyScanReflection3 from "../screens/exerciseScreens/BodyScanReflection3";
import BodyScanFinished from "../screens/exerciseScreens/BodyScanFinished";
import OppositeActionFirstScreen from "../screens/exerciseScreens/oppositeActionScreens/OppositeActionFirstScreen";
import OppositeGameFirstPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameFirstPracticeScreen";
import OppositeGameSecondPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameSecondPracticeScreen";
import OppositeGameThirdPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameThirdPracticeScreen";
import OppositeGameFinishedPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameFinishedPracticeScreen";


const Stack = createNativeStackNavigator();

const ExercisesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExercisesScreen"
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
      <Stack.Screen 
        name="ExercisesScreen" 
        component={ExercisesScreen} />
      <Stack.Screen
        name="BodyScanFirstScreen"
        component={BodyScanFirstScreen}/>
      <Stack.Screen
        name="BodyScanBodyMap"
        component={BodyScanBodyMap}/>
      <Stack.Screen
        name="BodyScanReflection1"
        component={BodyScanReflection1}/>
      <Stack.Screen
        name="BodyScanReflection2"
        component={BodyScanReflection2}/>
      <Stack.Screen
        name="BodyScanReflection3"
        component={BodyScanReflection3}/>
      <Stack.Screen
        name="BodyScanFinished"
        component={BodyScanFinished}/>
      <Stack.Screen
        name="OppositeActionFirstScreen"
        component={OppositeActionFirstScreen}
      />
      <Stack.Screen
        name="OppositeGameFirstPracticeScreen"
        component={OppositeGameFirstPracticeScreen}
      />
      <Stack.Screen
        name="OppositeGameSecondPracticeScreen"
        component={OppositeGameSecondPracticeScreen}
      />
      <Stack.Screen
        name="OppositeGameThirdPracticeScreen"
        component={OppositeGameThirdPracticeScreen}
      />
      <Stack.Screen
        name="OppositeGameFinishedPracticeScreen"
        component={OppositeGameFinishedPracticeScreen}
      />
    </Stack.Navigator>
  );
};
export default ExercisesStackNavigator;
