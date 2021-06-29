import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

import { COLORS } from "../assets/theme";
import FormField, { FormFieldPassword, FormFieldPicker } from "../components/FormField";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name").label("Name"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .lowercase()
        .required("Email is required")
        .label("Email"),
    password: yup
        .string()
        .min(6, "Password of minimum 6 characters is required")
        .required("Password is required")
        .label("Password"),
    phoneNumber: yup
        .number()
        .min(9, "Please enter a valid mobile number")
        .required("Phone Number is required")
        .label("Phone-Number"),
    profession: yup.string().required("Please select your profession").label("Profession"),
});

const handleSignup = async ({ name, email, password, profession, phoneNumber }, navigation) => {
    // Save to local storage
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    await AsyncStorage.setItem("profession", profession);
    await AsyncStorage.setItem("phoneNumber", phoneNumber);
    // Navigate to login screen
    navigation.navigate("LoginScreen");
};

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={COLORS.secondary} />

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    phoneNumber: "",
                    profession: "",
                }}
                onSubmit={(values) => handleSignup(values, navigation)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, values, setFieldTouched, touched }) => (
                    <>
                        <Text style={styles.heading}>Signup</Text>
                        {/* Sign Up Form */}
                        <View style={{ margin: 10 }}>
                            <FormField
                                placeholder="Name"
                                onChange={handleChange("name")}
                                onBlur={() => setFieldTouched("name")}
                                icon="account"
                            />
                            {touched.name && <ErrorMessage errorMssg={errors.name} />}
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

                            <FormField
                                placeholder="Phone Number"
                                keyboardType="phone-pad"
                                onChange={handleChange("phoneNumber")}
                                onBlur={() => setFieldTouched("phoneNumber")}
                                icon="cellphone"
                            />
                            {touched.phoneNumber && <ErrorMessage errorMssg={errors.phoneNumber} />}

                            {/* Profession Drop Down */}
                            <FormFieldPicker
                                onChange={handleChange("profession")}
                                selectedValue={values.profession}
                                onBlur={() => setFieldTouched("profession")}
                            />
                            {touched.profession && <ErrorMessage errorMssg={errors.profession} />}

                            {/* Sign Up Button */}
                            <View style={styles.signupButtonContainer}>
                                <Pressable
                                    style={styles.signupButton}
                                    onPress={handleSubmit}
                                    android_ripple={{ color: COLORS.lightGrey }}
                                >
                                    <Text style={styles.signupText}>Sign Up</Text>
                                </Pressable>
                            </View>
                        </View>
                    </>
                )}
            </Formik>
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
        marginTop: 1,
        alignSelf: "center",
        alignSelf: "stretch",
    },
    signupText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: -5,
    },
});
