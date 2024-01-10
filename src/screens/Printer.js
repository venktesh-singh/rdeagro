import React from 'react'; 
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    


const Printer = () => {  
    return (
        <>
            <Header title="Standard Agri Solutions Pvt. Ltd." />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.addbox}>
                        <Text style={styles.printtxt}>Printer 001</Text>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}><Icon name="print" size={120} color="green" /></Text>
                            <Button style={styles.createButton}>
                                <Text style={styles.btntxt} bold size={16}>
                                    Connect
                                </Text>
                            </Button>
                        </View>
                        <Text style={styles.printtxt}>Port : Undefined, Addr : Undefined</Text>
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
        marginBottom: 8,
        paddingVertical:7,
        paddingHorizontal:15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',     
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
    btntxt: {
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    dteadd: {
        color:'#4169E1'
    },
    printtxt: {
        textAlign:'center',
        paddingVertical:10,
        fontWeight:'bold',
        fontSize:20
    }
});  

export default Printer;
