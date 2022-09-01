
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactForm from '../contactform';
import splashScreen from '../splash';
import HomeScreen from '../homeScreen';



const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator>
         <Stack.Screen name="splashScreen" component={splashScreen} options={{ header: () => null }} />
        <Stack.Screen name="ContactForm" component={ContactForm} options={{ header: () => null }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;