import React,{useEffect} from 'react';
import { View, Text,BackHandler } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import { useIsFocused,useNavigation } from '@react-navigation/native';
import { setfieldDataintoLoacal,getfieldDatafromLoacal } from '../localStorage';
const DataButtons = () => {
    const navigation = useNavigation()
    const isFocus = useIsFocused()
    
useEffect(()=>{
  },[])
  


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

    const FreshData=()=>{
        navigation.navigate('FormDetails')
    }

    const onpressExisting=()=>{
        navigation.navigate('LocalData')
    }

    return (
        <View style={{marginTop:50}}>

<CommonButton
                title={'Fresh Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{width:'80%',height:50}}
                onPress={() => FreshData()}
            />

            <CommonButton
                title={'Existing Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{width:'80%',height:50}}
                onPress={() => onpressExisting()}
            />

            <CommonButton
                title={'Total Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{width:'80%',height:50}}
                // onPress={() => onpressButton()}
            />

<CommonButton
                title={'Sync Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{width:'80%',height:50}}
                onPress={() => onpressExisting()}
            />
            

        </View>
    )
}

export default DataButtons;