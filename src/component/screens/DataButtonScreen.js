import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, BackHandler,Alert } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { setfieldDataintoLoacal, getfieldDatafromLoacal, checkNetworkConnectivity, clearDatafromLoacal ,clearLoginData,getLoginCred} from '../localStorage';
import { FormDetailAction } from '../../redux/FormDetailApi';
import { FormListApi } from '../../redux/FormListApi';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../ReusableComponent/Loader';
const DataButtons = ({navigation}) => {
    // const navigation = useNavigation()
    const data = useSelector(state => state);
    const loginData = data.loginData.data
    const totalcount = data.FormListData && data.FormListData.data && data.FormListData.data.totalrow
    const [listCount, setListCount] = useState()
    const userId = loginData && loginData.userdata && loginData.userdata.userId
    const [allAsyncData, setAllAsyncData] = useState()
    const [localLoginData ,setLocalLoginData] = useState()
    const localUserId =localLoginData && localLoginData.userId


    const allAsyncDatacount = allAsyncData && allAsyncData!==null || allAsyncData !==undefined ?allAsyncData&& allAsyncData.length : 0
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            localsavedData()
          
        });
    
        // return unsubscribe;
      }, [navigation]);
   
    useEffect(() => {
        localsavedData()
        getData()
    },[])

    
    
    const localsavedData =  async() => {
        const getAllLocalData = await getfieldDatafromLoacal()
        setAllAsyncData(getAllLocalData)
        
    }

    const getData = async () => {
        const loginData = await getLoginCred();
        setLocalLoginData(loginData)
        
    }    

    useEffect(()=>{
        // AllExistingDataList()
    },[])
    const isFocus = useIsFocused()
    const dispatch = useDispatch();
    // console.warn('allAsyncData>>>',allAsyncData);



    const FreshData = () => {
        navigation.navigate('FreshData')
    }

    const onpressExisting = () => {
        navigation.navigate('ExistingData')
    }

    const onpressSync = async () => {
        const getAllLocalData = await getfieldDatafromLoacal()
        let pushDataintoArray = []
        let hasNetwork = await checkNetworkConnectivity();
    
        if (hasNetwork === true) {
            pushDataintoArray.push(getAllLocalData)
         const data =  await dispatch(FormDetailAction(getAllLocalData))
                if(data.payload.error === false ){
                      await clearDatafromLoacal()
                     const getlocal = await getfieldDatafromLoacal()
                      setAllAsyncData(getlocal)
                    Alert.alert('डाटा सेव हो गया!')
                }else if(data.payload.error === true && getAllLocalData != null){
                    Alert.alert('सर्वर की समस्या आ रही है !')
                }
                 AllExistingDataList()
                
        } else{
            alert('Internet not available')
        }
    }

    const AllExistingDataList = async () => {
        try {
            const requestData = {
                user_id: localUserId,
            };
             await dispatch(FormListApi({user_id: localUserId}))
            // setListCount(AllData.payload.totalrow)
        } catch (error) {
            console.log('errorrrrrrr', error);
        }
    }

    const LogoutCallFun = async()=>{
        await clearLoginData()
        // await clearDatafromLoacal()
        navigation.navigate('Login')
    }
    const Logout = async ()=>{
        
        Alert.alert(
            '',
            'आप लॉगआउट करना चाहते हे ?',
            [
              {
                text: 'Yes',
                onPress: () =>LogoutCallFun(),
              },
              {
                text: 'No',
                onPress: () => console.log('No Pressed'), style: 'cancel'
              },
            ],
            {cancelable: false},
            //clicking out side of alert will not cancel
          );
        // await clearLoginData()
    }


    return (
        <View style={{ marginTop: 50 }}>
         {data.formData && data.formData.isLoader === true && allAsyncDatacount != null && <Loader />}
            <CommonButton
                title={'नवीन सदस्य'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
                onPress={() => FreshData()}
            />

            <CommonButton
                title={'सदस्यो को अपडेट करे'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
                disabled={true}
                onPress={() => onpressExisting()}
            />

            <CommonButton
                title={`टोटल पूर्ण = ${allAsyncDatacount != null ? allAsyncDatacount :0}`}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
            // onPress={() => onpressButton()}
            />

            <CommonButton
                title={'डाटा भेजे'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
                disabled={allAsyncDatacount != null ? false :true}
                onPress={() => onpressSync()}
            />

            <CommonButton
                title={'लॉग आउट'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
               onPress={() => Logout()}
            />


        </View>
    )
}

export default DataButtons;