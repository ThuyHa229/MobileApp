import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import Chat from "../screens/Chat";
import BlockHome1 from "../screens/BlockHome1";
import BlockHome2 from "../screens/BlockHome2";
import BlockHome3 from "../screens/BlockHome3";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  
    return (
      <Stack.Navigator>
          <Stack.Screen
            name="BlockHome1"
            component={BlockHome1}
            options={{ headerShown: false }}
          />
        <Stack.Screen name="BlockHome2" component={BlockHome2} options={{ headerShown: false }} />
        <Stack.Screen name="BlockHome3" component={BlockHome3} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  };

const Tabs = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Chat") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6B50F6",
        tabBarInactiveTintColor: "#b5a7fb",
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          marginHorizontal: 60,
          borderRadius: 20,
          height: 70,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default Tabs;
