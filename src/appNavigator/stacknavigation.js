
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/homeScreen';
import Cart from '../screens/cartScreen';
import Profile from '../screens/profileScreen';
import Wishlist from '../screens/wishlistScreen';
import BottomTab from './bottomTabNavigation';
import Setting from '../screens/setting';
import Signup from '../screens/signup';
import Login from '../screens/login';
import AllOffer from '../screens/allOffer';
import AllProduct from '../screens/allproduct';



const Stack = createNativeStackNavigator();

const AppNavigator=()=> {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
      <Stack.Screen name="Signup" component={Signup} options={{ header: () => null }} />
        <Stack.Screen name="Home" component={BottomTab} options={{ header: () => null }} />
        <Stack.Screen name="AllOffer" component={AllOffer} options={{ headerShown: () => true ,
           title: 'OFFER'}} />
        <Stack.Screen name="AllProduct" component={AllProduct} options={{ headerShown: () => true , headerRight: () => (<Icon name="filter" size={30} color="#900" />), title: 'All product'}} />
        <Stack.Screen name="Cart" component={Cart} options={{ header: () => null }} />
        <Stack.Screen name="Profile" component={Profile} options={{ header: () => null }} />
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ header: () => null }} />
        <Stack.Screen name="Setting" component={Setting} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;