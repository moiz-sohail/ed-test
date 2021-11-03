import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.47);

const EduTile = ({ item, index }) => {
  return (
    <View style={styles.cardStyle} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={tw`flex-row py-1`}>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.header}>{"Beginner"}</Text>
      </View>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "white",
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: 201,
    paddingBottom: 20,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
  },
});

export default EduTile;
