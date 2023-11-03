import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DetailProduct = () => {
  const navigate = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity style={{position: "absolute", zIndex: 1, top: 15, left: 20}}>
        <View style={styles.ViewBackChat}>
          <Ionicons
            style={{ color: "#6B50F6" }}
            name="chevron-back-outline"
            size={24}
            color="black"
            onPress={() => {
              navigate.push("BlockHome1");
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={{ paddingBottom: 10 }}>
        <View>
          <Image
            source={require("../assets/photomenu5.png")}
            style={{
              width: "100%",
              height: 400,
            }}
          />
        </View>

        <View style={{ backgroundColor: "#ffff", height: "100%" }}>
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
            <Text style={styles.name}> Rainbow Sandwich {"\n"} Sugarless </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#ffff",
            }}
          >
            <Image
              source={require("../assets/iconstar.png")}
              style={{
                marginLeft: 25,
              }}
            />
            <Text style={styles.rate}>4.9 Rating</Text>
            <Image
              source={require("../assets/shoppingbag.png")}
              style={{
                marginLeft: 30,
              }}
            />
            <Text style={styles.rate}>2000+ Order</Text>
          </View>
          <View>
            <Text style={styles.menudesc}>
              Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
              aute elit nostrud culpa velit excepteur deserunt sunt. Velit non
              est cillum consequat cupidatat ex Lorem laboris labore aliqua ad
              duis eu laborum.
            </Text>
            <Text style={styles.menudesc1}>
              * Strowberry {"\n"}* Cream {"\n"}* wheat{"\n"}
            </Text>
            <Text style={styles.menudesc}>
              Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
              aute elit nostrud culpa velit excepteur deserunt sunt.
            </Text>
          </View>
          <View style={styles.comment}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Testimonials
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
          <View style={styles.btnAddToCart}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffff",
              }}
            >
              Add To Cart
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailProduct;
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
  },
  menudesc: {
    fontSize: 15,
    color: "gray",
    marginLeft: 25,
    marginTop: 12,
  },
  menudesc1: {
    fontSize: 15,
    color: "gray",
    marginLeft: 35,
    marginTop: 12,
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
  btnAddToCart: {
    backgroundColor: "#6B50F6",
    width: "88%",
    height: 65,
    marginLeft: 30,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewBackChat: {
    backgroundColor: "#ffff",
    height: 40,
    width: 60,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
