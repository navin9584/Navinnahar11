import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import {getLoginCred,getfieldDatafromLoacal} from '../localStorage'

const SplashScreen = ({navigation}) =>{
    const [getAlldata,setAllData] = useState()
    const [isFocus, setIsFocus] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            // navigation.navigate('MainScreen')
            getData()
           
        }, 3000);
     
    })
    useEffect(()=>{
        getItemList()
      },[])
          const getItemList = async () => {
              try {
                const value = await getfieldDatafromLoacal()
                if (value !== null) {
                  setAllData(value)
                //   navigation.navigate('Questioner')
                  console.log('Retrieved data:', value);
                } else {
                    // navigation.navigate('Home')
                  console.log('No data found.');
                }
              } catch (error) {
                console.log('Error retrieving data:', error);
              }
          }

    const getData=async()=>{
        const loginData = await getLoginCred();
        console.log('loginData>>',loginData);
        const localdataemail = loginData && loginData.email
        if(localdataemail !== '' && localdataemail !== null && localdataemail !== undefined){
           if( localdataemail !== null && getAlldata !== undefined && getAlldata !== null){
            navigation.navigate('FormDetails')
           }else{
            navigation.navigate('Home')
           }
           
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
