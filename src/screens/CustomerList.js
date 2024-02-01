import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'; 
import { argonTheme } from '../constants/';
import { Toast } from 'galio-framework';
import { useContext } from 'react';
import { UserContext } from '../context';
import { baseUrl } from '../constants/';
import axios from 'axios';

const CustomerList = () => {
    const [userData, setUserData] = useState([]);
    const [isShow, setShow] = useState(false);
    const [toastInfo, setToastInfo] = useState({color: '', message: ''});
    const userCData = useContext(UserContext);  
    const business_id = userCData?.user?.data?.data?.business_id;
    const location_id = userCData?.user?.data?.data?.location_id;
    const remember_token = userCData?.user?.data?.remember_token;  
    console.log("All Contact data : ", userData.data);        
  
    const getData = async () => {  
      try {
        if (remember_token) {
          const response = await axios.post(`${baseUrl}/getcontactslist?remember_token=${remember_token}&business_id=${business_id}&location_id=${location_id}`);
          const responseData = response?.data?.data || []; // Extracting data from the response
          console.log("Response All Contact Data:", JSON.stringify(response?.data, null, 2));   
          setUserData(responseData)  
        } else {  
          console.log("Token not getting", remember_token)
        }
      } catch (error) {
        console.error("Error fetching categories data", error);
        handleToast('Error fetching categories data. Try again later.', 'error');
      }
    };
  
    useEffect(() => {
      getData();
    }, [remember_token]);

    const handleToast = (message, color) => {
      setShow(true);
      setToastInfo({message, color});
      setTimeout(() => {
        setShow(false);
      }, 3000);
    };

    const FlatListComponent = ({ item }) => {
        
    
        return (
          <ScrollView>
            <View
              style={{
                backgroundColor: '#85CDFD',
                marginVertical: 10,
                padding: 15,
                borderRadius: 20,
              }}
            >
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontWeight: '900',
                        fontSize: 16,
                        fontStyle: 'normal',
                        color: '#00000',
                        marginHorizontal: 4,
                        marginRight: 10,
                        marginBottom: 10,
                      }}
                    >
                      {'Contact ID'}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 14,
                        fontStyle: 'normal',
                        color: 'blue',
                        marginHorizontal: 4,
                        marginRight: 10,
                      }}
                    >
                      { item?.contact_id }
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontWeight: '900',
                        fontSize: 16,
                        fontStyle: 'normal',
                        color: '#00000',
                        marginHorizontal: 4,
                        marginRight: 10,
                        marginBottom: 10,
                      }}
                    >
                      {'Location'}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 14,
                        fontStyle: 'normal',
                        color: '#000000',
                        marginHorizontal: 4,
                        marginRight: 10,
                      }}
                    >
                      {'Luckonow'}
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontWeight: '900',
                        fontSize: 16,
                        fontStyle: 'normal',
                        color: '#00000',
                        marginHorizontal: 4,
                        marginRight: 10,
                        marginBottom: 10,
                      }}
                    >
                      {'Name'}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 14,
                        fontStyle: 'normal',
                        color: '#000000',
                        marginHorizontal: 4,
                        marginRight: 10,
                      }}
                    >
                      {item?.name}
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        fontWeight: '900',
                        fontSize: 16,
                        fontStyle: 'normal',
                        color: '#00000',
                        marginHorizontal: 4,
                        marginRight: 10,
                        marginBottom: 10,
                      }}
                    >
                      {'Mobile'}
                    </Text>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 14,
                        fontStyle: 'normal',
                        color: '#000000',
                        marginHorizontal: 4,
                        marginRight: 10,
                      }}
                    >
                      {item.mobile}
                    </Text>
                  </View>
                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate({
                        name: 'Customer View',
                        params: { post: item },
                      })
                    }
                  >
                    <Feather
                      name="eye"
                      size={25}
                      color={'#2240CD'}
                      style={{ marginRight: 10, marginTop: 15, marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteCustomer(item?.id)}>
                    <Entypo
                      name="cross"
                      size={25}
                      color={'#ff0000'}
                      style={{ marginTop: 15 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        );
      };

  return (
    <>
    <Header title="Contact List" />
          <SafeAreaView style={styles.scrollView}>
            <View>
              <FlatList
                  data={userData}
                  keyExtractor={(item) => item?.id?.toString()}
                  renderItem={FlatListComponent}
                  ListEmptyComponent={() => (
                    <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: "100%" }}>
                      <Text>{'Customer list not found !!'}</Text>
                    </View>
                  )}
                />
            </View>
          </SafeAreaView>
        <View style={styles.addIcon}>
           <Entypo
            name="plus"
            size={35}
            style={styles.icon}
            onPress={() =>
              navigation.navigate({
                name: 'Contact Add',
                params: { post: 'Customer' },
              })
            }
            />
        </View>
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
    card: {
        backgroundColor: '#C0EEF2',
        borderRadius: 8,
        padding: 10,
        margin: 0,
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#d5f0ec',
        alignItems: 'center',
        justifyContent: 'center',
    },
    elevation: {
        shadowColor: '#52006A',
        elevation: 10,
    },
    sno: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2399c7',
        marginBottom: 6,
    },
    addBtn: {
        width: 40,
        height: 20,
        color: 'white',
        backgroundColor: '#2240CD',
        marginTop: 10,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
    listbox: {
        backgroundColor: '#f3f5fa',
        padding: 5,
        borderRadius: 7,
        marginBottom: 10,
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    addIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#d5f0ec',
        padding: 25,
    },
    icon: {
        color: '#fafafa',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#079C15',
    },
    toast: {
        position: 'absolute',
        top: 0,
    },
});

export default CustomerList;
