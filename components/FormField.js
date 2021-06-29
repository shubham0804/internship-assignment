import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { Picker } from "@react-native-picker/picker";

const FormField = ({ placeholder, onChange, icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 15, flex: 1, flexDirection: "row", alignItems: "center" }}>
                {icon && (
                    <MaterialCommunityIcons
                        name={icon}
                        size={25}
                        color="#6e6969"
                        style={{ marginRight: 5 }}
                    />
                )}
                <TextInput
                    placeholder={placeholder}
                    style={styles.textInput}
                    placeholderTextColor={COLORS.darkGrey}
                    onChangeText={(text) => onChange(text)}
                    {...otherProps}
                />
            </View>
        </View>
    );
};

const FormFieldPassword = ({ onChange }) => {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 15, flex: 1, flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                    name="lock"
                    size={25}
                    color="#6e6969"
                    style={{ marginRight: 5 }}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    placeholderTextColor={COLORS.darkGrey}
                    secureTextEntry={!passwordVisibility}
                    autoCompleteType="off"
                    onChangeText={(text) => onChange(text)}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 15,
                    }}
                    hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
                    onPress={() => setPasswordVisibility(!passwordVisibility)}
                >
                    {passwordVisibility ? (
                        <Ionicons name="eye-off" size={24} color="black" />
                    ) : (
                        <Ionicons name="eye" size={24} color="black" />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const FormFieldPicker = ({ onChange, selectedValue }) => {
    return (
        <View style={styles.picker}>
            <View style={{ position: "absolute", flexDirection: "row", marginLeft: 15 }}>
                <MaterialCommunityIcons name="account-tie" size={25} color="#6e6969" />
                <Text
                    style={
                        selectedValue
                            ? styles.pickerText
                            : [styles.pickerText, { color: COLORS.darkGrey }]
                    }
                >
                    {!selectedValue ? "Profession" : selectedValue}
                </Text>
            </View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => onChange(itemValue)}
                style={{ opacity: 0 }}
            >
                <Picker.Item label="Profession" value="" />
                <Picker.Item label="Engineer" value="Engineer" />
                <Picker.Item label="Entrepreneur" value="Entrepreneur" />
                <Picker.Item label="Architect" value="Architect" />
            </Picker>
        </View>
    );
};

export default FormField;
export { FormFieldPassword, FormFieldPicker };

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        backgroundColor: "#fff0e5",
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 25,
    },
    picker: {
        height: 50,
        backgroundColor: "#fff0e5",
        borderRadius: 25,
        justifyContent: "center",
    },
    pickerText: {
        marginLeft: 5,
        fontSize: 18,
        color: "black",
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },
});
