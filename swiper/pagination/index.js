import React, { Component } from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

import Dot from "./Dot";
const styles = StyleSheet.create({
    paginationx: {
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        zIndex: 10
    },

    paginationy: {
        position: "absolute",
        right: 10,
        top: 0,
        bottom: 0,
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        zIndex: 10
    }
});
export default class Pagination extends Component {
    static propTypes = {
        total: PropTypes.number,
        activeIndex: PropTypes.number,
        style: ViewPropTypes.style,
        horizontal: PropTypes.bool,
        dotStyle: ViewPropTypes.style,
        dotColor: PropTypes.string,
        activeDotStyle: ViewPropTypes.style,
        activeDotColor: PropTypes.string
    };

    // | showsPagination | true | `bool` | 是否展现轮播指示器 |
    // | paginationStyle | {...} | `style` | 自定义指示器的样式 |
    // | renderPagination | (activeIndex, total, this) => React.Node | `function` | 自定义指示器 |
    // | dot | - | `element` | 自定义指示点 |
    // | activeDot | - | `element` | 自定义活跃的知识点 |
    // | dotStyle | - | `object` | 自定义指示点的样式 |
    // | dotColor | - | `string` | 自定义指示点的颜色 |
    // | activeDotColor | - | `string` | 自定义指示点的样式 |
    // | activeDotStyle | - | `object` | 自定义活跃的指示点的样式 |

    static defaultProps = {
        total: 0,
        activeIndex: -1,
        activeDotColor: "#FF552E",
        dotStyle: { opacity: 0.5 }
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            total,
            activeIndex,
            paginationStyle,
            horizontal,
            dot = <Dot />,
            dotColor,
            dotStyle,
            activeDot = <Dot />,
            activeDotStyle,
            activeDotColor
        } = this.props;
        const pagination = [];

        for (let i = 0; i < total; i++) {
            if (i === activeIndex) {
                let dStyle = [
                    activeDotStyle,
                    activeDotColor && { backgroundColor: activeDotColor }
                ];

                pagination.push(React.cloneElement(activeDot, { key: i, style: dStyle }));
            } else {
                let dStyle = [dotStyle, dotColor && { backgroundColor: dotColor }];

                pagination.push(React.cloneElement(dot, { key: i, style: dStyle }));
            }
        }

        return (
            <View
                pointerEvents="none"
                style={[styles["pagination_" + (horizontal ? "x" : "y")], paginationStyle]}>
                {pagination}
            </View>
        );
    }
}
