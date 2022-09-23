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
        <View style={styles.viewAll}>
        <TouchableOpacity
        onPress = {onPressOfferText}>
        <Text style={styles.offerText}>{offerText}</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress = {onPressViewAll}>
        <Text>{viewAlltext}</Text>
        </TouchableOpacity>
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
        fontSize:15,
        color:Colors.Black,
        fontWeight:'bold'
    }

})

export default Headings