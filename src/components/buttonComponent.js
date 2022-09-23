import React from "react";
import { View,Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')
const ButtonComponent = ({
    buttonText,
    onPress,
    buttonStyle,
    buttonTextStyle,
    disabled
}) => {
    return (
        <View style={''}>
            <TouchableOpacity 
            onPress={onPress}
            style={buttonStyle}
            disabled={disabled}
            >
                <Text style={buttonTextStyle}>{buttonText}</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({


})

export default ButtonComponent