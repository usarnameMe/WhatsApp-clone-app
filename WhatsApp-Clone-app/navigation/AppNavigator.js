import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthScreen from "../Screens/AuthScreen";
import { useSelector } from "react-redux";
import StartUpScreen from "../Screens/SartUpScreen";

const AppNavigator = (props) => {
  const isAuth = useSelector(
    (state) => state.auth.token !== null && state.auth.token !== ""
  );

  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <StartUpScreen />}
      {/* <StartUpScreen /> */}
      {/* <AuthScreen /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
