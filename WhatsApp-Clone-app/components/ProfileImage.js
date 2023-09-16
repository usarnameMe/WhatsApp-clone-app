import React from "react";
import { Image, StyleSheet, View } from "react-native";
import userImage from "../assets/images/userImage.png";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";

const ProfileImage = (props) => {
  return (
    <View>
      <Image
        source={userImage}
        style={{ ...styles.image, width: props.size, height: props.size }}
      />

      <View style={styles.pencil}>
        <FontAwesome name="pencil" size={15} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  pencil: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    padding: 8,
  },
});

export default ProfileImage;
