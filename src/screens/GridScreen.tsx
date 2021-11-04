import React from "react";
import { StyleSheet } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import EduTile from "../components/EduTile";
import useSWRInfinity from "swr";

const eduBaseUrl = "https://www.educative.io";

const fetcher = (url: string) => fetch(eduBaseUrl + url).then((r) => r.json());

const GridScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { isPath, url } = route.params;
  const result = useSWRInfinity(url, fetcher);
  const { data, error } = result;

  return (
    <FlatGrid
      itemDimension={130}
      data={data.summaries}
      style={styles.gridView}
      spacing={10}
      renderItem={(item) => (
        <EduTile item={item.item} index={item.index} isPath={isPath} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

export default GridScreen;
