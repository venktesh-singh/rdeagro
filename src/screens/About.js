import React, { useState, useRef } from 'react'; 
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Animated  } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const About = ({ title, content }) => {    

    const [isExpanded, setIsExpanded] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    const toggleAccordion = () => {
      Animated.timing(fadeAnim, {
        toValue: isExpanded ? 0 : 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
  
      setIsExpanded(!isExpanded);
    };
  
    return (
        <>
            <Header title="About" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>

                    <View style={styles.addbox}>
                        <View style={styles.iconcashin}><View style={styles.iconsize}><SimpleLineIcons name="cup" size={45} color="#fff" /></View></View>
                        <View style={styles.cashin}><Text style={styles.cashty}>Cash In Hand</Text></View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>User</Text>
                            <Text style={styles.resap}> <Icon name="inr" size={18} color="black" />234345.00</Text>
                        </View>
                        <View style={styles.parallelcon}>
                            <Text style={styles.titleadd}>Store Cash Transfer</Text>
                            <Text style={styles.resap}><Icon name="inr" size={18} color="black" />5675675.00</Text>
                        </View>
                    </View>

                    <View style={styles.accordionItem}>
                        <TouchableOpacity onPress={toggleAccordion}>
                            <View style={styles.accordionHeader}>
                            <Text style={styles.title}>Official Website</Text>
                            <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} color="#000" />
                            </View>
                        </TouchableOpacity>

                        {isExpanded && (
                            <Animated.View style={{ ...styles.accordionContent, opacity: fadeAnim }}>
                            <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum</Text>
                            </Animated.View>
                        )}
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
    },
    iconcashin:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight:400,
    },
    iconsize:{
        backgroundColor:'#FF7133',
        borderRadius:50,
        paddingHorizontal:13,
        paddingVertical:13,
        marginTop:3
    },
    cashty:{
        fontSize:18
    },
    accordionItem: {
        marginBottom: 3,
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#ddd',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    accordionContent: {
        padding: 10,
        backgroundColor: '#eee',
    },
});  

export default About;
