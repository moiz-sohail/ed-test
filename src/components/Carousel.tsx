import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import EduTile, { SLIDER_WIDTH, ITEM_WIDTH } from "./EduTile";
import data from "../../data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={EduTile}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        activeSlideAlignment="start"
      />
    </View>
  );
};

export default CarouselCards;
