import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TextInput, Dimensions,Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from 'galio-framework';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('screen');

const Search = () => {
  const [search, setSearch] = useState('');


  return (
    <>
      <Header title="Search" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          

          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome name="search" size={24} color="#000" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search"
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
          </View>  

        </View>
      </ScrollView>
      <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 6,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#71797E',
    borderRadius: 5,
    padding: 5,
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#71797E',
  },
});

export default Search;
