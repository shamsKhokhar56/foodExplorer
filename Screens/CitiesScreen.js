import React from 'react'
import { StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native'

import Colors from '../constants/Colors'
import Card from '../components/Card'
import Cities from '../data/CitiesData'

const CitiesScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.headingView}>
                <Text style={styles.headingText}>
                    We are in following Cities
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Cities}
                keyExtractor={Cities.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.cardView}>

                            <Card style={styles.cardStyles} >
                                <ImageBackground style={styles.imageStyle} source={item.image}>
                                    <Text style={styles.innerTextStyles}>
                                        {item.cityName}
                                    </Text>
                                </ImageBackground>
                            </Card>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    headingView: {
        height: '10%',
        padding: 20
    },
    headingText: {
        fontSize: 32,
        color: 'black',
        // textAlign: 'center',
        fontWeight: 'bold'
    },
    cardView: {
        alignItems: 'center'
    },
    cardStyles: {
        height: 250,
        width: 350,
        margin: 10,
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        resizeMode: 'cover'
    },
    innerTextStyles: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        color: 'white',
        fontSize: 24,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default CitiesScreen;
