import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import {View,Text,Image} from 'react-native';
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
        // getItemList()
      },[])
          const getItemList = async () => {
              try {
                const value = await getfieldDatafromLoacal()
                if (value !== null) {
                  setAllData(value)
                
                } else {
                    // navigation.navigate('Home')
                  console.log('No data found.');
                }
              } catch (error) {
                console.log('Error retrieving data:', error);
              }
          }

    const getData = async() =>{
        const loginData = await getLoginCred();
        // console.log('locallogindata>>',loginData);
        const localdataemail = loginData && loginData.email
        if(localdataemail !== '' && localdataemail !== null && localdataemail !== undefined){
           if(getAlldata !== undefined && getAlldata !== null){
            navigation.navigate('Login')
            // navigation.navigate('DataButtons')
           }else{
            navigation.navigate('Login')
            // navigation.navigate('FormDetails')
           }
        }else{
            navigation.navigate('Login')
        }
    }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Image style={{height:200,width:300,resizeMode:'stretch'}} source={require('../../assets/surveyLogo.png')}/>
        </View>
    )
}

export default SplashScreen
