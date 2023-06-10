import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler, Alert, AppState } from 'react-native';
import TextInputCompo from '../../component/ReusableComponent/TextInputCompo';
import CommonButton from '../../component/ReusableComponent/ButtonCompo';
import { setfieldDataintoLoacal, getfieldDatafromLoacal, getLoginCred } from '../localStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
let data = [];
const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const isFocus = useIsFocused()
  const message = useSelector(state => state);
  


  const [dataList, setDataList] = useState([]);
  const [assemblyName, setAssemblyName] = useState('');
  const [block, setBlock] = useState('');
  const [city, setCity] = useState('');
  const [village, setVillage] = useState('');
  const [badassembly, setBadassembly] = useState(false);
  const [badblock, seBadblock] = useState(false);
  const [badcity, setBadcity] = useState(false);
  const [badvillage, setBadvillage] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const onpressButton = () => {
    if (assemblyName == '') {
      setBadassembly(true);
    } else {
      setBadassembly(false);
    }
    if (block == '') {
      seBadblock(true)
    } else {
      seBadblock(false)
    }
    if (city == '') {
      setBadcity(true)
    } else {
      setBadcity(false)
    }
    if (village == '') {
      setBadvillage(true)
    } else {
      setBadvillage(false)
      saveDataIntoLocal()
      navigation.navigate('FormDetails')
    }

  }
 
  const loadData = async () => {
    try {
      const data = await getfieldDatafromLoacal();
      if (data !== null) {
        setDataList(data);
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

    
    // Function to save data to AsyncStorage
    const saveDataIntoLocal = async () => {
      try {
        const newItems = [{ "assemblyName": assemblyName, 'block': block, 'city': city, 'village': village}];
        dataList.push(...newItems)
        const updatedList = [...dataList];
       console.log('dataList>>>',dataList);
       console.log('newItems>>>',newItems);
        await setfieldDataintoLoacal(dataList);
        setDataList(updatedList);
        console.log('Data saved successfully.');
      } catch (error) {
        console.log('Error saving data:', error);
      }
    //   navigation.navigate("");
    };
  
    console.log('dataList>>>',dataList);

  function handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);






  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>

        <Text style={{ top: 20, fontSize: 16, fontWeight: 'bold', color: 'black' }}> Assembly Name </Text>
        <TextInputCompo style={{ marginTop: 0 }} Placeholder={'Enter Assembly Name'}
          onChangeText={(txt) =>
            setAssemblyName(txt)
          }
          value={assemblyName} />
        {badassembly === true && <Text style={{ color: "red", right: 90 }}>*Required field</Text>}


        <Text style={{ top: 20, fontSize: 16, fontWeight: 'bold', color: 'black' }}> Block Name </Text>
        <TextInputCompo Placeholder={'Enter Block'}
          onChangeText={(txt) =>
            setBlock(txt)
          }
          value={block} />
        {badblock === true && <Text style={{ color: "red", right: 90 }}>*Required field</Text>}

        <Text style={{ top: 20, fontSize: 16, fontWeight: 'bold', color: 'black' }}> GP/City Name </Text>
        <TextInputCompo Placeholder={'Enter GP/City '}
          onChangeText={(txt) =>
            setCity(txt)
          }
          value={city} />
        {badcity === true && <Text style={{ color: "red", right: 90 }}>*Required field</Text>}

        <Text style={{ top: 20, fontSize: 16, fontWeight: 'bold', color: 'black' }}> Village Area Name </Text>
        <TextInputCompo Placeholder={'Enter Village/Area '}
          onChangeText={(txt) =>
            setVillage(txt)
          }
          value={village} />
        {badvillage === true && <Text style={{ color: "red", right: 90 }}>*Required field</Text>}
      </View>

      

      <CommonButton
        title={'Submit'}
        bgColor={'#000'}
        textColor={"#fff"}
        customStyle={{ width: '80%', height: 50 }}
        onPress={() => onpressButton()}
      />
    </View>
  );
}

export default Home