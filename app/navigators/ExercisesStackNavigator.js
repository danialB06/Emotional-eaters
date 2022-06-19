import React from "react";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ProfileScreen from "../screens/ProfileScreen";
import ExercisesScreen from "../screens/exerciseScreens/ExercisesScreen";
import BodyScanFirstScreen from "../screens/exerciseScreens/bodyscanScreens/BodyScanFirstScreen";
import BodyScanBodyMap from "../screens/exerciseScreens/bodyscanScreens/BodyScanBodyMap";
import BodyScanReflection1 from "../screens/exerciseScreens/bodyscanScreens/BodyScanReflection1";
import BodyScanReflection2 from "../screens/exerciseScreens/bodyscanScreens/BodyScanReflection2";
import BodyScanReflection3 from "../screens/exerciseScreens/bodyscanScreens/BodyScanReflection3";
import BodyScanFinished from "../screens/exerciseScreens//bodyscanScreens/BodyScanFinished";
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
import PositiveReframingInstructionScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingInstructionScreen";
import { TouchableOpacity, Image } from "react-native";
import PositiveReframingFirstScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingFirstScreen";
import PositiveReframingSecondScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingSecondScreen";
import PositiveReframingThirdScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingThirdScreen";
import PositiveReframingFourthScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingFourthScreen";
import PositiveReframingFifthScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingFifthScreen";
import PositiveReframingFinishedScreen from "../screens/exerciseScreens/positiveReframingScreens/PositiveReframingFinishedScreen";

const Stack = createNativeStackNavigator();

const ExercisesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ExercisesScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2f9676",
        },
        headerTitleStyle: {
          color: "#C2C2C2",
        },
      }}
    >
      <Stack.Screen
        options={{ title: "" }}
        name="ExercisesScreen"
        component={ExercisesScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="BodyScanFirstScreen"
        component={BodyScanFirstScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="BodyScanBodyMap"
        component={BodyScanBodyMap}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="BodyScanReflection1"
        component={BodyScanReflection1}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="BodyScanReflection2"
        component={BodyScanReflection2}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="BodyScanReflection3"
        component={BodyScanReflection3}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="BodyScanFinished"
        component={BodyScanFinished}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeActionFirstScreen"
        component={OppositeActionFirstScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameFirstPracticeScreen"
        component={OppositeGameFirstPracticeScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameSecondPracticeScreen"
        component={OppositeGameSecondPracticeScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameThirdPracticeScreen"
        component={OppositeGameThirdPracticeScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameFinishedPracticeScreen"
        component={OppositeGameFinishedPracticeScreen}
      />
      <Stack.Screen
        options={{ title: "Profile" }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameFirstExerciseScreen"
        component={OppositeGameFirstExerciseScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameSecondExerciseScreen"
        component={OppositeGameSecondExerciseScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameThirdExerciseScreen"
        component={OppositeGameThirdExerciseScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameFourthExerciseScreen"
        component={OppositeGameFourthExerciseScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="OppositeGameFinishedExerciseScreen"
        component={OppositeGameFinishedExerciseScreen}
      />

      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingInstructionScreen"
        component={PositiveReframingInstructionScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingFirstScreen"
        component={PositiveReframingFirstScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingSecondScreen"
        component={PositiveReframingSecondScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingThirdScreen"
        component={PositiveReframingThirdScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingFourthScreen"
        component={PositiveReframingFourthScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingFifthScreen"
        component={PositiveReframingFifthScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="PositiveReframingFinishedScreen"
        component={PositiveReframingFinishedScreen}
      />
    </Stack.Navigator>
  );
};
export default ExercisesStackNavigator;
