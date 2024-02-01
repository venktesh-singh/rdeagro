import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Box, Stack } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import AntDesign from 'react-native-vector-icons/AntDesign';  
import Entypo from 'react-native-vector-icons/Entypo'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  
import Foundation from 'react-native-vector-icons/Foundation';  
import Fontisto from 'react-native-vector-icons/Fontisto';
import { argonTheme } from '../constants';
import { Toast } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';

const CustomerDetail = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState([]);
  const [isShow, setShow] = useState(false);
  const [toastInfo, setToastInfo] = useState({ color: '', message: '' });

  const handleToast = (message, color) => {
    setShow(true);
    setToastInfo({ message, color });
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };



  return (
    <>
    <Header title="Contact Detail" />
      <ScrollView style={[styles.card, styles.elevation]}>
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={30}
            style={styles.iconstyle}
          />
        </TouchableOpacity>
        <View style={styles.listbox}>
            <View style={styles.cardboxclr1}>
              <View style={styles.mainbx}>
                  <View style={styles.workgrp}>
                    <AntDesign name="contacts" size={45} color="#ffffff" />
                    <View style={styles.innertex}>
                        <Text style={styles.titletext}>Contact ID</Text>
                        <Text style={styles.subtext}>ABC1234</Text>
                    </View>
                  </View>
                  <View style={styles.workgrp}>
                    <Entypo name="address" size={45} color="#ffffff" />
                    <View style={styles.innertex}>
                        <Text style={styles.titletext}>Location</Text>
                        <Text style={styles.subtext}>Lucknow</Text>
                    </View>
                  </View>
              </View>
            </View>
        </View>

        <View style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <View style={styles.mainbx}>
                <View style={styles.workgrp}>
                <AntDesign name="contacts" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Name</Text>
                    <Text style={styles.subtext}>Siya</Text>
                </View>
                </View>
                <View style={styles.workgrp}>
                <AntDesign name="mobile1" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Mobile</Text>
                    <Text style={styles.subtext}>9567895678</Text>
                </View>
                </View>
            </View>
            </View>
        </View>

        <View style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <View style={styles.mainbx}>
                <View style={styles.workgrp}>
                <MaterialCommunityIcons name="email" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Email</Text>
                    <Text style={styles.subtext}>Siya@gmail.com</Text>
                </View>
                </View>
                <View style={styles.workgrp}>
                <MaterialIcons name="folder-special" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Grower Code</Text>
                    <Text style={styles.subtext}>9567895678</Text>
                </View>
                </View>
            </View>
            </View>
        </View>

        <View style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <View style={styles.mainbx}>
                <View style={styles.workgrp}>
                <AntDesign name="contacts" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Father Name</Text>
                    <Text style={styles.subtext}>Sia Ram</Text>
                </View>
                </View>
                <View style={styles.workgrp}>
                <Foundation name="address-book" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Village Code</Text>
                    <Text style={styles.subtext}>ASC@123</Text>
                </View>
                </View>
            </View>
            </View>
        </View>      

        <View style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <View style={styles.mainbx}>
                <View style={styles.workgrp}>
                <Foundation name="address-book" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Village Name</Text>
                    <Text style={styles.subtext}>Sia Ram Sita Ram</Text>
                </View>
                </View>
                <View style={styles.workgrp}>
                <Fontisto name="date" size={45} color="#ffffff" />
                <View style={styles.innertex}>
                    <Text style={styles.titletext}>Added On</Text>
                    <Text style={styles.subtext}>17-12-2024</Text>
                </View>
                </View>
            </View>
            </View>
        </View>    

        </ScrollView>
        <Toast
          isShow={isShow}
          style={styles.toast}
          positionIndicator="top"
          color={toastInfo.color}>  
          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
            {toastInfo.message}
          </Text>
        </Toast>
    <Footer />
    </>
  );
};

const styles = StyleSheet.create({
    cardboxclr1: {
        backgroundColor: '#FDA769',
        borderRadius: 10,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      iconstyle: {
        marginTop: 10,
        width: 40,
        color: 'white',
        backgroundColor: '#0081B4',
        borderRadius: 8,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      listbox: {
        backgroundColor: '#f3f5fa',
        padding: 10,
        borderRadius: 8,
        marginTop: 6,
        marginBottom: 5,
      },
      mainbx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      workgrp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      innertex: {
        paddingLeft: 5,
        width: 130,
      },
      titletext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
      },
      subtext: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      container: {
        marginTop: 10,
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
      },
    toast: {
        position: 'absolute',
        top: 0,
    },
});

export default CustomerDetail;
