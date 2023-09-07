import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Screen from "./Screen";

const ChatListScreen = (props) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Bold" }}>Go to ChatScreen </Text>
        <Button
          title="Go to Settings"
          onPress={() => {
            props.navigation.navigate("ChatScreen");
          }}
        />
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

export default ChatListScreen;
