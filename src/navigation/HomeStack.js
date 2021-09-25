import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Characters from "../screens/Characters";
import Details from "../screens/Details";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Characters" component={Characters}/>
            <HomeStack.Screen name="Details" component={Details}/>
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen