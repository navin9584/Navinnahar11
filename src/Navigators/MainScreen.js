
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {TabRouter} from '@react-navigation/native'
import Home from '../component/screens/HomeScreen'
import Splash from '../component/screens/SplashScreen';
import Notification from '../component/screens/Notification';
import SideBar from './SideBar';
import Profile from '../component/screens/Profile';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
      <Drawer.Navigator 
      drawerContent={props => <SideBar {...props}/>}
      >
        <Drawer.Screen name="Home" component={Home} options={{headerShown:TabRouter}}/>
        <Drawer.Screen name="Notification" component={Notification} options={{headerShown:TabRouter}}/>
        <Drawer.Screen name="Profile" component={Profile} options={{headerShown:TabRouter}}/>
      </Drawer.Navigator>
  );
}

export default MainScreen;

