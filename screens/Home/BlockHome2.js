import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Home from "./Home";

const BlockHome2 = () => {
  return (
    <>
      <ScrollView>
      <Home></Home>
        <View style={styles.body}>
          <View>
            <Text style={styles.restpopular}>Popular Restaurant</Text>
          </View>
          <View style={styles.restaurant}>
            <View style={styles.rest1}>
              <Image source={require("../../assets/restaurantImage2.png")} />
              <Text style={styles.restName}>Vegan Resto</Text>
              <Text style={styles.restTime}>12 Mins</Text>
            </View>
            <View style={styles.rest2}>
              <Image source={require("../../assets/restaurantImage1.png")} />
              <Text style={styles.restName}>Healthy Food</Text>
              <Text style={styles.restTime}>8 Mins</Text>
            </View>
            <View style={styles.rest1}>
              <Image source={require("../../assets/rest3.png")} />
              <Text style={styles.restName}>Good Food</Text>
              <Text style={styles.restTime}>12 Mins</Text>
            </View>
            <View style={styles.rest2}>
              <Image source={require("../../assets/rest4.png")} />
              <Text style={styles.restName}>Smart Resto</Text>
              <Text style={styles.restTime}>8 Mins</Text>
            </View>
            <View style={styles.rest1}>
              <Image source={require("../../assets/rest5.png")} />
              <Text style={styles.restName}>Vegan Resto</Text>
              <Text style={styles.restTime}>12 Mins</Text>
            </View>
            <View style={styles.rest2}>
              <Image source={require("../../assets/rest6.png")} />
              <Text style={styles.restName}>Healthy Food</Text>
              <Text style={styles.restTime}>8 Mins</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default BlockHome2;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F8F8FF",
    height: "100%",
    paddingBottom: 110
  },
  restpopular: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 30,
  },
  restaurant: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Cho phép tự động xuống hàng
  },
  rest1: {
    width: 150,
    marginTop: 20,
    backgroundColor: "white",
    marginLeft: 40,
    borderRadius: 20,
    width: 180,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  rest2: {
    width: 150,
    marginTop: 20,
    backgroundColor: "white",
    marginRight: 40,
    borderRadius: 20,
    width: 180,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  restName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restTime: {
    fontSize: 15,
    color: "gray",
    marginTop: 5,
  },
});
