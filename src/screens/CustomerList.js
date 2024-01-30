import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment'; 
import { argonTheme } from '../constants/';
import { Toast } from 'galio-framework';

const CustomerList = () => {
    const [userData, setUserData] = useState([]);
    const [isShow, setShow] = useState(false);
    const [toastInfo, setToastInfo] = useState({color: '', message: ''});
    //const context = useContext(UserContext);
  
    const handleToast = (message, color) => {
      setShow(true);
      setToastInfo({message, color});
      setTimeout(() => {
        setShow(false);
      }, 3000);
    };

    const FlatListComponent = ({ item, index }) => {
        let now = moment().format('DD-MM-YYYY');
        let deadline = moment(item?.deadline).format('DD-MM-YYYY');
        let deadline_reached = now < deadline ? true : false;
    
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
                      { 1}
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
                      {'Sita'}
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
                      {'787677887'}
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
                  <TouchableOpacity onPress={() => deleteCustomer(item?._id)}>
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

      const FlatListHeader = () => {
        return (
          <View>
            
          </View>
        );
      };  

  return (
    <>
    <Header title="Customer List" />
        <SafeAreaView style={styles.scrollView}>
            <View>
            <FlatList
                data={userData}
                ListHeaderComponent={FlatListHeader}
                contentContainerStyle={{ marginHorizontal: 20 }}
                renderItem={FlatListComponent}

                ListEmptyComponent={() => {
                return (
                        <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: "100%" }}>
                            <Text>{'Customer list not found !!'}</Text>
                        </View>
                    )
                }}
            />
            </View>
            
        </SafeAreaView>
        <View style={styles.addIcon}>
           
            <Entypo
            name="plus"
            size={35}
            style={styles.icon}
            
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
