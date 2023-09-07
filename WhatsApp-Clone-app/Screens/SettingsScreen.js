import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "./Screen";

const SettingsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Bold" }}> settings screen</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsScreen;
