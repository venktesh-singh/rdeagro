import argonTheme from './Theme';
import Images from './Images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'https://rdeagro.com';

const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user_info');
    return jsonValue != null ? JSON.parse(jsonValue).token : null;
  } catch (e) {
    console.log('Token was not fetched from the AsyncStorage');
  }
};

const getHeaders = async () => {
  let token = await getToken();
  console.log("Token All Get===", token);
  if (token) {
    return {
      Authorization: 'Bearer ' + token,
    };
  } else {
    return null;
  }
};

export {
  argonTheme,
  Images,
  baseUrl,
  getHeaders,
};
