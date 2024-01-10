import React from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const Expense = () => {    
    return (
        <>
            <Header title="My Expense" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.addbox}>
                        <Text style={styles.extitleadd}>Total Expense</Text>
                        <View style={styles.exheadall}>  
                            <Text style={styles.titleadd}><Icon name="inr" size={20} color="black" />48000.00</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Due </Text>
                            <Text style={styles.resap}> <Icon name="inr" size={20} color="black" />24000.00</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Paid </Text>
                            <Text style={styles.resap}> <Icon name="inr" size={20} color="black" />24000.00</Text>
                        </View>
                    </View>
                    <View style={styles.gbuttonContainer}>
                        <View style={styles.addbox}>
                            <Text style={styles.listtitleadd}>Expenses List</Text>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={styles.exresap}>Store Expense</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Location</Text>
                            <Text style={styles.resap}> SZP-Rosa</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Amount</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" />22.0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Payment Status</Text>
                            <Text style={[styles.resap,styles.newclr]}> Due</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Expense Date</Text>
                            <Text style={[styles.resap,styles.dteadd]}> 2023-11-12 16:45:01</Text> 
                        </View>
                    </View>


                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={styles.exresap}>Store Expense</Text>
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
                    </View>


                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={styles.exresap}>Store Expense</Text>
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
    listtitleadd: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal:50,
        paddingVertical:10
    },
    extitleadd:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical:6,
        paddingHorizontal:10 
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
    exheadall: {
        borderBottomWidth: 2,
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
    exresap: {
        fontSize:20,
        color:'#0096FF',
        fontWeight:'bold'
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
    },
    gbuttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});  

export default Expense;
 