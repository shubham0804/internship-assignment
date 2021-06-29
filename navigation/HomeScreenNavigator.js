import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeScreen, ContactScreen } from "../screens";
import { COLORS } from "../assets/theme";

const Drawer = createDrawerNavigator();

const DrawerContent = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 50 }}>
            <DrawerItem
                label="Company Info"
                onPress={() => navigation.navigate("ContactScreen")}
                labelStyle={{ fontSize: 20, fontWeight: "bold", color: COLORS.primary }}
            />
        </View>
    );
};

const HomeScreenNavigator = () => {
    const HeaderLeft = ({ navigation }) => {
        return (
            <Pressable onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons
                    name="menu"
                    color="white"
                    size={25}
                    style={{ marginLeft: 15 }}
                />
            </Pressable>
        );
    };

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{ width: "70%" }}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitle: () => <Text style={styles.headerTitle}>Movies</Text>,
                    headerTitleAlign: "center",
                    headerTintColor: "white",
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                })}
            />
            <Drawer.Screen name="ContactScreen" component={ContactScreen} />
        </Drawer.Navigator>
    );
};

export default HomeScreenNavigator;

const styles = StyleSheet.create({
    headerTitle: {
        color: "white",
        fontSize: 21,
        fontWeight: "bold",
    },
});
