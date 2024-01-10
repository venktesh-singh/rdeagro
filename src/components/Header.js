import React from 'react';
import {withNavigation} from '@react-navigation/compat';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import {Button, Block, NavBar, Text, theme} from 'galio-framework';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import argonTheme from '../constants/Theme';

const {height, width} = Dimensions.get('window');
const iPhoneX = () =>
  Platform.OS === 'ios' &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]}>
    <FAIcon name="bell" color={argonTheme.COLORS.WHITE} size={20} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]}>
    <FAIcon name="shopping-basket" color={argonTheme.COLORS.WHITE} size={20} />
  </TouchableOpacity>
);


class Header extends React.Component {
  handleLeftPress = () => {
    const {back, navigation} = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };
  renderRight = () => {
    const {white, title, navigation} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <BellButton key="chat-home" navigation={navigation} isWhite={white} />
        <BasketButton
          key="basket-home"
          navigation={navigation}
          isWhite={white}
        />
      </View>
    );
  };

  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;

    const noShadow = [
      'Search',
      'Categories',
      'Deals',
      'Pro',
      'Profile',
    ].includes(title);
  

    const navbarStyles = [styles.navbar, bgColor && {backgroundColor: bgColor}];

    return (
      // <Block style={headerStyles}>
      <NavBar
        back={false}
        title={title}
        style={navbarStyles}
        transparent={transparent}
        right={this.renderRight()}
        rightStyle={{alignItems: 'flex-end'}}
        left={
          <FAIcon
            name="bars"
            size={25}
            onPress={this.handleLeftPress}
            color={argonTheme.COLORS.WHITE}
            style={{marginTop: 2}}
          />
        }
        leftStyle={{paddingVertical: 12, flex: 0.2}}
        titleStyle={[styles.title]}
        {...props}
      />

      // </Block>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    color: argonTheme.COLORS.WHITE,
    marginLeft: 13,
  },
  navbar: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: '#bc3039',
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER,
  },
});

export default withNavigation(Header);
