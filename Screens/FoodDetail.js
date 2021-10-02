import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const FoodDetail = ({ route, navigation }) => {
    const name = route.params.name;
    const ingredients = route.params.ingredients;
    const nutritionName = route.params.nutritionName;
    const nutritionValue = route.params.nutritionValue;
    const recipe = route.params.recipe;
    const types = route.params.types;


    return (
        <View style={styles.container}>
            <View style={{
                height: '7%', width: '100%', backgroundColor: '#f4511e',
                flexDirection: 'row', alignItems: 'center'
            }}
            >
                <Ionicons name="arrow-back" size={34} color="white"
                    style={{ margin: 15, justifyContent: 'flex-start' }} onPress={() => navigation.goBack()}
                />
                <Text style={{ fontSize: 22, color: 'white' }}>
                    Food Detail
                </Text>

            </View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '100%', backgroundColor: 'white', width: '100%', paddingLeft: 20, justifyContent: 'center' }}>
                        <View style={{ height: '98%', padding: 20 }} >
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    Food Name:
                            </Text>
                                <View style={styles.foodDetails}>
                                    <Text style={{ fontSize: 18 }}>
                                        {name}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    Ingredients:
                            </Text>
                                <View style={styles.foodDetails}>
                                    <Text style={{ fontSize: 18 }}>
                                        {ingredients}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    Nutrition Name:
                            </Text>
                                <View style={styles.foodDetails}>
                                    <Text style={{ fontSize: 18 }}>
                                        {nutritionName}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    Nutrition Value:
                            </Text>
                                <View style={styles.foodDetails}>
                                    <Text style={{ fontSize: 18 }}>
                                        {nutritionValue}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    Recipe:
                            </Text>
                                <View style={styles.foodDetails}>
                                    <Text style={{ fontSize: 18 }}>
                                        {recipe}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                    Types:
                            </Text>
                                <View style={styles.foodDetails}>
                                    <Text style={{ fontSize: 18 }}>
                                        {types}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f4511e'
    },
    foodDetails: {
        justifyContent: 'center', 
        width: '80%', 
        marginLeft: 40
    }

})

export default FoodDetail;
