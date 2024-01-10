import React from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const OrderDetails = () => {    
    return (
        <>
            <Header title="Order Details-123434" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleaddorder}>Order Details</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 2</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="#707070" />2200</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order Status</Text>
                            <Text style={[styles.resap,styles.newclr]}> final</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order date</Text>
                            <Text style={[styles.resap]}> 2023-11-12 16:45:01</Text> 
                        </View>
                    </View>


                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleaddorder}>Billing Address</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.resap}> Sitaram</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Kurriya</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={[styles.resap]}>9555400872</Text>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleaddorder}>Shipping Address</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.resap}> Sitaram</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Kurriya</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={[styles.resap]}>9555400872</Text>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleaddorder}>Shipping Method</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.resap}> Cash</Text>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleaddorder}>Products</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Product Price</Text>
                            <Text style={styles.resap}> <Icon name="inr" size={20} color="#707070" />220.00</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Tax</Text>
                            <Text style={styles.resap}>0.0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Quantity</Text>
                            <Text style={styles.resap}>1</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Subsidy</Text>
                            <Text style={styles.resap}>0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Price</Text>
                            <Text style={[styles.resap,styles.newclr]}> <Icon name="inr" size={20} color="#707070" />220.00</Text>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleaddorder}>Subtotal</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Subtotal</Text>
                            <Text style={styles.resap}> <Icon name="inr" size={20} color="#707070" />220.00</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Tax</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="#707070" />20.00</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Shipping</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="#707070" />0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Discount</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="#707070" />0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total</Text>
                            <Text style={[styles.resap,styles.newclr]}> <Icon name="inr" size={20} color="#707070" />240.00</Text>
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
        fontWeight: 'normal',
        fontSize: 20,
    },
    headall: {
      borderBottomWidth: 1,
      borderBottomColor: '#707070',
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
        color:'green'
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
    },
    titleaddorder:{
      fontWeight:'bold',
      fontSize: 20,
    }
});  

export default OrderDetails;
