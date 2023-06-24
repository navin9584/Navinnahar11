import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity,ScrollView } from 'react-native'
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CommonButton from '../ReusableComponent/ButtonCompo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoginCred} from '../localStorage'
import { fetchApi } from '../../redux/login';



const Signup = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [mobile, setMobile] = useState('')
    const [badName, setBadName] = useState(false)
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [badconfirmPassword, setBadconfirmPassword] = useState(false)
    const [badmobile, setBadMobile] = useState(false)
    const [buttonDisable, setButtonDisable] = useState(false)
    const onPressSignup = () => {
        setButtonDisable(true)
        if (name == '') {
            setBadName(true)
            setButtonDisable(false)
        } else {
            setBadName(false)
            if (email == '') {
                setBadEmail(true);
                setButtonDisable(false)
            } else {
                setBadEmail(false);
                if (mobile == '') {
                    setBadMobile(true)
                    setButtonDisable(false)
                } else {
                    setBadMobile(false)

                    if (password == '') {
                        setBadPassword(true)
                        setButtonDisable(false)
                    } else {
                        setBadPassword(false)
                        if (confirmPass == '') {
                            setBadconfirmPassword(true)
                            setButtonDisable(false)
                        } else {
                            setBadconfirmPassword(false)

                            if (password !== confirmPass) {
                                setBadconfirmPassword(true)
                                setButtonDisable(false)
                            } else {
                                setBadconfirmPassword(false)
                                saveData()
                            }
                        }

                    }
                }
            }
        }
    }

    const saveData = async () => {
        await setLoginCred({
            'NAME': name,
            'EMAIL': email,
            'MOBILE': mobile,
            'PASSWORD': password
        })
        navigation.goBack();
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Image style={{ width: 80, height: 80, borderRadius: 10 }} source={require('../../assets/logo.png')} />
                <Text style={{ marginTop: 50, fontSize: 20, fontWeight: 'bold', color: '#000000' }}>Create New Account</Text>
            </View>
            <View>
                <TextInputCompo Placeholder={'Enter Name'}
                    onChangeText={(txt) =>
                        setName(txt)
                    }
                    value={name} />
                {badName === true && <Text style={{ color: "red", marginLeft: 30, marginTop: 10 }}>Please Enter Name</Text>}

                <TextInputCompo Placeholder={'Enter Email Id'}
                    onChangeText={(txt) =>
                        setEmail(txt)
                    }
                    value={email} />
                {badEmail === true && <Text style={{ color: "red", marginLeft: 30, marginTop: 10 }}>Please Enter Email</Text>}

                <TextInputCompo Placeholder={'Mobile number'} type={'number'}
                    onChangeText={(txt) => {
                        setMobile(txt)
                    }}
                    value={mobile} />
                {badmobile === true && <Text style={{ color: "red", marginLeft: 30, marginTop: 10 }}>Please enter Mobile number</Text>}




                <TextInputCompo Placeholder={'Password'} type={'password'} secureTextEntry={true}
                    onChangeText={(txt) => {
                        setPassword(txt)
                    }}
                    value={password} />
                {badPassword === true && <Text style={{ color: "red", marginLeft: 30, marginTop: 10 }}>Please Enter Password</Text>}

                <TextInputCompo Placeholder={'Confirm Password'} type={'password'} secureTextEntry={true}
                    onChangeText={(txt) => {
                        setConfirmPass(txt)
                    }}
                    value={confirmPass} />
                {badconfirmPassword === true && <Text style={{ color: "red", marginLeft: 30, marginTop: 10 }}>Please confirm Password</Text>}


            </View>
            <View style={{}}>
                <CommonButton
                    title={'Signup'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'80%',height:50}}
                    disabled={buttonDisable}
                    onPress={() => onPressSignup()} />

                <Text onPress={() => navigation.goBack()} style={{
                    textAlign: 'center', marginTop: 20,
                    fontWeight: '800', fontSize: 18,
                    textDecorationLine: 'underline'
                }}
                >Already Have Account?</Text>
            </View>
        </ScrollView>
    )
}

export default Signup;