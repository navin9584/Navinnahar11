import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
const LOGIN_CRED_KEY = 'login_cred_key'
const FIELD_DATA_KEY = 'field_data_key'
const FILTER_FROM_DROPDOWN = 'filter_from_dropdown'
const ARRAY_DATA = 'array_data'

export const setData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
    return true
}

export const getData = async (key) => {
    let data = await AsyncStorage.getItem(key);
    return data
}

export const erasesetData = async (key) => {
    await AsyncStorage.removeItem(key)
    return true
}


export const setLoginCred = async (data) => {
    let json = JSON.stringify(data);
    let saved = await setData(LOGIN_CRED_KEY, json)
    console.log('saved>>>',json);
    if (saved) {
        return true
    }
    else {
        return false
    }
}


export const getLoginCred = async () => {
    let loginData = await getData(LOGIN_CRED_KEY)
    // console.log('logindata>>>', loginData);
    return JSON.parse(loginData)
}


export const setfieldDataintoLoacal = async (data) => {
   let json = JSON.stringify(data);
   console.log('setdata>>>>>>>>>>',json);
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
    console.log('getsaved data>>>',data);
    return JSON.parse(data)
}

export const clearDatafromLoacal = async () => {
    try {
        await erasesetData(FIELD_DATA_KEY);
        console.log('clear');
       } catch (e) {
        console.log('AsyncStorage Error', e);
       }
    
}

export const setFilterDatafromdrodown = async (data) => {
    let json = JSON.stringify(data);
    console.log('setdata>>>>>>>',json);
    let saved = await setData(FILTER_FROM_DROPDOWN, json)
    if (saved) {
        return true
    }
    else {
        return false
    }
 }
 
 export const getFilterDatafromdrodown = async () => {
     let data = await getData(FILTER_FROM_DROPDOWN) 
     return JSON.parse(data)
 }

 export const checkNetworkConnectivity = async () => {
    let subscribe = false
   await NetInfo.fetch().then(state => {
        subscribe = state.isConnected;
    });
    return subscribe
}



export const setarraydata = async (data) => {
    let json = JSON.stringify(data);
    console.log('data>>>>>>>>',data);
    await AsyncStorage.setItem(ARRAY_DATA,json);
    return true
}