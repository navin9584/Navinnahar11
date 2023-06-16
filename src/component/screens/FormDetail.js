import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, ScrollView, BackHandler, TouchableOpacity, StyleSheet, Linking, Image, Modal, Pressable, TextInput } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CheckBox from '@react-native-community/checkbox';
import { setfieldDataintoLoacal } from '../localStorage';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Loader from '../ReusableComponent/Loader';

const FormDetails = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [toggleCheckBoxBC, setToggleCheckBoxBC] = useState(false)
  const [toggleCheckBoxER, setToggleCheckBoxER] = useState(false)
  const [toggleCheckBoxIP, setToggleCheckBoxIP] = useState(false)
  const [toggleCheckBoxFP, setToggleCheckBoxFP] = useState(false)
  const [toggleCheckBoxPP, setToggleCheckBoxPP] = useState(false)
  const [toggleCheckBoxYC, setToggleCheckBoxYC] = useState(false)
  const [toggleCheckBoxSC, setToggleCheckBoxSC] = useState(false)
  const [code, setCode] = useState(false)
  const [badcode, setBadCode] = useState(false)

  const [twoWheeler, setTwoWheeler] = useState(false)
  const [fourWheeler, setFourWheeler] = useState(false)
  const [noWheeler, setNoWheeler] = useState(false)
  const [vehicleValidate, setVehicleValidate] = useState(false)
  const [badvehicleValidate, setBadvehicleValidate] = useState(false)
 

  
  const [nariSammanYes, setNariSammanYes] = useState(false)
  const [badNariSamman, setBadNariSamman] = useState(false);
  const [nariSammanNo, setNariSammanNo] = useState(false)
  const [narisammanValidate, setNariSammanValidate] = useState(false)
  const [badnarisammanValidate, setBadNariSammanValidate] = useState(false)

  const [kisanKarjMafi, setKisanKarjMafi] = useState(false)
  const [kisanKarjMafiCongress, setKisanKarjMafiCongress] = useState(false)
  const [kisanKarjMafiBjp, setKisanKarjMafiBjp] = useState(false)
  const [kisanKarjMafiValidate, setKisanKarjMafiValidate] = useState(false)


  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [cast, setCast] = useState('');
  const [education, setEducation] = useState('');
  const [mobile, setMobile] = useState('');
  const [badName, setBadName] = useState(false);
  const [badFather, setBadFather] = useState(false);
  const [badage, setBadAge] = useState(false);
  const [badcast, setBadCast] = useState(false);
  const [badeducation, setBadeducation] = useState(false);
  const [badmobile, setBadmobile] = useState(false);

  const [voterId, setVoterId] = useState('');
  const [address, setAddress] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [gender, setGender] = useState('');
  const [group, setGroup] = useState('');
  const [govtEmploye, setGovtEmploye] = useState('');
  const [badvoterid, setBAdvoterid] = useState(false);
  const [badaddress, setBadaddress] = useState(false);
  const [badvehicle, setBadvehicle] = useState(false);
  const [badgender, setBadgender] = useState(false);
  const [badgroup, setBadgroup] = useState(false);
  const [badgovtemploy, setBadgovtemploy] = useState(false);

  const [block, setBlock] = useState('');
  const [booth, setBooth] = useState('');
  const [grampanchayat, setGramPanchayat] = useState('');
  const [village, setVillage] = useState('');
  const [toll, setToll] = useState('');
  const [badblock, setBadblock] = useState(false);
  const [badBooth, setBadBooth] = useState(false);
  const [badgrampanchayat, setBadgrampanchayat] = useState(false);
  const [badvillage, setBadvillage] = useState(false);
  const [badToll, setBadToll] = useState(false);

  const [party, setParty] = useState('');
  const [badparty, setBadparty] = useState(false);

  const [facebook, setFaceBook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');



  const [buttonShow1, setButtonShow1] = useState(true)
  const [buttonShow2, setButtonShow2] = useState(false)
  const [buttonShow3, setButtonShow3] = useState(false)
  const [buttonShow4, setButtonShow4] = useState(false)
  const [buttonShow5, setButtonShow5] = useState(false)

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(null)
  const [capturedPhoto, setCapturedPhoto] = useState('')
  const [tackphotoclickd, setTackphotoclickd] = useState('')
  const [modalVisible, setModalVisible] = useState(false);



  const onPressNext1 = () => {
    if (block == '') {
      setBadblock(true);
    } else {
      setBadblock(false);
    }
    if (booth == '') {
      setBadBooth(true)
    } else {
      setBadBooth(false)
    }
    if (grampanchayat == '') {
      setBadgrampanchayat(true)
    } else {
      setBadgrampanchayat(false)
    }
    if (village == '') {
      setBadvillage(true)
    } else {
      setBadvillage(false)
    }
    if (toll == '') {
      setBadToll(true)
    } else {
      setBadToll(false)
      setButtonShow1(false)
      setButtonShow2(true)
      setButtonShow3(false)
      setButtonShow4(false)
      setButtonShow5(false)

    }
  }

  const onPressNext2 = () => {
    if (name == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (fatherName == '') {
      setBadFather(true)
    } else {
      setBadFather(false)
    }
    if (age == '') {
      setBadAge(true)
    } else {
      setBadAge(false)
    }
    if (cast == '') {
      setBadCast(true)
    } else {
      setBadCast(false)
    }
    if (education == '') {
      setBadeducation(true)
    } else {
      setBadeducation(false)
    }
    if (mobile == '') {
      setBadmobile(true)
    } else {
      setBadmobile(false)
      setButtonShow1(false)
      setButtonShow2(false)
      setButtonShow3(true)
      setButtonShow4(false)
      setButtonShow5(false)


    }

  }

  const onPressNext3 = () => {
    if (voterId == '') {
      setBAdvoterid(true);
    } else {
      setBAdvoterid(false);
    }
    if (address == '') {
      setBadaddress(true)
    } else {
      setBadaddress(false)
    }
    if (gender == '') {
      setBadgender(true)
    } else {
      setBadgender(false)
    }
    if (vehicleValidate == '') {
      setVehicleValidate(true)
    } else {
      setVehicleValidate(false)
    }
    if (group == '') {
      setBadgroup(true)
    } else {
      setBadgroup(false)
      setButtonShow1(false)
      setButtonShow2(false)
      setButtonShow3(false)
      setButtonShow4(true)
      setButtonShow5(false)
    }

  }

  const onPressNext4 = () => {
    if (govtEmploye == '') {
      setBadgovtemploy(true)
    } else {
      setBadgovtemploy(false)
    }
    if (party == '') {
      setBadparty(true)
    } else {
      setBadparty(false)
      setButtonShow1(false)
      setButtonShow2(false)
      setButtonShow3(false)
      setButtonShow4(false)
      setButtonShow5(true)
    }
    
  }

  const onBckPress = () => {
    navigation.goBack()
  }

  const onBckPress1 = () => {
    setButtonShow1(true)
    setButtonShow2(false)
    setButtonShow3(false)
    setButtonShow4(false)
    setButtonShow5(false)
  }

  const onBckPress2 = () => {
    setButtonShow1(false)
    setButtonShow2(true)
    setButtonShow3(false)
    setButtonShow4(false)
    setButtonShow5(false)
  }

  const onBckPress3 = () => {
    setButtonShow1(false)
    setButtonShow2(false)
    setButtonShow3(true)
    setButtonShow4(false)
    setButtonShow5(false)
  }

  const onBckPress4 = () => {
    setButtonShow1(false)
    setButtonShow2(false)
    setButtonShow3(false)
    setButtonShow4(true)
    setButtonShow5(false)
  }

  const devices = useCameraDevices("wide-angle-camera")
  const device = devices.back

  // console.log('devices>>>', JSON.stringify(devices));
  const checkPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission()
    if (permission === 'denied') {
      await Linking.openSettings()
    }
  }, [devices])

  useEffect(() => {
    checkPermission()
  }, [checkPermission, devices])

  const onSubmit = () => {
      saveDataIntoLocal()
      navigation.navigate('DataButtons')
  }




  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);



  const saveDataIntoLocal = async () => {
    const allfieldtostore = [{
      "block": block, 'booth': booth, 'grampanchayat': grampanchayat, 'village': village, 'toll': toll,
      "name": name, "fatherName": fatherName, "cast": cast, "age": age, "education": education, "mobile": mobile,
      "voterId": voterId, "address": address, "gender": gender, "vehicle": vehicle, "group": group, "govtEmploye": govtEmploye,
      "party": party, "BC": toggleCheckBoxBC, "ER": toggleCheckBoxER, "FP": toggleCheckBoxFP, "IP": toggleCheckBoxIP, "PP": toggleCheckBoxPP, "SC": toggleCheckBoxSC, "YC": toggleCheckBoxYC,
      "capturedPhoto": capturedPhoto, "twoWheeler": twoWheeler, "fourWheeler": fourWheeler, "noWheeler": noWheeler,"nariSammanNo":nariSammanNo,"nariSammanYes":nariSammanYes,"kisanKarjMafi":kisanKarjMafi,
      "kisanKarjMafiCongress":kisanKarjMafiCongress,"kisanKarjMafiBjp":kisanKarjMafiBjp,"facebook":facebook,instagram:'instagram',"twitter":twitter
    }]
    try {
      const newItems = allfieldtostore
      dataList.push(...newItems)
      const updatedList = [...dataList];
      console.log('dataList>>>', dataList);
      console.log('newItems>>>', newItems);
      await setfieldDataintoLoacal(dataList);
      setDataList(updatedList);
      console.log('Data saved successfully.');
    } catch (error) {
      console.log('Error saving data:', error);
    }
    //   navigation.navigate("");
  };


  if (device == null) return <Loader />
  console.log('capturephoto', capturedPhoto);
  const tackPicture = async () => {
    if (cameraRef != null) {
      const photo = await cameraRef.current.takePhoto()
      setCapturedPhoto(photo.path)
      // setTackphotoclickd(false)
      setModalVisible(!modalVisible)
    }

  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View>
          {buttonShow1 &&
            <View>
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginTop: 10 }}>{'गंधवानी विधानसभा 19'}</Text>

              <View style={{ marginTop: 20 }}>

                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> ब्लॉक नाम & नंबर </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setBlock(txt)
                  }
                  value={block} />
                {badblock === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> बूथ नाम & नंबर </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setBooth(txt)
                  }
                  value={booth} />
                {badBooth === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> ग्राम पंचायत </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setGramPanchayat(txt)
                  }
                  value={grampanchayat} />
                {badgrampanchayat === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: "center" }}> गाँव </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setVillage(txt)
                  }
                  value={village} />
                {badvillage === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> फलिया/मजरा/टोल </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setToll(txt)
                  }
                  value={toll} />
                {badToll === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

                <View style={{ bottom: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                  <CommonButton
                    title={'Back'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{ width: '45%', height: 50 }}
                    onPress={() => onBckPress()}
                  />
                  <CommonButton
                    title={'Next'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{ width: '45%', height: 50 }}
                    onPress={() => onPressNext1()}
                  />
                </View>
              </View></View>}
        </View>

        <View>
          {buttonShow2 &&
            <View style={{ marginTop: 20 }}>

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> नाम </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setName(txt)
                }
                value={name} />
              {badName === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> पिताजी नाम </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setFatherName(txt)
                }
                value={fatherName} />
              {badFather === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> जाति </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setCast(txt)
                }
                value={cast} />
              {badcast === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> आयु </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setAge(txt)
                }
                value={age} />
              {badage === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> शिक्षा </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setEducation(txt)
                }
                value={education} />
              {badeducation === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> मोबाइल नंबर </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setMobile(txt)
                }
                value={mobile} />
              {badmobile === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}
              <View style={{ bottom: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                <CommonButton
                  title={'Back'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onBckPress1()}
                />
                <CommonButton
                  title={'Next'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onPressNext2()}
                />
              </View>
            </View>
          }
        </View>

        <View>
          {buttonShow3 &&
            <View style={{ marginTop: 20 }}>

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>वोटर कोड</Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setVoterId(txt)
                }
                value={voterId} />
              {badvoterid === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> पता </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setAddress(txt)
                }
                value={address} />
              {badaddress === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> लिंग </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setGender(txt)
                }
                value={gender} />
              {badgender === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> ग्रुप </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setGroup(txt)
                }
                value={group} />
              {badgroup === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> वाहन </Text>

              <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40, top: 20, }}>
                <CheckBox
                  disabled={false}
                  // tintColors={true?'#9E663C':'#4DABEC'}
                  boxType={'circle'}
                  value={twoWheeler}
                  onValueChange={(newValue) => setTwoWheeler(newValue)}
                />
                <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '500', color: 'black', }}>{'टू व्हीलर'}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40, top: 20, }}>
                <CheckBox
                  disabled={false}
                  // tintColors={true?'#9E663C':'#4DABEC'}
                  boxType={'circle'}
                  value={fourWheeler}
                  onValueChange={(newValue) => setFourWheeler(newValue)}
                />
                <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '500', color: 'black', }}>{'फोर व्हीलर'}</Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40, top: 20, }}>
                <CheckBox
                  disabled={false}
                  // tintColors={true?'#9E663C':'#4DABEC'}
                  boxType={'circle'}
                  value={noWheeler}
                  onValueChange={(newValue) => setNoWheeler(newValue)}
                />
                <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '500', color: 'black', }}>{'कोई वहाँन नहीं है'}</Text>
              </View>


              {/* <TextInputCompo
              onChangeText={(txt) =>
                setVehicle(txt)
              }
              value={vehicle} />
            {badvehicle === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>} */}


              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <CommonButton
                  title={'Back'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onBckPress2()}
                />
                <CommonButton
                  title={'Next'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onPressNext3()}
                />
              </View>
            </View>}
        </View>

        <View>
          {buttonShow4 &&
            <View style={{ flex: 1 }}>
              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> सरकारी कर्मचारी - Y/N </Text>
              <TextInputCompo
                Placeholder={'विभाग और पोस्ट'}
                onChangeText={(txt) =>
                  setGovtEmploye(txt)
                }
                value={govtEmploye} />
              {badgovtemploy === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


              <View style={{}}>

                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>पार्टी</Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setParty(txt)
                  }
                  value={party} />
                {badparty === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              </View>
              <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>कोड</Text>


              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxBC}
                    onValueChange={(newValue) => setToggleCheckBoxBC(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'BC'}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxER}
                    onValueChange={(newValue) => setToggleCheckBoxER(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'ER'}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxIP}
                    onValueChange={(newValue) => setToggleCheckBoxIP(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'IP'}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxFP}
                    onValueChange={(newValue) => setToggleCheckBoxFP(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'FP'}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxPP}
                    onValueChange={(newValue) => setToggleCheckBoxPP(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'PP'}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxYC}
                    onValueChange={(newValue) => setToggleCheckBoxYC(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'YC'}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={toggleCheckBoxSC}
                    onValueChange={(newValue) => setToggleCheckBoxSC(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'SC'}</Text>
                </View>

              </View>









              <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                <CommonButton
                  title={'Back'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onBckPress3()}
                />
                <CommonButton
                  title={'Next'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onPressNext4()}
                />
              </View>



            </View>




          }</View>

        <View>
          {buttonShow5 &&
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => onBckPress4()}
                style={{ margin: 10, alignItems: 'flex-end' }}
              ><Text style={{ color: '#8ed1fc', fontWeight: '500', fontSize: 18 }}>Back</Text></TouchableOpacity>
         
              <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>नारी सम्मान</Text>
              {/* {badNariSamman === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>} */}


              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={nariSammanYes}
                    onValueChange={(newValue) => setNariSammanYes(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'Yes'}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 60 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={nariSammanNo}
                    onValueChange={(newValue) => setNariSammanNo(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'No'}</Text>
                </View>
              </View>

              <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>किसान कर्ज माफी</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={kisanKarjMafi}
                    onValueChange={(newValue) => setKisanKarjMafi(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'नही'}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={kisanKarjMafiCongress}
                    onValueChange={(newValue) => setKisanKarjMafiCongress(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'कांग्रेस'}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 40 }}>
                  <CheckBox
                    disabled={false}
                    // tintColors={true?'#9E663C':'#4DABEC'}
                    boxType={'circle'}
                    value={kisanKarjMafiBjp}
                    onValueChange={(newValue) => setKisanKarjMafiBjp(newValue)}
                  />
                  <Text style={{ marginLeft: 20 }}>{'बीजेपी'}</Text>
                </View>
              </View>

              <View style={{flexDirection:'row',justifyContent:'center',}}>
              <Text style={{marginTop:30, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center',width:'20%' }}>फेसबुक</Text>
                <TextInput
                  onChangeText={(txt) =>
                    setFaceBook(txt)
                  }
                  value={facebook}
                  style={{ width: '60%', height: 40, borderWidth: 0.5,
                  borderRadius: 10, marginTop: 30,
                  paddingLeft:10,marginLeft:10}}
                   />
  
                 </View>

                 <View style={{flexDirection:'row',justifyContent:'center',}}>
              <Text style={{marginTop:30, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center',width:'20%' }}>इंस्टाग्राम</Text>
                <TextInput
                  onChangeText={(txt) =>
                    setInstagram(txt)
                  }
                  value={instagram}
                  style={{ width: '60%', height: 40, borderWidth: 0.5,
                  borderRadius: 10, marginTop: 30,
                  paddingLeft:10,marginLeft:10}}
                   />
  
                 </View>

                 <View style={{flexDirection:'row',justifyContent:'center',}}>
              <Text style={{marginTop:30, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' ,width:'20%'}}>ट्विटर</Text>
                <TextInput
                  onChangeText={(txt) =>
                    setTwitter(txt)
                  }
                  value={twitter}
                  style={{ width: '60%', height: 40, borderWidth: 0.5,
                  borderRadius: 10, marginTop: 30,
                  paddingLeft:10,marginLeft:10}}
                   />
  
                 </View>

              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    // cameraId={device.id}
                    isActive={true}
                    photo={true}
                  />

                  <TouchableOpacity onPress={() => tackPicture()} style={{
                    height: 60, width: 60, borderRadius: 30,
                    backgroundColor: 'red', alignSelf: 'center', position: 'absolute', bottom: 10
                  }}></TouchableOpacity>
                </Modal>
              </View>


              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {capturedPhoto !== '' && <Image source={{ uri: 'file://' + capturedPhoto }} style={{ width: '80%', height: 200, marginTop: 20 }} />}
                <TouchableOpacity onPress={() => setModalVisible(true)}
                  style={{
                    backgroundColor: 'black', width: '50%', height: 40, justifyContent: 'center', alignItems: 'center',
                    alignSelf: 'center', borderRadius: 10, marginTop: 30
                  }}
                >
                  <Text style={{ color: '#fff', }}>Click Image</Text></TouchableOpacity></View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <CommonButton
                  title={'Submit'}
                  bgColor={'#000'}
                  textColor={"#fff"}
                  customStyle={{ width: '45%', height: 50 }}
                  onPress={() => onSubmit()}
                />
              </View>

            </View>




          }</View>






      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default FormDetails;