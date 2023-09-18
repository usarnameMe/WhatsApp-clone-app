import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export const launchImagePicker = async () => {
  try {
    await checkMediaPermissions();
  } catch (err) {
    console.error("Permission error:", err);
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.canceled) {
    return result.uri;
  }
};

const checkMediaPermissions = async () => {
  if (Platform.OS !== "web") {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      throw new Error("We need permission to access your photos");
    }
  }
};
