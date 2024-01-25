import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {Block, Button, Text, theme} from 'galio-framework';
import {Images, argonTheme} from '../constants';
const {height, width} = Dimensions.get('screen');

class Onboarding extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <Block flex style={styles.container}>
        <StatusBar backgroundColor={argonTheme.COLORS.PRIMARY} />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{height, width, zIndex: -5,paddingVertical:100}}     
          />
        </Block>
        <Block center>
          <Image source={Images.rdeargoLogo} style={styles.logo} />
        </Block>

        <Block flex space="between" style={styles.padded}>
          <Block flex space="between" style={{zIndex: 2}}>
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.PRIMARY}
                onPress={() => navigation.navigate('User', {screen: 'Login'})}
                textStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                Login
              </Button>
              {/*
              <Button
                style={styles.button}
                color={argonTheme.COLORS.PRIMARY}
                onPress={() =>
                  navigation.navigate('User', {screen: 'Register'})
                }
                textStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                Register
              </Button> */}
              
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00C4D6',
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    backgroundColor: '#DB6018',
  },
  logo: {
    width: 150,
    height: 150,
    zIndex: 2,
    position: 'relative',
    //borderRadius: 10,
    marginTop: '-50%',
  },
  title: {
    marginTop: '-5%',
  },
  subTitle: {
    marginTop: 20,
  },
});

export default Onboarding;
