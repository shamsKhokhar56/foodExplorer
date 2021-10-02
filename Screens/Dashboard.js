import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View, LogBox, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Camera from './Camera';

import firebase from '../Firebase/fire';
import { KeyboardAvoidingView } from 'react-native';
import RestaurantView from './RestaurantView';

LogBox.ignoreAllLogs();
const Dashboard = ({ navigation }) => {


    const [Restaurant, setRestaurant] = useState([]);
    const [search, setSearch] = useState('');

    const ref = firebase.firestore().collection("Restaurant");

    function getRestaurant() {
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setRestaurant(items);
        });
    }
    useEffect(() => {
        getRestaurant();
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <LinearGradient colors={['#F19724', '#F2A81D', '#F98E11', '#f4511e']} style={styles.background}>

                <View style={{ height: '92%', backgroundColor: 'white' }}>
                    <View style={{ height: '90%', backgroundColor: 'white' }}>
                        {/* Search View */}
                        <View style={{
                            height: '8%', backgroundColor: 'white', flexDirection: 'row', borderWidth: 2, margin: 20
                        }}
                        >
                            {/* Search icon */}
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name="search" size={30} color="#F98E11" />
                            </View>
                            {/* Search field */}
                            <View style={{ width: '70%', justifyContent: 'center' }}>
                                <TextInput style={{ fontSize: 15 }}
                                    placeholder='Search Restaurant'
                                    onChangeText={text => { setSearch(text) }}
                                    value={search}
                                >
                                </TextInput>
                            </View>
                        </View>
                        <View style={{
                            height: '99%', backgroundColor: '#e8e3e3', width: '100%'
                        }}
                        >
                            <View style={{ height: '6%', width: '100%' }}>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', padding: 5, textAlign: 'left' }}>
                                    Restaurants
                                </Text>
                            </View>
                            <View style={{ height: '90%', padding: 10 }}>
                                <FlatList
                                    data={Restaurant}
                                    keyExtractor={item => item.Restaurant}
                                    renderItem={({ item }) => {
                                        if ((item.RestaurantName).toLowerCase().includes(search.toLowerCase()) || search == '') {
                                            return (
                                                <View style={{ marginTop: 10 }} key={item.id} >
                                                    <TouchableHighlight underlayColor="#f7b8a5"
                                                        style={{ backgroundColor: 'brown' }}
                                                        onPress={() => {
                                                            navigation.navigate(
                                                                'RestaurantView', {
                                                                name: item.RestaurantName, number: item.ContactNumber, opTime: item.OpeningTime,
                                                                clTime: item.ClosingTime, address: item.Address, city: item.City,
                                                                rating: item.Rating, website: item.Website,
                                                                locationE: item.Location.E, locationN: item.Location.N

                                                            }
                                                            )
                                                        }}
                                                    >
                                                        <View style={{ backgroundColor: 'white' }} >
                                                            <View style={{
                                                                backgroundColor: '#f7b8a5', width: '95%',
                                                                flexDirection: 'row', justifyContent: 'space-between'
                                                            }}
                                                            >
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, justifyContent: 'center' }}>
                                                                    {item.RestaurantName}
                                                                </Text>
                                                                <Text style={{ fontSize: 14, justifyContent: 'center', margin: 10 }}>
                                                                    {item.Rating}
                                                                </Text>

                                                            </View>
                                                            <Text style={{ fontSize: 16, marginHorizontal: 15 }}>
                                                                {item.Address}
                                                            </Text>

                                                        </View>
                                                    </TouchableHighlight>
                                                </View>
                                            )
                                        }
                                    }}
                                />

                            </View>

                        </View>
                    </View>

                </View>
                <View style={{ height: '2%', backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        backgroundColor: 'white', borderRadius: 50, width: 70, marginTop: 20,
                        height: 70, justifyContent: 'center', alignItems: 'center', borderWidth: 1

                    }}
                    >
                        <TouchableHighlight underlayColor="white"
                            onPress={() => {navigation.navigate('FoodView')}}
                        >
                            <Ionicons name="scan-outline" size={40} color="black" />
                        </TouchableHighlight>
                    </View>
                </View>

            </LinearGradient>
            {/* <StatusBar style="auto" /> */}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'orange',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    background: {
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },

})
export default Dashboard;
