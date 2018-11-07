import React, { Component } from "react";
import { StyleSheet, View, Animated, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import ViewPan from "./AnimatedPan";
import Pagination from "../pagination/index";
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "transparent",
        position: "relative"
    },
    item: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
class Swiper extends Component {
    /**
     * Props Validation
     * @type {Object}
     */
    static propTypes = {
        /**
         * 轮播的视图
         */
        children: PropTypes.node.isRequired,
        /**
         * <非受控组件>
         * 默认展现第 index 个的视图 (从 0 开始)
         */
        index: PropTypes.number,
        /**
         * 是否水平轮播
         */
        horizontal: PropTypes.bool,
        /**
         * 是否头尾衔接的循环轮播
         */
        loop: PropTypes.bool,
        /**
         * 是否自动轮播
         */
        autoplay: PropTypes.bool,
        /**
         * 自动轮播的时间间隔。
         * 若该时间间隔设置的比动画时间还要短，组件会做出自动调整。
         */
        autoplayTimeout: PropTypes.number,
        /**
         * 自动轮播的方向，默认(true)为水平为从左到右，垂直为从下到上；
         * false 则方向反方向轮播
         */
        autoplayDirection: PropTypes.bool,
        /**
         * 自定义动画函数
         */
        animation: PropTypes.func,
        /**
         *  Swiper 通过 onIndexChanged 和外界组件同步当前的 index。
         */
        onIndexChanged: PropTypes.func,
        /**
         *  展现轮播图的 Pagination
         */
        showsPagination: PropTypes.bool,
        /**
         *  Pagination 的样式
         */
        paginationStyle: ViewPropTypes.style,
        /**
         *  用户拖拽视图
         */
        onScrollEndDrag: PropTypes.func,
        /**
         *  如果用户在 item 中触发了 onPress 行为就不会进到这个逻辑中，
         *  修复用户在 Android 点击不灵敏的问题。
         */
        onPress: PropTypes.func,
        /**
         *  是否可以拖拽视图
         */
        scrollEnabled: PropTypes.bool
    };

    /**
     * Default props
     * @return {object} props
     */

    static defaultProps = {
        index: 0,
        horizontal: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2.5,
        autoplayDirection: true,
        showsPagination: true,
        onIndexChanged: (index) => null,
        scrollEnabled: true
    };

    constructor(props) {
        super(props);
        this.state = {
            width: props.width || 0,
            height: props.height || 0,
            activeIndex: props.index
        };
    }

    componentWillUpdate(nextProps, nextState) {
        // If the index has changed, we notify the parent via the onIndexChanged callback
        if (this.state.activeIndex !== nextState.activeIndex)
            this.props.onIndexChanged(nextState.activeIndex);
    }

    onWrapperLayout = (ev) => {
        const { height, width } = ev.nativeEvent.layout;

        this.setState({
            width,
            height
        });
    };

    onChange = (activeIndex) => {
        this.setState({
            activeIndex
        });
    };

    renderPagination = (activeIndex = 0, total = 1) => {
        const {
            horizontal,
            showsPagination,
            paginationStyle,
            dot,
            activeDot,
            dotStyle,
            dotColor,
            activeDotStyle,
            activeDotColor
        } = this.props;

        if (total <= 1 || !showsPagination) {
            return null;
        } else {
            return (
                <Pagination
                    dot={dot}
                    activeDot={activeDot}
                    total={total}
                    activeIndex={activeIndex}
                    horizontal={horizontal}
                    paginationStyle={paginationStyle}
                    dotStyle={dotStyle}
                    dotColor={dotColor}
                    activeDotStyle={activeDotStyle}
                    activeDotColor={activeDotColor}
                />
            );
        }
    };

    render() {
        const {
            style,
            children,
            renderPagination = this.renderPagination,
            showsPagination,
            index,
            horizontal
        } = this.props;
        const { width, height } = this.state;

        if (!width || !height) {
            return React.cloneElement(children[index], { onLayout: this.onLayout });
        }

        // const stylesWrapper = horizontal ? styles.wrapper : styles.verticalWrapper;

        return (
            <View style={[styles.wrapper, style, { width, height }]}>
                <ViewPan {...this.props} width={width} height={height} onChange={this.onChange} />
                {showsPagination &&
                    renderPagination(this.state.activeIndex, React.Children.count(children))}
            </View>
        );
    }
}

module.exports = Swiper;
