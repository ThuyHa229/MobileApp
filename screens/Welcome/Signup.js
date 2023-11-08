import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';


const Signup = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <Image
        source={require("../../assets/images/patter.png")}
        style={{
          width: "100%",
          height: 350,
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
            top: -210,
            textAlign: "center",
          }}
        >
          Sign Up For Free
        </Text>
      </View>
      <View>
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
        />
        <Image
          source={require("../../assets/Profile.png")}
          style={{
            top: -222,
            left: 50,
          }}
        />
        <Text style={styles.placeholderText1}>madeofzero</Text>

        <TextInput
          placeholder=""
          secureTextEntry={true}
          style={{
            top: -185,
            height: 60,
            width: "90%",
            borderRadius: 7,
            borderColor: "#DDDDDD",
            borderWidth: 1,
            paddingLeft: 20,
            marginLeft: 25,
          }}
        />
        <Image
          source={require("../../assets/Message.png")}
          style={{
            top: -225,
            left: 50,
          }}
        />
        <Text style={styles.placeholderText}>Email</Text>
      </View>

      <TextInput
        placeholder=""
        secureTextEntry={true}
        style={{
          top: -190,
          height: 60,
          width: "90%",
          borderRadius: 7,
          borderColor: "#DDDDDD",
          borderWidth: 1,
          paddingLeft: 20,
          marginLeft: 25,
        }}
      />
      <Image
        source={require("../../assets/Lock.png")}
        style={{
          top: -235,
          left: 50,
        }}
      />
      <Text style={{ top: -258, fontSize: 19, left: 100, opacity: 0.3 }}>
        Password{" "}
      </Text>
     
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  placeholderText1: {
    position: "absolute",
    top: -153,
    left: 100,
    fontSize: 19,
    fontWeight: "bold",
    opacity: 0.2,
  },
  placeholderText: {
    position: "absolute",
    top: -73,
    left: 100,
    fontSize: 19,
    fontWeight: "bold",
    opacity: 0.2,
  },
});
