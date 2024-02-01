import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert, Picker, ScrollView, TouchableOpacity } from 'react-native';  
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import AntDesign from 'react-native-vector-icons/AntDesign';  
import Entypo from 'react-native-vector-icons/Entypo'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';   
import Fontisto from 'react-native-vector-icons/Fontisto';  
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; 
import Foundation from 'react-native-vector-icons/Foundation';  

const CustomerAdd = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('common');
  const [selectInformation, setSelectInformation] = useState('information');
  const toggleInformation = () => {
    setSelectInformation((prev) => (prev === null ? 'information' : null));
  };

  
  
  return (
    <View style={{ flex: 1,backgroundColor:'#e5e5e5', }}>
      <Header title="Add Contact" />
        <ScrollView>
          <View style={styles.container}>
            <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:10}}>

                <View style={styles.addradiobtn}>
                  <TouchableOpacity
                    style={[styles.radioButton, selectedOption === 'common' && styles.selectedButton]}
                    onPress={() => setSelectedOption('common')}>
                  <Text style={styles.rdbtn}>Common</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.radioButton, selectedOption === 'Individual' && styles.selectedButton]}
                    onPress={() => setSelectedOption('Individual')}>
                    <Text style={styles.rdbtn}>Individual</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.radioButton, selectedOption === 'Business' && styles.selectedButton]}
                    onPress={() => setSelectedOption('Business')}>
                    <Text style={styles.rdbtn}>Business</Text>
                  </TouchableOpacity>
                </View>

                {selectedOption === 'Commom' && (
                  <>
                    <View style={styles.inputContainer}>
                        <AntDesign name="mobile1" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Mobile"
                        keyboardType="default"
                        />
                    </View> 
                    <View style={styles.inputContainer}>
                        <Foundation name="telephone" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Alternate Contact Number"
                        keyboardType="default"
                        />
                    </View> 

                    <View style={styles.inputContainer}>
                        <Foundation name="telephone" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Landline"
                        keyboardType="default"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name="email" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="default"
                        />
                    </View>
                  </>
                )}

                {selectedOption === 'Business' && (
                  <>
                    <View style={styles.inputContainer}>
                        <Ionicons name="business" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Business Name"
                        keyboardType="default"
                        />
                    </View> 
                  </>
                )}

                {selectedOption === 'Individual' && (
                  <>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Mr / Mrs / Miss"
                        keyboardType="default"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        keyboardType="default"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Middle Name"
                        keyboardType="default"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Last Name"
                        keyboardType="default"
                        />
                    </View>
                  </>
                  
                )}
   

                <View style={styles.inputContainer}>
                    <AntDesign name="mobile1" size={24} color="#000" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder="Mobile"
                    keyboardType="default"
                    />
                </View> 
                <View style={styles.inputContainer}>
                    <Foundation name="telephone" size={24} color="#000" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder="Alternate Contact Number"
                    keyboardType="default"
                    />
                </View> 

                <View style={styles.inputContainer}>
                    <Foundation name="telephone" size={24} color="#000" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder="Landline"
                    keyboardType="default"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name="email" size={24} color="#000" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="default"
                    />
                </View>


                <TouchableOpacity style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={toggleInformation}>
                    <Text style={[styles.buttonText, styles.informationButton, selectInformation === 'information' && styles.informationButton]}>
                      More Information <SimpleLineIcons name="arrow-down" size={14} color="#fff" style={styles.icon} />
                    </Text>
                  </TouchableOpacity>
                </TouchableOpacity>

                {selectInformation === 'information' && (
                  <>
                    <View style={{ borderWidth: 1, marginBottom:20, marginTop:20 }}></View>  

                    <View style={styles.inputContainer}>
                        <Entypo name="address" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Address Line 1"
                        keyboardType="default"
                        />
                    </View> 

                    <View style={styles.inputContainer}>
                        <Entypo name="address" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Address Line 2"
                        keyboardType="default"
                        />
                    </View> 

                    <View style={styles.inputContainer}>
                        <Ionicons name="location" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="City"
                        keyboardType="default"
                        />
                    </View> 

                    <View style={styles.inputContainer}>
                        <Ionicons name="location" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="State"
                        keyboardType="default"
                        />
                    </View> 

                    <View style={styles.inputContainer}>
                        <Fontisto name="world-o" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Country"
                        keyboardType="default"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="location" size={24} color="#000" style={styles.icon} />
                        <TextInput
                        style={styles.input}
                        placeholder="Zip Code"
                        keyboardType="default"
                        />
                    </View>

                    <View style={{ borderWidth: 1, marginBottom:20 }}></View> 

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Grower Code"
                        keyboardType="default"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Father Name"
                        keyboardType="default"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Village Code"
                        keyboardType="default"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="Village Name"
                        keyboardType="default"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="GSTN No"
                        keyboardType="default"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.input}
                        placeholder="PAN No"
                        keyboardType="default"
                        />
                    </View>
                </>
                )}

                <TouchableOpacity style={styles.buttonContainer} >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      <Footer />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  addradiobtn:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10,
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
    paddingLeft: 10,
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
    bottom: 50,
    left: 200, 
    top:80, 
    zIndex: 1,
    textAlign: 'center', 
    //backgroundColor: '#0b1e59', 
  },
  radicon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    color: '#000',
    justifyContent: 'center',  
    alignItems: 'center',    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
},
button: {
    backgroundColor: '#1572e8', // Example background color
    padding: 10,
    borderRadius: 5,
    margin: 5,
},
buttonC:{
    backgroundColor: '#e6e6e6', 
    padding: 10,
    borderRadius: 5,
    margin: 5,
    color:'#000'  
},
buttonText: {
    color: 'white', // Example text color
    textAlign: 'center',
}, 
  addmap:{
    flex:1
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin:5
  },
  selectedButton: {
    backgroundColor: '#1572e8',
  },
  rdbtn: {
    color:'#000'
  }
});

export default CustomerAdd;
