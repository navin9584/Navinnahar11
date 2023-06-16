import React,{useEffect,useState} from 'react';
import {Text,View,ScrollView,StyleSheet,Dimensions,BackHandler} from 'react-native'
import CommonButton from '../ReusableComponent/ButtonCompo';
import SelectDropdown from 'react-native-select-dropdown'
import { Dropdown } from 'react-native-element-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getfieldDatafromLoacal } from '../localStorage';
const {width} = Dimensions.get('window');

const LocalData =({navigation})=>{
const [getAlldata,setAllData] = useState()
const [value, setValue] = useState(null);
const [badValue, setBadValue] = useState(false);
const [isFocus, setIsFocus] = useState(false);

console.log('value>>>>',value);

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

useEffect(()=>{
  getItemList()
},[])

    const getItemList = async () => {
        try {
          const value = await getfieldDatafromLoacal()
          if (value !== null) {
            setAllData(value)
            console.log('Retrieved data:', value);
          } else {
            console.log('No data found.');
          }
        } catch (error) {
          console.log('Error retrieving data:', error);
        }
    }

    

    const onDoneClick = () => {
      if(value==null){
        setBadValue(true)
      }else{
        setBadValue(false)
        navigation.navigate('FormDetails')
      }
        
    }
    return(
       <View >
        <View style={styles.container}>
      
    
    {badValue === true && <Text style={{ color: "red", marginLeft: 5,bottom:5 }}>*please select value </Text>}
    {getAlldata &&
    <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={getAlldata}
          search
          maxHeight={300}
          labelField="mobile"
          valueField="mobile"
          placeholder={!isFocus ? 'Select Data' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.mobile);
            setIsFocus(false);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
       
}




{/* <SelectDropdown
            data={arraydata && arraydata.assenblyName}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select Data'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown1searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'darkgrey'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#444'} size={18} />;
            }}
          />
        */}
      
    </View>
        <CommonButton
                    title={'Done Data'}
                    bgColor={'#000'}
                    textColor={"#fff"}
                    customStyle={{width:'80%',height:50}}
                    onPress={() => onDoneClick()}
                     />
       </View>
    )
}
// const styles = StyleSheet.create({
//     shadow: {
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: 6},
//       shadowOpacity: 0.1,
//       shadowRadius: 10,
//       elevation: 10,
//     },
//     header: {
//       flexDirection: 'row',
//       width,
//       height: 50,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#F6F6F6',
//     },
//     headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
//     saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
//     viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
//     scrollViewContainer: {
//       flexGrow: 1,
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingVertical: '10%',
//       paddingBottom: '20%',
//     },
  
//     dropdown1BtnStyle: {
//       width: '80%',
//       height: 50,
//       backgroundColor: '#FFF',
//       borderRadius: 8,
//       borderWidth: 1,
//       borderColor: '#444',
//     },
//     dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
//     dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
//     dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
//     dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  
//     dropdown2BtnStyle: {
//       width: '80%',
//       height: 50,
//       backgroundColor: '#444',
//       borderRadius: 8,
//     },
//     dropdown2BtnTxtStyle: {
//       color: '#FFF',
//       textAlign: 'center',
//       fontWeight: 'bold',
//     },
//     dropdown2DropdownStyle: {
//       backgroundColor: '#444',
//       borderBottomLeftRadius: 12,
//       borderBottomRightRadius: 12,
//     },
//     dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
//     dropdown2RowTxtStyle: {
//       color: '#FFF',
//       textAlign: 'center',
//       fontWeight: 'bold',
//     },
  
//     dropdown3BtnStyle: {
//       width: '80%',
//       height: 50,
//       backgroundColor: '#FFF',
//       paddingHorizontal: 0,
//       borderWidth: 1,
//       borderRadius: 8,
//       borderColor: '#444',
//     },
//     dropdown3BtnChildStyle: {
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 18,
//     },
//     dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
//     dropdown3BtnTxt: {
//       color: '#444',
//       textAlign: 'center',
//       fontWeight: 'bold',
//       fontSize: 24,
//       marginHorizontal: 12,
//     },
//     dropdown3DropdownStyle: {backgroundColor: 'slategray'},
//     dropdown3RowStyle: {
//       backgroundColor: 'slategray',
//       borderBottomColor: '#444',
//       height: 50,
//     },
//     dropdown3RowChildStyle: {
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//       paddingHorizontal: 18,
//     },
//     dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
//     dropdown3RowTxt: {
//       color: '#F1F1F1',
//       textAlign: 'center',
//       fontWeight: 'bold',
//       fontSize: 24,
//       marginHorizontal: 12,
//     },
  
//     dropdown4BtnStyle: {
//       width: '50%',
//       height: 50,
//       backgroundColor: '#FFF',
//       borderRadius: 8,
//       borderWidth: 1,
//       borderColor: '#444',
//     },
//     dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
//     dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
//     dropdown4RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
//     dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
//   });
export default LocalData;


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
    color:'black'
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