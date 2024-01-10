import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Dimensions,Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Button } from 'galio-framework';
import Entypo from 'react-native-vector-icons/Entypo'; 
import Foundation from 'react-native-vector-icons/Foundation'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('screen');

const BillingAddress = () => {
  const [growername, setGrowerName] = useState('');
  const [father, setFather] = useState('');
  const [mobile, steMobile] = useState('');
  const [growerid, setGrowerId] = useState();
  const [village, setVillage] = useState(); 
  const [villagecode, setVillageCode] = useState();

  const handleSubmit = () => {
    if (!growername || !father) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    console.log('Name:', growername);
    console.log('Father:', father);

    setGrowerName('');
    setFather('');

    Alert.alert('Success', 'Form submitted successfully');
  };

  return (
    <>
      <Header title="Billing Address" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="user" size={24} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Grower Name"
              value={growername}
              onChangeText={(text) => setGrowerName(text)}
            />
          </View>  

          <View style={styles.inputContainer}>  
            <View style={styles.iconContainer}>
              <Entypo name="user" size={24} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Father/Husband Name"
              value={father}
              onChangeText={(text) => setFather(text)}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}> 
            <View style={styles.iconContainer}>
              <Foundation name="telephone" size={24} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              value={mobile}
              onChangeText={(text) => steMobile(text)}
            />
          </View>

          <View style={styles.inputContainer}> 
            <View style={styles.iconContainer}>
              <Entypo name="flag" size={24} color="#000" />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Grower ID"
                value={growerid}
                onChangeText={(text) => setGrowerId(text)}
                keyboardType="email-address"
              />
              <View style={styles.iconContainer}>
                <FontAwesome name="search" size={24} color="#000" />
              </View>
          </View> 

          <View style={styles.inputContainer}>  
            <View style={styles.iconContainer}>
              <Foundation name="marker" size={24} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Village"
              value={village}
              onChangeText={(text) => setVillage(text)}
            />
          </View>

          <View style={styles.inputContainer}> 
              <View style={styles.iconContainer}>
                <Foundation name="target-two" size={24} color="#000" />  
              </View>
              <TextInput
                style={styles.input}
                placeholder="Village Code"
                value={villagecode}
                onChangeText={(text) => setVillageCode(text)}
                keyboardType="email-address"
              />
          </View>

          <Button style={styles.subbtn} onPress={handleSubmit} >  Default Shipping Address</Button>
        </View>
        <View style={styles.lastbtn}>
          <Button style={styles.selfbtn}>
              <Text style={styles.selfbtntxt}>Next</Text>
          </Button>
        </View>
      </ScrollView>
      <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 6,
    backgroundColor: '#fff',
  },
  subbtn:{
    width:width * 0.84
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
  iconContainer: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  lastbtn:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  selfbtn:{
    backgroundColor:'#FF7133',  
  },
  selfbtntxt:{ 
    color:'#fff',
    fontSize: 16
  },
});

export default BillingAddress;
