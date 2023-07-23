import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
const LOGIN_CRED_KEY = 'login_cred_key'
const FIELD_DATA_KEY = 'field_data_key'
const FIELD_DATA_FOR_ONEDATA = 'field_data_for_onedata'
const FILTER_FROM_DROPDOWN = 'filter_from_dropdown'
const ARRAY_DATA = 'array_data'
const DATE_TIME_LAT_LONG = 'date_time_lat_long'

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

export const clearLoginData = async () => {
    try {
        await erasesetData(LOGIN_CRED_KEY);
        console.log('clear');
       } catch (e) {
        console.log('AsyncStorage Error', e);
       }
    
}


export const setfieldDataintoLoacal = async (data) => {
   let json = JSON.stringify(data);
//    console.log('setdata>>>>>>>>>>',json);
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

export const setfieldDataintoLoacalforone = async (data) => {
    let json = JSON.stringify(data);
    let saved = await setData(FIELD_DATA_FOR_ONEDATA, json)
    if (saved) {
        return true
    }
    else {
        return false
    }
 }

export const getfieldDatafromLoacalforone = async () => {
    let data = await getData(FIELD_DATA_FOR_ONEDATA) 
        console.log('getfieldDatafromLoacalforone>???????????????????>>',data);
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
    // console.log('setdata>>>>>>>',json);
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



export const setFilterData = async (data) => {
    let json = JSON.stringify(data);
    // console.log('setdata>>>>>>>',json);
    let saved = await setData(ARRAY_DATA, json)
    if (saved) {
        return true
    }
    else {
        return false
    }
}

export const getFilterData = async () => {
    let data = await getData(ARRAY_DATA) 
    return JSON.parse(data)
}

export const setdateTimeLatLong = async (data) => {
    let json = JSON.stringify(data);
    console.log('setdateTimeLatLong>>>>>>>',json);
    let saved = await setData(DATE_TIME_LAT_LONG, json)
    if (saved) {
        return true
    }
    else {
        return false
    }
 }
 
 export const getdateTimeLatLong = async () => {
     let data = await getData(DATE_TIME_LAT_LONG) 
     return JSON.parse(data)
 }

