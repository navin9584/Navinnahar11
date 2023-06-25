
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, ScrollView, BackHandler, TouchableOpacity, StyleSheet, Linking, Image, Modal, Pressable, TextInput } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CheckBox from '@react-native-community/checkbox';
import { getFilterDatafromdrodown,getfieldDatafromLoacal } from '../localStorage';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Loader from '../ReusableComponent/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { FormDetailAction } from '../../redux/FormDetailApi';
import { checkNetworkConnectivity } from '../localStorage';
import Geolocation from '@react-native-community/geolocation';

const ExistFormDetail = ({ navigation,route }) => {
  const [getAlldata, setAllData] = useState()
  const [value, setValue] = useState(null);
  const [badValue, setBadValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  // console.log('value>>>>', value);
  const param =  route.params
  console.log('param>>>>',param);

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


  Geolocation.getCurrentPosition(info => setLongitude(info.coords.longitude));
  Geolocation.getCurrentPosition(info => setLatitude(info.coords.latitude));

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const loginData = data.loginData.data
  const formSearchState = data.FormSearchData && data.FormSearchData.data && data.FormSearchData.data.userdata
  const userId = loginData && loginData.userdata && loginData.userdata.userId
  const filterData = param && param.data.payload && param.data.payload && param.data.payload.userdata

  // console.log('filterData>>>>>>', filterData);
  // useEffect(()=>{
  //   unsubscribe()
  // },[])
  // const unsubscribe = navigation.addListener('focus', () => {
  //   filterData
  // });
  const getDetails = (type) => {
    if (filterData && filterData[0]) {
      switch (type) {
        case "block":
          return filterData[0].block_name_number
        case "booth":
          return filterData[0].booth_name_number
        case "grampanchayat":
          return filterData[0].grampanchayat
        case "address":
          return filterData[0].address
        case "age":
          return filterData[0].age
        case "code":
          return filterData[0].code
        case "education":
          return filterData[0].education
        case "kisanLoan":
          return filterData[0].farmer_loan_waiver
        case "fatherName":
          return filterData[0].fathername
        case "gender":
          return filterData[0].gender
        case "government_employee":
          return filterData[0].government_employee
        case "group":
          return filterData[0].group
        case "image":
          return filterData[0].image
        case "jaati":
          return filterData[0].jaati
        case "latitude":
          return filterData[0].lat
        case "longitude":
          return filterData[0].long
        case "mobile":
          return filterData[0].mobile
        case "name":
          return filterData[0].name
        case "party":
          return filterData[0].parti
        case "respect_for_women":
          return filterData[0].respect_for_women
        case "toll":
          return filterData[0].toll
        case "vehicle":
          return filterData[0].vehicle
        case "toll":
          return filterData[0].toll
        case "village":
          return filterData[0].village
        case "votarcode":
          return filterData[0].votarcode
          case "facebook":
            return filterData[0].facebook
            case "instagram":
              return filterData[0].instagram
              case "twitter":
                return filterData[0].twitter

      }
    }
    return ""
  }




  const cameraRef = useRef(null);
  const [toggleCheckBoxBC, setToggleCheckBoxBC] = useState()
  const [toggleCheckBoxER, setToggleCheckBoxER] = useState()
  const [toggleCheckBoxIP, setToggleCheckBoxIP] = useState()
  const [toggleCheckBoxFP, setToggleCheckBoxFP] = useState()
  const [toggleCheckBoxPP, setToggleCheckBoxPP] = useState()
  const [toggleCheckBoxYC, setToggleCheckBoxYC] = useState()
  const [toggleCheckBoxSC, setToggleCheckBoxSC] = useState()

  const [badcode, setBadCode] = useState(false)

  const [twoWheeler, setTwoWheeler] = useState()
  const [fourWheeler, setFourWheeler] = useState()
  const [noWheeler, setNoWheeler] = useState()
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


  const [name, setName] = useState(getDetails("name"));
  const [fatherName, setFatherName] = useState(getDetails("fatherName"));
  const [age, setAge] = useState(getDetails("age"));
  const [cast, setCast] = useState(getDetails("jaati"));
  const [education, setEducation] = useState(getDetails("education"));
  const [mobile, setMobile] = useState(getDetails("mobile"));
  const [badName, setBadName] = useState(false);
  const [badFather, setBadFather] = useState(false);
  const [badage, setBadAge] = useState(false);
  const [badcast, setBadCast] = useState(false);
  const [badeducation, setBadeducation] = useState(false);
  const [badmobile, setBadmobile] = useState(false);

  const [voterId, setVoterId] = useState(getDetails("votarcode"));
  const [address, setAddress] = useState(getDetails("address"));
  const [gender, setGender] = useState(getDetails("gender"));
  const [group, setGroup] = useState(getDetails("group"));
  const [govtEmploye, setGovtEmploye] = useState(getDetails("government_employee"));
  const [badvoterid, setBAdvoterid] = useState(false);
  const [badaddress, setBadaddress] = useState(false);
  const [badvehicle, setBadvehicle] = useState(false);
  const [badgender, setBadgender] = useState(false);
  const [badgroup, setBadgroup] = useState(false);
  const [badgovtemploy, setBadgovtemploy] = useState(false);
  // const [filterData, setFilterData] = useState();

  const [block, setBlock] = useState(getDetails("block"));
  const [booth, setBooth] = useState(getDetails("booth"));
  const [grampanchayat, setGramPanchayat] = useState(getDetails("grampanchayat"));
  const [village, setVillage] = useState(getDetails("village"));
  const [toll, setToll] = useState(getDetails("toll"));
  const [badblock, setBadblock] = useState(false);
  const [badBooth, setBadBooth] = useState(false);
  const [badgrampanchayat, setBadgrampanchayat] = useState(false);
  const [badvillage, setBadvillage] = useState(false);
  const [badToll, setBadToll] = useState(false);

  const [party, setParty] = useState(getDetails("party"));
  const [badparty, setBadparty] = useState(false);

  const [facebook, setFaceBook] = useState(getDetails("facebook"));
  const [instagram, setInstagram] = useState(getDetails("instagram"));
  const [twitter, setTwitter] = useState(getDetails("twitter"));



  const [buttonShow1, setButtonShow1] = useState(true)
  const [buttonShow2, setButtonShow2] = useState(false)
  const [buttonShow3, setButtonShow3] = useState(false)
  const [buttonShow4, setButtonShow4] = useState(false)
  const [buttonShow5, setButtonShow5] = useState(false)

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(null)
  const [capturedPhoto, setCapturedPhoto] = useState()
  const [tackphotoclickd, setTackphotoclickd] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [longitude, setLongitude] = useState()
  const [latitude, setLatitude] = useState()

  const [code, setCode] = useState({ selections: [getDetails("code")] })
  const [vehicle, setVehicle] = useState({ selections: [getDetails("vehicle")] });
  const [nariSamman, setNariSamman] = useState({ selections: [getDetails("respect_for_women")] })
  const [kisanLoan, setKisanLoan] = useState({ selections: [getDetails("kisanLoan")] })
  const options = ['टू व्हीलर', 'फोर व्हीलर', 'कोई वाहन नहीं है']
  const codeOption = ['BC', 'ER', 'IP', 'FP', 'PP', 'YC', 'SC']
  const narisammanOption = ['Yes', 'No']
  const kisanLoanOption = ['नही', 'कांग्रेस', 'बीजेपी']




  useEffect(() => {
    // getFilterDatafromLocal()
  }, [])
  

  const getFilterDatafromLocal = async () => {
    try {
      const data = await getFilterDatafromdrodown()
      if (data !== null) {
        setFilterData(data)
        // console.log('Retrieved data:', value);
      } else {
        console.log('No data found.');
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  }

  // console.log('filterData>>>>',filterData&&filterData[0].toggleCheckBoxIP);


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

  const onSubmit = async () => {
    let hasNetwork = await checkNetworkConnectivity();

    // console.log('hasNetwork??????', hasNetwork);
    if (hasNetwork === true) {
      // console.log('saveApiData()');
      saveDataIntoLocal()
      navigation.push('DataButtons')
    } else {
      console.log('saveDataIntoLocal()');
      saveDataIntoLocal()
      navigation.push('DataButtons')
    }
  }


  const saveDataIntoLocal = async () => {
    let dataarray = []
    let newArray =await getfieldDatafromLoacal()
    console.log('newarrrayayayyayyayy',newArray);
   
    try {
    const allfieldtostore = {
      "user_id": filterData[0].userId,"block": block, 'booth': booth, 'grampanchayat': grampanchayat, 'village': village, 'toll': toll,
      "name": name, "fatherName": fatherName, "cast": cast, "age": age, "education": education, "mobile": mobile,
      "voterId": voterId, "address": address, "gender": gender, "vehicle": vehicle.selections, "group": group, "govtEmploye": govtEmploye,
      "party": party, "code": code.selections,
      "capturedPhoto": capturedPhoto, "nariSamman": nariSamman.selections, 
      "kisanLoan": kisanLoan, "facebook": facebook, instagram: 'instagram', "twitter": twitter, "longitude": longitude, "latitude": latitude
    }
      if(newArray == null || newArray == undefined ){
        dataarray.push(allfieldtostore)
       await setfieldDataintoLoacal(dataarray);
       console.log('dataarray>>>>>>>>>>>',dataarray);
      }else{
        newArray.push(allfieldtostore)
       await setfieldDataintoLoacal(newArray);
      }
    
      // const newItems = allfieldtostore
      // dataList.push(...newItems)
      // const updatedList = [...dataList];
      //  console.log('dataList>>>', dataList);
      //  console.log('updatedList>>>', updatedList);
      
      // setDataList(updatedList);
      console.log('Data saved successfully.');
    } catch (error) {
      console.log('Error saving data:', error);
    }
    //   navigation.navigate("");
  };
  const saveApiData = async () => {
    const allfieldtostore = [{
      user_id: userId, block: block, booth: booth, grampanchayat: grampanchayat, village: village, toll: toll,
      name: name, fatherName: fatherName, cast: cast, age: age, education: education, mobile: mobile,
      voterId: voterId, address: address, gender: gender, vehicle: vehicle.selections, group: group, govtEmploye: govtEmploye,
      party: party, code: code.selections,
      capturedPhoto: capturedPhoto, nariSamman: nariSamman.selections, kisanLoan: kisanLoan.selections,
      facebook: facebook, instagram: instagram, twitter: twitter, longitude: longitude, latitude: latitude
    }]
    const datalist = allfieldtostore && allfieldtostore[0]
    // console.log('datalist>>',datalist);
    dispatch(FormDetailAction(datalist))
  };


  if (device == null) return <Loader />
  // console.log('capturephoto', capturedPhoto);
  const tackPicture = async () => {
    if (cameraRef != null) {
      const photo = await cameraRef.current.takePhoto()
      setCapturedPhoto(photo.path)
      // setTackphotoclickd(false)
      setModalVisible(!modalVisible)
    }

  }

  const handleCheckboxChange = (key) => {
    let sel = vehicle.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setVehicle({
      selections: sel,
    })
  }

  const handleCodeCheckboxChange = (key) => {
    let sel = code.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setCode({
      selections: sel,
    })
  }

  const handleNariSammanCheckboxChange = (key) => {
    let sel = nariSamman.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setNariSamman({
      selections: sel,
    })
  }

  const handleKisanLoanCheckboxChange = (key) => {
    let sel = kisanLoan.selections
    let find = sel.indexOf(key)
    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setKisanLoan({
      selections: sel,
    })
  }



  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View>
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
                <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> वाहन </Text>

                {options.map((item) => {
                  return (
                    <>
                      <View>

                        <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                          <View style={{}}>
                            <CheckBox

                              disabled={false}
                              key={item}
                              tintColors={true ? '#9E663C' : '#4DABEC'}
                              boxType={'circle'}
                              value={vehicle.selections.includes(item)}
                              onValueChange={() => handleCheckboxChange(item)}

                            />
                          </View>

                          <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: '500', color: 'black', }}>{item}</Text>

                        </View>
                      </View>

                    </>
                  )
                })}


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

                {codeOption.map((item) => {
                  return (
                    <>
                      <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-evenly', alignItems: 'center', marginTop: 10 }}>
                        <CheckBox

                          disabled={false}
                          key={item}
                          tintColors={true ? '#9E663C' : '#4DABEC'}
                          boxType={'circle'}
                          value={code.selections.includes(item)}
                          onValueChange={() => handleCodeCheckboxChange(item)}

                        />

                        <TouchableOpacity >
                          <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', }}>{item}</Text>
                        </TouchableOpacity>
                      </View>
                    </>

                  )
                })}


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
                <View style={{ flexDirection: 'row' }}>
                  {narisammanOption.map((item) => {
                    return (
                      <>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginTop: 10 }}>
                          <CheckBox
                            disabled={false}
                            boxType={'circle'}
                            value={nariSamman.selections.includes(item)}
                            onValueChange={() => handleNariSammanCheckboxChange(item)}
                          />
                          <Text style={{ marginLeft: 20 }}>{item}</Text>
                        </View>

                      </>

                    )
                  })}
                </View>



                <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>किसान कर्ज माफी</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>

                  {kisanLoanOption.map((item) => {
                    return (
                      <>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', marginTop: 10 }}>
                          <CheckBox
                            disabled={false}
                            boxType={'circle'}
                            value={kisanLoan.selections.includes(item)}
                            onValueChange={() => handleKisanLoanCheckboxChange(item)}
                          />
                          <Text style={{ marginLeft: 20 }}>{item}</Text>
                        </View>

                      </>

                    )
                  })}


                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                  <Text style={{ marginTop: 30, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center', width: '20%' }}>फेसबुक</Text>
                  <TextInput
                    onChangeText={(txt) =>
                      setFaceBook(txt)
                    }
                    value={facebook}
                    style={{
                      width: '60%', height: 40, borderWidth: 0.5,
                      borderRadius: 10, marginTop: 30,
                      paddingLeft: 10, marginLeft: 10
                    }}
                  />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                  <Text style={{ marginTop: 30, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center', width: '20%' }}>इंस्टाग्राम</Text>
                  <TextInput
                    onChangeText={(txt) =>
                      setInstagram(txt)
                    }
                    value={instagram}
                    style={{
                      width: '60%', height: 40, borderWidth: 0.5,
                      borderRadius: 10, marginTop: 30,
                      paddingLeft: 10, marginLeft: 10
                    }}
                  />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                  <Text style={{ marginTop: 30, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center', width: '20%' }}>ट्विटर</Text>
                  <TextInput
                    onChangeText={(txt) =>
                      setTwitter(txt)
                    }
                    value={twitter}
                    style={{
                      width: '60%', height: 40, borderWidth: 0.5,
                      borderRadius: 10, marginTop: 30,
                      paddingLeft: 10, marginLeft: 10
                    }}
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

        </View>




      </ScrollView>
    </View>
  )
}

export default ExistFormDetail;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});