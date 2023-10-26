import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Home from "./Home";

const BlockHome1 = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <Home></Home>
        <View style={styles.HomeBody}>
          <View style={styles.bodyhome}>
            <View style={styles.container}>
              <Image
                source={require("../assets/pattern.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <Image
                source={require("../assets/imagekem.png")}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 15,
                  height: "100%",
                }}
              />
              <View>
                <Text style={styles.text1}>Special Deal For October</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => {}}
                >
                  <Text style={styles.buttonText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.nearestRestaurant}>
              <View>
                <Text style={styles.restaurantName}>Nearest Restaurant</Text>
              </View>
              <View>
                <Text
                  style={styles.viewmore}
                  onPress={() => {
                    navigation.navigate("BlockHome2");
                  }}
                >
                  View More
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.restaurant}>
            <View style={styles.rest1}>
              <Image source={require("../assets/restaurantImage2.png")} />
              <Text style={styles.restName1}>Vegan Resto</Text>
              <Text style={styles.restTime1}>12 Mins</Text>
            </View>
            <View style={styles.rest2}>
              <Image source={require("../assets/restaurantImage1.png")} />
              <Text style={styles.restName2}>Healthy Food</Text>
              <Text style={styles.restTime2}>8 Mins</Text>
            </View>
          </View>
          <View style={styles.popular}>
            <View>
              <Text style={styles.popularMenu}>Popular Menu</Text>
            </View>
            <View>
              <Text style={styles.viewmore1}>View More</Text>
            </View>
          </View>
          <View>
            <View style={styles.dish}>
              <Image
                source={require("../assets/photomenu1.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text style={styles.namedish}>Herbal Pancake</Text>
              <View>
                <Text style={styles.descri}>Warung Resto</Text>
              </View>
              <Text style={styles.price}>$7</Text>
            </View>
          </View>
          <View>
            <View style={styles.dish}>
              <Image
                source={require("../assets/photomenu2.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text style={styles.namedish}>Fruit Salad</Text>
              <View>
                <Text style={styles.descri}>Wijie Resto</Text>
              </View>
              <Text style={styles.price}>$5</Text>
            </View>
          </View>
          <View>
            <View style={styles.dish}>
              <Image
                source={require("../assets/photomenu.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text style={styles.namedish}>Green Noodles</Text>
              <View>
                <Text style={styles.descri}>Noodles Home</Text>
              </View>
              <Text style={styles.price}>$15</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BlockHome1;

const styles = StyleSheet.create({
  HomeBody: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    paddingBottom: 150,
  },
  bodyhome: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B50F6",
    height: 170,
    borderRadius: 20,
    width: 400,
    marginTop: 20,
  },
  text1: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 170,
    marginTop: -140,
  },
  buttonContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 8,
    marginTop: -65,
    width: 100,
    height: 35,
    marginLeft: 80,
  },
  buttonText: {
    color: "#6B50F6",
    fontWeight: "bold",
    fontSize: 13,
  },
  nearestRestaurant: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restaurantName: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewmore: {
    color: "#6B50F6",
    marginTop: 0,
    marginLeft: 170,
    fontSize: 15,
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
  popular: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  popularMenu: {
    marginLeft: 40,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewmore1: {
    color: "#6B50F6",
    marginTop: 0,
    fontSize: 15,
    marginRight: 40,
  },
  dish: {
    marginTop: 30,
    backgroundColor: "white",
    marginLeft: 20,
    borderRadius: 20,
    width: "90%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  namedish: {
    marginTop: 20,
    marginRight: 120,
    fontSize: 18,
    fontWeight: "bold",
  },
  descri: {
    marginTop: 50,
    marginLeft: -248,
    color: "gray",
  },
  price: {
    marginTop: 20,
    marginRight: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B50F6",
  },
});
