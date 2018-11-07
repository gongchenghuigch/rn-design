/**
 * @description 双滚轮
 * @author gongchenghui
 * @version 2018.11.05
 */
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
    TouchableHighlight,
    Dimensions
} from "react-native";
import { PickerView } from "./../../rn-design";
const styles = StyleSheet.create({
    okText: {
        color: "#dc4931"
    },
    dismissText: {
        color: "#434345"
    },
    title: {
        fontSize: 16,
        color: "#999"
    },
    button: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        width: 100
    }
});

const pickerData = {
    option: [
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                }
            ],
            paramname: "shangpainian",
            text: "2017年",
            value: "2017"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2016年",
            value: "2016"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2015年",
            value: "2015"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2014年",
            value: "2014"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2013年",
            value: "2013"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2012年",
            value: "2012"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2011年",
            value: "2011"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2010年",
            value: "2010"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2009年",
            value: "2009"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2008年",
            value: "2008"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2007年",
            value: "2007"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2006年",
            value: "2006"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2005年",
            value: "2005"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2004年",
            value: "2004"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2003年",
            value: "2003"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2002年",
            value: "2002"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2001年",
            value: "2001"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "2000年",
            value: "2000"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "1999年",
            value: "1999"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "1998年",
            value: "1998"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "1997年",
            value: "1997"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "1996年",
            value: "1996"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "2",
                    value: "515682"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "3",
                    value: "515683"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "4",
                    value: "515684"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "5",
                    value: "515685"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "6",
                    value: "515686"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "7",
                    value: "515687"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "8",
                    value: "515688"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "9",
                    value: "515689"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "10",
                    value: "515690"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "11",
                    value: "515691"
                },
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "12",
                    value: "515692"
                }
            ],
            paramname: "shangpainian",
            text: "1995年",
            value: "1995"
        },
        {
            isparent: true,
            option: [
                {
                    isparent: false,
                    paramname: "shangpaiyuefen",
                    text: "1",
                    value: "515681"
                }
            ],
            paramname: "shangpainian",
            text: "1995年以前",
            value: "1994"
        }
    ],
    paramname: "buytime",
    title: "出厂年限"
};
export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    show = () => {
        // console.log('show')
    };
    setPickerData = (value) => {
        // console.log(value);
    };
    render() {
        return (
            <View style={styles.flex}>
                <PickerView
                    data={pickerData}
                    onChange={(item) => this.setPickerData(item)}
                    okText={<Text style={styles.okText}>确定</Text>}
                    dismissText={<Text style={styles.dismissText}>取消</Text>}
                    title={<Text style={styles.title}>请选择时间</Text>}>
                    <TouchableHighlight
                        onPress={this.show}
                        activeOpacity={0.5}
                        style={[styles.button]}
                        underlayColor="#a9d9d4">
                        <Text>show popup</Text>
                    </TouchableHighlight>
                </PickerView>
            </View>
        );
    }
}
