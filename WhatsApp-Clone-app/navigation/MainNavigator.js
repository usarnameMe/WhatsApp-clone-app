import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ChatSettingsScreen from "../Screens/ChatSettingsScreen";
import ChatScreen from "../Screens/ChatScreen";
import NewChatScreen from "../Screens/NewChatScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
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
