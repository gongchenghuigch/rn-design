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
    TouchableHighlight
} from "react-native";
import { Radio, Toast, CheckBox, DatePicker } from "./../../../rn-design";
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        width: 300
    },
    okText: {
        color: "#dc4931"
    },
    dismissText: {
        color: "#434345"
    },
    title: {
        fontSize: 13,
        color: "#999"
    }
});

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateValue: undefined
        };
    }
    onChange = (dateValue) => {
        this.setState({ dateValue });
    };
    format(date) {
        let mday = date.getDate();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        mday = mday < 10 ? `0${mday}` : mday;
        return `${date.getFullYear()}-${month}-${mday}`;
    }
    show = () => {
        // console.log('show')
    };
    render() {
        return (
            <ScrollView>
                <DatePicker
                    // styles={pickerStyles}
                    defaultDate={new Date()}
                    value={this.state.dateValue}
                    mode="date"
                    minDate={new Date(2010, 1, 1)}
                    maxDate={new Date(2020, 12, 31)}
                    onChange={this.onChange}
                    okText={<Text style={styles.okText}>确定</Text>}
                    dismissText={<Text style={styles.dismissText}>取消</Text>}
                    title={<Text style={styles.title}>请选择时间</Text>}>
                    <TouchableHighlight
                        onPress={this.show}
                        activeOpacity={0.5}
                        style={[styles.button]}
                        underlayColor="#a9d9d4">
                        <Text>
                            {(this.state.dateValue && this.format(this.state.dateValue)) || "open"}
                        </Text>
                    </TouchableHighlight>
                </DatePicker>
            </ScrollView>
        );
    }
}

export default Demo;
