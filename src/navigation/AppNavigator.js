import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from "./HomeStack";
import Favorites from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Favorites" component={Favorites}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}