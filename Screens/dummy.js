import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native'

import Colors from '../constants/Colors';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Card from '../components/Card';

const Dashboard2 = ({ navigation }) => {

    return (
        <View style={styles.screen}>
            <View style={styles.upperDashboard}>
                {/* <Card style={styles.selectLocationView}>
                    <TouchableHighlight onPress={() => console.log("location")}>
                        <View style={styles.locationInnerView}>
                            <View style={styles.locationIconView}>
                                <EvilIcons name="location" size={36} color={Colors.primary} />
                            </View>
                            <View style={[styles.locationIconView, { width: '85%', alignItems: 'flex-start', paddingLeft: 20 }]}>
                                <Text style={styles.locationTextStyles}>
                                    {location}
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </Card> */}
            </View>
            <View style={styles.dashboardItems}>
                {/* <View style={styles.dashboardItemsViewUpper}>
                    <Card style={styles.upperCard}>
                        <TouchableHighlight onPress={() => navigation.navigate('FoodScreen')}>
                            <ImageBackground style={styles.imageStyle} source={require('../assets/Food.jpg')}>
                                <Text style={styles.textStyles}>
                                    Food
                                </Text>
                            </ImageBackground>
                        </TouchableHighlight>
                    </Card>
                    <Card style={styles.upperCard}>
                        <TouchableHighlight onPress={() => navigation.navigate('RestaurantScreen')}>
                            <ImageBackground style={styles.imageStyle} source={require('../assets/Restaurant1.jpg')}>
                                <Text style={styles.textStyles}>
                                    Restaurant
                                </Text>
                            </ImageBackground>
                        </TouchableHighlight>
                    </Card>
                </View> */}
                <View style={styles.dashboardItemsViewLower}>
                    <Card style={styles.lowerCard}>
                        <TouchableHighlight onPress={() => navigation.navigate('RestaurantScreen',
                            { city: 'islamabad' }
                        )}>
                            <ImageBackground style={styles.imageStyle} source={require('../assets/Restaurant1.jpg')}>
                                <Text style={styles.textStyles}>
                                    Restaurant
                                </Text>
                            </ImageBackground>
                        </TouchableHighlight>
                    </Card>
                </View>
                <View style={styles.dashboardItemsViewLower}>
                    <Card style={styles.lowerCard}>
                        <TouchableHighlight onPress={() => navigation.navigate('DietPlans')}>
                            <ImageBackground style={styles.imageStyle} source={require('../assets/dietPlan.jpg')}>
                                <Text style={styles.textStyles}>
                                    Diet Plan
                                </Text>
                            </ImageBackground>
                        </TouchableHighlight>
                    </Card>
                </View>
                <View style={styles.dashboardItemsViewLower}>
                    <Card style={styles.lowerCard}>
                        <TouchableHighlight onPress={() => navigation.navigate('WorkoutMain')}>
                            <ImageBackground style={styles.imageStyle} source={require('../assets/workout.jpg')}>
                                <Text style={styles.textStyles}>
                                    Workout
                                </Text>
                            </ImageBackground>
                        </TouchableHighlight>
                    </Card>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.cameraButtonView}>
                    <TouchableHighlight activeOpacity={0.1} underlayColor="white"
                        onPress={() => { navigation.navigate('Camera') }}
                    >
                        <Ionicons style={styles.scanIcon} name="scan-circle-outline" size={70} color={Colors.primary} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundGrey,
    },
    // upperDashboard: {
    //     height: '10%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    selectLocationView: {
        width: '90%',
        height: '75%',
        overflow: 'hidden'
    },
    locationInnerView: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
    },
    locationIconView: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    locationTextStyles: {
        color: 'black',
        fontSize: 20
    },
    textStyles: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 15
    },
    dashboardItems: {
        height: '94%',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    dashboardItemsViewUpper: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: '33%',
        width: '100%',
        margin: 1
    },
    upperCard: {
        width: '42%',
        height: '85%',
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    dashboardItemsViewLower: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
    },
    lowerCard: {
        width: '90%',
        height: '90%',
        overflow: 'hidden'
    },
    bottom: {
        height: '6%',
        backgroundColor: Colors.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    cameraButtonView: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        width: 70
    },
    scanIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
    // cameraButton: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     shadowColor: 'black',
    //     shadowOpacity: 0.26,
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowRadius: 8,
    //     elevation: 5,
    //     borderRadius: 38,
    //     backgroundColor: 'white'
    // },

})

export default Dashboard2;
