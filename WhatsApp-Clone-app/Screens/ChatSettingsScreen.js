import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "./Screen";

const ChatSettingsScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Bold" }}>Chat settings screen</Text>
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

export default ChatSettingsScreen;
