import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlockHome1 from "../screens/Home/BlockHome1";
import BlockHome2 from "../screens/Home/BlockHome2";
import BlockHome3 from "../screens/Home/BlockHome3";
import ChatDetail from "../screens/ChatDetail";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BlockHome1} />
      <Stack.Screen name="DetailRestaurant" component={BlockHome2} />
      <Stack.Screen name="OptionFilter" component={BlockHome3} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
    </Stack.Navigator>
  )
}

export { HomeStack, ChatStack };
