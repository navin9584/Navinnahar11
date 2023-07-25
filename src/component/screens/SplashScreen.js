import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useState,useEffect} from 'react';
import {View,Text,Image,PermissionsAndroid} from 'react-native';
import {getLoginCred,getfieldDatafromLoacal,setdateTimeLatLong} from '../localStorage'
import Geolocation from 'react-native-geolocation-service';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const SplashScreen = ({navigation}) =>{
    const [getAlldata,setAllData] = useState()
    const [isFocus, setIsFocus] = useState(false);
    const [location, setLocation] = useState(false);
    const [locationres, setLocationres] = useState(false);
   
    useEffect(()=>{
  
        setTimeout(() => {
            getData() 
        }, 3000);
      
     
    })
 
    useEffect(()=>{
      getLocation()
      
    },[])


  
    const getLocation = () => {
      const result =  requestLocationPermission();
      // console.log('result>>',result);
      result.then(res => {
        console.log('res is:', res);
        setLocationres(res)
        if (res) {
          Geolocation.getCurrentPosition(
            position => {
              // console.log('position>>>>>',position);
              // setLocation(position);
             setdateTimeLatLong(position)
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
              setLocation(false);
             
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      });
      
    };
//  console.log('location>>>>',location);
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
          //  if(getAlldata !== undefined && getAlldata !== null){
            
             navigation.navigate('Login')
            // navigation.navigate('DataButtons')
           }
           else{
          
            navigation.navigate('Login')
            // navigation.navigate('FormDetails')
           }
        
      }
      // }

          //   const getData = async() =>{
  //     const loginData = await getLoginCred();
  //      console.log('locallogindata>>',loginData);
  //     const localdataemail = loginData && loginData.email
  //     if(localdataemail !== '' && localdataemail !== null && localdataemail !== undefined && loginData.servaystatus == 1){
  //         navigation.navigate('DataButtons')
  //     }else if(localdataemail !== '' && localdataemail !== null && localdataemail !== undefined && loginData.servaystatus == 0){
  //         navigation.navigate('FormDetails')
  //     }else(
  //       navigation.navigate('Login')
  //     )
  // }
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Image style={{height:200,width:300,resizeMode:'stretch'}} source={require('../../assets/surveyLogo.png')}/>
        </View>
    )
}

export default SplashScreen
