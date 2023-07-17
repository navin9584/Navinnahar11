import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, ScrollView, BackHandler, TouchableOpacity, StyleSheet, Linking, Image, Modal, Pressable, TextInput } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import TextInputCompo from '../ReusableComponent/TextInputCompo';
import CheckBox from '@react-native-community/checkbox';
import { setfieldDataintoLoacal, getFilterDatafromdrodown, getfieldDatafromLoacal, getLoginCred,setfieldDataintoLoacalforone ,setdateTimeLatLong, getdateTimeLatLong} from '../localStorage';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Loader from '../ReusableComponent/Loader';
import { FormDetailAction } from '../../redux/FormDetailApi';
import { checkNetworkConnectivity } from '../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { FormListApi } from '../../redux/FormListApi';
import { Picker } from '@react-native-picker/picker'
// import CheckBox from 'react-native-check-box'

const FreshData = ({ navigation }) => {

  const dispatch = useDispatch();
  const cameraRef = useRef(null);
  const [longitude, setLongitude] = useState()
  const [latitude, setLatitude] = useState()
  const [dateTime, setDateTime] = useState()

  const [vehicleValidate, setVehicleValidate] = useState(false)
  const [badvehicleValidate, setBadvehicleValidate] = useState(false)



  const [nariSammanYes, setNariSammanYes] = useState(false)
  const [badNariSamman, setBadNariSamman] = useState(false);

  const [narisammanValidate, setNariSammanValidate] = useState(false)
  const [badnarisammanValidate, setBadNariSammanValidate] = useState(false)

  const [kisanKarjMafi, setKisanKarjMafi] = useState(false)
  const [kisanKarjMafiCongress, setKisanKarjMafiCongress] = useState(false)
  const [kisanKarjMafiBjp, setKisanKarjMafiBjp] = useState(false)
  const [kisanKarjMafiValidate, setKisanKarjMafiValidate] = useState(false)


  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [cast, setCast] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState();
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
  const [boothno, setBoothNo] = useState('');
  const [grampanchayat, setGramPanchayat] = useState('');
  const [village, setVillage] = useState('');
  const [toll, setToll] = useState('');
  const [badblock, setBadblock] = useState(false);
  const [badBooth, setBadBooth] = useState(false);
  const [badBoothno, setBadBoothNo] = useState(false);
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

  const [code, setCode] = useState({ selections: [] })
  const [vehicle, setVehicle] = useState({ selections: [] });
  const [nariSamman, setNariSamman] = useState({ selections: [] })
  const [kisanLoan, setKisanLoan] = useState({ selections: [] })
  const options = ['2 व्हीलर', '4 व्हीलर', 'कोई वाहन नहीं है']
  const codeOption = ['BC (बूथ कमीटी)','PP (पेज प्रभारी)', 'IP (प्रभावशाली व्यक्ति)','FH(परिवार का मुखिया)','SC (सीनियर कांग्रेस)','YC (यूथ कांग्रेस)', 'FP (फलिया प्रभारी)', 'ER (इलेक्शन)',]
  const narisammanOption = ['Yes', 'No']
  const kisanLoanOption = ['नही', 'कांग्रेस', 'बीजेपी']
  const [isFocus, setIsFocus] = useState(false);
  const [countData,setCountData] = useState()
  const [localLoginData ,setLocalLoginData] = useState()
  // const twoWheeler = "टू व्हीलर"
  // const fourWheeler = "फोर व्हीलर"
  // const noWheeler = "कोई वाहन नहीं है"
  // console.log('cast>>',cast);
  const [isChecked, setIsChecked] = useState({
    twoWheeler: false,
    fourWheeler: false,
    noWheeler: false,
  })

  const vehicles = isChecked.twoWheeler == true ? isChecked.fourWheeler == true ? isChecked.noWheeler == true ? "टू व्हीलर" : "फोर व्हीलर" : 'कोई वाहन नहीं है' : ""

  const data = useSelector(state => state);
  const formData = data.formData.data
  const loginData = data.loginData.data && data.loginData.data.userdata
  const userId = loginData && loginData.userId
  const localUserId =localLoginData && localLoginData.userId

  // console.log('localLoginData>>>', localLoginData.userId);
  // console.log('listDataa>>>>>>>',data);



  const onPressNext1 = async() => {
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
    if (boothno == '') {
      setBadBoothNo(true)
    } else {
      setBadBoothNo(false)
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
      dateTimLatLongFun()

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
  const [camerView, setcameraView] = useState()
  const [timeData, setTimeData] = useState()

  const devices = useCameraDevices("wide-angle-camera")
  const device = devices.back
  const deviceFront = device



  const rotateFun = () => {
    setcameraView(camerView)
  }


  const checkPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission()
    if (permission === 'denied') {
      await Linking.openSettings()
    }
  }, [devices])

  useEffect(() => {
    checkPermission()
  }, [checkPermission, devices])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      localdateTimelat()
      
    });

    // return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getfieldDatafromLoacal()
    getData()
  }, [countData])

  useEffect(() => {
    localdateTimelat()
},[timeData])

const localdateTimelat =  async() => {
    const getDateTimefromLoacal = await getdateTimeLatLong()
     setTimeData(getDateTimefromLoacal)
}

// console.log('timeData///////////////>>>>',timeData)

  const getData = async () => {
    const loginData = await getLoginCred();
    setLocalLoginData(loginData)
    // console.log('locallogindata>>', loginData);

  }



  const onSubmit = () => {
      saveDataIntoLocal()
  }



  Geolocation.getCurrentPosition(info => setLongitude(info.coords.longitude));
  Geolocation.getCurrentPosition(info => setLatitude(info.coords.latitude));
  // Geolocation.getCurrentPosition(info => setDateTime(new Date(info.timestamp * 1000)));
  const currentdate = new Date(); 
  const datetime =currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

                // console.log('datetime??????????',datetime);

const dateTimeInfo = {"startdate":datetime,"lat":latitude,"long":longitude,}
  const dateTimLatLongFun = async()=>{
       await setdateTimeLatLong(dateTimeInfo)
  }



  const saveDataIntoLocal = async () => {
    let dataarray = []
    
    try {
      const allfieldtostore = {"user_id":localUserId,"block_name_number":block,"votarcode":voterId,"booth_name_number":booth,"grampanchayat":grampanchayat,"village":village,"toll":toll,"name":name,
        "fathername":fatherName,"jaati":cast,"age":age,"education":education,"mobile":mobile,"lat":timeData.lat,"long":timeData.long,"address":address,"gender":gender,"vehicle":vehicle.selections.toString(),
        "group":group,"government_employee":govtEmploye,"parti":party,"code":code.selections.toString(),"servayid":"servayid","respect_for_women":nariSamman.selections.toString(),image: capturedPhoto,
        "farmer_loan_waiver":kisanLoan.selections.toString(),"facebook":facebook,"twitter":twitter,"instagram":instagram,"end_lat":latitude,"end_long":longitude,"startdate":timeData.startdate,"enddate":datetime}


        // "user_id": loginData.userId, "block_name_number": block, 'booth_name_number': booth, 'grampanchayat': grampanchayat, 'village': village, 'toll': toll,
        // "name": name, "fatherName": fatherName, "jaati": cast, "age": age, "education": education, "mobile": mobile,
        // "voterId": voterId, "address": address, "gender": gender, "vehicle": vehicle.selections.toString(), "group": group, "government_employee": govtEmploye,
        // "parti": party, "code": code.selections.toString(),
        //  "respect_for_women": nariSamman.selections.toString(),
        // "farmer_loan_waiver": kisanLoan.selections.toString(), "facebook": facebook, "instagram": instagram, "twitter": twitter, "long": longitude, "lat": latitude,
        // "servayid":"servayid","end_lat":"0.009090","end_long":"0.00","startdate":"2023-07-12","enddate":"2023-07-12"
      
      let newArray = await getfieldDatafromLoacal()
      console.log('newarrrayayayyayyayy', newArray);
      if (newArray == null || newArray == undefined) {
        dataarray.push(allfieldtostore)
        await setfieldDataintoLoacal(dataarray);
        console.log('dataarray>>>>>>>>>>>', dataarray);
      } else {
        newArray.push(allfieldtostore)
        await setfieldDataintoLoacal(newArray);
      }
      console.log('Data saved successfully.');
      // getDataLocalData()
      navigation.navigate('DataButtons')
    } catch (error) {
      console.log('Error saving data:', error);
    }
    //   navigation.navigate("");
    console.log('countsssssssssssssssss',countData);
  
    
  };

  const getDataLocalData = async () => {
    try {
      const value = await getfieldDatafromLoacal()
      if(value !== null) {
        setCountData(value)
        // value previously stored
        console.log('value>>>>>>??????????????????????????',value.length);
      }
    } catch(e) {
      // error reading value
    }
  }
 

  const saveApiData = async () => {
    const allfieldtostore = [{
      user_id: userId, block: block, booth: booth, grampanchayat: grampanchayat, village: village, toll: toll,
      name: name, fatherName: fatherName, cast: cast, age: age, education: education, mobile: mobile,
      voterId: voterId, address: address, gender: gender, vehicle: vehicle.selections, group: group, govtEmploye: govtEmploye,
      party: party, code: code.selections,
      capturedPhoto: capturedPhoto, nariSamman: nariSamman.selections, kisanLoan: kisanLoan.selections,
      facebook: facebook, instagram: instagram, twitter: twitter, longitude: longitude, latitude: latitude
    }]
    const datalist = allfieldtostore
    // console.log('datalist/////////////////////>>', datalist);
    dispatch(FormDetailAction(datalist))
    AllExistingDataList()
    // navigation.navigate('DataButtons')
  };

  const AllExistingDataList = async () => {
    try {
      const requestData = {
        user_id: localLoginData.userId,
      };
       dispatch(FormListApi(requestData))
      // setListCount(AllData.payload.totalrow)
    } catch (error) {
      console.log(error);
    }
  }


  // if (deviceFront == null) return <Loader />


  const tackPicture = async () => {
    if (cameraRef != null) {
      const photo = await cameraRef.current.takePhoto()
      setCapturedPhoto(photo.path)
      // setTackphotoclickd(false)
      setModalVisible(!modalVisible)
    }

  }

  // if (deviceFront == null) return <Loader />


  const tackPicturefront = async () => {
    if (cameraRef != null) {
      const photo = await cameraRef.current.takePhoto()
      setCapturedPhoto(photo.path)
      // setTackphotoclickd(false)
      setModalVisible(!modalVisible)
    }

  }

  const handleCheckboxChange = (key) => {
    console.log('key>>>>>>>>>>>', key);
    let vehicles = []
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
    console.log('find>>>>>', find);
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


  // console.log('state>>>', kisanLoan.selections);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View>
          
          {buttonShow1 &&
            <View>
              <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', marginTop: 10 }}>{'गंधवानी विधानसभा 197'}</Text>
              <View style={{ marginTop: 20 }}>

                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> ब्लॉक नाम </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setBlock(txt)
                  }
                  value={block} />
                {badblock === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> बूथ नाम </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setBooth(txt)
                  }
                  value={booth} />
                {badBooth === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

                <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', textAlign: 'center' }}> बूथ नंबर </Text>
                <TextInputCompo
                  onChangeText={(txt) =>
                    setBoothNo(txt)
                  }
                  value={boothno} />
                {badBoothno === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


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

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
              {/* <TextInputCompo
                onChangeText={(txt) =>
                  setCast(txt)
                }
                value={cast} /> */}
              {/* <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={[cast]}
         
          
          maxHeight={300}
          labelField=""
          valueField=""
          placeholder={!isFocus ? 'Select Data' : '...'}
          value={'value'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCast(item);
            setIsFocus(false);
            // setBadValue(false)
          }}
         
        /> */}
              <View style={[styles.dropdown]}>
                <Picker
                  //  style={[styles.dropdown]}
                  itemStyle={{ color: 'red' }}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  selectedValue={cast}
                  onValueChange={(itemValue, itemIndex) =>
                    setCast(itemValue)
                  }>
                  <Picker.Item label="लिस्ट से चुनै" value="" />
                  <Picker.Item label="एस टी (भील)" value="एस टी (भील)" />
                  <Picker.Item label="एस टी (भीलाला)" value="एस टी (भीलाला)" />
                  <Picker.Item label="मुस्लिम" value="मुस्लिम" />
                  <Picker.Item label="ब्राह्मण" value="ब्राह्मण" />
                  <Picker.Item label="सिरवी" value="सिरवी" />
                  <Picker.Item label="माहेश्वरी" value="माहेश्वरी" />
                  <Picker.Item label="प्रजापति" value="प्रजापति" />
                  <Picker.Item label="राजपूत" value="राजपूत" />
                  <Picker.Item label="लोहार" value="लोहार" />
                  <Picker.Item label="सिख" value="सिख" />
                  <Picker.Item label="राठौर" value="राठौर" />
                  <Picker.Item label="जैन" value="जैन" />
                  <Picker.Item label="बोहरा" value="बोहरा" />
                  <Picker.Item label="अन्य" value="अन्य" />
                </Picker>
              </View>
              {badcast === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> आयु </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setAge(txt)
                }
                value={age} />
              {badage === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> शिक्षा </Text>
              {/* <TextInputCompo
                onChangeText={(txt) =>
                  setEducation(txt)
                }
                value={education} /> */}
                  <View style={[styles.dropdown]}>
                <Picker
                  //  style={[styles.dropdown]}
                  itemStyle={{ color: 'red' }}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  selectedValue={education}
                  onValueChange={(itemValue, itemIndex) =>
                    setEducation(itemValue)
                  }>
                  <Picker.Item label="लिस्ट से चुनै" value="" />
                  <Picker.Item label="अशिक्षित" value="अशिक्षित" />
                  <Picker.Item label="प्राइमरी स्कूल (5th)" value="प्राइमरी स्कूल (5th)" />
                  <Picker.Item label="मिडिल स्कूल (8th)" value="मिडिल स्कूल (8th)" />
                  <Picker.Item label="हाई स्कूल (10th)" value="हाई स्कूल (10th)" />
                  <Picker.Item label="हायर सेकेंडरी स्कूल (12th)" value="हायर सेकेंडरी स्कूल (12th)" />
                  <Picker.Item label="ग्रेजुएट" value="ग्रेजुएट" />
                  <Picker.Item label="पोस्ट ग्रेजुएट" value="पोस्ट ग्रेजुएट" />
                </Picker>
              </View>
              {badeducation === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> मोबाइल नंबर </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setMobile(txt)
                }
                value={mobile} />
              {badmobile === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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

              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}>वोटर आईडी</Text>
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
              {/* <TextInputCompo
                onChangeText={(txt) =>
                  setGender(txt)
                }
                value={gender} /> */}
                 <View style={[styles.dropdown]}>
                <Picker
                  //  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  selectedValue={gender}
                  onValueChange={(itemValue, itemIndex) =>
                    setGender(itemValue)
                  }>
                  <Picker.Item label="लिस्ट से चुनै" value="" />
                  <Picker.Item label="पुरुष" value="पुरुष" />
                  <Picker.Item label="महिला" value="महिला" />
                  <Picker.Item label="अन्य" value="अन्य" />
                </Picker>
              </View>
              {badgender === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}


              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> ग्रुप </Text>
              <TextInputCompo
                onChangeText={(txt) =>
                  setGroup(txt)
                }
                value={group} />
              {badgroup === true && <Text style={{ color: "red", marginLeft: 30 }}>*Required field</Text>}
              <Text style={{ marginTop: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> वाहन </Text>

              {options.map((item, key) => {
                return (
                  <>
                    <View>

                      <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                        <View style={{}}>
                          <CheckBox

                            disabled={false}
                            key={key}
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
              {/* 
              <View>

                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                      setIsChecked({...isChecked,twoWheeler: !isChecked.twoWheeler})
                    }}
                    isChecked={isChecked.twoWheeler}
                    rightText={"टू व्हीलर"}
                  />
                 
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                      setIsChecked({...isChecked,fourWheeler: !isChecked.fourWheeler})
                    }}
                    isChecked={isChecked.fourWheeler}
                    rightText={"फोर व्हीलर"}
                  />
                 
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 40 }}>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    onClick={() => {
                      setIsChecked({...isChecked,noWheeler: !isChecked.noWheeler})
                    }}
                    isChecked={isChecked.noWheeler}
                    rightText={"कोई वाहन नहीं है"}
                  />
                 
                </View>
              </View> */}


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
              <Text style={{ top: 20, fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 30 }}> सरकारी कर्मचारी - Yes/No </Text>
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
                    <View style={{ flexDirection: 'row', marginTop: 10,marginLeft:50 }}>
                      <CheckBox

                        disabled={false}
                        key={item}
                        tintColors={true ? '#9E663C' : '#4DABEC'}
                        boxType={'circle'}
                        value={code.selections.includes(item)}
                        onValueChange={() => handleCodeCheckboxChange(item)}

                      />

                      <View >
                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black',marginLeft:10 }}>{item}</Text>
                      </View>
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

                  {/* <TouchableOpacity onPress={() => setcameraView(deviceFront.front)} style={{
                    height: 60, width: 60, borderRadius: 30,
                    backgroundColor: 'blue', alignSelf: 'center', position: 'absolute', bottom: 40, marginLeft: 30
                  }}></TouchableOpacity> */}
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
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    alignSelf: 'center',
    marginTop: 30
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

export default FreshData;