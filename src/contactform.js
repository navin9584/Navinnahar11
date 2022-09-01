import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Button, Card, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from '@react-native-community/checkbox';
import {firebase} from './config'
// import * as firebase from 'firebase';




const ContactForm = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [valuedata, setValuedata] = useState(null);
  const [items, setItems] = useState([
    { label: 'Personal', value: 'Personal' },
    { label: 'Office', value: 'Office' }
  ]);
  const [isWhatsapp, setIswhatsapp] = useState(false)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')


  // connect with firebase
  const submitData = () => {
    if(name && contact && valuedata){
    const res = fetch("https://contactform-1a853-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          contact,
          valuedata,
          isWhatsapp
        })
        
      });
    if (res) {
      setName("")
      setContact("")
      setValuedata("")
      setIswhatsapp("")
      alert("data saved")
      navigation.navigate('HomeScreen')
    } else {
      alert("please fill the data")
    }
  } else {
    alert("please fill the data")
  }

  }

  return (
    <View style={styles.mainView}>
      <Card style={styles.Card}>
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 25, fontWeight: '800',color:'#111' }}>CONTACT</Text>
        <View style={{ marginTop: 30 }}>
          <TextInput
            style={{ width: '90%', marginLeft: 10 }}
            mode="outlined"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={{ width: '90%', marginLeft: 10, marginTop: 20 }}
            mode="outlined"
            placeholder="Enter your phone number"
            keyboardType="numeric"
            name="contact"
            value={contact}
            onChangeText={setContact}
          />
          <DropDownPicker
            style={{ width: '90%', marginLeft: 10, marginTop: 20 }}
            open={open}
            value={valuedata}
            items={items}
            setOpen={setOpen}
            setValue={setValuedata}
            setItems={setItems}
          />
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              style={{ marginLeft: 10, marginTop: 10 }}
              disabled={false}
              value={isWhatsapp}
              onValueChange={(newValue) => setIswhatsapp(newValue)}
            />
            <Text style={{ marginLeft: 10, marginTop: 15, color: 'white' }}>Is Whatsapp</Text>
          </View>
        </View>
        <Button style={{ marginTop: 20, width: "80%", alignSelf: 'center',color:"blue" }} mode="contained" onPress={submitData}>
          Submit
        </Button>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  Card: {
    height: "80%",
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#2ccce4',
    marginTop: 40,
    borderRadius:10
  },
  mainView:{backgroundColor:'#607d8b',height:"100%"}
})

export default ContactForm;