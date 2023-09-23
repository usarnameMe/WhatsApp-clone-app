import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import userImage from "../assets/images/userImage.png";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import {
  launchImagePicker,
  uploadImageAsync,
} from "../utils/imagePickerHelper";
import { updateSignedInUser } from "../utils/actions/authActions";
import { useDispatch } from "react-redux";
import { updateLoggedInUserData } from "../store/authSlice";

const ProfileImage = (props) => {
  const dispatch = useDispatch();

  const source = props.uri ? { uri: props.uri } : userImage;
  const [image, setImage] = useState(source);

  const userId = props.userId;

  const pickImage = async () => {
    try {
      const tempUri = await launchImagePicker();
      if (!tempUri) return;
      const uploadUrl = await uploadImageAsync(tempUri);
      if (!uploadUrl) throw new Error("Could not upload image");
      const newData = { profilePicture: uploadUrl };
      await updateSignedInUser(userId, newData);
      dispatch(updateLoggedInUserData({ newData }));
      setImage({ uri: uploadUrl });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Image
        source={image}
        style={{ ...styles.image, width: props.size, height: props.size }}
      />

      <View style={styles.pencil}>
        <FontAwesome name="pencil" size={15} color="black" />
      </View>
    </TouchableOpacity>
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
