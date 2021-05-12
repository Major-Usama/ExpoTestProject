import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function SettingsContant() {
  return (
    <View>
      <View style={styles.textInputsContainer}>
        <TouchableOpacity>
          <View style={styles.input}>
            <Text style={styles.text}>Change Password</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input}>
            <Text style={styles.text}>Contact Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input}>
            <Text style={styles.text}>Customer Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.logoutButton}>
            <Text style={styles.logout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: WIDTH / 1.2,
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginBottom: 15,
  },

  text: {
    fontSize: 28,
    color: "#000",
    opacity: 0.5,
  },

  textInputsContainer: {
    marginTop: HEIGHT * 0.15,
  },

  logoutButton: {
    width: WIDTH / 1.7,
    marginTop: HEIGHT * 0.09,
    height: 36,
    backgroundColor: "#FF0000",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  logout: {
    fontSize: 28,
    color: "#fff",
  },
});
