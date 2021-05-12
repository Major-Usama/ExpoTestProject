import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <SimpleLineIcons name="cup" size={44} color="#fff" />
        <Text style={styles.titleText}>Pubpoints</Text>
      </View>

      <ScrollView>
      <View style={styles.progressContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.points}>112</Text>
          <Text style={{ ...styles.points, fontSize: 16 }}>Points Earned</Text>
        </View>

        <View style={styles.barContainer}>
          <View
            style={{
              backgroundColor: "white",
              width: "85%",
              alignSelf: "center",
            }}
          >
            <Progress.Bar
              progress={0.6}
              animated={true}
              width={WIDTH}
              height={25}
              color="#E0B000"
              borderWidth={0}
              borderRadius={0}
            />
          </View>
          <Text style={{ ...styles.points, fontSize: 16, marginTop: 5 }}>
            120 Text Award
          </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.input}>
            <Text style={styles.text}>Pay</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={{...styles.progressContainer, height: HEIGHT * 0.30,}}>


        <View style={styles.memberInfo}>
        <Text style={styles.memberText}>
            Member Since
        </Text>

        <Text style={styles.memberText}>2021</Text>

        </View>

        <View style={styles.memberInfo}>
        <Text style={styles.memberText}>
            Life time points earned 
        </Text>

        <Text style={styles.memberText}>600</Text>

        </View>

        <View style={styles.memberInfo}>
        <Text style={styles.memberText}>
            Life time rewards redemed
        </Text>

        <Text style={styles.memberText}>2021</Text>

        </View>

      </View>
      </ScrollView>
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

  progressContainer: {
    borderWidth: 1,
    borderColor: "#505254",
    width: WIDTH - 20,
    height: HEIGHT * 0.4,
    alignSelf: "center",
    marginTop: 40,
  },

  points: {
    fontSize: 100,
    color: "#fff",
    textAlign: "center",
  },

  titleTextContainer: {
    alignSelf: "center",
  },

  barContainer: {
    marginTop: 30,
  },

  input: {
    width: WIDTH / 1.5,
    alignSelf: "center",
    marginTop: 25,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginBottom: 15,
  },

  text: {
    fontSize: 22,
    color: "#000",
    opacity: 0.5,
  },

  memberInfo:
  {
    width:WIDTH-40,
    height:60,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    alignSelf:'center',
    marginTop:10

  },

  memberText:
  {
      fontSize:18,
  }
});
