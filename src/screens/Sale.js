import React from 'react'; 
import { StyleSheet, View, ScrollView, Text, Dimensions, FlatList } from 'react-native';
import { Button } from 'galio-framework';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';    
const {width, height} = Dimensions.get('screen');


const Sale = () => {    

    const ListHeaderItem = () => {    
        return (
        <>
            <View style={{
                paddingLeft: 15, 
                paddingRight: 15,   
                }}>  
                <View
                    style={{
                    backgroundColor: '#FF7133',
                    marginVertical: 8,
                    padding: 18,
                    borderRadius: 20,
                    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
                    }}
                >
                    <View
                    style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
                    >
                    
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View
                        style={{ justifyContent: 'space-around', alignItems: 'center' }}
                        >
                            <Text
                                style={{
                                fontWeight: '900',
                                fontSize: 16,
                                fontStyle: 'bold',
                                color: '#fff',
                                marginHorizontal: 4,
                                marginRight: 10,
                                }}
                            >
                                {'Payment Type'}
                            </Text>
                        </View>

                        <View
                        style={{ justifyContent: 'space-around', alignItems: 'center' }}
                        >
                            <Text
                                style={{
                                fontWeight: '900',
                                fontSize: 16,
                                fontStyle: 'bold',
                                color: '#fff',
                                marginHorizontal: 4,
                                marginRight: 10,
                                }}
                            >
                                {'Amount'}
                            </Text>
                        </View>

                    </ScrollView>
                    </View>  
                </View>
            </View>   
        </>     
        );  
    };

    const renderItem = () => {     
        return (
            <View style={{
                paddingLeft: 15, 
                paddingRight: 15, 
                }}>
                <View
                    style={{
                    backgroundColor: '#D3D3D3',
                    marginVertical: 5,
                    padding: 15,
                    borderRadius: 20,
                    }}
                >

                    <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View
                        style={{ justifyContent: 'space-around', alignItems: 'center' }}
                        >
                        <Text
                            style={{
                            fontWeight: '600',
                            fontSize: 14,
                            fontStyle: 'normal',
                            color: '#000',
                            marginHorizontal: 4,
                            marginRight: 10,
                            }}
                        >
                            {'Cash'}
                        </Text>
                        </View>

                        <View
                        style={{ justifyContent: 'space-around', alignItems: 'center' }}
                        >
                        <Text
                            style={{
                            fontWeight: '600',
                            fontSize: 14,
                            fontStyle: 'normal',
                            color: '#000',
                            marginHorizontal: 4,
                            marginRight: 10,
                            }}
                        >
                           <Icon name="inr" size={20} color="green" />32434.00
                        </Text>
                        </View>

                    </ScrollView>
                    </View>
                </View>
            </View>
        );      
    };  

    return (
        <>
            <Header title="My Sale" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>

                    <View style={styles.addbox}>
                        <View style={styles.iconcashin}><View style={styles.iconsize}><FontAwesome name="shopping-cart" size={45} color="#fff" /></View></View>
                        <View style={styles.cashin}><Text style={styles.cashty}>Sale of 2023-11-24</Text></View>
                        <View style={styles.otpcashin}><Text style={styles.otpcash}><Icon name="inr" size={28} color="black" />685905.00</Text></View>
                        
                    </View>
                    <FlatList
                        renderItem={renderItem}         
                        ListHeaderComponent={ListHeaderItem}    
                    />   
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
    cashin:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
    },
    otpcashin:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:20,
        marginVertical:30
    },
    otpcash:{
        fontSize:28,  
        marginHorizontal:50,
        color:'#000'
    },
    iconcashin:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight:400,
        marginTop:5
    },
    iconsize:{
        backgroundColor:'#FF7133',
        borderRadius:50,
        paddingHorizontal:13,
        paddingVertical:13,
        marginTop:3
    },
    cashty:{
        fontSize:18,
    },
    buttombtn:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    transbtn:{
        backgroundColor:'#0BA8E6',
    },
    transbtntxt:{
        color:'#fff',
        fontSize: 16
    },
    agentbtn:{
        backgroundColor:'#65a765',
    },
    agentbtntxt:{
        color:'#fff',
        fontSize: 16
    },
    selfbtn:{
        backgroundColor:'#FF7133',  
    },
    selfbtntxt:{ 
        color:'#fff',
        fontSize: 16
    },
    lastbtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
});  

export default Sale;
