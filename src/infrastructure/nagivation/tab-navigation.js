import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "../../screens/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Users: "people-circle-outline",
  Events: "map-outline",
  Chats: "chatbubbles-outline",
  Experience: "planet-outline",
  Map: "earth",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Users"
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
