import React, { useState } from 'react';
import { Text, View, TextInput,Image } from 'react-native'


const TextInputCompo = ({ value, Placeholder, onChangeText,icon,type,secureTextEntry }) => {
    return (
        <View style={{
            width: '80%', height: 50, borderWidth: 0.5,
            borderRadius: 10, alignSelf: 'center', marginTop: 30,
            flexDirection:'row',alignItems:'center',paddingLeft:20,paddingRight:20
        }}>
            {/* <Image source={icon}/> */}
            <TextInput style={{width:'100%'}} onChangeText={onChangeText}
                     value={value} placeholder={Placeholder} secureTextEntry={secureTextEntry} />
        </View>
    )
}

export default TextInputCompo;