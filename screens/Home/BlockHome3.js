import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const API_ENDPOIND = "api"


const BlockHome3 = () => {
  const filters = [
    {
      title: 'Type',
      options: ['Restaurant', 'Menu'],
    },
    {
      title: 'Location',
      options: ['1 Km', '< 10 Km', '> 10 Km'],
    },
    {
      title: 'Food',
      options: ['Cake', 'Soup', 'Main Course', 'Appetizer', 'Dessert1    '],
    },
  ];


  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [fullData, setFullData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOIND);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json.results);

    } catch (error) {
      setError(error);
      console.log(error);
    }
  };



  const handelSearch = (query) => {
    setsearchQuery(query);

  };
  const navigation = useNavigation();
  const conditionNavigation = () => {
    navigation.navigate("OptionFilter");
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Pattern.png")}
          style={styles.ImageCSS}
        />
        <View style={{ marginLeft: 30 }}>
          <View style={styles.viewtitlehome}>
            <Text style={styles.titleTexthome}>
              Find Your{"\n"}Favorite Food
            </Text>
            <TouchableOpacity>
              <View style={styles.viewIconNotificationHome}>
                <Ionicons
                  style={styles.iconnotificationhome}
                  name="notifications-outline"
                  color={"#6B50F6"}
                  size={30}
                ></Ionicons>
                <View style={styles.Havenotification}></View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewInputHome}>
            <Ionicons
              style={{ position: "absolute", zIndex: 2, marginLeft: 15 }}
              name="search-outline"
              color={"#6B50F6"}
              size={30}
            ></Ionicons>
            <TextInput
              style={styles.searchHome}
              placeholder="What do you want to order?"
              textAlignVertical="center"
              size={50}
              placeholderTextColor="#bbaefb"
              autoCapitalize="none"
              autoCorrect={false}
              value={searchQuery}
              onChange={(query) => handelSearch(query)}

            />
          </View>
        </View>
      </View>
      {filters.map((filter, index) => (
        <View key={index} style={styles.search}>
          <Text style={styles.titles}>{filter.title}</Text>
          <View style={styles.blockwords}>
            {filter.options.map((option, optionIndex) => (
              <View key={optionIndex} style={styles.totalwords}>
                <Text style={styles.words}>{option}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
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
  button: {
    backgroundColor: "#6B50F6",
    width: "85%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 35,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#F8F8FF",
    height: 220,
    top: -50
  },
  ImageCSS: {
    height: "430%",
    width: "430%",
    marginLeft: -500,
    marginTop: -630,
    transform: [{ rotate: "10deg" }],
    objectFit: 'contain',
  },
  viewtitlehome: {
    marginTop: -220,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleTexthome: {
    color: "#22242E",
    fontSize: 40,
    fontWeight: "bold",
  },
  viewIconNotificationHome: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    borderColor: "red",
    backgroundColor: "white",
    marginRight: 100
  },
  Havenotification: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "red",
    top: -30,
    left: 5
  },
  viewInputHome: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
  },
  iconnotificationhome: {
  },
  searchHome: {
    width: "60%",
    height: 50,
    backgroundColor: "#f0edfe",
    padding: 10,
    borderRadius: 15,
    color: "#6B50F6",
    textAlign: "center",
  },
  ViewSelectOption: {
    width: 57,
    height: 50,
    backgroundColor: "#f0edfe",
    color: "#6B50F6",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconOptionsHome: {
    alignSelf: "center",
  },
});
