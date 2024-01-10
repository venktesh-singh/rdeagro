import React from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const PurchaseIndent = () => {    
    return (
        <>
            <Header title="Purchase Indent" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>

                    <View style={styles.addbox}>
                        <View style={styles.heighttop}></View>
                        <View><Text style={styles.maintxt}>Godiwa Super(18%) - 20 ML</Text></View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}><Icon name="inr" size={20} color="green" />630.00 </Text>
                            <Text style={styles.titleadd}><AntDesign name="hearto" size={20} color="green" /> </Text>
                        </View>
                       
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Send Request
                              </Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.heighttop}></View>
                        <View><Text style={styles.maintxt}>Godiwa Super(18%) - 20 ML</Text></View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}><Icon name="inr" size={20} color="green" />630.00 </Text>
                            <Text style={styles.titleadd}><AntDesign name="hearto" size={20} color="green" /> </Text>
                        </View>
                       
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Send Request
                              </Text>
                            </Button>
                        </View>
                    </View>


                    <View style={styles.addbox}>
                        <View style={styles.heighttop}></View>
                        <View><Text style={styles.maintxt}>Hexastop - 200 ML</Text></View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}><Icon name="inr" size={20} color="green" />1030.00 </Text>
                            <Text style={styles.titleadd}><AntDesign name="hearto" size={20} color="green" /> </Text>
                        </View>
                       
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Send Request
                              </Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.addbox}>
                        <View style={styles.heighttop}></View>
                        <View><Text style={styles.maintxt}>FMC Coragen - 220 ML</Text></View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}><Icon name="inr" size={20} color="green" />630.00 </Text>
                            <Text style={styles.titleadd}><AntDesign name="hearto" size={20} color="green" /> </Text>
                        </View>
                       
                        <View style={styles.footall}>
                            <Button style={styles.createButton}>
                              <Text style={styles.btntxt} bold size={16}>
                                Send Request
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
    heighttop:{
        height: 160,
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: 6,
      backgroundColor: '#e5e5e5',
    },
    titleadd: {
        fontWeight: 'nornal',
        fontSize: 20,
        color:'#008000'
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
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: 7,
        paddingHorizontal:16
    },
    parallelcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8,
        paddingVertical:2,
        paddingHorizontal:20,
        fontWeight:'normal'  
    },
    resap: {  
        fontSize:20
    },
    newclr: {
        color:'green'
    },
    createButton: {
      width: width * 0.8,
      marginTop: 10,
      backgroundColor: '#008000',
    },
    btntxt: {
      color:'#fff',
      fontSize:18,
      fontWeight:'bold'
    },
    dteadd: {
      color:'#4169E1'
    },
    maintxt:{
        paddingVertical:6,
        paddingHorizontal:20,
        fontSize:20,
        fontWeight:'bold'
    }
});  

export default PurchaseIndent;
