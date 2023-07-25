import React, { useState, useEffect } from 'react';
import { Text, View, Image,Alert,PermissionsAndroid } from 'react-native'
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CommonButton from '../ReusableComponent/ButtonCompo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../component/ReusableComponent/Loader';
import Geolocation from 'react-native-geolocation-service';
import {setLoginCred, getLoginCred} from '../localStorage'
import { LoginAction } from '../../redux/login';
import { useDispatch, useSelector } from 'react-redux';
import { checkNetworkConnectivity } from '../localStorage';

import Axios from 'axios';
import {FormListApi} from '../../redux/FormListApi';
import {SearchDataFromListApi} from '../../redux/SearchWithVoterApi';


const Login = ({ navigation }) => {
    const data = useSelector(state=> state);
    const loginData = data.loginData.data
    const formListState = data.FormListData && data.FormListData.data && data.FormListData.data.userdata
    const formSearchState = data.FormSearchData && data.FormSearchData.data && data.FormSearchData.data.userdata
    const userId = loginData&&loginData.userdata && loginData.userdata.userId

    const dispatch =useDispatch();
    // console.log('data.data>>>',loginData);
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
  



    const onpressLogin = async() => {
        let hasNetwork = await checkNetworkConnectivity();
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
            setBadPassword(false)
            if(hasNetwork === true){
                loginApiFunction() 
            }
            
        }
      
    }
//   console.log();
    const requestData = {
        email: email,
        password: password,
      };
        const loginApiFunction = async () => {
            let hasNetwork = await checkNetworkConnectivity();
           
             try{
               const response = await dispatch(LoginAction(requestData))
               console.log('response>>>',response.payload);
              
               if(response.payload.error === false ){
                if(response.payload.userdata.servaystatus == 0){
                    navigation.navigate("FormDetails")
                    setEmail('')
                    setPassword('')
                }else{
                    navigation.navigate("DataButtons")
                    setEmail('')
                    setPassword('')
                } 
               }
               else{
                alert('please check your credentials')
               }
             }catch(error){
                console.log(error);
             
            }
               
            
        }


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
    
            </View>
            {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
        </View>
    )
}

export default Login;