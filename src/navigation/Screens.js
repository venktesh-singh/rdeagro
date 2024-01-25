import React, {useContext} from 'react';
import {Dimensions} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Onboarding from '../screens/Onboarding';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';
import CustomDrawerContent from './Menu';
import {UserContext} from './../context';
import AddTruck from '../screens/AddTruck';
import Profile from '../screens/Profile';
import Truck from '../screens/Truck';
import EditMenu from '../screens/EditMenu';
import Orders from '../screens/Orders';
import OrderDetails from '../screens/OrderDetails';
import OtpVerification from '../screens/OtpVerification';
import ResetPassword from '../screens/ResetPassword';
import Cart from '../screens/cart';    
import Printer from '../screens/Printer';
import GenerateFile from '../screens/GenerateFile';
import Expense from '../screens/Expense';
import Attendance from '../screens/Attendance';
import AttendanceList from '../screens/AttendanceList';
import MaterialReceived from '../screens/MaterialReceived';
import Stock from '../screens/Stock';
import PurchaseIndent from '../screens/PurchaseIndent'; 
import All from '../screens/All';
import BillingAddress from '../screens/BillingAddress';
import Cash from '../screens/Cash';
import Sale from '../screens/Sale';
import Search from '../screens/Search';
import About from '../screens/About';
import BioFertilizer from '../screens/BioFertilizer';
import Fertilizer from '../screens/Fertilizer';
import Fungicide from '../screens/Fungicide';
import SelfDeposit from '../screens/SelfDeposit';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('screen');

export default function OnboardingStack(props) {
  const context = useContext(UserContext);
  const userOnline = context.user.online;

  function UserStack(props) {
    return (
      <Stack.Navigator mode="card" headerMode="none">
        <Stack.Screen
          name="Register"
          component={Register}
          option={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp Verification" component={OtpVerification} />
        <Stack.Screen name="Reset Password" component={ResetPassword} />
        <Drawer.Screen name="My Cart" component={Cart} />
      </Stack.Navigator>
    );
  }

  function AppStack(props) {
    return (
      <Drawer.Navigator
        style={{flex: 1}}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: 'white',
          width: width * 0.8,
        }}
        drawerContentOptions={{
          activeTintcolor: 'white',
          inactiveTintColor: '#000',
          activeBackgroundColor: 'transparent',
          itemStyle: {
            width: width * 0.75,
            backgroundColor: 'transparent',
            paddingVertical: 16,
            paddingHorizonal: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
          labelStyle: {
            fontSize: 18,
            marginLeft: 12,
            fontWeight: 'normal',
          },
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} /> 
        <Drawer.Screen name="My Cash" component={Cash} /> 
        <Drawer.Screen name="About" component={About} /> 
        <Drawer.Screen name="Search" component={Search} />
        <Drawer.Screen name="My Sale" component={Sale} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="My Cart" component={Cart} />
        <Drawer.Screen name="My Orders" component={Orders} />
        <Drawer.Screen name="My Order Details" component={OrderDetails} />  
        <Drawer.Screen name="Printer" component={Printer} />  
        <Drawer.Screen name="Generate File" component={GenerateFile} /> 
        <Drawer.Screen name="My Expense" component={Expense} /> 
        <Drawer.Screen name="Attendance" component={Attendance} />   
        <Drawer.Screen name="Attendance List" component={AttendanceList}/>
        <Drawer.Screen name="Material Received" component={MaterialReceived} />   
        <Drawer.Screen name="My Stock" component={Stock} />
        <Drawer.Screen name="Purchase Indent" component={PurchaseIndent} />  
        <Drawer.Screen name="All" component={All} />    
        <Drawer.Screen name="Bio Fertilizer" component={BioFertilizer} />   
        <Drawer.Screen name="Fertilizer" component={Fertilizer} />   
        <Drawer.Screen name="Fungicide" component={Fungicide} /> 
        <Drawer.Screen name="Billing Address" component={BillingAddress} />
        <Drawer.Screen name="Self Deposit" component={SelfDeposit} />
      </Drawer.Navigator>
    );  
  }
  return (
    <Stack.Navigator mode="card" headerMode="none">
      {!userOnline ? (
        <>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            option={{
              headerTransparent: true,
            }}
          />
          <Stack.Screen name="User" component={UserStack} />
          <Drawer.Screen name="My Cart" component={Cart} />
        </>
      ) : (
        <>
          <Stack.Screen name="App" component={AppStack} />
          <Stack.Screen name="My Order Details" component={OrderDetails} />
          <Drawer.Screen name="My Cart" component={Cart} />
        </>
      )}
    </Stack.Navigator>
  );
}
  