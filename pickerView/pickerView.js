/**
 * @author gongchenghui
 * @version 2018.11.1
 * @description pickerView 组件
 */
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Image,
    Dimensions,
    ToastAndroid
} from "react-native";
import MultiPicker from "./../rmc-picker/lib/MultiPicker.native";
import Picker from "./../rmc-picker/lib/Picker.native";
import PopPicker from "./../rmc-date-picker/lib/Popup";
import PopupStyles from "./../rmc-picker/lib/PopupStyles";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
// DatePicker style 样式模板
const pickerStyles = StyleSheet.create({
    modal: {
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    header: {
        height: 44,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e7e7e7",
        backgroundColor: "#f8f9fb"
    },
    root: {
        paddingTop: 100,
        flexDirection: "row",
        justifyContent: "center"
    },
    headerItem: {
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    actionText: {
        color: "#0ae",
        fontSize: 18,
        textAlign: "center"
    },
    okText: {
        fontSize: 16,
        color: "#dc4931"
    },
    dismissText: {
        fontSize: 16,
        color: "#434345"
    },
    title: {
        color: "#666",
        fontSize: 18,
        textAlign: "center"
    },
    content: {
        padding: 100,
        justifyContent: "center",
        alignItems: "center"
    }
});
export default class PickerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerData: {},
            value: []
        };
    }
    static defaultProps = {
        mode: "date",
        extra: "请选择",
        title: "请选择",
        okText: "确定",
        styles: pickerStyles,
        dismissText: "取消",
        minuteStep: PopupStyles,
        itemStyle: { color: "#333", fontSize: 18 }
    };
    /**
     * @description 通过value值匹配找到整个object
     * @param {any} value 给定的value
     * @param {any} arr 包含value的数组全集
     * @memberof PickerView
     */
    getJsonFromJsonArr = (value, arr) => {
        let jsonArr = arr;
        let result = {};
        jsonArr.map((item, index) => {
            if (item.value == value) {
                result = item;
            }
        });
        return result;
    };
    /**
     * @description 获取第二级子元素的paramname
     * @memberof PickerView
     */
    findParamname = () => {
        let paramname = "";
        let newData = this.props.data;
        if (newData.option && newData.option.length > 0) {
            let parent = newData.option;
            for (let i = 0; i < parent.length; i++) {
                let item = parent[i];
                if (item.isparent && item.option && item.option.length > 0) {
                    let child = item.option;
                    paramname = child[0].paramname;
                    break;
                }
            }
        }
        return paramname;
    };
    /**
     * @description picker选择事件
     * @param {any} item 当前选中值 ["2017", "11"]
     * @param {any} index 当前滚动的滚轮
     * @memberof PickerView
     */
    onChange = (item, index) => {
        let selectData = item;
        let pickerView = this.props.data;
        let pickerNew = this.state.pickerData;
        if (selectData && selectData.length > 1) {
            if (index === 0) {
                let child = this.getJsonFromJsonArr(selectData[index], pickerView.option);
                if (child.option && child.option.length > 0) {
                    let paramname = child.option[0].paramname;
                    //赋值第二滚轮数据
                    pickerNew[paramname] = child.option;
                    //第二滚轮默认选中第一条数据
                    selectData[1] = child.option[0].value;
                } else {
                    let paramname = this.findParamname();
                    pickerNew[paramname] = [{ value: "null" }];
                    selectData[1] = "null";
                }
                this.setState((pre) => {
                    return {
                        pickerData: pickerNew
                    };
                });
            }
        }
        this.setState((pre) => {
            return {
                value: selectData
            };
        });
    };
    onOk = () => {
        let native = [];
        let selected = this.state.value;
        let pickerData = this.props.data;
        switch (selected.length) {
            case 1: {
                let parentNative = this.getJsonFromJsonArr(selected[0], pickerData.option);
                native[0] = parentNative;
                break;
            }
            case 2: {
                let parentNative = this.getJsonFromJsonArr(selected[0], pickerData.option);
                if (selected[1] !== "null") {
                    let childrenNative = this.getJsonFromJsonArr(selected[1], parentNative.option);
                    delete parentNative.option;
                    native[0] = parentNative;
                    native[1] = childrenNative;
                } else {
                    delete parentNative.option;
                    native[0] = parentNative;
                }
                break;
            }
        }
        this.props.onChange(native);
    };
    _renderPicker = (pickerItem, index, itemStyle) => {
        return (
            <Picker key={index} itemStyle={itemStyle} style={{ flex: 1 }}>
                {pickerItem.map((item, index) => (
                    <Picker.Item key={index} value={item.value}>
                        {item.text ? item.text : ""}
                    </Picker.Item>
                ))}
            </Picker>
        );
    };
    /**
     * @description 数据预处理
     * @memberof PickerView
     */
    handlePickerData = () => {
        let dataSource = this.props.data;
        let pickerNew = this.state.pickerData;
        let selectData = this.state.value;
        if (dataSource.option && dataSource.option.length > 0) {
            let dataOption = dataSource.option;
            //如果有下一级 初始化下一级数据
            let isParent = dataOption[0].isparent;
            if (isParent) {
                pickerNew[dataOption[0].paramname] = dataOption;
                //默认第一级选中值
                selectData[0] = dataOption[0].value;
                this.handleChild(dataOption[0].option, pickerNew, selectData);
            } else {
                pickerNew[dataSource.paramname] = dataOption;
                selectData[0] = dataOption[0].value;
                this.setState((pre) => {
                    return {
                        pickerData: pickerNew,
                        value: selectData
                    };
                });
            }
        }
    };
    /**
     * @description 初始化预处理第二级数据
     * @param {any} item 子元素数据
     * @param {any} params 预处理数据
     * @param {any} childIndex 父元素
     * @memberof PickerView
     */
    handleChild = (item, params, selectData) => {
        let pickerNew = params;
        if (item[0]) {
            pickerNew[item[0].paramname] = item;
            selectData[1] = item[0].value;
        } else {
            let paramname = this.findParamname();
            pickerNew[paramname] = [{ value: "null" }];
            selectData[1] = "null";
        }
        this.setState((pre) => {
            return {
                pickerData: pickerNew,
                value: selectData
            };
        });
    };
    findChildName = () => {};
    componentWillMount() {
        this.handlePickerData();
    }
    render() {
        let pickerViewData = this.state.pickerData;
        const {
            children,
            data,
            extra,
            itemStyle,
            value,
            dismissText,
            okText,
            title,
            minuteStep,
            styles
        } = this.props;
        let pickerView = (
            <MultiPicker
                {...this.props}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 10,
                    paddingBottom: 10
                }}
                selectedValue={this.state.value}
                onValueChange={this.onChange}>
                {JSON.stringify(pickerViewData) !== "{}" &&
                    Object.keys(pickerViewData).map((key, index) => {
                        return this._renderPicker(pickerViewData[key], index, itemStyle);
                    })}
            </MultiPicker>
        );
        return (
            <PopPicker
                {...this.props}
                styles={styles}
                onOk={this.onOk}
                title={title}
                dismissText={dismissText}
                okText={okText}
                content={pickerView}>
                {children && React.cloneElement(children, { extra: value })}
            </PopPicker>
        );
    }
}
