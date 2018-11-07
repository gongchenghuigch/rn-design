import React, { Component } from "react";
import { StyleSheet, Text, View, PanResponder, Animated, InteractionManager } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    item: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
export default class AnimatedPan extends Component {
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
         * 自动轮播的时间间隔
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
         * 当前展现的视图变化前，触发该回调。回调参数为变化后的位置。
         * 注意，由于动画可能被中断。所以有 onChangeStart 不一定有 onChangeEnd
         */
        onChange: PropTypes.func,
        /**
         *  用户拖拽视图
         */
        onScrollEndDrag: PropTypes.func,
        /**
         *  用户点击
         */
        onPress: PropTypes.func
    };

    static defaultProps = {
        animation: function(animateValue, toValue) {
            return Animated.spring(animateValue, {
                toValue: toValue,
                speed: 12,
                bounciness: 0
            });
        }
    };

    constructor(props) {
        super(props);

        const { loop, index } = props;

        /**
         * Init position
         * @return {object}
         */
        this.position = loop ? index + 1 : index;
        this.positionValue = new Animated.Value(this.position);

        // 获取 positionValue 的动态值
        this.positionValue.addListener(({ value }) => {
            this.position = value;
        });
    }

    componentDidMount() {
        this.autoRun();
    }

    componentWillUnmount() {
        clearInterval(this.autoRunTimer);
    }

    shouldComponentUpdate() {
        return false;
    }

    contents = (() => {
        const { children, loop } = this.props;
        const childrenArray = React.Children.toArray(children);
        const contents = childrenArray;

        if (loop) {
            const first = React.cloneElement(childrenArray[0]);
            const last = React.cloneElement(childrenArray[childrenArray.length - 1]);

            contents.unshift(last);
            contents.push(first);
        }

        return contents;
    })();

    autoRun = () => {
        const { autoplay, autoplayTimeout, autoplayDirection } = this.props;

        if (!autoplay) {
            return;
        }

        let startTime = null;
        let runTime = null;

        clearInterval(this.autoRunTimer);
        this.autoRunTimer = setInterval(() => {
            startTime = new Date();

            InteractionManager.runAfterInteractions(() => {
                runTime = new Date();

                // 如果有用户交互或者动画正在发生，跳过该次滚动动画
                if (runTime - startTime < 30 && Number.isInteger(this.position)) {
                    const result = this.position + (autoplayDirection ? 1 : -1);
                    this.scrollTo(result);
                }
            });
        }, autoplayTimeout * 1000);
    };

    onPanResponderEnd = (evt, { vx, vy }) => {
        const { horizontal, onScrollEndDrag, onPress } = this.props;
        const velocity = horizontal ? vx : vy;
        const previous = Math.floor(this.position);
        const next = previous + 1;
        // 0.41 版本的值为 0.2
        // 0.28 版本的值
        const threshold = 5e-7;
        // console.log(vx)
        let nextPosition;

        if (velocity > threshold) {
            nextPosition = previous;
        } else if (velocity < -threshold) {
            nextPosition = next;
        } else {
            nextPosition = Math.round(this.position);
            if (velocity == 0) {
                onPress(this.getIndex(nextPosition));
            }
        }

        onScrollEndDrag && onScrollEndDrag(nextPosition);

        this.positionValue.flattenOffset();
        this.scrollTo(nextPosition);
    };

    responder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => this.props.scrollEnabled,
        onShouldBlockNativeResponder: (evt, gestureState) => true,
        onPanResponderTerminationRequest: (evt, gestureState) => false,

        onPanResponderGrant: (evt, gestureState) => {
            // 用户手指触碰屏幕，停止动画
            this.positionValue.stopAnimation();
            this.positionValue.setOffset(this.position);
            this.positionValue.setValue(0);
            this.startPosition = this.position;
            clearInterval(this.autoRunTimer);
        },
        onPanResponderMove: (evt, { dx, dy }) => {
            const distance = this.props.horizontal ? dx : dy;
            const size = this.props.horizontal ? this.props.width : this.props.height;
            const movePosition = distance / -size; // Math.min(Math.max(distance / -this.props.size, -1.4), 1.4);
            const nextPosition = this.startPosition + movePosition;
            const first = 0;
            const last = React.Children.count(this.contents) - 1;

            if (nextPosition >= first && nextPosition <= last) {
                this.positionValue.setValue(movePosition);
            }
        },
        onPanResponderRelease: this.onPanResponderEnd,

        onPanResponderTerminate: this.onPanResponderEnd
    });

    // position 为当前视图的位置（如果 loop 就会有假的视图）， index 为用户认为当前视图的位置
    getIndex = (position) => {
        const count = React.Children.count(this.contents);

        position = Math.max(Math.min(position, count - 1), 0);

        if (!this.props.loop) {
            return position;
        }

        let index;

        /*
        *      a b c
        *   c` a b c a`
        * */
        if (position === 0) {
            index = count - 3;
        } else if (position === count - 1) {
            index = 0;
        } else {
            index = position - 1;
        }

        return index;
    };

    scrollTo(position) {
        const { loop, animation, onChange } = this.props;
        const childrenCount = React.Children.count(this.contents);
        const first = 0;
        const last = childrenCount - 1;

        // position 即将要变化的位置
        const index = this.getIndex(position);
        onChange && onChange(index);

        // 限制超出范围
        position = Math.min(last, Math.max(first, position));

        animation(this.positionValue, position).start(({ finished }) => {
            if (finished) {
                this.autoRun();

                // 如果单方向循环轮播，从最后一帧（或者第一帧）无动画跳转到假的最后一帧（或者假的第一帧）
                if (loop) {
                    if (position === first) {
                        this.positionValue.setValue(last - 1);
                    } else if (position === last) {
                        this.positionValue.setValue(first + 1);
                    }
                }
            }
        });
    }

    render() {
        const { horizontal, style, width, height } = this.props;
        const translateDirection = horizontal ? "translateX" : "translateY";
        const size = horizontal ? width : height;

        return (
            <View style={[styles.wrapper]} {...this.responder.panHandlers}>
                {React.Children.map(this.contents, (child, index) => {
                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.item,
                                {
                                    width,
                                    height
                                },
                                {
                                    transform: [
                                        {
                                            [translateDirection]: this.positionValue.interpolate({
                                                inputRange: [index, index + 1],
                                                outputRange: [0, -size]
                                            })
                                        }
                                    ]
                                }
                            ]}>
                            {child}
                        </Animated.View>
                    );
                })}
            </View>
        );
    }
}
