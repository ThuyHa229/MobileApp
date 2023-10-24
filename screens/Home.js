import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();

  const handleTextInputClick = () => {
    navigation.navigate("BlockHome3");
  };
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Pattern.png")}
          style={styles.ImageCSS}
        ></Image>
        <View style={{ marginLeft: 30 }}>
          <View style={styles.viewtitlehome}>
            <Text style={styles.titleTexthome}>
              Find Your{"\n"}Favorite Food
            </Text>
            <View style={styles.viewIconNotificationHome}>
              <Ionicons
                style={styles.iconnotificationhome}
                name="notifications-outline"
                color={"#6B50F6"}
                size={30}
              ></Ionicons>
              <View style={styles.Havenotification}></View>
            </View>
          </View>
          <View style={styles.viewInputHome}>
            <Ionicons
              style={styles.iconnotificationhome}
              name="search-outline"
              color={"#6B50F6"}
              size={30}
            ></Ionicons>
            <TextInput
              style={styles.searchHome}
              placeholder="What do you want to order?"
              textAlignVertical="center"
              size={50}
              onFocus={handleTextInputClick}
            />

            <View
              style={styles.ViewSelectOption}
            >
              <Ionicons
                style={styles.iconnotificationhome}
                name="options-outline"
                color={"#6B50F6"}
                size={30}
                onPress={handleTextInputClick}
              ></Ionicons>
            </View>

          </View>


        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FF",
    height: 220
  },
  ImageCSS: {
    position: "absolute",
    zIndex: 1,
    marginLeft: 80,
    top: -480,
    transform: [{ rotate: "10deg" }],
    left: 60,
    width: "150%",
  },
  viewtitlehome: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleTexthome: {
    color: "#22242E",
    fontSize: 40,
    fontWeight: "bold",
  },
  viewIconNotificationHome: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    borderColor: "red",
    marginRight: 60,
    backgroundColor: "white",
    zIndex: 2,
    marginTop: 20,
  },
  Havenotification: {
    position: "absolute",
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "red",
    top: 15,
    right: 23,
    zIndex: 2,
  },
  viewInputHome: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconnotificationhome: {
    position: "absolute",
    zIndex: 1,
    left: 15,
  },
  searchHome: {
    width: "80%",
    height: 50,
    backgroundColor: "#f0edfe",
    padding: 10,
    borderRadius: 15,
    color: "#bbaefb",
    textAlign: "center",
    placeholderTextColor: "#bbaefb",
    width: "60%",
  },
  ViewSelectOption: {
    width: 57,
    height: 50,
    backgroundColor: "#f0edfe",
    borderRadius: 15,
    left: 20,
    zIndex: 2,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center'

  },
  iconOptionsHome: {
    zIndex: 2,
    alignSelf: 'center',
    
  }

});
