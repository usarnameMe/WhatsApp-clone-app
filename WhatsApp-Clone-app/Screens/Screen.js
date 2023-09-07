import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const Screen = ({ children, background }) => {
  return (
    <KeyboardAvoidingView
      style={[
        styles.mainWrapper,
        { backgroundColor: background || "transparent" },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={[
          styles.imageBackground,
          { backgroundColor: background || "transparent" },
        ]}
      >
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: background || "#ffffff" },
          ]}
        >
          {children}
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;
