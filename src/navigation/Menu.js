import React, {useState, useContext} from 'react';
import {useSafeArea} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Block, Text, theme, Button} from 'galio-framework';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Images from '../constants/Images';
import DrawerItem from '../components/DrawerItem';
import {UserContext} from '../../src/context';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {argonTheme} from '../constants';

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const context = useContext(UserContext);
  const userData = context.user.data;
  //console.log(context);
  const vendorScreens = [
    'Home',
    'My Cash',
    'Search',
    'About',
    'My Sale',
    'Profile',
    'My Cart', 
    'My Orders', 
    'My Order Details',
    'Printer',
    'Generate File',
    'My Expense',
    'Attendance',  
    'Material Received',
    'My Stock',
    'Purchase Indent',
    'All',
    'Bio Fertilizer',
    'Fertilizer',
    'Fungicide',
    'Billing Address'   
  ];
  
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('user_info');
      context.setUser({online: false, data: null});
    } catch (e) {
      console.log('Error in deleting the data');
    }
  };

  return (
    <Block
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      {userData ? (
        <Block row style={styles.header}>
          <Text bold size={18}>
            Hi {userData.firstName},  
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation?.navigate('Profile');
            }}>
            <FAIcon
              name="user-circle"
              color={argonTheme.COLORS.PRIMARY}
              size={35}
            />
          </TouchableOpacity>
        </Block>
      ) : null}
      {userData ? (
        <Block flex style={{paddingLeft: 8, paddingRight: 14}}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {userData &&
              vendorScreens.map((item, index) => {
                return (
                  <DrawerItem
                    title={item}
                    key={index}
                    navigation={navigation}
                    focused={state.index === index ? true : false}
                  />
                );
              })}
            <Block center>
              <Button onPress={() => logOut()}>Logout</Button>
            </Block>
          </ScrollView>
        </Block>
      ) : null}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default CustomDrawerContent;
