import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View style={{ backgroundColor: "#fcfdff" }}>
      <Image
        source={require("../../assets/images/patter.png")}
        style={{
          width: "100%",
          height: 320,
        }}
      />
      <Image
        source={require("../../assets/logoLogin.png")}
        style={{
          left: 180,
          width: 120,
          height: 220,
          bottom: 270,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            bottom: 210,
            textAlign: "center",
          }}
        >
          Login To Your Account
        </Text>
      </View>
      <View>
        {/* Ô input cho Email */}
        <TextInput
          placeholder=""
          style={{
            top: -170,
            height: 60,
            width: "90%",
            borderRadius: 7,
            borderColor: "#DDDDDD",
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 20,
            marginLeft: 25,
          }}
          placeholderStyle={{ fontSize: 100 }}
        />
        <Text style={styles.placeholderText1}>Email</Text>
        {/* Ô input cho Password */}
        <TextInput
          placeholder=""
          secureTextEntry={true}
          style={{
            top: -160,
            height: 60,
            width: "90%",
            borderRadius: 7,
            borderColor: "#DDDDDD",
            borderWidth: 1,
            paddingLeft: 20,
            marginLeft: 25,
          }}
        />
        <Text style={styles.placeholderText}>Password</Text>
      </View>
      <View style={{ top: -130 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Or Continue With{" "}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          top: -100,
        }}
      >
        <View
          style={{
            width: "40%",
            height: 60,
            backgroundColor: "#FFFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            left: 30,
            borderRadius: 15,
            borderColor: "#DDDDDD",
            borderWidth: 1,
          }}
        >
          <Image
            style={{ left: 30, width: 35, height: 35 }}
            source={require("../../assets/fb.png")}
          />
          <Text style={{ right: 30, fontSize: 18 }}>Facebook</Text>
        </View>
        <View
          style={{
            width: "40%",
            height: 60,
            backgroundColor: "#FFFF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            right: 30,
            borderRadius: 15,
            borderColor: "#DDDDDD",
            borderWidth: 1,
          }}
        >
          <Image
            style={{ left: 42, width: 35, height: 35 }}
            source={require("../../assets/gg.png")}
          />
          <Text style={{ right: 42, fontSize: 18 }}>Google</Text>
        </View>
      </View>
      <View style={{ top: -80 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            color: "#6B50F6",
            textDecorationLine: "underline",
          }}
        >
          Forgot Your Password
        </Text>
      </View>
      <View
        style={{
          width: "40%",
          height: 65,
          backgroundColor: "#6B50F6",
          left: 150,
          top: -50,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#ffff",
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  placeholderText1: {
    position: "absolute",
    top: -153, // Điều chỉnh vị trí của placeholder
    left: 55,
    fontSize: 18, // Điều chỉnh kích thước chữ placeholder
    fontWeight: "bold",
    opacity: 0.2,
  },
  placeholderText: {
    position: "absolute",
    top: -73, // Điều chỉnh vị trí của placeholder
    left: 55,
    fontSize: 18, // Điều chỉnh kích thước chữ placeholder
    fontWeight: "bold",
    opacity: 0.2,
  },
});
