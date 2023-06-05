
import React,{useEffect,useState} from 'react'
import { Text, View, Button, Platform,Alert,Modal,StyleSheet,Pressable } from 'react-native';
import Config from 'react-native-config';
import messaging from '@react-native-firebase/messaging'
import notifee,{AndroidStyle} from '@notifee/react-native'
import MapView from 'react-native-maps';
import {
    initialize,
    showMessaging,
  } from '@robbywh/react-native-zendesk-messaging';



const Home = () => {
    useEffect(() => {
        initialize(
          Platform.OS === 'android'
            ? "eyJzZXR0aW5nc191cmwiOiJodHRwczovL3RhcmVudG9oZWxwLnplbmRlc2suY29tL21vYmlsZV9zZGtfYXBpL3NldHRpbmdzLzAxSDBNWFJNMlFRMkZONjUxV0s1NlQxWUpYLmpzb24ifQ=="
            : "eyJzZXR0aW5nc191cmwiOiJodHRwczovL3RhcmVudG9oZWxwLnplbmRlc2suY29tL21vYmlsZV9zZGtfYXBpL3NldHRpbmdzLzAxSDBNWFJNMlFRMkZONjUxV0s1NlQxWUpYLmpzb24ifQ=="
        );
      }, []);

      useEffect(()=>{
        getDeviceToken();
      },[])
     
      const getDeviceToken= async ()=>{
        const token = await messaging().getToken();
        console.log('token>>>',token);
      }
      
      // Push notification for foreground mode
      useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          //  Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
          displayNotification(remoteMessage)
        });
    
        return unsubscribe;
      }, []);

      const displayNotification =async (data)=>{
        await notifee.requestPermission()

        // create channel (required for android)
        const channelId = await notifee.createChannel({
          id:'default',
          name:'Default Channel'
        });
        
        // Display a notification

        await notifee.displayNotification({
          title: data.notification.title,
          body:data.notification.body,
          android:{
            channelId,
          },
          pressAction:{
            id:'default'
          }
        })
      }
    return (

        <View style={{ padding: 100 }}>
      <Text
        style={{
          marginBottom: 50,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        Zendesk Messaging
      </Text>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>
        Press The "CHAT" button to test
      </Text>
      <Button onPress={() => showMessaging()} title="CHAT" />

      <Map/>
    </View>

    )
}

export default Home;


// import React from 'react'
// import {View,Text,Button} from 'react-native'

const Map=()=>{
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <View>
    <View style={{marginVertical:10}}>
    <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Open Map</Text>
      </Pressable>
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    height:'100%',
    width:'100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});