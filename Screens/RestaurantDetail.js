import React, { useState } from 'react'
import { Dimensions, FlatList, TouchableHighlight, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { Entypo } from '@expo/vector-icons';

import Colors from '../constants/Colors';

// import * as data from '../data/Food.json';

import Food from '../data/Food';
import Reviews from '../data/Review';

// import Restaurant from '../data/Restaurant'

const RestaurantDetail = ({ navigation, route }) => {

    const [food, setFood] = useState(true)

    const restId = route.params.restId
    const name = route.params.name
    const linkNumber = route.params.linkNumber
    const cityCode = route.params.cityCode
    const rating = route.params.rating
    const openTime = route.params.openTime
    const closeTime = route.params.closeTime
    const address = route.params.address
    const latitude = route.params.latitude
    const longitude = route.params.longitude
    const image = route.params.image
    const city = route.params.city

    return (
        <ScrollView style={styles.screen}>
            <Image style={styles.imageStyles} source={{ uri: image }} />
            <View style={styles.restaurantDetails}>
                <Text style={styles.textStyles}>
                    {name}
                </Text>
                <View style={styles.ratingStyles}>
                    <Text style={styles.textStyles}>
                        {rating.slice(0, -5)}
                    </Text>
                    <Entypo name="star" size={24} color={Colors.primary} />
                </View>
            </View>
            <View style={styles.mapAndTiming}>
                <Text>
                    <Text style={styles.timeTextStyles}>
                        Timing: {openTime} - {closeTime}
                    </Text>
                </Text>
                <Text>
                    <Text style={styles.timeTextStyles}>
                        Address: {address}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableHighlight
                    underlayColor={'white'}
                    activeOpacity={0.4}
                    style={styles.buttonStyles}
                    onPress={() => setFood(true)}>
                    <Text style={styles.buttonText}>
                        Food
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor={'white'}
                    activeOpacity={0.4}
                    style={styles.buttonStyles}
                    onPress={() => setFood(false)}>
                    <Text style={styles.buttonText}>
                        Reviews
                    </Text>
                </TouchableHighlight>
            </View>
            {
                food ? (
                    <View>
                        <Text style={[styles.textStyles, { borderBottomColor: 'grey', borderTopWidth: 2, fontSize: 28 }]}>
                            Food Items:
                        </Text>
                        {Food.map(item => {
                            if (item.restaurantID === restId) {
                                return (
                                    <View style={styles.foodView} key={item.foodID}>
                                        <View stlye={styles.childView}>
                                            <Image style={styles.foodImageStyles} source={{ uri: item.foodImage }} />
                                        </View>
                                        <View style={styles.foodDetailsView}>
                                            <View style={styles.ratingStyles}>
                                                <Text style={[styles.textStyles, { paddingHorizontal: 5 }]}>
                                                    Name:
                                                </Text>
                                                <Text style={styles.timeTextStyles}>
                                                    {item.foodName}
                                                </Text>
                                            </View>
                                            <View style={styles.ratingStyles}>
                                                <Text style={[styles.textStyles, { paddingHorizontal: 5 }]}>
                                                    Price:
                                                </Text>
                                                <Text style={styles.timeTextStyles}>
                                                    {item.foodPrice}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }
                        })}
                    </View>
                ) : (
                    <View>
                        <Text style={[styles.textStyles, { borderBottomColor: 'grey', borderTopWidth: 2, fontSize: 28 }]}>
                            Reviews:
                        </Text>
                        {Reviews.map(item => {
                            if (item.restaurantID === restId) {
                                return (
                                    <View style={styles.reviewView}>
                                        <View style={styles.leftHand}>
                                            <Text>
                                                {item.reviewBy}
                                            </Text>
                                            <Text>
                                                {item.reviewAt}
                                            </Text>
                                            <Text>
                                                {item.reviewDescription}
                                            </Text>
                                        </View>
                                        <View style={styles.rightHand}>
                                            <Text style={styles.textStyles}>
                                                {item.reviewRating.slice(0, -5)}
                                            </Text>
                                            <Entypo name="star" size={24} color={Colors.primary} />
                                        </View>
                                    </View>
                                )
                            }
                        })}
                    </View>
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 10,
        flex: 1,
    },
    imageStyles: {
        height: 300
    },
    restaurantDetails: {
        padding: 5,
        height: 60,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textStyles: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ratingStyles: {
        flexDirection: 'row',
    },
    mapAndTiming: {
        padding: 5,
    },
    timeTextStyles: {
        fontSize: 18,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 50,
        // backgroundColor: 'green'
    },
    buttonStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 80
    },
    buttonText: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        fontSize: 20
    },
    foodView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    foodImageStyles: {
        height: 150,
        width: 150
    },
    childView: {
        flexBasis: '50%'
    },
    foodDetailsView: {
        padding: 10,
        width: 200,
        justifyContent: 'center'
    },
    reviewView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    leftHand: {
        width: '80%'
    },
    rightHand: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '20%',
        alignItems: 'center'
    },
})

export default RestaurantDetail;
