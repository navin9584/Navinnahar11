import React,{useState,useEffect} from 'react';
import { View, Text,ScrollView,BackHandler } from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import TextInputCompo from '../ReusableComponent/TextInputCompo';

const FreshData = ({navigation}) => {

    const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [code, setCode] = useState('');
  const [education, setEducation] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [badName, setBadName] = useState(false);
  const [badFather, setBadFather] = useState(false);
  const [badage, setBadAge] = useState(false);
  const [badcode, setBadcode] = useState(false);
  const [badeducation, setBadeducation] = useState(false);
  const [badpincode, setBadpincode] = useState(false);

  const [voterId, setVoterId] = useState('');
  const [address, setAddress] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [group, setGroup] = useState('');
  const [govtEmploye, setGovtEmploye] = useState('');
  const [badvoterid, setBAdvoterid] = useState(false);
  const [badaddress, setBadaddress] = useState(false);
  const [badvehicle, setBadvehicle] = useState(false);
  const [badgroup, setBadgroup] = useState(false);
  const [badgovtemploy, setBadgovtemploy] = useState(false);

  const [block, setBlock] = useState('');
  const [cast, setCast] = useState('');
  const [gender, setGender] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [verification, setVerification] = useState('');
  const [badblock, setBadblock] = useState(false);
  const [badcast, setbadCast] = useState(false);
  const [badgender, setBadgender] = useState(false);
  const [badbloodgroup, setBadbloodgroup] = useState(false);
  const [badverification, setBadverification] = useState(false);
  


  const [buttonShow1,setButtonShow1] = useState(true)
  const [buttonShow2,setButtonShow2] = useState(false)
  const [buttonShow3,setButtonShow3] = useState(false)

  const onPressNext1=()=>{
    if (name == '') {
        setBadName(true);
    }else{
        setBadName(false);
    }
     if(fatherName == '') {
        setBadFather(true)
    }else{
        setBadFather(false)
        }
        if(age == '') {
            setBadAge(true)
        }else{
            setBadAge(false)
            }
            if(code == '') {
                setBadcode(true)
            }else{
                setBadcode(false)
                }
                if(education == '') {
                    setBadeducation(true)
                }else{
                    setBadeducation(false)
                    }
                    if(pinCode == '') {
                        setBadpincode(true)
                    }else{
                        setBadpincode(false)
                        setButtonShow1(false)
                        setButtonShow2(true)
                        setButtonShow3(false)
 
                        }
                       
  }

  const onPressNext2=()=>{
    if (voterId == '') {
        setBAdvoterid(true);
    }else{
        setBAdvoterid(false);
    }
     if(address == '') {
        setBadaddress(true)
    }else{
        setBadaddress(false)
        }
        if(vehicle == '') {
            setBadvehicle(true)
        }else{
            setBadvehicle(false)
            }
            if(group == '') {
                setBadgroup(true)
            }else{
                setBadgroup(false)
                }
                if(govtEmploye == '') {
                    setBadgovtemploy(true)
                }else{
                    setBadgovtemploy(false)
                    setButtonShow1(false)
                    setButtonShow2(false)
                    setButtonShow3(true)
                    }
                   
  }

  const onSubmit=()=>{
    if (block == '') {
        setBadblock(true);
    }else{
        setBadblock(false);
    }
     if(cast == '') {
        setbadCast(true)
    }else{
        setbadCast(false)
        }
        if(gender == '') {
            setBadgender(true)
        }else{
            setBadgender(false)
            }
            if(bloodgroup == '') {
                setBadbloodgroup(true)
            }else{
                setBadbloodgroup(false)
                }
                if(verification == '') {
                    setBadverification(true)
                }else{
                    setBadverification(false)
                    navigation.navigate('Questioner')
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

const onBckPress=()=>{
 navigation.goBack()
}

const onBckPress1=()=>{
    setButtonShow1(true)
    setButtonShow2(false)
    setButtonShow3(false)
}
  
const onBckPress2=()=>{
                    setButtonShow1(false)
                    setButtonShow2(true)
                    setButtonShow3(false)
}

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {buttonShow1 &&
        <View style={{marginTop:20}}>
           
           <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Name </Text>
      <TextInputCompo  
        onChangeText={(txt) =>
          setName(txt)
        }
        value={name} />
         {badName === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Father Name </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setFatherName(txt)
        }
        value={fatherName} />
         {badFather === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Code </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setCode(txt)
        }
        value={code} />
     {badcode === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Age </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setAge(txt)
        }
        value={age} />
         {badage === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}
        
        <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Education </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setEducation(txt)
        }
        value={education} />
      {badeducation === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

<Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> PinCode no </Text>
      <TextInputCompo
        onChangeText={(txt) =>
          setPinCode(txt)
        }
        value={pinCode} />
         {badpincode === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}
        <View style={{bottom:30,flexDirection:'row',justifyContent:'space-around'}}>
        <CommonButton
                    title={'Back'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'45%',height:50}}
                    onPress={() => onBckPress()}
                     />
 <CommonButton
                    title={'Next'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'45%',height:50}}
                    onPress={() => onPressNext1()}
                     />
                     </View>
        </View>
}
        

    {buttonShow2 &&
        <View style={{marginTop:20}}>
           
           <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Voter Id </Text>
      <TextInputCompo  
        onChangeText={(txt) =>
          setVoterId(txt)
        }
        value={voterId} />
       {badvoterid === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Address </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setAddress(txt)
        }
        value={address} />
        {badaddress === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Vehicle </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setVehicle(txt)
        }
        value={vehicle} />
        {badvehicle === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

        
        <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Group </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setGroup(txt)
        }
        value={group} />
        {badgroup === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


<Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Govt Employee - Y/N </Text>
      <TextInputCompo
        onChangeText={(txt) =>
          setGovtEmploye(txt)
        }
        value={govtEmploye} />
        {badgovtemploy === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


        <View style={{bottom:30,flexDirection:'row',justifyContent:'space-around'}}>
        <CommonButton
                    title={'Back'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'45%',height:50}}
                    onPress={() => onBckPress1()}
                     />
 <CommonButton
                    title={'Next'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'45%',height:50}}
                    onPress={() => onPressNext2()}
                     />
                     </View>
        </View>}


        {buttonShow3 &&
        <View style={{marginTop:20}}>
           
           <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Block number </Text>
      <TextInputCompo  
        onChangeText={(txt) =>
          setBlock(txt)
        }
        value={block} />
        {badblock === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Cast </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setCast(txt)
        }
        value={cast} />
   {badcast === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


      <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Gender </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setGender(txt)
        }
        value={gender} />
        {badgender === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

        
        <Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Blood Group </Text>
      <TextInputCompo 
        onChangeText={(txt) =>
          setBloodgroup(txt)
        }
        value={bloodgroup} />
        {badbloodgroup === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}


<Text style={{top:20,fontSize:16,fontWeight:'bold',color:'black',marginLeft:30}}> Varification </Text>
      <TextInputCompo
        onChangeText={(txt) =>
          setVerification(txt)
        }
        value={verification} />
        {badverification === true && <Text style={{ color: "red",marginLeft:30 }}>*Required field</Text>}

        <View style={{bottom:30,flexDirection:'row',justifyContent:'space-around'}}>
        <CommonButton
                    title={'Back'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'45%',height:50}}
                    onPress={() =>onBckPress2() }
                     />
 <CommonButton
                    title={'Submit'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'45%',height:50}}
                    onPress={() => onSubmit()}
                     />
                     </View>
        </View>}

        </ScrollView>
    )
}

export default FreshData;