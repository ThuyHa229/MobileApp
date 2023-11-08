import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/tabs";
import ChatDetail from "./screens/ChatDetail";
import ChatDetailTest from "./screens/ChatDetailTest";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import DetailProduct from "./screens/DetailProduct";
import DetailRestaurant from "./screens/DetailRestaurant";
import BlockHome1 from "./screens/Home/BlockHome1";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Tab" component={Tabs}></Stack.Screen>
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ tabBarShowLabel: true }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
