import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ErrorMessage = ({ errorMssg }) => {
    if (!errorMssg) {
        return null;
    }
    return <Text style={styles.errorText}>{errorMssg}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
    errorText: {
        color: "red",
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 10,
        marginTop: -5,
    },
});
