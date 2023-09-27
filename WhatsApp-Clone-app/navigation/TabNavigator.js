import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ChatListScreen from "../Screens/ChatListScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatListScreen}
        options={{
          headerTitle: "All chats",

          tabBarIcon: () => (
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-settings-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
