// import 'react-native-gesture-handler'
import React,{useEffect,useState} from 'react'
import AppNavigator from './src/Navigators/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  
    return(
      <Provider store ={store}>
     <AppNavigator />
     </Provider>
    )
  }
  
  export default App;