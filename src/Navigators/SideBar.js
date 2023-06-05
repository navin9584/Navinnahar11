import React, { Component } from 'react';
import { View, Text, Image ,TouchableOpacity} from 'react-native';

const SideBar = ({navigation}) => {

    // const sideBarscreens = [
    //     {name :'Profile',icon:require('../assets/profile.png'),screenToGo : navigation.navigate('Profile')},{name :'Dashboard',icon:require('../assets/dashboard.png')}]
    return (
        <View style={{flex:1,backgroundColor:'green'}}>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Image style={{height:100,width:100,borderRadius:50}} source={require('../assets/logo.png')}/>
          </View>
          <View style={{margin:20}}>
      
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={{flexDirection:'row',margin:10}}>
                 <Image style={{width:30,height:30,borderRadius:15}} source ={require('../assets/profile.png')}/>
                 <Text style={{fontSize:18,color:'black',fontWeight:'bold',marginLeft:20}}>{"Profile"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('')} style={{flexDirection:'row',margin:10}}>
                 <Image style={{width:30,height:30,borderRadius:15}} source ={require('../assets/dashboard.png')}/>
                 <Text style={{fontSize:18,color:'black',fontWeight:'bold',marginLeft:20}}>{"Dashboard"}</Text>
                </TouchableOpacity>
         
          </View>
        </View>
    )
}

export default SideBar;