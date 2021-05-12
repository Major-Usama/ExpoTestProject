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
  TextInput,
} from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import BarCards from "../Components/BarCards";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function BarsScreen() {
  const [text, onChangeText] = useState();

  const [gallery, useGallery] = useState([
    {
      id: "1",

      image: require("../images/bars.jpg"),
      title: "Bucks Party Cruise",
      subtitle: "37 Bank , Pyrmont",
    },

    {
      id: "2",

      image: require("../images/bar2.jpg"),
      title: "Bucks Party Cruise",
      subtitle: "37 Bank , Pyrmont",
    },

    {
      id: "3",

      image: require("../images/bars.jpg"),
      title: "Bucks Party Cruise",
      subtitle: "37 Bank , Pyrmont",
    },

    {
      id: "4",

      image: require("../images/bars.jpg"),
      title: "Bucks Party Cruise",
      subtitle: "37 Bank , Pyrmont",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <SimpleLineIcons name="cup" size={44} color="#fff" />
        <Text style={styles.titleText}>Pubpoints</Text>
      </View>

      <View>
        <Text style={styles.subTitle}>Bars Near you</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="md-search-sharp" size={26} color="#fff" />

        <TextInput
          placeholder="Search Bars..."
          placeholderTextColor="#898889"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>

      <View>
        <FlatList
          showsVerticalScrollIndicato={false}
          contentContainerStyle={{ paddingBottom: "59%" }}
          style={styles.flatListCards}
          keyExtractor={(item) => item.id}
          data={gallery}
          renderItem={({ item }) => {
            return (
              <BarCards
                title={item.title}
                subTitle={item.subtitle}
                image={item.image}
              />
            );
          }}
        />
      </View>
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
    fontSize: 22,
    alignSelf: "center",
    marginTop: 10,
  },

  input: {
    height: 30,
    width: "90%",
    fontSize: 21,
    color: "#fff",
    marginLeft: 10,
  },

  searchContainer: {
    width: "85%",
    alignSelf: "center",
    height: 45,
    borderWidth: 4,
    borderColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },

  flatListCards: {
    marginTop: 10,
  },
});
