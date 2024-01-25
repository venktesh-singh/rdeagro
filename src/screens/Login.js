import React, {useState, useContext} from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../context';

import {
  Block,
  Button,
  Input,
  Text,
  Toast,
} from 'galio-framework';

//  import { Button, Icon, Input } from "../components";
import {Images, argonTheme, baseUrl} from '../constants/';

const {width, height} = Dimensions.get('screen');

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setShow] = useState(false);
  const [toastInfo, setToastInfo] = useState({color: '', message: ''});
  const context = useContext(UserContext);

  const handleToast = (message, color) => {
    setShow(true);
    setToastInfo({message, color});
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  validateForm = () => {
    let val = username;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (username && password) {
      if (val.length === 0) {
        handleToast('Email must be entered.', 'warning');
        return false;
      } else if (reg.test(val) === false) {
        handleToast('Email is a valid address.', 'warning');
        return false;
      } else if (reg.test(val) === true) {
        return true;
      }
    } else {
      handleToast('Please fill your details!', 'warning');
      return false;
    }
  };

  
  const signIn = () => {
  /*  const newVal = this.validateForm();
    if (newVal) { */
      let data = {
        username: username,
        password: password,
      };
      console.log("Login User Verify",data);
      axios({
        method: 'post',
        url: `${baseUrl}/applogin?username=${username}&password=${password}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(async response => {
          const data =JSON.stringify(response.data)
          console.log('====>responseLogin',data)
          if ( data) {
            context.setUser({online: true, data: data});
            await AsyncStorage.setItem('user_info', data);
            console.log('====>User_info');
            props.navigation.push('App', {screen: 'Home'});
          } else {
            handleToast('You are not logged in.', 'error');
          }
        })
        .catch(error => {
          if (error.response) {
            handleToast(error.response.data.message, 'warning');
          }
          console.log(error);
        });
    }
 // };    


  /*
  const signIn = async() => {
		  context.setUser({online: true, data: {name:"venktesh"}});
      await AsyncStorage.setItem('user_info', {name:"venktesh"});
      props.navigation.push('App', {screen: 'Home'});
	}; */ 

  return (
    <Block flex center space="between">
      <ImageBackground
        source={Images.RegisterBackground}
        style={{width, height, zIndex: 1, paddingVertical:100}}>
        <Block center>
          <Image source={Images.rdeargoLogo} style={styles.logo} />
        </Block>
        <Block flex center>
          <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
            <Block width={width * 0.8} style={{marginBottom: 15}}>
              <Input
                borderless
                placeholder="Email"
                placeholderTextColor={argonTheme.COLORS.LightGray}
                color={argonTheme.COLORS.BLACK}
                value={username}
                onChangeText={text => {
                  setUsername(text);
                }}
              />
            </Block>
            <Block width={width * 0.8} style={{marginBottom: 15}}>
              <Input
                password
                borderless
                placeholder="Password"
                placeholderTextColor={argonTheme.COLORS.LightGray}
                color={argonTheme.COLORS.BLACK}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </Block>
               
            <Block middle>
              <Button style={styles.createButton} onPress={() => signIn()}>
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  Log In
                </Text>  
              </Button>
            </Block> 
          </KeyboardAvoidingView>
        </Block>
      </ImageBackground>
      <Toast
        isShow={isShow}
        style={styles.toast}
        positionIndicator="top"
        color={toastInfo.color}>
        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
          {toastInfo.message}
        </Text>
      </Toast>
    </Block>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    marginBottom:30
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 20,
    backgroundColor: '#DB6018',
  },
  toast: {
    position: 'absolute',
    top: 0,
  },
});

export default Login;
