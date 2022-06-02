import React from "react";
//navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import ProfileScreen from "../screens/ProfileScreen";
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
      <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} />
      <Stack.Screen
        name="BodyScanFirstScreen"
        component={BodyScanFirstScreen}
      />
      <Stack.Screen name="BodyScanBodyMap" component={BodyScanBodyMap} />
      <Stack.Screen
        name="BodyScanReflection1"
        component={BodyScanReflection1}
      />
      <Stack.Screen
        name="BodyScanReflection2"
        component={BodyScanReflection2}
      />
      <Stack.Screen
        name="BodyScanReflection3"
        component={BodyScanReflection3}
      />
      <Stack.Screen name="BodyScanFinished" component={BodyScanFinished} />
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
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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

      <Stack.Screen
        name="PositiveReframingInstructionScreen"
        component={PositiveReframingInstructionScreen}
      />
      <Stack.Screen
        name="PositiveReframingFirstScreen"
        component={PositiveReframingFirstScreen}
      />
      <Stack.Screen
        name="PositiveReframingSecondScreen"
        component={PositiveReframingSecondScreen}
      />
      <Stack.Screen
        name="PositiveReframingThirdScreen"
        component={PositiveReframingThirdScreen}
      />
      <Stack.Screen
        name="PositiveReframingFourthScreen"
        component={PositiveReframingFourthScreen}
      />
      <Stack.Screen
        name="PositiveReframingFifthScreen"
        component={PositiveReframingFifthScreen}
      />
      <Stack.Screen
        name="PositiveReframingFinishedScreen"
        component={PositiveReframingFinishedScreen}
      />
    </Stack.Navigator>
  );
};
export default ExercisesStackNavigator;
