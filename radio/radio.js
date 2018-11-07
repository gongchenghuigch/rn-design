/**
 * @author gongchenghui
 * @version 2018.10.30
 * @description 单选按钮组件 支持自定义样式和布局方式
 */
import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import RadioButton from "./radioButton";
const Dimensions = require("Dimensions");
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    seltedImgs: {
        width: 20,
        height: 20,
        marginRight: 8
        // marginLeft: 15
    },
    radioItem: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
        height: 45
    }
});
export default class RadioModal extends Component {
    static Button = RadioButton;
    constructor(props) {
        super(props);
        this.state = {
            selected: ""
        };
    }
    static defaultProps = {
        options: {
            value: "value",
            text: "text",
            disabled: "disabled"
        },
        disabledAll: false
    };
    /**
     * @description 点击单选 设置当前选中值 并且传给父组件
     * @param {any} value 选中值
     * @memberof RadioModal
     */
    radioClick(children) {
        if (!this.props.disabledAll) {
            let value = children[this.props.options.value];
            this.setState((pre) => {
                return {
                    selected: value
                };
            });
            this.props.onChange(children);
        }
    }
    /**
     * @description 创建单选配置
     * @param {any} child 每个子选项的数据
     * @param {any} index 索引
     * @param {any} props 是否还有子属性
     * @returns ReactDOM
     * @memberof RadioModal
     */
    createInner(child, index, props) {
        const { selectedValue, seledImg, selImg, disabledAll, innerStyle, txtColor } = this.props;
        //单选项text
        let itemText = child[props.text];
        //单选项value
        let itemValue = child[props.value];
        //当前选项的禁用情况
        let disabled = child[props.disabled];
        //当前选项的选中情况
        let radioSelect = this.state.selected == itemValue ? true : false;
        return (
            <Radio
                //索引
                index={index}
                //循环key值
                key={index}
                //子元素数据Object
                child={child}
                //展示文案
                text={itemText}
                //radio对应value值
                value={itemValue}
                //禁用情况
                disabled={disabled}
                //选中情况
                radioSelect={radioSelect}
                //选中值
                selectedValue={selectedValue}
                //点击事件
                onclick={this.radioClick.bind(this)}
                //选中图标
                seledImg={seledImg}
                //未选中图标
                selImg={selImg}
                //是否全部禁用
                disabledAll={disabledAll}
                //radio单模块样式
                innerStyle={innerStyle}
                //radio字体颜色
                txtColor={txtColor}
            />
        );
    }
    /**
     * @description 初始化单选项
     * @memberof RadioModal
     */
    radioInit() {
        let init = this.props.selectedValue ? this.props.selectedValue : "";
        this.setState((pre) => {
            return {
                selected: init
            };
        });
    }
    componentDidMount() {
        this.radioInit();
    }
    render() {
        const { style, dataOption, options } = this.props;
        return (
            <View style={style}>
                {!dataOption &&
                    React.Children.map(this.props.children, (child, index) =>
                        this.createInner(child, index)
                    )}
                {dataOption &&
                    dataOption.map((item, index) => this.createInner(item, index, options))}
            </View>
        );
    }
}
class Radio extends Component {
    constructor(props) {
        super(props);
    }
    click(value) {
        if (this.props.disabled) {
            return;
        } else {
            this.props.onclick(value);
        }
    }
    render() {
        let imgUrl = this.props.radioSelect
            ? this.props.seledImg || require("./imgs/selted.png")
            : this.props.selImg || require("./imgs/selt.png");
        return (
            <TouchableOpacity
                activeOpacity={1}
                underlayColor="transparent"
                style={[styles.radioItem, this.props.innerStyle]}
                onPress={this.click.bind(this, this.props.child)}>
                <Image source={imgUrl} style={styles.seltedImgs} />
                <Text style={{ color: this.props.txtColor ? this.props.txtColor : "#333" }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}
