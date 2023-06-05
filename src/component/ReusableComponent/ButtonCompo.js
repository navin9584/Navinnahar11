import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'


const CommonButton = ({ title, textColor, bgColor, onPress,disabled,customStyle }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[customStyle,{backgroundColor:bgColor,
        justifyContent: 'center',alignContent:'center',alignSelf:'center',borderRadius:10,marginTop:50}]}>
            <Text style={{color:textColor,textAlign:"center"}}>{title}</Text></TouchableOpacity>
    )
}

export default CommonButton;