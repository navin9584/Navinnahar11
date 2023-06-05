import React,{useEffect,useState} from 'react';
import {Text,View,Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLoginCred} from '../localStorage'

const Profile = ()=>{
    const [loginData,setLoginData] = useState({})
    useEffect(()=>{
        const getuserData = async()=>{
            const logincred = await getLoginCred()
            setLoginData(logincred)
        }
        getuserData()

    },[])
    console.log('loginData>>>>',loginData);
    return(
        <View>
       <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image style={{width:100,height:100,borderRadius:50}} source ={require('../../assets/profile.png')}/>
       </View>
       <View style={{marginHorizontal:20,marginVertical:10}}>
       <Text style={{fontSize:18,color:'black'}}>{loginData && loginData.NAME}</Text>
       <Text style={{fontSize:18,color:'black'}}>{loginData && loginData.EMAIL}</Text>
       <Text style={{fontSize:18,color:'black'}}>{loginData && loginData.MOBILE}</Text>
       </View>
       </View>
    )
}
export default Profile