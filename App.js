import * as React from "react";
import LoginProvider from "./app/context/LoginProvider";
//Navigation 
import Router from "./app/navigators/Router";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </LoginProvider>
  );
}