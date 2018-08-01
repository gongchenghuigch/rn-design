/**
 * @author gongchenghui
 * @version 2018.07.24
 * @description 单选按钮组件 支持自定义样式和布局方式
 */
import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight, Text, Image } from "react-native";
const Dimensions = require("Dimensions");
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    seltedImgs: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    parent: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
export default class RadioModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            radioInit: this.props.radioInit,
            indexa: this.props.selectedValue == undefined ? "0" : this.props.selectedValue
        };
    }
    click(id, item) {
        this.setState({ indexa: id });
        this.props.onValueChange(id, item);
    }
    componentDidMount() {
        const indexInit = this.props.selectedValue == undefined ? "0" : this.props.selectedValue;
        this.setState({
            indexa: indexInit
        });
        //this.props.onValueChange(indexInit)
    }
    createInner(child, index, props) {
        const disabled = props ? child[this.props.options.disabled] : child.props.disabled;
        const childC = props ? child[this.props.options.value] : child.props.children;
        const values = props ? child[this.props.options.id] : child.props.value;
        const hightlight = props
            ? this.state.indexa == child[this.props.options.id]
            : this.state.indexa == child.props.value;
        return (
            <Radio
                child={childC}
                index={index}
                value={values}
                key={index}
                initStyle={this.props.innerStyle}
                txtColor={this.props.txtColor}
                activeTxtColor={this.props.activeTxtColor}
                noneColor={this.props.noneColor}
                onclick={this.click.bind(this)}
                hightlight={hightlight}
                disabled={disabled}
                seledImg={this.props.seledImg}
                selImg={this.props.selImg}
                selnoneImg={this.props.selnoneImg}
                labelStyle={this.props.labelStyle}
                rowHeight={this.props.rowHeight}
                isPeer={this.props.isPeer}
            />
        );
    }
    render() {
        const that = this;
        return (
            <View {...this.props.style} style={this.props.isPeer ? styles.parent : null}>
                {!this.props.dataOption &&
                    React.Children.map(this.props.children, (child, index) =>
                        this.createInner(child, index)
                    )}
                {this.props.dataOption &&
                    this.props.dataOption.map((item, index) => this.createInner(item, index, true))}
            </View>
        );
    }
}

class Radio extends Component {
    constructor(props) {
        super(props);
    }
    click(id, item) {
        if (this.props.disabled) {
            return;
        } else {
            this.props.onclick(id, item);
        }
    }
    render() {
        let imgUrl = this.props.hightlight
            ? this.props.seledImg || require("./imgs/selted.png")
            : this.props.selImg || require("./imgs/selt.png");
        let imgUrlNone = this.props.selnoneImg || require("./imgs/seltnone.png");
        return (
            <TouchableHighlight
                underlayColor="transparent"
                style={[
                    this.props.initStyle,
                    {
                        width: this.props.isPeer ? width / 2 : width
                    }
                ]}
                onPress={this.click.bind(this, this.props.value, this.props.child)}>
                <View style={styles.content}>
                    {this.props.disabled &&
                        !this.props.hightlight && (
                            <Image source={imgUrlNone} style={styles.seltedImgs} />
                        )}
                    {this.props.disabled &&
                        this.props.hightlight && (
                            <Image source={imgUrl} style={styles.seltedImgs} />
                        )}
                    {!this.props.disabled && <Image source={imgUrl} style={styles.seltedImgs} />}
                    {typeof this.props.child == "string" ? (
                        <Text
                            style={[
                                {
                                    color: this.props.disabled
                                        ? this.props.noneColor || "#ACA899"
                                        : this.props.hightlight
                                            ? this.props.activeTxtColor || "#ff552e"
                                            : this.props.txtColor || "#414141"
                                },
                                this.props.labelStyle
                            ]}>
                            {this.props.child}
                        </Text>
                    ) : (
                        <View>{this.props.child}</View>
                    )}
                </View>
            </TouchableHighlight>
        );
    }
}
