import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorValue } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LearnPage from "../screens/LearnPage";
import React from "react";
import LearnStackScreen from "../screens/LearnPageStackScreen";

const Tab = createBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Learn Page"
      screenOptions={{
        tabBarActiveTintColor: "#5553FF",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Learn Stack Screen"
        component={LearnStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({
            color,
            size,
          }: {
            size?: number;
            color?: ColorValue | number;
          }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore Stack Screen"
        component={LearnStackScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({
            color,
            size,
          }: {
            size?: number;
            color?: ColorValue | number;
          }) => <MaterialIcons name="search" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LearnPage}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({
            color,
            size,
          }: {
            size?: number;
            color?: ColorValue | number;
          }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavTabs;
