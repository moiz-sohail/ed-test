import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LearnPage from "./LearnPage";
import GridScreen from "./GridScreen";

const navStack = createStackNavigator();

const LearnStackScreen = () => {
  return (
    <navStack.Navigator>
      <navStack.Screen name="Learn Page" component={LearnPage} />
      <navStack.Screen name="Grid Page" component={GridScreen} />
    </navStack.Navigator>
  );
};

export default LearnStackScreen;
