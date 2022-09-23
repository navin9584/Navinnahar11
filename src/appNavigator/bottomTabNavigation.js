import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen';
import Cart from '../screens/cartScreen';
import Profile from '../screens/profileScreen';
import Wishlist from '../screens/wishlistScreen';
import Stack from './stacknavigation'


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
            
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    // bottom: 25,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown:true,
                    headerTitleStyle: {
                        marginLeft:120,
                        color:'pink'
                      },
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                            <Image
                                source={require("../assets/icons/home.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    //  tintColor: focused ? '#e32f45' : '#748c94'
                                }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>HOME</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                        <Image
                            source={require("../assets/icons/cart.png")}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                // tintColor: focused ? '#e32f45' : '#748c94'
                            }} />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Cart</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name="Wishlist" component={Wishlist}
                options={{
                    // tabBarLabel: 'Wishlist',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                            <Image
                                source={require("../assets/icons/heart.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,

                                    // tintColor: focused ? '#e32f45' : '#748c94'
                                }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Wishlist</Text>
                        </View>
                    ),
                }} />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
                            <Image
                                source={require("../assets/icons/profile.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    // tintColor: focused ? '#e32f45' : '#748c94'
                                }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Profile</Text>
                        </View>
                    ),
                }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    // work for ios
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        // work for android
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    }
})

export default BottomTab
