import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    Image,
    Alert,
    TextInput,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from "react-native";
import { Radio, Toast, CheckBox, DatePicker, Swiper } from "./../rn-design";
import PropTypes from "prop-types";
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 65
    },
    image: {
        width: Dimensions.get("window").width,
        height: 80
    },
    item: {
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    one: {
        backgroundColor: "#0ca"
    },
    two: {
        backgroundColor: "#0cc"
    },
    three: {
        backgroundColor: "#0ac"
    },
    paginationStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: 10
    }
});

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    uri: "http://img.58cdn.com.cn/images/car/activitypic/reactnative/pic1.jpg"
                },
                {
                    uri: "http://img.58cdn.com.cn/images/car/activitypic/reactnative/pic2.jpg"
                }
            ]
        };
    }
    static defaultProps = {
        count: ["one", "two", "three"]
    };

    render() {
        //图片轮播
        const images = this.state.images.map((source, index) => (
            <View key={index} style={styles.image}>
                <Image style={styles.image} source={source} resizeMode={"stretch"} />
            </View>
        ));
        //普通轮播
        const items = this.props.count.map((name, index) => (
            <View key={index} style={[styles.item, styles[name]]}>
                <Text>{name}</Text>
            </View>
        ));
        return (
            <ScrollView>
                <View style={styles.flex}>
                    <Swiper
                        width={Dimensions.get("window").width}
                        height={80}
                        autoplay={true}
                        horizontal={true}
                        loop={true}
                        index={1}
                        paginationStyle={styles.paginationStyle}
                        showsPagination={true}
                        dotColor="#000"
                        dotStyle={{ width: 10, height: 2, backgroundColor: "red" }}
                        autoplayTimeout={3}>
                        {images}
                    </Swiper>
                </View>
            </ScrollView>
        );
    }
}

export default Demo;
