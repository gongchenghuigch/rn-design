import React from "react";
import { StyleSheet, View } from "react-native";
import { formatFn, getDefaultDate } from "./utils";
import zhCn from "./rmc-date-picker/lib/locale/zh_CN";
import enUs from "./rmc-date-picker/lib/locale/en_US";
import PopPicker from "./rmc-date-picker/lib/Popup";
import MDatePicker from "./rmc-date-picker/lib/DatePicker";
import popupStyles from "./rmc-picker/lib/PopupStyles";
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
    title: {
        color: "#666",
        fontSize: 18,
        textAlign: "center"
    }
});
export default class DatePicker extends React.Component {
    static defaultProps = {
        mode: "date",
        extra: "请选择",
        styles: pickerStyles,
        minuteStep: popupStyles,
        okText: "确定",
        dismissText: "取消"
    };

    render() {
        const {
            children,
            extra,
            styles,
            minuteStep,
            locale,
            mode,
            minDate,
            maxDate,
            value,
            onValueChange,
            okText,
            dismissText
        } = this.props;

        const dataPicker = (
            <MDatePicker
                minuteStep={minuteStep}
                locale={this.props.locale && this.props.locale == "US" ? enUs : zhCn}
                mode={mode}
                minDate={minDate}
                maxDate={maxDate}
                defaultDate={value || getDefaultDate(this.props)}
                onValueChange={onValueChange}
            />
        );

        return (
            <PopPicker
                datePicker={dataPicker}
                styles={styles}
                {...this.props}
                date={value || getDefaultDate(this.props)}
                dismissText={dismissText}
                okText={okText}>
                {children &&
                    React.cloneElement(children, { extra: value ? formatFn(this, value) : extra })}
            </PopPicker>
        );
    }
}
