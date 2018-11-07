import React, { Component } from "react";
import { Alert, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Radio } from "@/rn-design";
const RadioButton = Radio.Button;
const styles = StyleSheet.create({
    content: {
        // flexDirection: "row",
        // alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff"
        // justifyContent: "space-between"
    },
    radioContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    innerStyle: {
        height: 50
    }
});

export default class DemoTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioBtn: [
                { text: "不限", value: "0" },
                { text: "1万公里内", value: "0_1" },
                { text: "3万公里内", value: "0_3" },
                { text: "5万公里内", value: "0_5" },
                { text: "8万公里内", value: "0_8" }
            ],
            selected: "0_1"
        };
    }

    componentDidMount() {}

    render() {
        return (
            <View>
                <View style={styles.content}>
                    <View style={{ height: 45, justifyContent: "center" }}>
                        <Text>测试Radio</Text>
                    </View>
                    <RadioButton
                        dataOption={this.state.radioBtn}
                        options={{ value: "value", text: "text", disabled: "disabled" }}
                        selectedValue={this.state.selected}
                        onChange={(item) => {
                            // console.log(item);
                        }}
                        size={[78, 37]}
                        // seledImg={require("./../img/filter/9@3x.png")}
                    />
                </View>
            </View>
        );
    }
}
