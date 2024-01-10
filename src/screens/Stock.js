import React from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const Stock = () => {    
    return (
        <>
            <Header title="My Stock" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.gbuttonContainer}>
                        <View style={styles.addbox}>
                            <Text style={styles.listtitleadd}>Total Amount - <Icon name="inr" size={20} color="black" />567586.00</Text>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Product ID</Text>
                            <Text style={styles.resap}>789</Text>  
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 1222</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" />220.0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Name</Text>
                            <Text style={styles.nameresap}>ISAGFSA</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={[styles.catresap]}> Fertilizer</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Amount</Text>
                            <Text style={[styles.resap]}> <Icon name="inr" size={20} color="black" />34220.0</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                                <Text style={styles.btntxt} bold size={16}>
                                    Stock Transfer
                                </Text>
                            </Button>
                        </View>
                    </View>
                    
                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Product ID</Text>
                            <Text style={styles.resap}>719</Text>  
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 1222</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" />220.0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Name</Text>
                            <Text style={styles.nameresap}>ISAGFSA</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={[styles.catresap]}> Fertilizer</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Amount</Text>
                            <Text style={[styles.resap]}> <Icon name="inr" size={20} color="black" />34220.0</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                                <Text style={styles.btntxt} bold size={16}>
                                    Stock Transfer
                                </Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Product ID</Text>
                            <Text style={styles.resap}>589</Text>  
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 1222</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" />220.0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Name</Text>
                            <Text style={styles.nameresap}>ISAGFSA</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={[styles.catresap]}> Fertilizer</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Amount</Text>
                            <Text style={[styles.resap]}> <Icon name="inr" size={20} color="black" />34220.0</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                                <Text style={styles.btntxt} bold size={16}>
                                    Stock Transfer
                                </Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Product ID</Text>
                            <Text style={styles.resap}>389</Text>  
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>No. of Products</Text>
                            <Text style={styles.resap}> 1222</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Checkout Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" />220.0</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Name</Text>
                            <Text style={styles.nameresap}>ISAGFSA</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Category</Text>
                            <Text style={[styles.catresap]}> Fertilizer</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Amount</Text>
                            <Text style={[styles.resap]}> <Icon name="inr" size={20} color="black" />34220.0</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                                <Text style={styles.btntxt} bold size={16}>
                                    Stock Transfer
                                </Text>
                            </Button>
                        </View>
                    </View>

                </View>

                <Button style={styles.footcreateButton}>
                    <Text style={styles.btntxt} bold size={16}>
                        Print
                    </Text>
                </Button>
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
      paddingVertical:3,
      paddingHorizontal:15, 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',     
    }, 
    exheadall: {
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6E6',
        marginBottom: 8,
        paddingVertical:3,
        paddingHorizontal:15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }, 
    footall: {
        borderTopWidth: 1,
        borderTopColor: '#E6E6E6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal:16
    },
    parallelcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8, 
        paddingVertical:3,
        paddingHorizontal:15,
    },
    resap: {  
        fontSize:20
    },
    addresaps:{  
        fontSize:20,
        fontVariant:'bold'  
    },
    nameresap: {
        fontSize:20,
        color:'#0096FF',
        fontWeight:'bold'
    },
    catresap: {
        fontSize:20,
        color:'#AB96FF',
        fontWeight:'bold'
    },
    newclr: {
        color:'red'
    },
    createButton: {
      width: width * 0.4,
      marginTop: 10,
      backgroundColor: '#DB6018',
      borderRadius:10
    },
    footcreateButton: {
        marginTop: 10,  
        backgroundColor: '#DB6018',
        borderRadius:10,
        width: width * 0.93
      },
    btntxt: {
      color:'#fff',
      fontSize:18,
      fontWeight:'bold',
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

export default Stock;
 