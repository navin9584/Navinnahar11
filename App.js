// import 'react-native-gesture-handler'
import React,{useEffect,useState} from 'react'
import {View,Text,Button,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './src/Navigators/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  // const [datas,setData] = useState()
  // // const listData = [{navin:'navin'},{nahar:'navin'}]
  // // setData(listData)
  // const storeData = async () => {
  //   try {
  //     const jsonValue = JSON.stringify(datas)
  //     let saved = await AsyncStorage.setItem('data', datas)
  //     console.log('saved>>>>>',jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  //   getData()
  // }

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('data')
  //     if(value !== null) {
  //       // value previously stored
  //       console.log('value>>>>>>',value);
  //     }
  //   } catch(e) {
  //     // error reading value
  //   }
  // }
 
    return(
          //  <View>
          //   <TextInput style={{}}onChangeText={(text)=>{setData(text)}} value={datas}/>
          //   <Button onPress={()=>storeData()} title='setData'/>

          //   {/* <Button  onPress={()=>getData()} title='getData'/> */}
          //  </View>























      <Provider store ={store}>
     <AppNavigator />
     </Provider>
    )
  }
  
  export default App;