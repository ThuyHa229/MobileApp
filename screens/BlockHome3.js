import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const BlockHome3 = () => {
  return (
    <ScrollView>
      <View style={styles.search}>
        <Text style={styles.titles}>Type</Text>
        <View style={styles.blockwords}>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Restaurant</Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Menu</Text>
          </View>
        </View>
      </View>
      <View style={styles.search}>
        <Text style={styles.titles}>Location</Text>
        <View style={styles.blockwords}>
          <View style={styles.totalwords}>
            <Text style={styles.words}>1 Km </Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>&lt; 10 Km </Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>&gt; 10 Km</Text>
          </View>
        </View>
      </View>
      <View style={styles.search}>
        <Text style={styles.titles}>Food</Text>
        <View style={styles.blockwords}>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Cake</Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Soup</Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Main Course</Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Appelizer</Text>
          </View>
          <View style={styles.totalwords}>
            <Text style={styles.words}>Dessert</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.text}>Search</Text>
      </View>
    </ScrollView>
  );
};

export default BlockHome3;

const styles = StyleSheet.create({
  search: {
    marginTop: 20,
    marginLeft: 20,
  },
  titles: {
    fontSize: 17,
    fontWeight: "bold",
  },
  blockwords: {
    marginTop: 20,
    flexDirection: "row",
    width: "70%",
    flexWrap: "wrap",
    columnGap: 20,
    gap: 20,
  },
  totalwords: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5fff0",
    width: "auto",
    height: 50,
    borderRadius: 20,
  },
  words: {
    color: "#6B50F6",
    fontSize: 14,
    marginRight: 20,
    marginLeft: 20,
  },
  button:{
    backgroundColor:'#6B50F6',
    width: '85%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginTop: 350
  },
  text:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
