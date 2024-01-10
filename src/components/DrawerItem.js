import React from 'react';
import {StyleSheet, TouchableOpacity, Linking, View} from 'react-native';
import {Block, theme, Text} from 'galio-framework';

import argonTheme from '../constants/Theme';

class DrawerItem extends React.Component {
  // renderIcon = () => {
  //   const { title, focused } = this.props;
  //   console.log(title)

  //   switch (title) {
  //     case "admin":
  //       return (
  //         <Block>
  //           <Text>Add Truck</Text>
  //         </Block>
  //       );
  //     case "customer":
  //       return (
  //           <View>
  //           <Text>
  //              You are {title}
  //           </Text>
  //       </View>
  //       );
  //     default:
  //       return (
  //           <View>
  //               <Text>You are {title}</Text>
  //           </View>
  //       );
  //   }
  // };

  render() {
    const {focused, title, navigation} = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null,
    ];

    return (
      <TouchableOpacity
        style={{height: 60}}
        onPress={() => {
          if (title === 'Support') {
            Linking.openURL('mailto:dev.react@vibgyorweb.com');
          } else {
            navigation.navigate(`${title}`);
          }
        }}>
        {/* // <Block>
      //    <Block flex={1} style={{ marginRight: 5 }}>
      //       {this.renderIcon()}
      //     </Block> */}

        <Block flex row style={containerStyles}>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? 'white' : 'rgba(0,0,0,0.5)'}>
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
});

export default DrawerItem;
