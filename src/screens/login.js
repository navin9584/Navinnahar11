import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import ButtonComponent from "../components/buttonComponent";
import TextInputComponent from "../components/textInput";
import { useValidation } from 'react-native-form-validator';
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get('window')
const Login = ({navigation}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
        useValidation({
            state: { name, password },
        });
        const _onPressButton = () => {
        
            if(name !== '' && password !== ''){
                Toast.show('Login successfully')
                navigation.navigate('Home')
            }else{
                Toast.show('please enter correct detail')
            }
        };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require("../assets/images/background_img.jpg")} resizeMode="cover" style={styles.bg_img}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require("../assets/images/app_logo.png")} style={styles.logo} />
                    <View style={styles.mainSignup}>
                        <View style={styles.signupView}>

                            <TextInputComponent
                                InputStyle={styles.Input}
                                placeholder={'name'}
                                type={'name'}
                                value={name}
                                onChangeText={setName}
                            />

                            <TextInputComponent
                                InputStyle={styles.Input}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                           
                            {/* {isFieldInError('confirmPassword') &&
                                getErrorsInField('confirmPassword').map(errorMessage => (
                                    <Text>{errorMessage}</Text>
                                ))} */}
                        </View>
                        <View style={styles.checkboxContainer}>
                                <TouchableOpacity><Text style={{color: '#F4880B',fontSize:15}}>Forgot Password ?</Text></TouchableOpacity>
                        </View>
                        <ButtonComponent
                            buttonStyle={styles.buttonView}
                            buttonTextStyle={styles.buttonTextStyle}
                            buttonText={'Login'}
                            onPress={_onPressButton} />

                    </View>
                    <View style={{borderWidth:0.2,color:'grey', top:20, width: width / 1.2,alignSelf:'center'}}></View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:40,flexDirection:'row'}}>
                        <Text style={{fontSize:18}}>Dont Have Account ? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={{}}><Text style={{fontSize:18,color:'#F4880B'}}>Register</Text></TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'center' }}>{getErrorMessages()}</Text>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg_img: {
        flex: 1,
        justifyContent: "center"
    },
    logo: {
        width: 150,
        height: 50,
        alignSelf: "center",
        top: 100,
        borderRadius: 15
    },
    signupView: {
        width: width / 1.2,
        height: height / 5,
        borderWidth: 0.8,
        borderRadius: 15,
        borderColor: '',

    },
    mainSignup: {
        // flex:1,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Input: {
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 0.2,
        top: 10,
        marginVertical: 5
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 10,
        top: 10,
        alignSelf:'flex-end',
        right:35
        // left:-5
    },
    label: {
        margin: 8,
        width: '75%'
    },
    buttonView: {
        marginTop: 20,
        width: 180,
        height: 50,
        borderWidth: 0,
        borderRadius: 30,
        backgroundColor: '#F4880B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
export default Login;