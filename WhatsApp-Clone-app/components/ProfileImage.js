import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
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
  const [isLoading, setIsLoading] = useState(false);

  const showEditButton = props.showEditButton && props.showEditButton === true;

  const userId = props.userId;

  const pickImage = async () => {
    try {
      const tempUri = await launchImagePicker();
      if (!tempUri) return;

      setIsLoading(true);
      const uploadUrl = await uploadImageAsync(tempUri);
      setIsLoading(false);
      if (!uploadUrl) throw new Error("Could not upload image");

      const newData = { profilePicture: uploadUrl };
      await updateSignedInUser(userId, newData);

      dispatch(updateLoggedInUserData({ newData }));
      setImage({ uri: uploadUrl });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const Container = showEditButton ? TouchableOpacity : View;

  return (
    <Container onPress={pickImage}>
      {isLoading ? (
        <View
          height={props.size}
          width={props.width}
          style={styles.loadingCont}
        >
          <ActivityIndicator size={"small"} color={colors.primary} />
        </View>
      ) : (
        <Image
          source={image}
          style={{ ...styles.image, width: props.size, height: props.size }}
        />
      )}

      {showEditButton && !isLoading && (
        <View style={styles.pencil}>
          <FontAwesome name="pencil" size={15} color="black" />
        </View>
      )}
    </Container>
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
  loadingCont: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileImage;
