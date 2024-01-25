import React, { useEffect, useState } from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import axios from 'axios';
import { baseUrl } from '../constants/';
import { useContext } from 'react';
import { UserContext } from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const MaterialReceived = () => {  
    const [toastInfo, setToastInfo] = useState({ color: '', message: '' });
    const [mreceived, setMReceived] = useState([]);
    const [isShow, setShow] = useState(false);
    const userData = useContext(UserContext);
    const business_id = userData?.user?.data?.data?.business_id;
    const location_id = userData?.user?.data?.data?.location_id;
    const remember_token = userData?.user?.data?.remember_token;
    const [selectedCategory, setSelectedCategory] = useState(null);
    //console.log("Home data show : ",dashboard);
    //console.log("Home data business_id : ",business_id);
    //console.log("Home data location_id : ",location_id);
    //console.log("Material Received data remember_token : ", JSON.stringify(userData.user.data.data, null, 2)); 

    const getData = async () => {  
        try {
        if (remember_token) {
            const response = await axios.post(`${baseUrl}/getpolists?remember_token=${remember_token}&business_id=${business_id}&location_id=${location_id}`);
            const responseData = response?.data?.data || []; // Extracting data from the response
            const stringfyData= JSON.stringify(responseData, null, 2);
            //console.log("Response Material Received Data:", JSON.stringify(response, null, 2));   
            setMReceived(responseData)  
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
    
    return (
        <>
            <Header title="Material Received" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Order ID</Text>
                            <Text style={styles.resap}>456789</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Name</Text>
                            <Text style={styles.resap}> SAHSH - 5 KG</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. Of Product</Text>
                            <Text style={styles.resap}> 22</Text>
                        </View>

                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 2</Text>
                        </View>

                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order Status</Text>
                            <Text style={[styles.resap,styles.newclr]}> Reject</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order date</Text>
                            <Text style={[styles.resap,styles.dteadd]}> 2023-11-12 16:45:01</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Text style={[styles.resap,styles.dteadd]}>Purchase</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>  
            <Footer/>      
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
    scrollViewContent: {
      flexGrow: 1,
      padding: 6,
      backgroundColor: '#e5e5e5',
    },
    titleadd: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    headall: {
      borderBottomWidth: 1,
      borderBottomColor: '#E6E6E6',
      marginBottom: 8,
      paddingVertical:7,
      paddingHorizontal:15, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',     
    },  
    footall: {
        borderTopWidth: 1,
        borderTopColor: '#E6E6E6',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 7,
        paddingHorizontal:16
    },
    parallelcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8,
        paddingVertical:6,
        paddingHorizontal:10  
    },
    resap: {  
        fontSize:20
    },
    newclr: {
        color:'red'
    },
    createButton: {
      width: width * 0.3,
      marginTop: 10,
      backgroundColor: '#DB6018',
    },
    btntxt: {
      color:'#fff',
      fontSize:18,
      fontWeight:'bold'
    },
    dteadd: {
      color:'#4169E1'
    }
});  

export default MaterialReceived;
