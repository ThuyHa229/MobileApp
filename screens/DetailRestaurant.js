import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

const DetailRestaurant = () => {
  const dishes = [
    {
      image: require("../assets/pizza.png"),
      name: "Spacy fresh crab",
      price: 12,
    },
    {
      image: require("../assets/chicken.png"),
      name: "Spacy fresh crab",
      price: 16,
    },
    {
      image: require("../assets/photomenu.png"),
      name: "Green Noodles",
      price: 15,
    },
  ];
  return (
    <ScrollView>
      <View style={{ paddingBottom: 20 }}>
        <View>
          <View>
            <Image
              source={require("../assets/photores.png")}
              style={{
                width: "100%",
                height: 400,
              }}
            />
          </View>
          <View style={styles.infor}>
            <View style={styles.button}>
              <Text style={styles.rank}>Popular</Text>
            </View>
            <View
              style={{
                marginBottom: 30,
                marginLeft: 190,
              }}
            >
              <Image
                source={require("../assets/iconlocation.png")}
                style={{
                  marginRight: 50,
                }}
              />
            </View>
            <View
              style={{
                marginBottom: 30,
                marginLeft: -40,
              }}
            >
              <Image
                source={require("../assets/iconlove.png")}
                style={{
                  marginRight: 50,
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.name}> WiJie Bar and Restro</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              source={require("../assets/iconmap.png")}
              style={{
                marginLeft: 25,
              }}
            />
            <Text style={styles.rate}>19 Km</Text>
            <Image
              source={require("../assets/iconstar.png")}
              style={{
                left: -130,
              }}
            />
            <Text style={styles.rate2}>4.8 Rating</Text>
          </View>
          <View>
            <Text style={styles.menudesc}>
              Most whole Alaskan Red King Crabs get broken down into legs,
              claws, and lump meat. We offer all of these options as well in our
              online shop, but there is nothing like getting the whole . . . .
            </Text>
          </View>
          <View style={styles.popularmenu}>
            <View>
              <Text style={styles.menuname}>Popular Menu</Text>
            </View>
            <View>
              <Text
                style={styles.viewmore}
                onPress={() => {
                  navigation.navigate("BlockHome2");
                }}
              >
                View All
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.restaurant}>
          {dishes.map((dish, index) => (
            <View style={styles.rest1} key={index}>
              <Image source={dish.image} style={{ width: 100, height: 100 }} />
              <Text style={styles.restName1}>{dish.name}</Text>
              <Text style={styles.restTime1}>{dish.price}$</Text>
            </View>
          ))}
        </View>
        <View style={styles.comment}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Testimonials</Text>
          <View style={styles.userComment}>
            <Image source={require("../assets/photoprofile1.png")} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: "700",
                marginTop: -40,
                left: -15,
              }}
            >
              Dianne Russell
            </Text>
            <Text
              style={{
                fontSize: 15,
                opacity: 0.3,
                left: -185,
              }}
            >
              12 April 2021
            </Text>
            <Image
              style={{ right: 50 }}
              source={require("../assets/starIcon.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 90,
              color: "gray",
              marginTop: -10,
            }}
          >
            This is greate. So delicious! You Must Here. With Your Family . .
          </Text>
          <View style={styles.userComment}>
            <Image source={require("../assets/photoprofile1.png")} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: "700",
                marginTop: -40,
                left: -15,
              }}
            >
              Dianne Russell
            </Text>
            <Text
              style={{
                fontSize: 15,
                opacity: 0.3,
                left: -185,
              }}
            >
              12 April 2021
            </Text>
            <Image
              style={{ right: 50 }}
              source={require("../assets/starIcon.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 90,
              color: "gray",
              marginTop: -10,
            }}
          >
            This is greate. So delicious! You Must Here. With Your Family . .
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailRestaurant;
const styles = StyleSheet.create({
  infor: {
    marginTop: -40,
    height: 155,
    backgroundColor: "white",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rank: {
    color: "#6B50F6",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    marginLeft: 20,
    width: 140,
    height: 40,
    backgroundColor: "#e5fff0",
    borderRadius: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: -50,
    marginLeft: 20,
  },
  rate: {
    fontSize: 15,
    opacity: 0.3,
    marginRight: 100,
    left: -20,
  },
  rate2: {
    fontSize: 15,
    opacity: 0.3,
    marginRight: 100,
    left: -150,
  },
  menudesc: {
    fontSize: 15,
    color: "gray",
    marginLeft: 25,
    marginTop: 12,
  },
  popularmenu: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
  },
  menuname: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewmore: {
    color: "#6B50F6",
    marginTop: 0,
    fontSize: 15,
    left: -50,
  },
  restaurant: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rest1: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    marginLeft: 30,
    borderRadius: 20,
    width: 180,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFFFFF", // Đây là thuộc tính để chỉnh màu biên
    borderWidth: 2, // Đây là độ rộng của biên
  },
  restName1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restTime1: {
    fontSize: 15,
    color: "gray",
    marginTop: 5,
  },
  rest2: {
    marginTop: 20,
    backgroundColor: "white",
    marginRight: 30,
    borderRadius: 20,
    width: 180,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  restName2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restTime2: {
    fontSize: 15,
    color: "gray",
    marginTop: 5,
  },
  comment: {
    marginLeft: 25,
    marginTop: 15,
  },
  userComment: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
