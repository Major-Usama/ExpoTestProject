import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

import { AntDesign } from "@expo/vector-icons";

export default function Favorite({ title, subTitle, image }) {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.barContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.nameBar}>
          <Text style={styles.text}>{title}</Text>
          <Text style={{ ...styles.text, fontSize: 15 ,marginTop:8}}>{subTitle}</Text>
        </View>

        <AntDesign style={{marginTop:20}} name="heart" size={18} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: 20,
  },

  barContainer: {
    flexDirection: "row",
    width: WIDTH,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",

    borderTopWidth: 1,
    borderTopColor: "#fff",
  },
  image: {
    width: 120,
    height: 70,
    marginTop: 8,
    marginBottom: 8,
  },
});
