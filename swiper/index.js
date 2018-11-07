import React, { Component } from "react";
import { Platform } from "react-native";
// import Swiper from "./SwiperIOS/index";

// export default Swiper;

export default Platform.select({
    ios: require("./swiperIOS"),
    android: require("./swiperAndroid")
});

// export default require('react-native-swiper')
