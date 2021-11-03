import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import useSWRInfinite from "swr";
import CarouselCards from "../components/Carousel";

const eduBaseUrl = "https://www.educative.io";

const freeCoursesURL = {
  endpoint: "/api/reader/featured_items?only_free=true",
  heading: "Free Courses",
};
const ourPicksURL = {
  endpoint: "/api/reader/featured/?filter_type=ranked",
  heading: "Our Picks",
};
const newCoursesURL = {
  endpoint: "/api/reader/featured/?filter_type=new",
  heading: "Latest Additions",
};
const pathsURL = {
  endpoint: "/api/reader/featured_items?only_paths=true",
  heading: "Learning Paths",
};

const fetcher = (url: string) => {
  return fetch(eduBaseUrl + url).then((r) => r.json());
};

// const result = useSWRInfinite(freeCoursesURL.endpoint, fetcher);

  // const { data, error } = result;
  // console.log(data);


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
