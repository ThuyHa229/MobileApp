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
import TestSwipe from "./screens/TestSwipe";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      {/* <ChatDetail></ChatDetail> */}
      {/* <ChatDetailTest></ChatDetailTest> */}
      <Cart />
      {/* <Payment /> */}
      {/* <TestSwipe></TestSwipe> */}
    </NavigationContainer>
  );
};

export default App;
