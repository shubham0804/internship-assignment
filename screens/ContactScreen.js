import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contactContainer}>
                <View style={styles.textRowContainer}>
                    <Text style={styles.textTag}>Company: </Text>
                    <Text style={styles.text}>Geeksynergy Technologies Pvt Ltd</Text>
                </View>
                <View style={styles.textRowContainer}>
                    <Text style={styles.textTag}>Address: </Text>
                    <Text style={styles.text}>Sanjayanagar, Bengaluru-56</Text>
                </View>
                <View style={styles.textRowContainer}>
                    <Text style={styles.textTag}>Phone: </Text>
                    <Text style={styles.text}>XXXXXXXXX09</Text>
                </View>
                <View style={styles.textRowContainer}>
                    <Text style={styles.textTag}>Email: </Text>
                    <Text style={styles.text}>XXXXXX@gmail.com</Text>
                </View>
            </View>
        </View>
    );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: statusBarHeight + 15,
    },
    contactContainer: {
        marginHorizontal: 20,
        marginTop: 50,
    },
    textTag: {
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        fontSize: 20,
        flexWrap: "wrap",
        flex: 1,
    },
    textRowContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
});
