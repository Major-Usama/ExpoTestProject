import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import SegmentedTabs from "../Components/SegmentedTabs";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function RewardsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <SimpleLineIcons name="cup" size={44} color="#fff" />
        <Text style={styles.titleText}>Pubpoints</Text>
      </View>

      <View>
        <Text style={styles.subTitle}>John Doe</Text>
      </View>
      <SegmentedTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06090F",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  titleText: {
    color: "#fff",
    fontSize: 24,
    marginLeft: WIDTH / 30,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  subTitle: {
    color: "#fff",
    fontSize: 40,
    alignSelf: "center",
    marginTop: 10,
  },

  maleContainer: {
    width: "35%",
    height: "7%",
    borderWidth: 0.5,
    borderColor: "#707070",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    padding: "5%",
    marginTop: "1.3%",
    marginLeft: 10,
  },

  maleSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  fav: {
    width: "30%",
    height: 24,
    borderWidth: 1,
    borderColor: "#64676B",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B79200",
  },
  segmentedTabbar: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },

  segmentText: {
    color: "#fff",
  },
});
