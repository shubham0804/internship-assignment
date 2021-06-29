import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SignUpNavigator from "./navigation/SignUpNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <SignUpNavigator />
        </NavigationContainer>
    );
}
