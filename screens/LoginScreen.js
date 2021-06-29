import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { COLORS } from "../assets/theme";
import * as yup from "yup";
import { Formik } from "formik";

import FormField, { FormFieldPassword } from "../components/FormField";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .lowercase()
        .required("Email is required")
        .label("Email"),
    password: yup.string().required("Password is required").label("Password"),
});

const LoginScreen = ({ navigation }) => {
    const [incorrectData, setIncorrectData] = useState(false);

    const handleLogin = async ({ email, password }) => {
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

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => handleLogin(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        {/* Login Form */}
                        <View style={{ margin: 10 }}>
                            <FormField
                                placeholder="Email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChange={handleChange("email")}
                                onBlur={() => setFieldTouched("email")}
                                icon="email"
                            />
                            {touched.email && <ErrorMessage errorMssg={errors.email} />}
                            <FormFieldPassword
                                onChange={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                            {touched.password && <ErrorMessage errorMssg={errors.password} />}
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
                                onPress={handleSubmit}
                                android_ripple={{ color: COLORS.lightGrey }}
                            >
                                <Text style={styles.loginButtonText}>Login</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </Formik>
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
