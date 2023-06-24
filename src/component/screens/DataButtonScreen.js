import React, { useEffect, useState } from 'react';
import { View, Text, BackHandler } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { setfieldDataintoLoacal, getfieldDatafromLoacal, checkNetworkConnectivity, clearDatafromLoacal } from '../localStorage';
import { FormDetailAction } from '../../redux/FormDetailApi';
import { FormListApi } from '../../redux/FormListApi';
import { useDispatch, useSelector } from 'react-redux';
const DataButtons = () => {
    const navigation = useNavigation()
    const isFocus = useIsFocused()
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const loginData = data.loginData.data
    const [listCount, setListCount] = useState()
    const userId = loginData && loginData.userdata && loginData.userdata.userId
    const [allAsyncData, setAllAsyncData] = useState()
     

    
    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // The screen is focused
          // Call any action
          AllExistingDataList()
          localsavedData()
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
      }, [navigation])

    useEffect(() => {
        AllExistingDataList()
        localsavedData()
    }, [])

    const localsavedData = async () => {
        const getAllLocalData = await getfieldDatafromLoacal()
        setAllAsyncData(getAllLocalData)
    }
    console.log('alllocaldata for sync',allAsyncData);

    const AllExistingDataList = async () => {
        try {
            const requestData = {
                user_id: userId,
            };
            const AllData = await dispatch(FormListApi(requestData))
            setListCount(AllData.payload.totalrow)
        } catch (error) {
            console.log(error);
        }
    }



    const FreshData = () => {
        navigation.navigate('FreshData')
    }

    const onpressExisting = () => {
        navigation.navigate('ExistingData')
    }

    const onpressSync = async () => {
        let pushDataintoArray = []
        let hasNetwork = await checkNetworkConnectivity();

        if (hasNetwork === true) {
            pushDataintoArray.push(allAsyncData)
            console.log('pushDataintoArray', pushDataintoArray);
            dispatch(FormDetailAction(pushDataintoArray))
            // await clearDatafromLoacal()
            // setAllAsyncData('')
            // AllExistingDataList()
        }else{
            alert('Internet not available')
        }
    }

    return (
        <View style={{ marginTop: 50 }}>

            <CommonButton
                title={'Fresh Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
                onPress={() => FreshData()}
            />

            <CommonButton
                title={'Existing Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
                onPress={() => onpressExisting()}
            />

            <CommonButton
                title={`Total Data = ${listCount!=undefined ? listCount: 0}`}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
            // onPress={() => onpressButton()}
            />

            <CommonButton
                title={'Sync Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{ width: '80%', height: 50 }}
                onPress={() => onpressSync()}
            />


        </View>
    )
}

export default DataButtons;