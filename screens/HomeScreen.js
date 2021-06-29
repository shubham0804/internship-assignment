import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator, StatusBar } from "react-native";
import { COLORS } from "../assets/theme";
import RenderMovie from "../components/RenderMovie";

const HomeScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        const url = `https://hoblist.com/movieList`;
        const reqBody = {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
        };

        let movieList = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqBody),
        });
        movieList = await movieList.json();
        if (movieList && movieList.message === "success") {
            setData(movieList.result);
            setIsLoaded(true);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGrey }}>
            <StatusBar translucent backgroundColor={COLORS.secondary} />
            {!isLoaded && (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} animating />
                </View>
            )}
            {data.length > 0 && (
                <View
                    style={{
                        marginHorizontal: 10,
                        backgroundColor: "white",
                    }}
                >
                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <RenderMovie movie={item} />}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                        removeClippedSubviews
                        overScrollMode="never"
                        style={{ paddingVertical: 10 }}
                    />
                </View>
            )}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    itemSeparator: {
        height: 1,
        width: "95%",
        backgroundColor: COLORS.lightGrey,
        alignSelf: "center",
    },
});
