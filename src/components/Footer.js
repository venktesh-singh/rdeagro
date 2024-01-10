import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';   
import Feather from 'react-native-vector-icons/Feather';    
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  

const Footer = props => {

  return (
    <View style={styles.main}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => props.navigation.push('Home')}>  
            <Entypo style={styles.iconcenter} name="home" size={30} color="white" />
            <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons style={styles.iconcenter} name="store" size={30} color="white" />
          <Text style={styles.footerText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Feather style={styles.iconcenter} name="box" size={30} color="white" />
          <Text style={styles.footerText}>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons style={styles.iconcenter} name="help-center" size={30} color="white" />
          <Text style={styles.footerText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialCommunityIcons style={styles.iconcenter} name="emoticon-cool-outline" size={30} color="white" />
          <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor:'#00c4d6'
    },
    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'flex-end'
    },
    footerText:{
        color:'#fff'
    },
    iconcenter:{
        textAlign:'center'   
    }
});

export default Footer;
