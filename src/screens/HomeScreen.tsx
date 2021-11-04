import React from "react";
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
