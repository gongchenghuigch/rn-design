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
    }
});

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedArr: [],
            checkData: [
                { value: 1, text: "测试一号", checked: false, disabled: false },
                { value: 2, text: "测试二号", checked: false, disabled: false },
                { value: 3, text: "测试三号", checked: true, disabled: false },
                { value: 4, text: "测试四号", checked: false, disabled: false },
                { value: 5, text: "测试五号", checked: false, disabled: false },
                { value: 6, text: "测试六号", checked: false, disabled: false }
            ]
        };
    }
    getFormData = () => {
        let radioId = this.state.initId;
        console.log(JSON.stringify(this.state.checkedArr));
        Toast.show("test", 2000);
        // WBCST.toast({ text: "haha" });
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.flex}>
                    <TouchableOpacity onPress={this.getFormData.bind(this)}>
                        <Text>获取选中值</Text>
                    </TouchableOpacity>
                    <CheckBox
                        dataOption={this.state.checkData}
                        options={{
                            id: "value",
                            value: "text",
                            checked: "checked",
                            disabled: "disabled"
                        }}
                        onValueChange={(arr) => this.setState({ checkedArr: arr })}
                        innerStyle={styles.initStyle}
                        isPeer={3}
                        selAll={true}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default Demo;
