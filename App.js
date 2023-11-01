import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Tabs from "./navigation/tabs";
import ChatDetail from "./screens/ChatDetail";
import ChatDetailTest from "./screens/ChatDetailTest";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import DetailProduct from "./screens/DetailProduct";
import DetailRestaurant from "./screens/DetailRestaurant";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      {/* <ChatDetail></ChatDetail> */}
      {/* <ChatDetailTest></ChatDetailTest> */}
      {/* <Cart /> */}
      {/* <Payment /> */}
      {/* <DetailProduct /> */}
      <DetailRestaurant />
    </NavigationContainer>
  );
};

export default App;
