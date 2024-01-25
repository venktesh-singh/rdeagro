import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../constants/';
import RNPickerSelect from 'react-native-picker-select';

const SelfDeposit = ({ navigation }) => {
  const [paymenttype, setPaymentType] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rememberToken, setRememberToken] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [locationId, setLocationId] = useState('');
  const [userId, setUserId] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleImagePick = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImageUri(source.uri);
      }
    });
  };

  const handleAddAttendance = async () => {
    try {
      const formData = new FormData();
      formData.append('remember_token', rememberToken);
      formData.append('business_id', businessId);
      formData.append('location_id', locationId);
      formData.append('user_id', userId);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);

      const image = {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'attendanceImage.jpg',
      };
      formData.append('image', image);

      const response = await axios.post('https://rdeagro.com/adduserattendance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle response as needed
      console.log('Attendance added:', response.data);

      // Reset fields after successful submission
      setRememberToken('');
      setBusinessId('');
      setLocationId('');
      setUserId('');
      setLatitude('');
      setLongitude('');
      setImageUri('');
    } catch (error) {
      console.error('Error adding attendance:', error);
      Alert.alert('Error adding attendance. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1,backgroundColor:'#e5e5e5', }}>
      <Header title="Self Deposit" />
        <ScrollView>
          <View style={styles.container}>
            <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:10}}>
                <View>
                  <View style={styles.imageContainer}>
                    {imageUri ? (
                      <>
                        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                        <View style={[styles.camicon]}>
                          <Entypo name="camera" size={30} color="#fff" onPress={handleImagePick} style={styles.radicon} />
                        </View>
                      </>
                    ) : (
                      <>
                          <Image source={Images.RegisterBackground} style={styles.imagePreview} />
                          <View style={styles.camicon}>
                            <Entypo name="camera" size={30} color="#fff" onPress={handleImagePick} style={styles.radicon} />
                          </View>
                      </>
                    )}
                  </View>
              </View>

                <View style={styles.inputContainer}>
                    <Entypo name="user" size={24} color="#000" style={styles.icon} />
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                        style={{ ...pickerSelectStyles }}
                    />
                </View>

              <View style={styles.inputContainer}>
                <Entypo name="mail" size={24} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  keyboardType="email-address"
                />
              </View>

              <View style={styles.inputContainer}>
                <Entypo name="message" size={24} color="#000" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Message"
                  value={message}
                  onChangeText={text => setMessage(text)}
                  keyboardType="default"
                />
              </View>

              <TouchableOpacity onPress={handleAddAttendance} style={styles.button} >
                  <Text style={styles.buttonText}>SAVE CHANGES</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      <Footer />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',  
    borderRadius: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#71797E',
    borderRadius: 5,
    padding: 5,
    marginBottom: 16,
  },
  icon: {
    marginRight: 6,
  },

  atttext:{
    fontSize:20,
    paddingBottom: 10,
  },
  boxshadowicon:{
    marginBottom:40,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  camicon: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 1,
    alignItems: 'center', 
  },
  radicon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#0b1e59',
    justifyContent: 'center',  
    alignItems: 'center',    
  },
  button: {
    backgroundColor: '#0b1e59',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },   
  addmap:{
    flex:1
  },
});

export default SelfDeposit;
