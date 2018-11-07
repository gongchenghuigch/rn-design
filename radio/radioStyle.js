import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
// 设备屏幕宽高
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    wrap: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    radioItem: {
        flexDirection: "row",
        // width: 78,
        // height: 37,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    radioEmpty: {
        // width: 78,
        // height: 37,
        backgroundColor: "transparent"
    },
    textColor: {
        fontSize: 12,
        color: "#555"
    },
    textActive: {
        fontSize: 12,
        color: "#ff552e"
    },
    radioImgActive: {
        width: 15,
        height: 15,
        position: "absolute",
        right: 0,
        bottom: 0
    },
    radioIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    }
});
export default styles;
