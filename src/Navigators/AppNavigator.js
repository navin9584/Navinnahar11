
import * as React from 'react';
import { NavigationContainer,useIsFocused,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../component/screens/HomeScreen'
import Splash from '../component/screens/SplashScreen';
import MainScreen from './MainScreen';
import Login from '../component/Services/Login';
import Signup from '../component/Services/Signup';
import DataButtons from '../component/screens/DataButtonScreen';
import FormDetails from '../component/screens/FormDetail';
import Questioner from '../component/screens/Questioner';
import ExistingData from '../component/screens/ExistingData';
import NewData from '../component/screens/NewData';
import ExistFormDetail from '../component/screens/ExistFormDetail';
import FreshData from '../component/screens/FreshData';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false, title:null}}/>
        <Stack.Screen name="DataButtons" component={DataButtons} options={{headerShown:false,title:null}}/>
        <Stack.Screen name="FormDetails" component={FormDetails} options={{headerShown:false,title:null}}/>
        <Stack.Screen name="Questioner" component={Questioner} options={{headerShown:false,title:null}}/>
        <Stack.Screen name="ExistingData" component={ExistingData} options={{headerShown:false,title:null}}/>
        <Stack.Screen name="NewData" component={NewData} options={{headerShown:false,title:null}}/>
        <Stack.Screen name="ExistFormDetail" component={ExistFormDetail} options={{headerShown:false,title:null}}/>
        <Stack.Screen name="FreshData" component={FreshData} options={{headerShown:false,title:null}}/>

        {/* <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown:false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;