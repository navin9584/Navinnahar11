
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactForm from './src/contactform';
import HomeScreen from './src/homeScreen';
import splashScreen from './src/splash';
import AppNavigator from './src/appNavigator/stacknavigation';
const App =() =>{
  return(
    <NavigationContainer>
      <Drawernavigator/>
    </NavigationContainer>
  )
} 


export default App;

 const Stack = createNativeStackNavigator();

 const Drawer = createDrawerNavigator();


const stackNavigator =() =>{
  return(
    <Stack.Navigator initialRouteName=''>
         <Stack.Screen name="splashScreen" component={splashScreen} options={{ header: () => null }} />
        <Stack.Screen name="ContactForm" component={ContactForm} options={{ header: () => null }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      </Stack.Navigator>
  )
 }

 const Drawernavigator =() =>{
  return(
    <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={stackNavigator} options={{ header: () => null }}/>
      </Drawer.Navigator>
  )
 }
