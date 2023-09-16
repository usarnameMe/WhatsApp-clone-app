import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, LogBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";

LogBox.ignoreLogs([
  "@firebase/auth: Auth",
  "Possible Unhandled Promise Rejection",
  "AsyncStorage has been extracted",
]);
AsyncStorage.clear();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Black: require("./assets/fonts/Black.ttf"),
    BlackItalic: require("./assets/fonts/BlackItalic.ttf"),
    Bold: require("./assets/fonts/Bold.ttf"),
    BoldItalic: require("./assets/fonts/BoldItalic.ttf"),
    Regular: require("./assets/fonts/Regular.ttf"),
    Medium: require("./assets/fonts/Medium.ttf"),
    Italic: require("./assets/fonts/Italic.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then(() => setTimeout(() => setAppIsLoaded(true), 2000))
      .catch((err) => console.warn(err));
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded && fontsLoaded) await SplashScreen.hideAsync();
  }, [appIsLoaded, fontsLoaded]);

  useEffect(() => {
    onLayout();
  }, [appIsLoaded, fontsLoaded, onLayout]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container} onLayout={onLayout}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
