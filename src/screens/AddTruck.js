import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as truckActions from '../redux/actions/truck-actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../context';
import Geolocation from 'react-native-geolocation-service';
// import Geocoder from 'react-native-geocoding';

import {
  Block,
  Checkbox,
  theme,
  Button,
  Input,
  Radio,
  Text,
  Toast,
} from 'galio-framework';

//  import { Button, Icon, Input } from "../components";
import {Images, argonTheme, baseUrl} from '../constants';

const {width, height} = Dimensions.get('screen');

const AddTruck = props => {
  const [name, setName] = useState('');
  const [licenseNo, setLicenseNo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [truckImgSource, setTruckImgSource] = useState(null);
  const [licenseFrontSource, setLicenseFrontSource] = useState(null);
  const [licenseBackSource, setLicenseBackSource] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [licensePhotoFront, setLicensePhotoFront] = useState(null);
  const [licensePhotoBack, setLicensePhotoBack] = useState(null);
  const [isShow, setShow] = useState(false);
  const [toastInfo, setToastInfo] = useState({color: '', message: ''});
  const context = useContext(UserContext);
  const user_id = context.user.data.id;
  const [position, setPosition] = useState({});
  useEffect(() => {
    (async () => {
      let user_info = await getUser();
    })();
  }, []);
  //  this is for get the location of the truck user
  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );

      if (granted === 'granted') {
        Geolocation.getCurrentPosition(
          async pos => {
            setPosition(pos?.coords);
          },
          async error => {
            // console.log(error);
            setPosition({});
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    })();
  }, []);

  console.log('postion', position);
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_info');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('data was not fetched from the AsyncStorage');
    }
  };

  const handleToast = (message, color) => {
    setShow(true);
    setToastInfo({message, color});
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const imageSelect = imageType => {
    launchImageLibrary(
      {
        title: 'You can choose one image',
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
          if (imageType == 'truck') {
            setTruckImgSource(source.uri);
            setPhoto(response.base64);
          } else if (imageType == 'licenseFront') {
            setLicenseFrontSource(source.uri);
            setLicensePhotoFront(response.base64);
          } else {
            setLicenseBackSource(source.uri);
            setLicensePhotoBack(response.base64);
          }
        }
      },
    );
  };

  const register = () => {
    if (!name || !city || !state || !pincode) {
      handleToast('One or more fields are empty', 'warning');
      return;
    }

    let address_data = {
      city: city,
      state: state,
      pincode: pincode,
      user_id: user_id,
    };
    // console.log('address_data', address_data);

    props.truckActions.postAddressData(address_data, data => {
      // console.log('data of post', data);
      if (data !== 'error') {
        // console.log('the data was added in the address table', data);
        let truck_data = {
          name: name,
          licenseNo: licenseNo,
          user_id: user_id,
          isApproved: false,
          photo: photo,
          licensePhotoFront: licensePhotoFront,
          licensePhotoBack: licensePhotoBack,
          latitude: position?.latitude,
          longitude: position?.longitude,
        };
        // console.log('=====>TruckData', truck_data);
        // console.log("categoryObj",categoryObj)

        // add 2 more variable for latitude and longitude
        props.truckActions.postTruckData(truck_data, truckData => {
          if (truckData !== 'error') {
            //   console.log('truckDataComponent', truckData)
            //   props.toggleModal();
            clearInput();
            handleToast('The Truck was added successfully!', 'success');
            setTimeout(() => {
              props.navigation.push('Your Truck');
            }, 3200);
            //   props.toggleModal();
          } else {
            handleToast('The Truck was not added due to some error.', 'error');
            return;
          }
        });
      } else {
        handleToast(
          'The Truck was not added due to some server error.',
          'error',
        );
        return;
      }
    });
  };

  const clearInput = () => {
    setCity('');
    setState('');
    setPincode('');
    setName('');
    setLicenseNo('');
    setTruckImgSource(null);
    setLicenseBackSource(null);
    setLicenseFrontSource(null);
  };

  return (
    <Block flex style={{backgroundColor: argonTheme.COLORS.PRIMARY}}>
      <ImageBackground source={Images.DefaultBg} style={{flex: 1, zIndex: 1}}>
        <Block center>
          <Image source={Images.rdeargoLogo} style={styles.logo} />
        </Block>
        <Block style={styles.registerContainer}>
          <ScrollView>
            <Block>
              <Text center bold size={16} muted>
                Please fill in the details for the truck.
              </Text>
            </Block>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Block width={width * 0.94} style={{marginBottom: 10}}>
                <Input
                  borderless
                  placeholder="Truck Name"
                  placeholderTextColor={argonTheme.COLORS.PRIMARY}
                  color={argonTheme.COLORS.BLACK}
                  value={name}
                  onChangeText={text => setName(text)}
                />
              </Block>
            </Block>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Block width={width * 0.45} style={{marginBottom: 10}}>
                <Input
                  borderless
                  placeholder="Your City"
                  placeholderTextColor={argonTheme.COLORS.PRIMARY}
                  color={argonTheme.COLORS.BLACK}
                  value={city}
                  onChangeText={text => setCity(text)}
                />
              </Block>
              <Block width={width * 0.45} style={{marginBottom: 10}}>
                <Input
                  borderless
                  placeholder="State"
                  placeholderTextColor={argonTheme.COLORS.PRIMARY}
                  color={argonTheme.COLORS.BLACK}
                  value={state}
                  onChangeText={text => setState(text)}
                />
              </Block>
            </Block>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Block width={width * 0.45} style={{marginBottom: 10}}>
                <Input
                  borderless
                  placeholder="Zip Code"
                  placeholderTextColor={argonTheme.COLORS.PRIMARY}
                  color={argonTheme.COLORS.BLACK}
                  value={pincode}
                  onChangeText={text => setPincode(text)}
                />
              </Block>
              <Block width={width * 0.45} style={{marginBottom: 10}}>
                <Input
                  borderless
                  placeholder="License No.(optional)"
                  placeholderTextColor={argonTheme.COLORS.PRIMARY}
                  color={argonTheme.COLORS.BLACK}
                  value={licenseNo}
                  onChangeText={text => setLicenseNo(text)}
                />
              </Block>
            </Block>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => imageSelect('truck')}>
                <Text color={argonTheme.COLORS.PRIMARY}>
                  {truckImgSource === null
                    ? 'Add Truck Image'
                    : 'Choose a different Truck image'}
                </Text>
              </TouchableOpacity>

              {truckImgSource === null ? null : (
                <Block row>
                  <Image
                    source={{uri: truckImgSource}}
                    style={styles.imageBox}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    onPress={() => setTruckImgSource(null)}
                    style={{
                      position: 'absolute',
                      left: width - 242,
                      elevation: 5,
                      backgroundColor: '#EEEEEE',
                    }}>
                    <FAIcon
                      name="close"
                      size={30}
                      color={argonTheme.COLORS.MUTED}
                    />
                  </TouchableOpacity>
                </Block>
              )}
            </Block>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => imageSelect('licenseFront')}>
                <Text color={argonTheme.COLORS.PRIMARY}>
                  {licenseFrontSource === null
                    ? 'Add License Front Image'
                    : 'Choose a different license front image'}
                </Text>
              </TouchableOpacity>
              {licenseFrontSource === null ? null : (
                <Block row>
                  <Image
                    source={{uri: licenseFrontSource}}
                    style={styles.imageBox}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    onPress={() => setLicenseFrontSource(null)}
                    style={{
                      position: 'absolute',
                      left: width - 242,
                      elevation: 5,
                      backgroundColor: '#EEEEEE',
                    }}>
                    <FAIcon
                      name="close"
                      size={30}
                      color={argonTheme.COLORS.MUTED}
                    />
                  </TouchableOpacity>
                </Block>
              )}
            </Block>
            <Block
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={styles.touchBtn}
                onPress={() => imageSelect('licenseBack')}>
                <Text color={argonTheme.COLORS.PRIMARY}>
                  {licenseBackSource === null
                    ? 'Add License Back Image'
                    : 'Choose a different license back image'}
                </Text>
              </TouchableOpacity>
              {licenseBackSource === null ? null : (
                <Block row>
                  <Image
                    source={{uri: licenseBackSource}}
                    style={styles.imageBox}
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    onPress={() => setLicenseBackSource(null)}
                    style={{
                      position: 'absolute',
                      left: width - 242,
                      elevation: 10,
                      backgroundColor: '#EEEEEE',
                    }}>
                    <FAIcon
                      name="close"
                      size={30}
                      color={argonTheme.COLORS.MUTED}
                    />
                  </TouchableOpacity>
                </Block>
              )}
            </Block>
          </ScrollView>
          <Block
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button onPress={() => clearInput()}>Reset</Button>
            <Button onPress={() => register()}>Register</Button>
          </Block>
        </Block>
      </ImageBackground>
      <Toast
        isShow={isShow}
        style={styles.toast}
        positionIndicator="top"
        color={toastInfo.color}>
        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
          {toastInfo.message}
        </Text>
      </Toast>
    </Block>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: width,
    flex: 1,
    height: height * 0.5,
    backgroundColor: '#F4F5F7',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 20,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
    display: 'flex',
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    //borderRadius: 50,
    // marginTop: '-50%'
  },
  touchBtn: {
    marginTop: 0,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: argonTheme.COLORS.WHITE,
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    padding: 10,
  },
  imageBox: {
    marginLeft: 0,
    width: 200,
    height: 200,
  },
  toast: {
    position: 'absolute',
    top: 0,
  },
});
const mapStateToProps = (state, props) => {
  // console.log('state.truck', state.truckReducer)
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    truckActions: bindActionCreators(truckActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTruck);
