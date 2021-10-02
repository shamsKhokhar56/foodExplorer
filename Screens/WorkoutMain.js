import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';

import workoutTypes from '../data/WorkoutData';

const WorkoutMain = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.screenInner}>
                {workoutTypes.map(item => {
                    return (
                        <Card style={styles.cardStyles} key={item.id}>
                            <TouchableHighlight
                                onPress={() => {
                                    navigation.navigate('WorkoutTypes', {
                                        workoutName: item.name
                                    })
                                }}>
                                <ImageBackground style={styles.imageStyle} source={item.imageSource}>
                                    <Text style={styles.innerTextStyles}>
                                        {item.name}
                                    </Text>
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.backgroundGrey
    },
    screenInner: {
        height: '90%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyles: {
        backgroundColor: 'white',
        width: '90%',
        height: '30%',
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
    }
})

export default WorkoutMain;
