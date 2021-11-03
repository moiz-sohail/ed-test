import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = 180;

const eduBaseUrl = "https://www.educative.io";

const EduTile = ({
  item,
  index,
  isPath,
}: {
  item: any;
  index: number;
  isPath: boolean;
}) => {
  const headerStyle = {
    ...styles.header,
    color: isPath ? "#FAFAFA" : "#3D3D4E",
  };
  return (
    <View
      style={{
        ...styles.cardStyle,
        backgroundColor: isPath ? "#202033" : "white",
      }}
      key={index}
    >
      <Image
        source={{ uri: eduBaseUrl + item.cover_image_serving_url }}
        style={styles.image}
      />
      <View style={tw`flex-row py-1`}>
        <Text style={headerStyle}>Course</Text>
        <Text style={headerStyle}>{"Beginner"}</Text>
      </View>
      <Text
        style={{
          ...styles.body,
          color: isPath ? "#FAFAFA" : "#3D3D4E",
        }}
        numberOfLines={3}
      >
        {item.title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: 201,
    paddingBottom: 20,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    margin: 4,
    shadowOpacity: 0.29,
    shadowRadius: 3,
  },
  image: {
    width: ITEM_WIDTH,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  header: {
    color: "#4C4C5C",
    fontSize: 11,
    fontWeight: "normal",
    paddingLeft: 8,
    paddingTop: 4.25,
  },
  body: {
    color: "#3D3D4E",
    fontSize: 16,
    paddingLeft: 8,
    paddingRight: 8,
    lineHeight: 22,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "600",
  },
});

export default EduTile;
