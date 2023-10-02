import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ChatSettingsScreen from "../Screens/ChatSettingsScreen";
import ChatScreen from "../Screens/ChatScreen";
import NewChatScreen from "../Screens/NewChatScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import getFirebaseApp from "../utils/firebaseHelper";
import { child, getDatabase, off, onValue, ref } from "firebase/database";
import { setChatsData } from "../store/chatSlice";

const Stack = createNativeStackNavigator();

const MainNavigator = (props) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);
  const storedUsers = useSelector((state) => state.users.storedUsers);

  useEffect(() => {
    console.log("Subscribing to firebase listeners");

    const app = getFirebaseApp();
    const dbRef = ref(getDatabase(app));
    const userChatsRef = child(dbRef, `userChats/${userData.userId}`);
    const refs = [userChatsRef];

    onValue(userChatsRef, (querySnapshot) => {
      const chatIdsData = querySnapshot.val() || {};
      const chatIds = Object.values(chatIdsData);

      const chatsData = {};
      let chatsFoundCount = 0;

      for (let i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[index];
        const chatRef = child(dbRef, `chats/${chatId}`);
        refs.push(chatRef);

        onValue(chatRef, (chatSnapshot) => {
          chatsFoundCount++;
          const data = chatSnapshot.val();

          if (data) {
            data.key = chatSnapshot.key;

            chatsData[chatsData.key] = data;
          }

          if (chatsFoundCount >= chatId.length) {
            dispatch(setChatsData({ chatsData }));
          }
        });
      }
    });

    return () => {
      refs.forEach((ref) => off(ref));
      console.log("Unsubscribing firebase listeners");
    };
  }, []);

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            // headerTitle: "",
            // headerShadowVisible: false,
            // headerBackTitleVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            gestureEnabled: false,
            tabBarIcon: () => (
              <Ionicons name="chatbubbles-outline" size={24} color="black" />
            ),
            headerShown: true,
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={26}
                color={colors.blue}
                onPress={() => navigation.navigate("Home")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ChatSettings"
          component={ChatSettingsScreen}
          options={{
            headerTitle: "Back",
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "containedModal" }}>
        <Stack.Screen name="NewChatScreen" component={NewChatScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;
