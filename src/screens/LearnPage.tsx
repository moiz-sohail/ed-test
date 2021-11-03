import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import CarouselCards from "../components/Carousel";

const LearnPage = () => {
  return (
    <SafeAreaView style={tw`bg-white w-full h-full`}>
      <ScrollView>
        <Text style={tw`p-5 font-bold text-lg text-black`}>Our Picks</Text>
        <CarouselCards />
        <Text style={tw`p-5 font-bold text-lg text-black`}>Free Courses</Text>
        <CarouselCards />
        <Text style={tw`p-5 font-bold text-lg text-black`}>
          Latest Additions
        </Text>
        <CarouselCards />
        <Text style={tw`p-5 font-bold text-lg text-black`}>Learning Paths</Text>
        <CarouselCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearnPage;
