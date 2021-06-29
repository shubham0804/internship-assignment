import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS } from "../assets/theme";
import FormField, { FormFieldPassword, FormFieldPicker } from "../components/FormField";

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profession, setProfession] = useState("Profession");

    const handleSignup = async () => {
        // Save to local storage
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("password", password);
        await AsyncStorage.setItem("profession", profession);
        await AsyncStorage.setItem("phoneNumber", phoneNumber);
        // Navigate to login screen
        navigation.navigate("LoginScreen");
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={COLORS.secondary} />
            <Text style={styles.heading}>Signup</Text>
            {/* Sign Up Form */}
            <View style={{ margin: 10 }}>
                <FormField placeholder="Name" onChange={setName} value={name} icon="account" />
                <FormField
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChange={setEmail}
                    value={email}
                    icon="email"
                />
                <FormFieldPassword onChange={setPassword} value={password} />
                <FormField
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    onChange={setPhoneNumber}
                    value={phoneNumber}
                    icon="cellphone"
                />
                {/* Profession Drop Down */}
                <FormFieldPicker onChange={setProfession} selectedValue={profession} />
            </View>
            {/* Sign Up Button */}
            <View style={styles.signupButtonContainer}>
                <Pressable
                    style={styles.signupButton}
                    onPress={() => handleSignup()}
                    android_ripple={{ color: COLORS.lightGrey }}
                >
                    <Text style={styles.signupText}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 40,
    },
    signupButton: {
        width: "100%",
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 25,
    },
    signupButtonContainer: {
        width: "100%",
        margin: 10,
    },
    signupText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
