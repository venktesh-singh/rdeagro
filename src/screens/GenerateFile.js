import React from 'react'; 
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';    


const GenerateFile = () => {  
    return (
        <>
            <Header title="Generate File" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.addbox}>
                        <Text style={styles.printtxt}>Printer Size</Text>
                        <View style={styles.headall}>  
                            <Text style={styles.titleadd}>2 Inch Printer</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.createButton}>
                                <Text style={styles.btntxt} bold size={16}>
                                    Connect
                                </Text>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.gbuttonContainer}>
                        <Button style={styles.gcreateButton}>
                            <Text style={styles.btntxt} bold size={16}>
                                Generate Text
                            </Text>
                        </Button>
                    </View>
                    <View style={styles.gbuttonContainer}>
                        <Button style={styles.gcreateButton}>
                            <Text style={styles.btntxt} bold size={16}>
                                Generate Image
                            </Text>
                        </Button>
                    </View>
                    <View style={styles.gbuttonContainer}>
                        <Button style={styles.gcreateButton}>
                            <Text style={styles.btntxt} bold size={16}>
                                Generate QR Code
                            </Text>
                        </Button>
                    </View>
                    <View style={styles.gbuttonContainer}>
                        <Button style={styles.gcreateButton}>
                            <Text style={styles.btntxt} bold size={16}>
                                Generate Bar Code
                            </Text>
                        </Button>
                    </View>
                    <View style={styles.gbuttonContainer}>
                        <Button style={styles.gcreateButton}>
                            <Text style={styles.btntxt} bold size={16}>
                                Print All
                            </Text>
                        </Button>
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
        //marginHorizontal: 10,
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
        justifyContent: 'center',
        alignItems: 'center',     
    },
    btntxt: {
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
    },
    printtxt: {
        textAlign:'center',
        paddingVertical:10,
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    gbuttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gcreateButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
});  

export default GenerateFile;
