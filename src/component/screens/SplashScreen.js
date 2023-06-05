import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import {getLoginCred} from '../localStorage'

const SplashScreen = ({navigation}) =>{
    useEffect(()=>{
        setTimeout(() => {
            // navigation.navigate('MainScreen')
            getData()
        }, 3000);
     
    })

    const getData=async()=>{
        const loginData = await getLoginCred();
        console.log('loginData>>',loginData);
        const localdataemail = loginData && loginData.email
        if(localdataemail !== '' && localdataemail !== null && localdataemail !== undefined){
            navigation.navigate('Home')
        }else{
            navigation.navigate('Login')
        }
    }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen
