import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { NavigationContainer } from "@react-navigation/native";
import NavTabs from "../components/NavBar";

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <NavTabs />
    </NavigationContainer>
  );
};

export default HomeScreen;
