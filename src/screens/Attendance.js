import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const AddAttendanceScreen = ({ navigation }) => {
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
    <View style={styles.container}>
      <Text style={styles.label}>Remember Token:</Text>
      <TextInput
        style={styles.input}
        value={rememberToken}
        onChangeText={setRememberToken}
        placeholder="Enter Remember Token"
      />

      {/* Add input fields for other mandatory data (businessId, locationId, userId, latitude, longitude) */}

      <Button title="Pick Image" onPress={handleImagePick} />

      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      ) : (
        <Text>No image selected</Text>
      )}

      <Button title="Add Attendance" onPress={handleAddAttendance} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default AddAttendanceScreen;
