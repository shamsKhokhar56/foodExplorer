import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View, LogBox, KeyboardAvoidingView } from 'react-native';
import firebase from '../Firebase/fire';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const FoodView = ({ navigation }) => {

    const [Food, setFood] = useState([]);
    const [search, setSearch] = useState('');

    const ref = firebase.firestore().collection("FoodItem");

    function getFood() {
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setFood(items);
            console.log(Food)
        });
    }
    useEffect(() => {
        getFood();
    }, []);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <LinearGradient colors={['#F19724', '#F2A81D', '#F98E11', '#f4511e']} style={styles.background}>

                <View style={{ height: '100%', backgroundColor: 'white' }}>
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
                                    placeholder='Search Food'
                                    onChangeText={text => { setSearch(text) }}
                                    value={search}
                                >
                                </TextInput>
                            </View>
                        </View>
                        <View style={{
                            height: '92%', backgroundColor: '#e8e3e3', width: '100%'
                        }}
                        >
                            <View style={{ height: '6%', width: '100%' }}>
                                <Text style={{ fontSize: 28, fontWeight: 'bold', padding: 5, textAlign: 'left' }}>
                                    Food Items
                                </Text>
                            </View>
                            <View style={{ height: '90%', padding: 10 }}>
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
                                                                {/* <Text style={{ fontSize: 14, justifyContent: 'center', margin: 10 }}>
                                                                    {item.Rating}
                                                                </Text> */}

                                                            </View>
                                                            {/* <Text style={{ fontSize: 16, marginHorizontal: 15 }}>
                                                                {item.Address}
                                                            </Text> */}

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
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }

})

export default FoodView;
