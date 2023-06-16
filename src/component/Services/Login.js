import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native'
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CommonButton from '../ReusableComponent/ButtonCompo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../component/ReusableComponent/Loader';
import Geolocation from '@react-native-community/geolocation';
import {setLoginCred} from '../localStorage'
const Login = ({ navigation }) => {
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    

    Geolocation.getCurrentPosition(info => setLongitude(info.coords.longitude));
    Geolocation.getCurrentPosition(info => setLatitude(info.coords.latitude));
    // console.log('altitude>>>>',latitude,longitude);
    const onpressLogin = () => {
        setModalVisible(true)
        if (email == '') {
            setModalVisible(false)
            setBadEmail(true);
        }else{
            setBadEmail(false);
        }
         if(password == '') {
            setModalVisible(false)
            setBadPassword(true)
        }else{
            setTimeout(()=>{
                setBadPassword(false)
                saveDataIntoLocal();
            },2000);
           
        }
      
    }

    const saveDataIntoLocal = async () => {
        await setLoginCred({
            'email': email,
            'password': password,
            'latitude': latitude,
            'longitude':longitude
        })
        navigation.navigate("FormDetails");
    }

    // const getData = async () => {
    //     const getLocalCred = await getLoginCred()
    //     console.log('getLocalCred??????',getLocalCred);
    //     const mEmail = getLocalCred && getLocalCred.EMAIL
    //     const mPassword =getLocalCred && getLocalCred.PASSWORD
    //     if(email === mEmail && password === mPassword){
    //         setModalVisible(false)
    //         navigation.navigate("MainScreen")

    //     }else{
    //         setModalVisible(false)
    //         alert('Credential wrong')
    //     }

    // }
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                {/* <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={require('../../assets/logo.png')} /> */}
               <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>DATA COLLECTOR</Text>
                <Text style={{ marginTop: 30, fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Sign In</Text>
            </View>
            <View>
                <TextInputCompo Placeholder={'Enter Email Id'}
                    onChangeText={(txt) => 
                        setEmail(txt)
                    }
                    value={email} />
                {badEmail === true && <Text style={{ color: "red", marginLeft: 30, marginTop: 10 }}>Please Enter Email</Text>}

                <TextInputCompo Placeholder={'Password'} type={'password'} secureTextEntry={true}
                    onChangeText={(txt) => {
                        setPassword(txt)
                    }}
                    value={password} />
                {badPassword === true && <Text style={{ color: "red", marginLeft: 30,marginTop: 10}}>Please Enter Password</Text>}

            </View>
            <View style={{}}>
                <CommonButton
                    title={'Sign In'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'80%',height:50}}
                    onPress={() => onpressLogin()} />

                {/* <Text style={{
                    textAlign: 'center', marginTop: 20,
                    fontWeight: '800', fontSize: 18,
                    textDecorationLine: 'underline'
                }}
                    onPress={() => navigation.navigate("Signup")}>Create New Account?</Text> */}
                    
            </View>
            {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
        </View>
    )
}

export default Login;