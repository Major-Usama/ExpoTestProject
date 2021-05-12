import React, { useState} from "react";
import { View, Text, StyleSheet,FlatList,Platform } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Favorite from "./FavoriteList";
import SettingsContant from "./SettingsContent";

export default function SegmentScreen()  {
  

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

        {
            id: "5",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },

          {
            id: "6",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },
          {
            id: "7",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },
          {
            id: "8",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },

          {
            id: "9",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },

          {
            id: "10",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },

          {
            id: "11",
      
            image: require("../images/bars.jpg"),
            title: "Bucks Party Cruise",
            subtitle: "37 Bank , Pyrmont",
          },
      ]);


  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  
  

  
    return (
      <View style={styles.container}>
        <SegmentedControlTab
          selectedIndices={[1]}
          values={["Favorite", "Settings"]}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
          tabsContainerStyle={styles.tabContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
        />
        {selectedIndex === 1 ? (

            <FlatList
            showsVerticalScrollIndicato={false}
            contentContainerStyle={{ paddingBottom: "20%" }}
            style={styles.flatListCards}
            keyExtractor={(item) => item.id}
            data={gallery}
            renderItem={({ item }) => {
            return (
                <Favorite
                title={item.title}
                subTitle={item.subtitle}
                image={item.image}
                />
            );
            }}
            />


        ) : (
          
            <SettingsContant />
        )}
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  tabContainerStyle: {
    backgroundColor: "transparent",
    width: "65%",
    height: "3.5%",
    marginTop: 45,
  },

  tabStyle: {
    backgroundColor: "#B79200",
    borderColor: "#64676B",
    height:Platform.OS==='ios' ?30 :25,
    
  },

  tabTextStyle: {
    color: "#fff",
    fontSize: 16,
  },

  activeTabStyle: {
    backgroundColor: "#000",
    borderColor: "#64676B",
  },

  activeTabTextStyle: {
    color: "#fff",
    fontSize: 16,
  },

  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 40,
  },

  
  flatListCards: {
    marginTop: 25,
  },
});


