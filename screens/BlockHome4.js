import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

const BlockHome4 = () => {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../assets/Pattern.png")}>
      <View style={styles.container}>
        <Text style={styles.textNearst}>Nearest Restaurant</Text>
        <Text style={styles.textView}>View More</Text>
        <View style={styles.card}>
          <Image source={require("../assets/Resto.png")} style={styles.Restaurant_image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Vegan Resto</Text>
            <Text style={styles.description}>12 Mins</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textNearst: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 150,
    right: '23%',
    position: 'absolute',
  },
  textView: {
    top: 130,
    left: '45%',
    color: '#6B50F6',
    position: 'absolute',
  },
  card: {
    backgroundColor: '#fff',
    width: 160,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
    right: '23%',
    top: 147,
    position: 'absolute',
  },
  Restaurant_image: {
    width: 150,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  description: {
    fontSize: 13,
    textAlign: 'center'
  },
});

export default BlockHome4;
