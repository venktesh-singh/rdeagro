import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { baseUrl } from '../constants/';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContext } from 'react';
import { UserContext } from '../context';

const { width } = Dimensions.get('screen');

const ProductItem = ({ title, price }) => (
  <View style={styles.addbox}>
    <View style={styles.heighttop}></View>
    <Text style={styles.maintxt}>{title}</Text>
    <View style={styles.parallelcon}>
      <Text style={styles.titleadd}><Icon name="inr" size={20} color="#008000" />{price}</Text>
      <Text style={styles.titleadd}><AntDesign name="hearto" size={20} color="#008000" /></Text>
    </View>
    <View style={styles.footall}>
      <Button style={styles.createButton}>
        <Text style={styles.btntxt} bold size={16}>
          Add To Cart
        </Text>
      </Button>
    </View>
  </View>
);

const All = () => {  
  const [toastInfo, setToastInfo] = useState({ color: '', message: '' });
  const [categories, setCategories] = useState([]);
  const [isShow, setShow] = useState(false);
  const userData = useContext(UserContext);
  const business_id = userData?.user?.data?.data?.business_id;
  const location_id = userData?.user?.data?.data?.location_id;
  const remember_token = userData?.user?.data?.remember_token;
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log("All Category data remember_token : ", userData?.user); 

  const getData = async () => {  
    try {
      if (remember_token) {
        const response = await axios.post(`${baseUrl}/getcategories?remember_token=${remember_token}&business_id=${business_id}&location_id=${location_id}`);
        const responseData = response?.data?.data || []; // Extracting data from the response
        console.log("Response All Category Data:", JSON.stringify(response.data, null, 2));   
        setCategories(responseData)  
      } else {  
        console.log("Token not getting", remember_token)
      }
    } catch (error) {
      console.error("Error fetching categories data", error);
      handleToast('Error fetching categories data. Try again later.', 'error');
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

  const uniqueCategories = [...new Set(categories.map(category => category.name))];

  const filteredCategories = selectedCategory
    ? categories.filter(category => category.name === selectedCategory)
    : categories;

  return (
    <>
      <Header title="My Shop" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryButtons}>
              <Button
                style={selectedCategory === null ? styles.selectedCategoryButton : styles.categoryButton}
                onPress={() => setSelectedCategory(null)}>
                <Text style={styles.categoryButtonText}>All</Text>
              </Button>
              {uniqueCategories.map((category, index) => (
                <Button
                  key={index}
                  style={selectedCategory === category ? styles.selectedCategoryButton : styles.categoryButton}
                  onPress={() => setSelectedCategory(category)}>
                  <Text style={styles.categoryButtonText}>{category}</Text>
                </Button>
              ))}
            </View>
          </ScrollView>
          {filteredCategories.map((category, index) => (
            <ProductItem key={index} title={category.name} price={category.short_code} />
          ))}
        </View>
      </ScrollView>
      <Footer />
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addbox: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  heighttop: {
    height: 160,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 6,
    backgroundColor: '#e5e5e5',
  },
  titleadd: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#008000',
  },
  footall: {
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  parallelcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
    paddingVertical: 2,
    paddingHorizontal: 20,
    fontWeight: 'normal',
  },
  createButton: {
    width: width * 0.8,
    marginTop: 10,
    backgroundColor: '#008000',
  },
  btntxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dteadd: {
    color: '#4169E1',
  },
  maintxt: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 3,
  },
  categoryButton: {
    marginRight: 3,
  },
  selectedCategoryButton: {
    backgroundColor: '#008000',
    marginRight: 3,
    textColor:'#fafafafa'
  },
  categoryButtonText: {
    color: '#fafafafa',
    // textColor:'#fafafafa'
  },
});

export default All;
