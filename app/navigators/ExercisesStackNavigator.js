import React from "react";
import { Button } from "react-native";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ExercisesScreen from "../screens/exerciseScreens/ExercisesScreen";
import BodyScanFirstScreen from "../screens/exerciseScreens/BodyScanFirstScreen";
import OppositeActionFirstScreen from "../screens/exerciseScreens/oppositeActionScreens/OppositeActionFirstScreen";
import OppositeGameFirstPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameFirstPracticeScreen";
import OppositeGameSecondPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameSecondPracticeScreen";
import OppositeGameThirdPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameThirdPracticeScreen";
import OppositeGameFinishedPracticeScreen from "../screens/exerciseScreens/oppositeActionScreens/practice/OppositeGameFinishedPracticeScreen";
import OppositeGameFinishedExerciseScreen from "../screens/exerciseScreens/oppositeActionScreens/exercise/OppositeGameFinishedExerciseScreen";
import OppositeGameThirdExerciseScreen from "../screens/exerciseScreens/oppositeActionScreens/exercise/OppositeGameThirdExerciseScreen";
import OppositeGameSecondExerciseScreen from "../screens/exerciseScreens/oppositeActionScreens/exercise/OppositeGameSecondExerciseScreen";
import OppositeGameFirstExerciseScreen from "../screens/exerciseScreens/oppositeActionScreens/exercise/OppositeGameFirstExerciseScreen";
import OppositeGameFourthExerciseScreen from "../screens/exerciseScreens/oppositeActionScreens/exercise/OppositeGameFourthExerciseScreen";

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
      <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} />
      <Stack.Screen
        name="BodyScanFirstScreen"
        component={BodyScanFirstScreen}
      />
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
      <Stack.Screen
        name="OppositeGameFirstExerciseScreen"
        component={OppositeGameFirstExerciseScreen}
      />
      <Stack.Screen
        name="OppositeGameSecondExerciseScreen"
        component={OppositeGameSecondExerciseScreen}
      />
      <Stack.Screen
        name="OppositeGameThirdExerciseScreen"
        component={OppositeGameThirdExerciseScreen}
      />
      <Stack.Screen
        name="OppositeGameFourthExerciseScreen"
        component={OppositeGameFourthExerciseScreen}
      />
      <Stack.Screen
        name="OppositeGameFinishedExerciseScreen"
        component={OppositeGameFinishedExerciseScreen}
      />
    </Stack.Navigator>
  );
};
export default ExercisesStackNavigator;
