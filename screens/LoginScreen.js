import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { COLORS } from "../assets/theme";
import FormField, { FormFieldPassword } from "../components/FormField";

const LoginScreen = ({ navigation }) => {
    const [incorrectData, setIncorrectData] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const getEmail = await AsyncStorage.getItem("email");
        const getPassword = await AsyncStorage.getItem("password");
        if (email !== getEmail || password !== getPassword) {
            setIncorrectData(true);
        } else {
            navigation.navigate("HomeScreenNavigator");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={COLORS.secondary} />
            <Text style={styles.heading}>Login</Text>
            {/* Login Form */}
            <View style={{ margin: 10 }}>
                <FormField
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChange={setEmail}
                    icon="email"
                />
                <FormFieldPassword onChange={setPassword} />
            </View>

            {/* Error Message */}
            {incorrectData && (
                <View>
                    <Text style={styles.error}>Invalid Credentials</Text>
                </View>
            )}

            {/* Login Button */}
            <View style={{ width: "100%", margin: 5 }}>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => {
                        handleLogin();
                    }}
                    android_ripple={{ color: COLORS.lightGrey }}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    error: {
        color: "red",
        fontSize: 18,
        fontWeight: "bold",
    },
    heading: {
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.primary,
        marginBottom: 40,
    },
    loginButton: {
        width: "100%",
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: 25,
    },
    loginButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});
