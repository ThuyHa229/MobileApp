import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Cart() {
  const initialCartItems = [
    {
      id: 1,
      name: "Spacy fresh crab",
      message: "Waroenk kita",
      money: 35,
      quantity: 1,
      profileImage: require("../assets/photomenu1.png"),
      backgroundColor: "#3D405B",
    },
    {
      id: 2,
      name: "Paul Koch",
      message: "Waroenk kita",
      money: 35,
      quantity: 1,
      profileImage: require("../assets/photomenu.png"),
      backgroundColor: "#81B29A",
    },
    {
      id: 3,
      name: "Carla Klein",
      message: "Waroenk kita",
      money: 35,
      quantity: 1,
      profileImage: require("../assets/photomenu2.png"),
      backgroundColor: "#FFAFCC",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);


  const [totalPrice, setTotalPrice] = useState(35);

  const handleDecreaseQuantity = (id) => {
    const updatedItems = [...cartItems];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);

    if (updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex].quantity -= 1;
      setCartItems(updatedItems);
    }
  };

  const handleIncreaseQuantity = (id) => {
    const updatedItems = [...cartItems];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);

    updatedItems[itemIndex].quantity += 1;
    setCartItems(updatedItems);
  };

  const rightSwipe = () => {
    return (
      <View>
        <Ionicons
          style={{ color: "#6B50F6" }}
          name="trash-outline"
          size={24}
          color="black"
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Pattern.png")} style={styles.ImageCSS}></Image>
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
      {cartItems.map((item, index) => (
        <View renderRightActions={rightSwipe}>
          <View style={styles.chating}>
            <View style={styles.photoProfile}>
              <Image source={item.profileImage} style={styles.ImagePhotoProfile} />
            </View>
            <View style={styles.NameAndNotification}>
              <Text style={{ marginLeft: 10, marginTop: 7 }}>{item.name}</Text>
              <Text style={{ marginLeft: 10, marginTop: 7, opacity: 0.3 }}>{item.message}</Text>
              <Text style={{ marginLeft: 10, marginTop: 7, color: "#6B50F6", fontWeight: "900" }}>$ {item.money * item.quantity}</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 40, alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
                <View style={styles.minus}>
                  <Text style={{ color: "#181818", fontWeight: 'bold' }}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.quantityItems}>
                <Text style={{ color: "#181818", fontSize: 16, }}>{item.quantity}</Text>
              </View>
              <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                <View style={styles.increase}>
                  <Text>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
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
    width: "103%",
    marginHorizontal: 20,
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
    borderRadius: 16,
    marginRight: 30,
    marginTop: -30
  },
  minus: {
    backgroundColor: '#6B50F6',
    opacity: 0.1,
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  quantityItems: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  increase: {
    backgroundColor: "#6B50F6",
    height: 26,
    width: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  swipeoutDeleteButton: {
    height: 103,
    borderRadius: 22,
    width: "88%",
    marginTop: 25,
    marginLeft: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },

});