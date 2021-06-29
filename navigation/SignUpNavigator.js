import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUpScreen, LoginScreen } from "../screens";
import HomeScreenNavigator from "./HomeScreenNavigator";

const SignUpStack = createStackNavigator();

const SignUpNavigator = () => {
    return (
        <SignUpStack.Navigator>
            <SignUpStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            <SignUpStack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <SignUpStack.Screen
                name="HomeScreenNavigator"
                component={HomeScreenNavigator}
                options={{ headerShown: false }}
            />
        </SignUpStack.Navigator>
    );
};

export default SignUpNavigator;
