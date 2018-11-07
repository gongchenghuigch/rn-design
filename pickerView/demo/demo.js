/**
 * @description 单滚轮
 * @author gongchenghui
 * @version 2018.11.05
 */
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
import { PickerView } from "./../../rn-design";
const styles = StyleSheet.create({
    okText: {
        color: "#dc4931"
    },
    dismissText: {
        color: "#434345"
    },
    title: {
        fontSize: 16,
        color: "#999"
    },
    button: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        width: 100
    }
});
const pickerData = {
    lettersort: false,
    option: [
        {
            text: "双轴",
            value: "685908"
        },
        {
            text: "三轴",
            value: "685909"
        },
        {
            text: "其他",
            value: "685932"
        }
    ],
    paramid: 12286,
    paramname: "zhoushu",
    title: "轴数",
    viewtype: "1"
};

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    show = () => {
        // console.log('show')
    };
    setPickerData = (value) => {
        // console.log(value);
    };
    render() {
        return (
            <View style={styles.flex}>
                <PickerView
                    data={pickerData}
                    onChange={(item) => this.setPickerData(item)}
                    okText={<Text style={styles.okText}>确定</Text>}
                    dismissText={<Text style={styles.dismissText}>取消</Text>}
                    title={<Text style={styles.title}>请选择时间</Text>}>
                    <TouchableHighlight
                        onPress={this.show}
                        activeOpacity={0.5}
                        style={[styles.button]}
                        underlayColor="#a9d9d4">
                        <Text>show popup</Text>
                    </TouchableHighlight>
                </PickerView>
            </View>
        );
    }
}
