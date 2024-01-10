/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Block, GalioProvider} from 'galio-framework';
import {NavigationContainer} from '@react-navigation/native';
import {argonTheme} from './src/constants/';
import Screens from './src/navigation/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from './src/context';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configure-store';
const store = configureStore();

const App = () => {
  const [user, setUser] = useState({online: false, data: null});

  useEffect(() => {
    (async () => {
      let user_info = await getUser();
      if (user_info) {
        setUser({online: true, data: user_info});
      } else {
        setUser({online: false, data: null});
      }
    })();
  }, []);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_info');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('data was not fetched from the AsyncStorage');
    }
  };

  return (
    <Provider store={store}>
      <UserContext.Provider value={{user, setUser}}>
        <NavigationContainer>
          <GalioProvider theme={argonTheme}>
            <Block flex>
              <Screens />
            </Block>
          </GalioProvider>
        </NavigationContainer>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;  
