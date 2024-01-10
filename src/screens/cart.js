import React from 'react'; 
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    


const Cart = () => {  
    return (
        <>
            <Header title="My Cart" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.addbox}>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>Testing ABC</Text>
                            <Text style={styles.resap}>All Set</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Product Price</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 122</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>GST@18%</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 22</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Quantity</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 22</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Subsidy</Text>
                            <Text style={styles.resap}><Icon name="inr" size={20} color="black" /> 2</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Total Price</Text>
                            <Text style={[styles.resap,styles.newclr]}><Icon name="inr" size={20} color="green" /> 150</Text> 
                        </View>
                        <View style={styles.footall}>
                            <Text></Text>
                            <Text><MaterialIcon name="delete" size={30} color="red" /></Text>
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
        paddingHorizontal:16, 
        paddingHorizontal:16     
    },
    footall: {
        borderTopWidth: 1,
        borderTopColor: '#E6E6E6',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: 16,
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
});  

export default Cart;
