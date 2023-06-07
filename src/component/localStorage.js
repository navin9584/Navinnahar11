import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_CRED_KEY = 'login_cred_key'
const FIELD_DATA_KEY = 'field_data_key'

export const setData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
    return true
}

export const getData = async (key) => {
    let data = await AsyncStorage.getItem(key);
    return data
}

// export const erasesetData = async (key) => {
//     await AsyncStorage.removeItem(key)
// }


export const setLoginCred = async (data) => {
    let json = JSON.stringify(data);
    let saved = await setData(LOGIN_CRED_KEY, json)
    if (saved) {
        return true
    }
    else {
        return false
    }
}


export const getLoginCred = async () => {
    let loginData = await getData(LOGIN_CRED_KEY)
    console.log('logindata>>>', loginData);
    return JSON.parse(loginData)
}


export const setfieldDataintoLoacal = async (data) => {
   let json = JSON.stringify(data);
   console.log('setdata>>>>>>>',json);
   let saved = await setData(FIELD_DATA_KEY, json)
   if (saved) {
       return true
   }
   else {
       return false
   }
}

export const getfieldDatafromLoacal = async () => {
    let data = await getData(FIELD_DATA_KEY) 
    return JSON.parse(data)
}