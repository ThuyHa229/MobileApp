import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Cart() {
  const messages = [
    {
      name: "Spacy fresh crab",
      message: "Waroenk kita",
      money: 35,
      quantity: 1,
      profileImage: require("../assets/photomenu1.png"),
      backgroundColor: "#3D405B",
    },
    {
      name: "Paul Koch",
      message: "Waroenk kita",
      money: 35,
      quantity: 1,
      profileImage: require("../assets/photomenu.png"),
      backgroundColor: "#81B29A",
    },
    {
      name: "Carla Klein",
      message: "Waroenk kita",
      money: 35,
      quantity: 1,
      profileImage: require("../assets/photomenu2.png"),
      backgroundColor: "#FFAFCC",
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Pattern.png")}
          style={styles.ImageCSS}
        ></Image>
        <TouchableOpacity>
          <View style={styles.ViewBackChat}>
            <Ionicons
              style={{ color: "#6B50F6" }}
              name="chevron-back-outline"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.TitleChat}>Order details</Text>
        {/* khung body tin nhắn */}
        {messages.map((message, index) => (
          <View>
            <TouchableOpacity>
              <View style={styles.chating} key={index}>
                <View
                  style={{
                    ...styles.photoProfile,
                  }}
                >
                  <Image
                    source={message.profileImage}
                    style={styles.ImagePhotoProfile}
                  />
                </View>
                <View style={styles.NameAndNotification}>
                  <Text style={{ marginLeft: 10, marginTop: 7 }}>
                    {message.name}
                  </Text>
                  <Text style={{ marginLeft: 10, marginTop: 7, opacity: 0.3 }}>
                    {message.message}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: 7,
                      color: "#6B50F6",
                      fontWeight: "900",
                    }}
                  >
                    $ {message.money}
                  </Text>
                </View>
                <View style={styles.minus}><Text>-</Text></View>
                <View style={styles.TimeInChating}>
                  <Text style={{ color: "#181818" }}>{message.quantity}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fe",
    height: 920,
  },
  ImageCSS: {
    position: "absolute",
    marginLeft: 80,
    top: -480,
    transform: [{ rotate: "10deg" }],
    left: 60,
    width: "150%",
  },
  ViewBackChat: {
    height: 45,
    width: 45,
    backgroundColor: "#f0edfe",
    borderRadius: 15,
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  TitleChat: {
    marginLeft: 30,
    marginTop: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  chating: {
    height: 103,
    backgroundColor: "#FFFF",
    borderRadius: 22,
    width: "88%",
    marginTop: 25,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  photoProfile: {
    height: 62,
    width: 62,
    borderRadius: 16,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  NameAndNotification: {
    height: 62,
    width: 160,
    backgroundColor: "red",
    borderRadius: 16,
    marginRight: 45,
  },
  minus:{
    backgroundColor: "red",
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  TimeInChating: {
    height: 20,
    width: 20,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    marginRight: 70,
  },
});
