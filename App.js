// import 'react-native-gesture-handler'
import React,{useEffect,useState} from 'react'
import {View,Text,Button,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNavigator from './src/Navigators/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  
    return(
      <Provider store ={store}>
     <AppNavigator />
     </Provider>
    )
  }
  
  export default App;