import React, { Component } from "react";
import { View, StyleSheet, ViewPropTypes } from "react-native";

const styles = StyleSheet.create({
    dot: {
        backgroundColor: "#fff",
        width: 10 / 2,
        height: 10 / 2,
        borderRadius: 10 / 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
});

export default function Dot({ style }) {
    return <View style={[styles.dot, style]} />;
}
