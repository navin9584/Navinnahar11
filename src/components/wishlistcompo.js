import React from "react";
import {Text,View, StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native'
import { Colors } from "../assets/styles/color"
const {width , height} = Dimensions.get('window') 
const Headings = ({
    onPressOfferText,
    onPressViewAll,
    offerText,
    viewAlltext
}) => {
    return(
       <View>
        
       </View>
       
    )
}
const styles = StyleSheet.create({
    viewAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    offerText: {
        fontSize:18,
        color:Colors.Black,
        fontWeight:'bold'
    }

})

export default Headings