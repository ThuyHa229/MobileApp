import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Cart from "../screens/Cart";
import Chat from "../screens/Chat";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

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
                            iconName = focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline";
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#6B50F6',
                    tabBarInactiveTintColor: '#b5a7fb',
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 10,
                        marginHorizontal: 60,
                        borderRadius: 20,
                        height: 70
                    }
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Chat" component={Chat} />
            </Tab.Navigator>
    )
}


export default Tabs;
