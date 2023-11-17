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
import Signup from "./screens/Welcome/Signup";
import Login from "./screens/Welcome/Login";
import { ProfileStack } from "./navigation/StackNavigation";
import EditProfile from "./screens/EditProfile";
import EditPreview from "./screens/EditPreview";
import SetLocation from "./screens/SetLocation";
import SigupSuccess from "./screens/Welcome/SigupSuccess";
import CallRinging from "./screens/CallRinging";
import Call from "./screens/Call";
import FinishOrder from "./screens/FinishOrder";
import RateFood from "./screens/RateFood";
import RateRestaurant from "./screens/RateRestaurant";
import Voucher from "./screens/Voucher";
import Notification from "./screens/Notification";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    {/* <EditProfile /> */}
    {/* <EditPreview /> */}
    {/* <SigupSuccess /> */}
    {/* <CallRinging /> */}
    {/* <Call /> */}
    {/* <FinishOrder /> */}
    {/* <RateFood /> */}
    {/* <RateRestaurant /> */}
    {/* <Voucher /> */}
    <Notification />
      {/* <Stack.Navigator
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
        <Stack.Screen name="EditProfile" component={ProfileStack} />
        <Stack.Screen name="EditPreview" component={EditPreview} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
