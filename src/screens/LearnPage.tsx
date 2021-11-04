import React from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import CarouselCards from "../components/Carousel";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const learnPageUrls: Array<{
  endpoint: string;
  heading: string;
  icon: string;
}> = [
  {
    endpoint: "/api/reader/featured_items?only_free=true",
    heading: "Free Courses",
    icon: "credit-card-off-outline",
  },
  {
    endpoint: "/api/reader/featured/?filter_type=ranked",
    heading: "Our Picks",
    icon: "star-outline",
  },
  {
    endpoint: "/api/reader/featured/?filter_type=new",
    heading: "Latest Additions",
    icon: "star-outline",
  },
  {
    endpoint: "/api/reader/featured_items?only_paths=true",
    heading: "Learning Paths",
    icon: "trending-up",
  },
];

const LearnPage = () => {
  return (
    <SafeAreaView style={tw`bg-white w-full h-full`}>
      <ScrollView>
        {learnPageUrls.map((value, id) => {
          return (
            <View style={tw`p-3`} key={id}>
              <View style={tw`pl-1 flex-row items-center`}>
                <View
                  style={[
                    tw`flex-row rounded-full justify-center items-center`,
                    { backgroundColor: "#F1F1FF", height: 40, width: 40 },
                  ]}
                >
                  {value.heading == "Free Courses" ? (
                    <MaterialCommunityIcons
                      name={value.icon}
                      color="#5553FF"
                      size={24}
                    />
                  ) : (
                    <MaterialIcons
                      name={value.icon}
                      color="#5553FF"
                      size={24}
                    />
                  )}
                </View>
                <Text style={tw`pl-2 font-bold text-lg text-black`}>
                  {value.heading}
                </Text>
              </View>
              <CarouselCards
                url={value.endpoint}
                isPath={value.heading == "Learning Paths"}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearnPage;
