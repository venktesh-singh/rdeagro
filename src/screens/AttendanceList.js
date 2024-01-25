import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AttendanceList = () => {


    const data = [
        {
          SN: '1',
          Name: 'Sia',
          Location: 'Lucknow',
          Date: '01-05-2023',
          Status: 'P',
          InTime: '09:10',
          OutTime: '06:14',
        },
        {
          SN: '2',
          Name: 'Ram',
          Location: 'Delhi',
          Date: '01-05-2023',
          Status: 'A',
          InTime: '09:15',
          OutTime: '06:30',
        },
        {
            SN: '3',
            Name: 'Ram',
            Location: 'Delhi',
            Date: '01-05-2023',
            Status: 'A',
            InTime: '09:15',
            OutTime: '06:30',
        },
    ];
    
    const renderHeader = () => (
        <ScrollView horizontal>
            <View style={styles.headerRow}>
                <Text style={styles.headerCell}>SN</Text>
                <Text style={styles.headerCell}>Name</Text>
                <Text style={styles.headerCell}>Location</Text>
                <Text style={styles.headerCell}>Date</Text>
                <Text style={styles.headerCell}>Status</Text>
                <Text style={styles.headerCell}>In Time</Text>
                <Text style={styles.headerCell}>Out Time</Text>
            </View>
        </ScrollView>
    );
    
    const renderItem = ({ item }) => (
        <ScrollView horizontal>
            <View style={styles.row}>
                <Text style={styles.cell}>{item.SN}</Text>
                <Text style={styles.cell}>{item.Name}</Text>
                <Text style={styles.cell}>{item.Location}</Text>
                <Text style={styles.cell}>{item.Date}</Text>
                <Text style={styles.cell}>{item.Status}</Text>
                <Text style={styles.cell}>{item.InTime}</Text>
                <Text style={styles.cell}>{item.OutTime}</Text>
            </View>
        </ScrollView>
    );
    
    return (
        <>
            <Header title="Attendance List" />
                <View style={styles.container}>
                <FlatList
                    data={data}
                    ListHeaderComponent={renderHeader}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.SN}
                />
                </View>
            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
      },
      row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
      },
      headerRow: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
        borderLeftWidth: 1,
        borderLeftColor: '#ccc',
      },
      cell: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        borderRightWidth: 1,
        borderRightColor: '#ccc',
      },
      headerCell: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        borderRightWidth: 1,
        borderRightColor: '#ccc',
      },
});
export default AttendanceList;