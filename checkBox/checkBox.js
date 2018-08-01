/**
 * @author gongchenghui
 * @version 2018.07.27
 * @description CheckBox复选框业务组件
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
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    icon: {
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
    },
    selAll: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    selAllText: {
        color: "#333",
        fontSize: 16
    }
});
export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.array = []; //存储选中数组的数据
        this.state = {
            clicked: true,
            allClick: true,
            allChecked: false
        };
    }
    /**
     * @description 处理点击复选框选中或者取消选中添加或者删除选中数组中的数据
     * @param {int} id 复选按钮ID
     * @param {string} item 复选按钮text
     * @param {Boolean} clicked 是选中还是取消选中
     */
    clickCkeckBox(id, item, clicked) {
        if (!clicked) {
            //选项不存在，添加到选中数组 取消
            if (this.props.selAll) {
                //取消任意一个子选项 全选就取消选中
                this.setState({ allChecked: false });
            }
            for (let i = 0; i < this.array.length; i++) {
                if (id == this.array[i][this.props.options.id]) {
                    this.array.splice(i, 1);
                }
            }
        } else {
            //选中
            //设置标记量 判断是否包含该选项 如果包含直接跳出循环体 改变标记量
            //如果不存在 直接把该选项加入数组中
            let has = false;
            for (let i = 0; i < this.array.length; i++) {
                if (id == this.array[i][this.props.options.id]) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                this.array.push({ [this.props.options.id]: id, [this.props.options.value]: item });
            }
            //把每个子选项都勾选了 全选也要选中
            if (
                this.props.selAll &&
                this.array.length > 0 &&
                this.array.length == this.props.dataOption.length
            ) {
                this.setState({ allChecked: true });
            }
        }
        //修改原数组checked属性
        let pars = this.props.dataOption || this.props.children;
        if (pars) {
            for (let i = 0; i < pars.length; i++) {
                if (id === pars[i][this.props.options.id]) {
                    pars[i][this.props.options.checked] = clicked;
                }
            }
        }
        this.props.onValueChange(this.array);
    }
    selAllOption() {
        let param = this.props.dataOption || this.props.children;
        if (param) {
            if (!this.state.allChecked) {
                this.setState({ allChecked: true });
                for (let i = 0; i < param.length; i++) {
                    this.clickCkeckBox(
                        param[i][this.props.options.id],
                        param[i][this.props.options.value],
                        true
                    );
                }
            } else {
                this.setState({ allChecked: false });
                for (let i = 0; i < param.length; i++) {
                    this.clickCkeckBox(
                        param[i][this.props.options.id],
                        param[i][this.props.options.value],
                        false
                    );
                }
            }
        }
    }
    componentDidMount() {
        let param = this.props.dataOption || this.props.children;
        if (param) {
            for (let i = 0; i < param.length; i++) {
                if (param[i][this.props.options.disabled]) {
                    this.setState({
                        allClick: false
                    });
                    break;
                }
            }
        }
        //this.props.onValueChange(indexInit)
    }
    /**
     * @description 调用具体的渲染的每个子选项 设置子组件属性
     * @param {Object} child 当前子组件的数据类
     * @param {int} index 循环索引
     * @param {*} props
     */
    createInner(child, index, props) {
        //是否置灰不使能
        const disabled = props ? child[this.props.options.disabled] : child.props.disabled;
        //是否选中
        const checked = props ? child[this.props.options.checked] : child.props.checked;
        //复选框text
        const childC = props ? child[this.props.options.value] : child.props.children;
        //复选框ID
        const values = props ? child[this.props.options.id] : child.props.value;
        return (
            <CheckBoxModel
                child={childC}
                index={index}
                value={values}
                key={index}
                selAll={this.props.selAll}
                initStyle={this.props.innerStyle}
                txtColor={this.props.txtColor}
                noneColor={this.props.noneColor}
                onclick={this.clickCkeckBox.bind(this)}
                disabled={disabled}
                checked={checked}
                seledImg={this.props.seledImg}
                selImg={this.props.selImg}
                selnoneImg={this.props.selnoneImg}
                isPeer={this.props.isPeer}
            />
        );
    }
    render() {
        let imgUrl = this.state.allChecked
            ? this.props.seledImg || require("./img/selected.png")
            : this.props.selImg || require("./img/select.png");
        let imgUrlNone = this.props.selnoneImg || require("./img/selectnone.png");
        return (
            <View>
                {this.props.selAll ? (
                    <TouchableHighlight onPress={this.selAllOption.bind(this)}>
                        <View style={styles.selAll}>
                            {!this.state.allClick && (
                                <Image style={styles.icon} source={imgUrlNone} />
                            )}
                            {this.state.allClick && <Image style={styles.icon} source={imgUrl} />}
                            <Text style={styles.selAllText}>全选</Text>
                        </View>
                    </TouchableHighlight>
                ) : null}
                <View
                    {...this.props.style}
                    style={this.props.isPeer && this.props.isPeer != 1 ? styles.parent : null}>
                    {!this.props.dataOption &&
                        React.Children.map(this.props.children, (child, index) =>
                            this.createInner(child, index)
                        )}
                    {this.props.dataOption &&
                        this.props.dataOption.map((item, index) =>
                            this.createInner(item, index, true)
                        )}
                </View>
            </View>
        );
    }
}
/**
 * @description 循环体中的DOM渲染
 */
class CheckBoxModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selted: false
        };
    }
    /**
     * @description 点击复选框调用父组件的处理方法
     * @param {int} id 复选按钮ID
     * @param {string} item 复选按钮text
     * @param {Boolean} clicked 是选中还是取消选中
     */
    click(id, item, clicked) {
        this.props.onclick(id, item, clicked);
    }
    /**
     * @description 处理复选框的值
     * @param {int} id 复选按钮ID
     * @param {string} item 复选按钮text
     * @param {Boolean} clicked 是选中还是取消选中
     */
    clickSel(id, item) {
        //如果是可勾选状态，先改变勾选状态，与之前保存的反向就行
        if (!this.props.disabled) {
            this.setState({
                selted: !this.state.selted
            });
            this.click(id, item, !this.state.selted);
        }
    }
    componentDidMount() {
        //默认选中的要直接赋值
        if (this.props.checked) {
            this.setState({
                selted: true
            });
            this.click(this.props.value, this.props.child, true);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value == this.props.value) {
            if (this.state.selted !== nextProps.checked) {
                this.setState({
                    selted: nextProps.checked
                });
                this.click(this.props.value, this.props.child, nextProps.checked);
            }
        }
    }
    render() {
        let imgUrl = this.state.selted
            ? this.props.seledImg || require("./img/selected.png")
            : this.props.selImg || require("./img/select.png");
        let imgUrlNone = this.props.selnoneImg || require("./img/selectnone.png");
        return (
            <TouchableHighlight
                underlayColor="transparent"
                style={[
                    this.props.initStyle,
                    { width: this.props.isPeer ? width / this.props.isPeer : width }
                ]}
                onPress={this.clickSel.bind(this, this.props.value, this.props.child)}>
                <View style={styles.content}>
                    {this.props.disabled &&
                        !this.props.checked && <Image source={imgUrlNone} style={styles.icon} />}
                    {this.props.disabled &&
                        this.props.checked && <Image source={imgUrl} style={styles.icon} />}
                    {!this.props.disabled && <Image source={imgUrl} style={styles.icon} />}
                    <Text
                        style={[
                            {
                                color: this.props.disabled
                                    ? this.props.noneColor || "#ACA899"
                                    : this.props.checked
                                        ? this.props.activeTxtColor || "#ff552e"
                                        : this.props.txtColor || "#414141"
                            },
                            this.props.labelStyle
                        ]}>
                        {this.props.child}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}
