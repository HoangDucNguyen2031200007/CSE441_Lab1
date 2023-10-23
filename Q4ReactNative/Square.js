import React from "react";
import { View, Text, Alert, Button } from "react-native";
import style from "./style";
function ClickOnSquare(value) {
    Alert.alert(value);
}
export default Square = ({text}) => (
    <view style={[style.box, { backgroundColor: "#7ce0f9"}]}>
        <text>{text}</text>
        <button title='Click' onPress = {() => ClickOnSquare(text)}></button>
    </view>
);