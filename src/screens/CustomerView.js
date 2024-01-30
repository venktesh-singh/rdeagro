import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Box, Stack } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { argonTheme } from '../constants';
import { Toast } from 'galio-framework';

const CustomerView = () => {
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
    <Header title="Customer View" />
      <ScrollView style={[styles.card, styles.elevation]}>
        <TouchableOpacity>
          <Ionicons
            name="arrow-back"
            size={30}
            style={styles.iconstyle}
            onPress={() => navigation.navigate('Customer View', { name: 'Customer View' })}
          />
        </TouchableOpacity>
        <Box style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <Box style={styles.mainbx}>
                <Stack style={styles.workgrp}>
                <Ionicons name="business" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Contact ID</Text>
                    <Text style={styles.subtext}>ABC1234</Text>
                </Stack>
                </Stack>
                <Stack style={styles.workgrp}>
                <Ionicons name="engineering" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Location</Text>
                    <Text style={styles.subtext}>Lucknow</Text>
                </Stack>
                </Stack>
            </Box>
            </View>
        </Box>

        <Box style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <Box style={styles.mainbx}>
                <Stack style={styles.workgrp}>
                <Ionicons name="business" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Name</Text>
                    <Text style={styles.subtext}>Siya</Text>
                </Stack>
                </Stack>
                <Stack style={styles.workgrp}>
                <Ionicons name="engineering" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Mobile</Text>
                    <Text style={styles.subtext}>9567895678</Text>
                </Stack>
                </Stack>
            </Box>
            </View>
        </Box>

        <Box style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <Box style={styles.mainbx}>
                <Stack style={styles.workgrp}>
                <Ionicons name="business" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Email</Text>
                    <Text style={styles.subtext}>Siya@gmail.com</Text>
                </Stack>
                </Stack>
                <Stack style={styles.workgrp}>
                <Ionicons name="engineering" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Grower Code</Text>
                    <Text style={styles.subtext}>9567895678</Text>
                </Stack>
                </Stack>
            </Box>
            </View>
        </Box>

        <Box style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <Box style={styles.mainbx}>
                <Stack style={styles.workgrp}>
                <Ionicons name="business" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Father Name</Text>
                    <Text style={styles.subtext}>Sia Ram</Text>
                </Stack>
                </Stack>
                <Stack style={styles.workgrp}>
                <Ionicons name="engineering" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Village Code</Text>
                    <Text style={styles.subtext}>ASC@123</Text>
                </Stack>
                </Stack>
            </Box>
            </View>
        </Box>      

        <Box style={styles.listbox}>
            <View style={styles.cardboxclr1}>
            <Box style={styles.mainbx}>
                <Stack style={styles.workgrp}>
                <Ionicons name="business" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Village Name</Text>
                    <Text style={styles.subtext}>Sia Ram Sita Ram</Text>
                </Stack>
                </Stack>
                <Stack style={styles.workgrp}>
                <Ionicons name="engineering" size={45} color="#4F8EF7" />
                <Stack style={styles.innertex}>
                    <Text style={styles.titletext}>Added On</Text>
                    <Text style={styles.subtext}>17-12-2024</Text>
                </Stack>
                </Stack>
            </Box>
            </View>
        </Box>    

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
        // height: 40,
        backgroundColor: '#0081B4',
        borderRadius: 8,
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      sno: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2399c7',
        marginBottom: 6,
      },
      listbox: {
        backgroundColor: '#f3f5fa',
        padding: 10,
        borderRadius: 8,
        marginTop: 12,
        marginBottom: 10,
      },
      boxCard: {
        backgroundColor: '#FFAACF',
        padding: 15,
        borderRadius: 10,
        marginTop: 2,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      remarklistbox: {
        marginTop: 10,
        backgroundColor: '#C1AEFC',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      mainbx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      remarkmainbx: {
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
      rmkworkgrp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      innertex: {
        paddingLeft: 5,
        width: 130,
      },
      rmkinnertex: {
        paddingLeft: 5,
        width: 130,
      },
      titletext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue',
      },
      rmktitletext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2240CD',
      },
      subtext: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      rmksubtext: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      textline: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        // backgroundColor: 'lightpink',
        width: '60%',
      },
      textstatus: {
        color: 'white',
        backgroundColor: '#2240CD',
        width: '30%',
        marginLeft: 220,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute',
        borderRadius: 4,
      },
      container: {
        marginTop: 10,
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
      },
      checkboxContainer: {
        flexDirection: 'row',
        // marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2240CD',
      },
    toast: {
        position: 'absolute',
        top: 0,
    },
});

export default CustomerView;
