import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PageTitle = (props) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color={colors.darkGreen} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 28,
    color: colors.darkGreen,
    fontFamily: "Bold",
    letterSpacing: 0.9,
  },
  backButton: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PageTitle;
