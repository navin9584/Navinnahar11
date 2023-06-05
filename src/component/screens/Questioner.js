import React from 'react';
import {Text,View} from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';

const Questioner =({navigation})=>{

    const onPressSubmit=()=>{
        navigation.navigate('Home')
    }
    return(
        <View>
        <Text style={{textAlign:'center',fontSize:18}}>Qustioner</Text>

        <CommonButton
        title={'Submit'}
        bgColor={'#000'}
        textColor={"#fff"}
        customStyle={{width:'80%',height:50}}
        onPress={() => onPressSubmit()}
    />
    </View>
    )
}
export default Questioner;