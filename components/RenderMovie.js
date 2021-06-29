import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../assets/theme";

const RenderMovie = ({ movie }) => {
    let releasedDate = movie.releasedDate;
    releasedDate = new Date(releasedDate * 1000).toString().split(" ");
    return (
        <View style={styles.container}>
            {/* Movie Details */}
            <View style={styles.movieDetailsContainer}>
                {/* Votes */}
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <AntDesign name="caretup" size={20} color="black" style={styles.caret} />
                    <Text style={{ fontSize: 18 }}>{movie.voting}</Text>
                    <AntDesign name="caretdown" size={20} color="black" style={styles.caret} />
                    <Text>Votes</Text>
                </View>
                {/* Pic */}
                <Image
                    source={{ uri: movie.poster }}
                    style={styles.movieImage}
                    resizeMode="contain"
                />
                {/* Movie Details */}
                <View style={{ flexDirection: "column", marginLeft: 15, flex: 1 }}>
                    <Text style={styles.movieTitle}>{movie.title}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.metaTag}>Genre: </Text>
                        <Text>{movie.genre}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.metaTag}>Director: </Text>
                        <Text>{movie.director[0].slice(0, 15)}...</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.metaTag}>Staring: </Text>
                        <Text>{movie.stars[0].slice(0, 15)}...</Text>
                    </View>
                    {/* Duration, Language & Release Date */}
                    <View style={{ flexDirection: "row" }}>
                        {movie.runTime && <Text>{movie.runTime} Mins | </Text>}
                        <Text>{movie.language} | </Text>
                        <Text>
                            {releasedDate[2]} {releasedDate[1]}
                        </Text>
                    </View>
                    {/* Views & Votes Count */}
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.viewsAndVotes}>{movie.pageViews} views | </Text>
                        <Text style={styles.viewsAndVotes}>Voted by {movie.totalVoted} People</Text>
                    </View>
                </View>
            </View>
            {/* Watch Trailer Button */}
            <View style={{ alignItems: "center" }}>
                <Pressable
                    style={styles.button}
                    onPress={() => {}}
                    android_ripple={{ color: COLORS.lightGrey }}
                >
                    <Text style={styles.buttonText}>Watch Trailer</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default RenderMovie;

const styles = StyleSheet.create({
    container: {},
    button: {
        backgroundColor: COLORS.primary,
        width: "90%",
        height: 35,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    metaTag: {
        color: COLORS.darkGrey,
        fontWeight: "bold",
    },
    movieDetailsContainer: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
    },
    movieImage: {
        height: "100%",
        width: "20%",
        borderRadius: 5,
        marginLeft: 10,
    },
    movieTitle: {
        fontSize: 20,
    },
    viewsAndVotes: {
        color: COLORS.primary,
        fontWeight: "900",
    },
});
