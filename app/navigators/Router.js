//Router component is responsible for choose which screens wil show depending 
//on whether the use is authenticated or not. 
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import  { useLogin } from "../context/LoginProvider";

//screens
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignUpScreen from "../screens/authScreens/SingUpScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        <Stack.Screen name="root" component={TabNavigator} />
      </Stack.Navigator>
    );
};

const AuthStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2C9675",
        },
        headerTitleStyle: {
          color: "#C2C2C2",
        },
        headerTintColor: {
          color: "#C2C2C2",
        },
      }}
      >
        <Stack.Screen name="Sign in" component={SignInScreen} />
        <Stack.Screen name="Sign up" component={SignUpScreen} />
      </Stack.Navigator>
    );
};

const Router = () => {
    const { isLoggedIn } = useLogin(); 
    return isLoggedIn ? <AppStack /> : <AuthStack />;
}

export default Router;