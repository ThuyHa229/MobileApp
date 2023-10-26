import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Tabs from "./navigation/tabs";
import ChatDetail from "./screens/ChatDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <ChatDetail></ChatDetail>
    </NavigationContainer>
  );
};

export default App;
