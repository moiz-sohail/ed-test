import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import useSWRInfinite from "swr";

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

const LearnPage = () => {
  // const result = useSWRInfinite(freeCoursesURL.endpoint, fetcher);

  // const { data, error } = result;
  // console.log(data);

  return (
    <SafeAreaView style={tw`bg-white w-full h-full`}>
      <Text style={tw`p-4 text-blue-500`}> This is Learn Page </Text>
    </SafeAreaView>
  );
};

export default LearnPage;
