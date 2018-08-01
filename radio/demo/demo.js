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
const styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 65
    },
    listItem: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        justifyContent: "center"
    },
    listItemFont: {
        fontSize: 16
    },
    initStyle: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        height: 50
    },
    labelStyle: {
        fontSize: 14
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        height: 30
    },
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
            initId: 14,
            initItem: "Banana",
            data: [
                {
                    selecteId: 13,
                    content: <TextInput style={styles.input} placeholder="请输入电话号码" />,
                    disabled: false
                },
                {
                    selecteId: 14,
                    content: "Banana",
                    disabled: false
                },
                {
                    selecteId: 15,
                    content: "Orange",
                    disabled: false
                },
                {
                    selecteId: 16,
                    content: "Watermelon",
                    disabled: true
                },
                {
                    selecteId: 17,
                    content: "Grape",
                    disabled: false
                }
            ]
        };
    }
    getFormData = () => {
        let radioId = this.state.initId;
        Toast.show("test", 2000);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.flex}>
                    <Radio
                        dataOption={this.state.data}
                        options={{
                            id: "selecteId",
                            value: "content",
                            disabled: "disabled"
                        }}
                        onValueChange={(id, item) => this.setState({ initId: id, initItem: item })}
                        selectedValue={this.state.initId}
                        txtColor="#333"
                        activeTxtColor="#000"
                        innerStyle={styles.initStyle}
                        labelStyle={styles.labelStyle}
                        rowHeight={35}
                        isPeer={true}
                        // seledImg={{
                        //     uri:
                        //         "https://img.58cdn.com.cn/images/car/activitypic/reactnative/selted.png"
                        // }}
                    />
                    <TouchableOpacity onPress={this.getFormData.bind(this)}>
                        <Text>获取选中radio</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default Demo;
