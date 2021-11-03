import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import CarouselCards from "../components/Carousel";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`text-red-500 p-10`}>
      <ScrollView>
        <Text>shit!</Text>
        <CarouselCards />
        <CarouselCards />
        <CarouselCards />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
