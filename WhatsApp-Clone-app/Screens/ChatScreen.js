import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const colors = {
  blue: "#007bff",
  lightGrey: "#ccc",
};

import backgroundImage from "../assets/images/backgroundImg.png";
import { useSelector } from "react-redux";

const ChatScreen = (props) => {
  const [messageText, setMessageText] = useState("");
  const storedUsers = useSelector((state) => state.auth.userData);
  const userData = useSelector((state) => state.users.storedUsers);
  const [chatUsers, setChatUsers] = useState("");

  const chatData = props.route?.params?.newChatData;
  const getChatTitleFromName = () => {
    const otherUserId = chatUsers.find((uid) => uid !== storedUsers.userId);
    const otherUserData = storedUsers[otherUserId];

    return (
      otherUserData && `${otherUserData.firstName} ${otherUserData.lastName}`
    );
  };
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: getChatTitleFromName(),
    });

    setChatUsers(chatData.users);
  }, [chatUsers]);

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, [messageText]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={100}
        >
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("Pressed!")}
            >
              <Feather name="plus" size={wp("6%")} color={colors.blue} />
            </TouchableOpacity>

            <TextInput
              style={styles.textbox}
              value={messageText}
              onSubmitEditing={sendMessage}
              onChangeText={(text) => setMessageText(text)}
            />

            {messageText === "" && (
              <TouchableOpacity
                style={styles.mediaButton}
                onPress={() => console.log("Pressed!")}
              >
                <Feather name="camera" size={wp("6%")} color={colors.blue} />
              </TouchableOpacity>
            )}

            {messageText !== "" && (
              <TouchableOpacity
                style={{ ...styles.mediaButton, ...styles.sendButton }}
                onPress={sendMessage}
              >
                <Feather name="send" size={wp("6%")} color={colors.blue} />
              </TouchableOpacity>
            )}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("2%"),
    height: hp("7%"),
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: wp("1%"),
    paddingHorizontal: wp("2%"),
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("10%"),
  },
  sendButton: {
    borderRadius: 50,
    padding: 8,
    width: 50,
    height: 50,
  },
});

export default ChatScreen;
