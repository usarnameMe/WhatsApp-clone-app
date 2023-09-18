import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import userImage from "../assets/images/userImage.png";
import colors from "../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
<<<<<<< HEAD
import {
  launchImagePicker,
  uploadImageAsync,
} from "../utils/imagePickerHelper";
import { updateSignedInUserData } from "../utils/actions/authActions";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
=======
import { launchImagePicker } from "../utils/imagePickerHelper";
>>>>>>> parent of 38eb924 (Uploading images)

const ProfileImage = (props) => {
  const source = props.uri ? { uri: props.uri } : userImage;
  const [image, setImage] = useState(source);
  const userId = props.userId;

  const pickImage = async () => {
    try {
      const tempUri = await launchImagePicker();

      if (!tempUri) return;
<<<<<<< HEAD
      const uploadUrl = await uploadImageAsync(tempUri);
      if (!uploadUrl) throw new Error("Could not upload image");
      await updateSignedInUserData(userId, { ProfilePicture: uploadUrl });
      setImage({ uri: uploadUrl });
    } catch (error) {
      console.error(error);
    }
=======
      setImage({ uri: tempUri });
    } catch (error) {}
>>>>>>> parent of 38eb924 (Uploading images)
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
