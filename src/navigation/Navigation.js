import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

//TabsScreens
import BarsScreen from "../screens/BarsScreen";
import RewardsScreen from "../screens/RewardsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { Entypo, Feather, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        lazy={false}
        tabBarOptions={{
          activeTintColor: "#000000",
          inactiveTintColor: "#000000",
          activeBackgroundColor: "#fff",
          inactiveBackgroundColor: "#B18D00",
          keyboardHidesTabBar: true,
          labelStyle: {
            fontSize: 14,
            color: "#fff",
            position: "absolute",
            bottom: 0,
          },
          style: {
            height: 68,
            position: "absolute",
            overflow: "hidden",
          },

          tabStyle: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0B000",
          },
        }}
      >
        <Tab.Screen
          name="BarsScreen"
          component={BarsScreen}
          options={{
            tabBarLabel: "Bars",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <View
                  style={{ ...styles.iconCircle, backgroundColor: "#B18D00" }}
                >
                  <Entypo name="location-pin" size={28} color={color} />
                </View>
              ) : (
                <View style={styles.iconCircle}>
                  <Entypo name="location-pin" size={28} color={color} />
                </View>
              ),
          }}
        />

        <Tab.Screen
          name="RewardsScreen"
          component={RewardsScreen}
          options={{
            tabBarLabel: "Rewards",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <View
                  style={{ ...styles.iconCircle, backgroundColor: "#B18D00" }}
                >
                  <Feather name="gift" size={28} color={color} />
                </View>
              ) : (
                <View style={styles.iconCircle}>
                  <Feather name="gift" size={28} color={color} />
                </View>
              ),
          }}
        />

        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <View
                  style={{ ...styles.iconCircle, backgroundColor: "#B18D00" }}
                >
                  <Ionicons name="person" size={28} color={color} />
                </View>
              ) : (
                <View style={styles.iconCircle}>
                  <Ionicons name="person" size={28} color={color} />
                </View>
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});
