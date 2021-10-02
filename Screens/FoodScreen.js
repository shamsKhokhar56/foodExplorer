import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, FlatList, TouchableHighlight, Text } from 'react-native';

import Card from '../components/Card'

import Colors from '../constants/Colors'

import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';

import firebase from '../Firebase/fire';


const FoodScreen = ({ navigation }) => {
    const [Food, setFood] = useState([]);
    const [search, setSearch] = useState('');

    const ref = firebase.firestore().collection("FoodItem");

    function getFood() {
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setFood(items);
        });
    }
    useEffect(() => {
        getFood();
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.searchView}>
                <Card style={styles.searchCard}>
                    <View style={styles.searchIcon}>
                        <FontAwesome name="search" size={30} color={Colors.primary} />
                    </View>
                    <View style={styles.searchText}>
                        <TextInput style={{ fontSize: 15 }}
                            placeholder='Search Food'
                        // onChangeText={text => { setSearch(text) }}
                        // value={search}
                        >
                        </TextInput>
                    </View>
                </Card>
            </View>
            <View style={styles.displayFood}>
                <FlatList
                    data={Food}
                    keyExtractor={item => item.Food}
                    renderItem={({ item }) => {
                        if ((item.FoodName).toLowerCase().includes(search.toLowerCase()) || search == '') {
                            return (
                                <View style={{ marginTop: 10 }} key={item.FoodID} >
                                    <TouchableHighlight underlayColor="#f7b8a5"
                                            style={{ backgroundColor: 'brown' }}
                                            onPress={() => {
                                                navigation.navigate(
                                                    'FoodDetail', {
                                                    name: item.FoodName,
                                                    ingredients: item.Ingredients, nutritionName: item.NutritionName,
                                                    nutritionValue: item.NutritionValue, recipe: item.Recipe, types: item.Types
                                                }
                                                )
                                            }}
                                        >
                                            <View style={{ backgroundColor: 'white', width: '100%' }} >
                                                <View style={{
                                                    backgroundColor: '#f7b8a5', width: '100%',
                                                    flexDirection: 'row', justifyContent: 'space-between'
                                                }}
                                                >
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10, justifyContent: 'center' }}>
                                                        {item.FoodName}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableHighlight>
                                    {/* <Text>
                                        {item.FoodName}
                                    </Text> */}
                                </View>
                            )
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundGrey,
    },
    searchView: {
        // height: '10%',
        minHeight: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchCard: {
        // height: '60%',
        minHeight: '6%',
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
    },
    searchIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%'
    },
    searchText: {
        justifyContent: 'center',
        width: '85%',
        paddingLeft: 10
    },
    displayFood: {
        height: '90%',
        padding: 10,
        backgroundColor: 'yellow'
    }
})

export default FoodScreen;
