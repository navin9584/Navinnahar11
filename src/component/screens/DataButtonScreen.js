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
    const totalcount = data.FormListData && data.FormListData.data && data.FormListData.data.totalrow
    const [listCount, setListCount] = useState()
    const userId = loginData && loginData.userdata && loginData.userdata.userId
    const [allAsyncData, setAllAsyncData] = useState()
    console.log('data???????????',data
    );
     

    
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

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       // The screen is focused
    //       // Call any action
    //     //   AllExistingDataList()
    //     //   localsavedData()
          
    //     });
    
    //     // Return the function to unsubscribe from the event so it gets removed on unmount
    //     return unsubscribe;
    //   }, [navigation])

    useEffect(() => {
        AllExistingDataList()
        localsavedData()
    },[])

    const localsavedData = async () => {
        const getAllLocalData = await getfieldDatafromLoacal()
        setAllAsyncData(getAllLocalData)
    }
   

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
                dispatch(FormDetailAction(pushDataintoArray[0]))
                AllExistingDataList()
               await clearDatafromLoacal()
            
           
            //    if(pushDataintoArray[0] == null || pushDataintoArray[0] == undefined){
            //     console.log('pushDataintoArray>>>',pushDataintoArray);
            //     alert('No data to sync')
            // }
           
          
        }else{
            alert('Internet not available')
        }
    }

    const AllExistingDataList = async() => {
        try {
            const requestData = {
                user_id: userId,
            };
             await dispatch(FormListApi(requestData))
            // setListCount(AllData.payload.totalrow)
        } catch (error) {
            console.log('errorrrrrrr',error);
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
                title={`Total Data = ${totalcount!=undefined ? totalcount: 0}`}
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