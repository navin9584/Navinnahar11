import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import ButtonComponent from "../components/buttonComponent";
import TextInputComponent from "../components/textInput";
import { useValidation } from 'react-native-form-validator';
import { Checkbox } from "react-native-paper";
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get('window')
const Signup = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = React.useState(false);
   
    // console.log(name);
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
        useValidation({
            state: { email, phone, name, password, confirmPassword },
        });

    const _onPressButton = () => {
        if(name !== '' && email !== '' && password !== '' && phone !== ''){
            validate({
                name: { minlength: 3, required: true },
                email: { email: true },
                number: { numbers: true },
                confirmPassword: { equalPassword: password },
            });
            Toast.show('registred successfully thankyou')
            navigation.navigate('Login')
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
                                placeholder={'Phone No'}
                                keyboardType={'numeric'}
                                value={phone}
                                onChangeText={setPhone}
                            />
                            <TextInputComponent
                                InputStyle={styles.Input}
                                placeholder={'Email'}
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInputComponent
                                InputStyle={styles.Input}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TextInputComponent
                                InputStyle={styles.Input}
                                placeholder={'Confirm Password'}
                                secureTextEntry={true}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            {/* {isFieldInError('confirmPassword') &&
                                getErrorsInField('confirmPassword').map(errorMessage => (
                                    <Text>{errorMessage}</Text>
                                ))} */}
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                style={styles.checkbox}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={styles.label}>Lorem ipsum is simply dummy text of printing and typesetting industry.
                                <TouchableOpacity><Text style={{ color: 'blue' }}>terms and conditions</Text></TouchableOpacity></Text>
                        </View>
                        <ButtonComponent
                            buttonStyle={[styles.buttonView,{ backgroundColor: checked ? '#F4880B' : 'grey',}]}
                            buttonTextStyle={styles.buttonTextStyle}
                            buttonText={'Register'}
                            onPress={_onPressButton}
                            disabled={!checked} />

                    </View>
                    {/* {Toast.show(`${getErrorMessages()}`)} */}
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
        height: height / 2.2,
        borderWidth: 0.8,
        borderRadius: 15,
        borderColor: '',

    },
    mainSignup: {
        // flex:1,
        marginTop: 120,
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
export default Signup;