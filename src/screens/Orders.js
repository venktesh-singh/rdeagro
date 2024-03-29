import React from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const Orders = () => {    
    return (
        <>
            <Header title="My Orders" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>SZP-Rosa</Text>
                            <Text style={styles.resap}>1411</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 2</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 22</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order Status</Text>
                            <Text style={[styles.resap,styles.newclr]}> final/cash</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order date</Text>
                            <Text style={[styles.resap,styles.dteadd]}> 2023-11-12 16:45:01</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Print
                              </Text>
                            </Button>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                View
                              </Text>
                            </Button>
                        </View>
                    </View>


                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>SZP-Rosa</Text>
                            <Text style={styles.resap}>1412</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 2</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 22</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order Status</Text>
                            <Text style={[styles.resap,styles.newclr]}> final/cash</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order date</Text>
                            <Text style={[styles.resap,styles.dteadd]}> 2023-11-12 16:45:01</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Print
                              </Text>
                            </Button>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                View
                              </Text>
                            </Button>
                        </View>
                    </View>


                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>SZP-Rosa</Text>
                            <Text style={styles.resap}>1413</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 2</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 22</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order Status</Text>
                            <Text style={[styles.resap,styles.newclr]}> final/cash</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Order date</Text>
                            <Text style={[styles.resap,styles.dteadd]}> 2023-11-12 16:45:01</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Print
                              </Text>
                            </Button>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                View
                              </Text>
                            </Button>
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
    }
});  

export default Orders;
