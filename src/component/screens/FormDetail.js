import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, BackHandler, TouchableOpacity, StyleSheet } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CheckBox from '@react-native-community/checkbox';

const FormDetails = ({ navigation }) => {
  const [toggleCheckBoxBC, setToggleCheckBoxBC] = useState(false)
  const [toggleCheckBoxER, setToggleCheckBoxER] = useState(false)
  const [toggleCheckBoxIP, setToggleCheckBoxIP] = useState(false)
  const [toggleCheckBoxFP, setToggleCheckBoxFP] = useState(false)
  const [toggleCheckBoxPP, setToggleCheckBoxPP] = useState(false)
  const [toggleCheckBoxYC, setToggleCheckBoxYC] = useState(false)
  const [toggleCheckBoxSC, setToggleCheckBoxSC] = useState(false)
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [cast, setCast] = useState('');
  const [education, setEducation] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [badName, setBadName] = useState(false);
  const [badFather, setBadFather] = useState(false);
  const [badage, setBadAge] = useState(false);
  const [badcast, setBadCast] = useState(false);
  const [badeducation, setBadeducation] = useState(false);
  const [badpincode, setBadpincode] = useState(false);

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



  const [buttonShow1, setButtonShow1] = useState(true)
  const [buttonShow2, setButtonShow2] = useState(false)
  const [buttonShow3, setButtonShow3] = useState(false)
  const [buttonShow4, setButtonShow4] = useState(false)

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
    if (pinCode == '') {
      setBadpincode(true)
    } else {
      setBadpincode(false)
      setButtonShow1(false)
      setButtonShow2(false)
      setButtonShow3(true)
      setButtonShow4(false)


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
    if (vehicle == '') {
      setBadvehicle(true)
    } else {
      setBadvehicle(false)
    }
    if (group == '') {
      setBadgroup(true)
    } else {
      setBadgroup(false)
    }
    if (govtEmploye == '') {
      setBadgovtemploy(true)
    } else {
      setBadgovtemploy(false)
      setButtonShow1(false)
      setButtonShow2(false)
      setButtonShow3(false)
      setButtonShow4(true)

    }

  }
  const onSubmit = () => {
    if (party == '') {
      setBadparty(true)
    } else {
      setBadparty(false)
      navigation.navigate('DataButtons')
    }

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

  const onBckPress = () => {
    navigation.goBack()
  }

  const onBckPress1 = () => {
    setButtonShow1(true)
    setButtonShow2(false)
    setButtonShow3(false)
    setButtonShow4(false)
  }

  const onBckPress2 = () => {
    setButtonShow1(false)
    setButtonShow2(true)
    setButtonShow3(false)
    setButtonShow4(false)
  }

  const onBckPress3 = () => {
    setButtonShow1(false)
    setButtonShow2(false)
    setButtonShow3(true)
    setButtonShow4(false)
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
              setPinCode(txt)
            }
            value={pinCode} />
          {badpincode === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}
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


          <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> वाहन </Text>
          <TextInputCompo
            onChangeText={(txt) =>
              setVehicle(txt)
            }
            value={vehicle} />
          {badvehicle === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


          <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> ग्रुप </Text>
          <TextInputCompo
            onChangeText={(txt) =>
              setGroup(txt)
            }
            value={group} />
          {badgroup === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


          <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> सरकारी कर्मचारी - Y/N </Text>
          <TextInputCompo
            Placeholder={'विभाग और पोस्ट'}
            onChangeText={(txt) =>
              setGovtEmploye(txt)
            }
            value={govtEmploye} />
          {badgovtemploy === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


          <View style={{ bottom: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
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

      {buttonShow4 &&
        <View>
          <TouchableOpacity onPress={() => onBckPress3()}
            style={{ margin: 10, alignItems: 'flex-end' }}
          ><Text style={{ color: '#8ed1fc', fontWeight: '500', fontSize: 18 }}>Back</Text></TouchableOpacity>
          <View style={{ marginTop: 0 }}>

            <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>पार्टी</Text>
            <TextInputCompo
              onChangeText={(txt) =>
                setParty(txt)
              }
              value={party} />
            {badparty === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

          </View>
          <Text style={{ marginTop:20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>कोड</Text>
         
          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:10}}>
            <View style={{flexDirection:'row',alignItems:"center", marginLeft: 40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxBC}
            onValueChange={(newValue) => setToggleCheckBoxBC(newValue)}
          />
           <Text style={{marginLeft:20}}>{'BC'}</Text>
          </View>
          

            <View style={{flexDirection:'row',alignItems:'center', marginRight:40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxER}
            onValueChange={(newValue) => setToggleCheckBoxER(newValue)}
          />
           <Text style={{marginLeft:20}}>{'ER'}</Text>
          </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:10}}>
            <View style={{flexDirection:'row',alignItems:"center", marginLeft: 40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxIP}
            onValueChange={(newValue) => setToggleCheckBoxIP(newValue)}
          />
           <Text style={{marginLeft:20}}>{'IP'}</Text>
          </View>
          

            <View style={{flexDirection:'row',alignItems:'center', marginRight:40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxFP}
            onValueChange={(newValue) => setToggleCheckBoxFP(newValue)}
          />
           <Text style={{marginLeft:20}}>{'FP'}</Text>
          </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:10}}>
            <View style={{flexDirection:'row',alignItems:"center", marginLeft: 40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxPP}
            onValueChange={(newValue) => setToggleCheckBoxPP(newValue)}
          />
           <Text style={{marginLeft:20}}>{'PP'}</Text>
          </View>
          

            <View style={{flexDirection:'row',alignItems:'center', marginRight:40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxYC}
            onValueChange={(newValue) => setToggleCheckBoxYC(newValue)}
          />
           <Text style={{marginLeft:20}}>{'YC'}</Text>
          </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:10}}>
            <View style={{flexDirection:'row',alignItems:"center", marginLeft: 40}}>
          <CheckBox
            disabled={false}
            // tintColors={true?'#9E663C':'#4DABEC'}
            boxType={'circle'}
            value={toggleCheckBoxSC}
            onValueChange={(newValue) => setToggleCheckBoxSC(newValue)}
          />
           <Text style={{marginLeft:20}}>{'SC'}</Text>
          </View>
          
          </View>
          

          {/* <View style={{ }}> */}
          <TouchableOpacity onPress={() => onBckPress3()}
            style={{backgroundColor:'black',width:'50%',height:40,justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:10,top:30 }}
          ><Text style={{ color: '#fff', }}>Click Image</Text></TouchableOpacity>
            <CommonButton
              title={'Submit'}
              bgColor={'#000'}
              textColor={"#fff"}
              customStyle={{ width: '45%', height: 40 }}
              onPress={() => onSubmit()}
            />
          {/* </View> */}
         
        </View>}




    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default FormDetails;