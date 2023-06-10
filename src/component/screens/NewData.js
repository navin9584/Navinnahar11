import React,{useEffect} from 'react';
import { Text, View,BackHandler } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';

const NewData = ({ navigation }) => {
    const onSubmit = () => {
        navigation.navigate('FormDetails')
    }

    const onDoneClick = () => {
        navigation.navigate('')
    }

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
    return (
        <View>
            <CommonButton
                title={'Start New Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{width:'80%',height:50}}
                onPress={() => onSubmit()}
            />

            <CommonButton
                title={'Done Data'}
                bgColor={'#000'}
                textColor={"#fff"}
                customStyle={{width:'80%',height:50}}
                onPress={() => onDoneClick()}
            />
        </View>

    )
}
export default NewData;