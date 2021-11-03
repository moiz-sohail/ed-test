import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import EduTile, { SLIDER_WIDTH, ITEM_WIDTH } from "./EduTile";
import datas from "../../data";
import tw from "tailwind-react-native-classnames";
import useSWRInfinity from "swr";

const eduBaseUrl = "https://www.educative.io";

const fetcher = (url: string) => fetch(eduBaseUrl + url).then((r) => r.json());

const CarouselCards = ({ url, isPath }: { url: string; isPath: boolean }) => {
  const isCarousel = React.useRef(null);
  const result = useSWRInfinity(url, fetcher);
  const { data, error } = result;

  const loading = !data && !error;
  const loaded = data && !error;

  return (
    !loading &&
    loaded && (
      <View style={tw`py-4`}>
        <Carousel
          layout="default"
          ref={isCarousel}
          data={data.summaries}
          renderItem={(item) => (
            <EduTile item={item.item} index={item.index} isPath={isPath} />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          activeSlideAlignment="start"
        />
      </View>
    )
  );
};

export default CarouselCards;
