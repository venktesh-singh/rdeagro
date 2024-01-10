import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Text } from 'galio-framework';
const { height } = Dimensions.get('screen');
import { Toast } from 'galio-framework';
import { baseUrl, argonTheme } from '../constants/';
import Theme from '../constants/Theme';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react';
import { UserContext } from '../context';
import { cos } from 'react-native-reanimated';

const Home = () => {
  const [toastInfo, setToastInfo] = useState({ color: '', message: '' });
  const [isShow, setShow] = useState(false);
  const [dashboard, setDashboard] = useState([]);
  const userData = useContext(UserContext);
  const business_id = userData?.user?.data?.data?.business_id;
  const location_id = userData?.user?.data?.data?.location_id;
  const remember_token = userData?.user?.data?.remember_token;
  //console.log("Home data show : ",dashboard);
  //console.log("Home data business_id : ",business_id);
  //console.log("Home data location_id : ",location_id);
  //console.log("Home data remember_token : ",userData?.user?.data?.remember_token); 
  
 /* 
  if (Array.isArray(dashboard)) {
    const totalSellReturnData = dashboard.find(item => item.name === 'total_sell_return');
    if (totalSellReturnData) {
      const totalSellReturn = totalSellReturnData.value;
      console.log('Total Sell Return:', totalSellReturn);
    } else {
      console.log('Total Sell Return data not found');  
    }
  } else {
    console.log('Dashboard is not an array');
  } */



  const getData = async () => {
    try {
      if (remember_token) {
        const response = await axios.post(`${baseUrl}/getdashboarddata?remember_token=${remember_token}&business_id=${business_id}&location_id=${location_id}`);
        const responseData = response.data.data; // Extracting data from the response
        const stringfyData= JSON.stringify(responseData, null, 2);
        ///console.log("Response Data:", stringfyData);
        ///console.log("responseData", JSON.stringify (responseData));
        setDashboard(stringfyData)  
      } else {
        console.log("Token not getting", remember_token)
      }
    } catch (error) {
      console.error("Error fetching dashboard data", error);
      handleToast('Error fetching dashboard data. Try again later.', 'error');
    }
};


useEffect(() => {
  getData();
}, [remember_token]);

const handleToast = (message, color) => {
  setShow(true);
  setToastInfo({ message, color });
  setTimeout(() => {
    setShow(false);
  }, 3000);
};


return (
  <>
    <Header title="Home" />
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.box1, styles.elevation]}>
        <View style={styles.boxshadowicon}>
          <Icon name="shopping-cart" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.text}>Total Purchase</Text>
          <Text style={styles.text}>12</Text>
        </View>
        <View><MaterialIcon name="arrow-forward" size={50} color="white" /></View>
      </View>

      <View style={[styles.box1, styles.elevation]}>
        <View style={styles.boxshadowicon}>
          <Icon name="tag" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.text}>Total Sale</Text>
          <Text style={styles.text}>120</Text>
        </View>
        <View><MaterialIcon name="arrow-forward" size={50} color="white" /></View>
      </View>

      <View style={[styles.box1, styles.elevation]}>
        <View style={styles.boxshadowicon}>
          <Icon name="money" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.text}>Purchase Due</Text>
          <Text style={styles.text}>200</Text>
        </View>
        <View><MaterialIcon name="arrow-forward" size={50} color="white" /></View>
      </View>

      <View style={[styles.box1, styles.elevation]}>
        <View style={styles.boxshadowicon}>
          <Icon name="file-text" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.text}>Invoice Due</Text>
          <Text style={styles.text}>130</Text>
        </View>
        <View><MaterialIcon name="arrow-forward" size={50} color="white" /></View>
      </View>

      <View style={[styles.box1, styles.elevation]}>
        <View style={styles.boxshadowicon}>
          <Icon name="undo" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.text}>Total Sell Return</Text>
          <Text style={styles.text}>140</Text>
        </View>
        <View><MaterialIcon name="arrow-forward" size={50} color="white" /></View>
      </View>

      <View style={[styles.box1, styles.elevation]}>
        <View style={styles.boxshadowicon}>
          <Icon name="money" size={50} color="white" />
        </View>
        <View>
          <Text style={styles.text}>Expense</Text>
          <Text style={styles.text}>135</Text>
        </View>
        <View><MaterialIcon name="arrow-forward" size={50} color="white" /></View>
      </View>

      <View style={styles.box7}>
        <Text style={styles.text}>Graph</Text>
        <Text style={styles.text}>400</Text>
      </View>
    </ScrollView>
   {/* <View style={styles.container}>
      {(dashboard && dashboard.length) > 0 ? (
        dashboard?.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.name}</Text>
            {section.value !== null ? (
              <Text style={styles.sectionValue}>{section.value}</Text>
            ) : (
              <Text>No value available</Text>
            )}
         
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View> */}
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
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height - 100,
    width: 500,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  main: {
    marginTop: 14,
    paddingHorizontal: 10,
  },
  view: {
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '700',
    color: Theme.COLORS.PRIMARY,
    fontSize: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  box1: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },

  box2: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },

  box3: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },

  box4: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },

  box5: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },

  box6: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
  box7: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },

  box8: {
    backgroundColor: '#268ec3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 0,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
  },
  boxshadowicon: {
    //elevation: 5, 
    //borderWidth: 1,
    //borderColor: 'grey', 
    //borderStyle: 'solid',
    //padding: 10,  
    //borderRadius: 50
  },
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
export default Home;
