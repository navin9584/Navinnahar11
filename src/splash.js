import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'

const splashScreen = ({navigation}) =>{
    useEffect(() => {
        setTimeout(() => {
                navigation.navigate('ContactForm')
        },2000);
    })
    return(
        <View style={styles.splash}>
            <Text style={{color:'#fff'}}>React Native Application</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    splash: {
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
    },
  })
export default splashScreen;