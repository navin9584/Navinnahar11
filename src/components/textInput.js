import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TextInput } from 'react-native'

const { width, height } = Dimensions.get('window')
const TextInputComponent = ({
    InputStyle,
    placeholder,
    onChangeText,
    value,
    keyboardType,
    onPress,
    secureTextEntry,
    type
}) => {
    return (
        <View style={''}>
            <TextInput
                style={InputStyle}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                type={type}
                keyboardType={keyboardType}
                onPress={onPress}
                secureTextEntry={secureTextEntry} />
        </View>

    )
}
const styles = StyleSheet.create({


})

export default TextInputComponent