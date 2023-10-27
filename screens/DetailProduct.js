import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

const DetailProduct = () => {
  return (
    <ScrollView>
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
          <View style={{
            marginBottom: 30,
            marginLeft: 190
          }}>
            <Image
              source={require("../assets/iconlocation.png")}
              style={{
                marginRight: 50,
              }}
            />
            </View>
            <View style={{
              marginBottom: 30,
              marginLeft: -40
            }}>
            <Image
              source={require("../assets/iconlove.png")}
              style={{
                marginRight: 50,
              }}
            />
            </View>
          </View>
          <View>
            <Text style={styles.name}> Rainbow Sandwich {'\n'} Sugarless </Text>
          </View>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20
          }}>
          <Image
              source={require("../assets/iconstar.png")}
            style={{
              marginLeft: 25
            }}
            />
            <Text style={styles.rate}>4.9 Rating</Text>
            <Image
              source={require("../assets/shoppingbag.png")}
              style={{
              marginLeft: 30
            }}
            />
            <Text style={styles.rate}>2000+ Order</Text>
          </View>
        {/* <View
          style={{
            marginLeft: 27,
            marginTop: 11,
            backgroundColor: "white",
            borderRadius: 20,
            width: "88%",
            height: 64,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >

        </View> */}
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
  name:{
    fontSize: 28,
    fontWeight: "bold",
    marginTop: -50,
    marginLeft: 20
  },
  rate:{
    fontSize: 15,
    opacity: 0.3,
    marginRight: 100
  }
});
