import React from 'react'
import {
    View, Text, StyleSheet, TouchableHighlight,
    ImageBackground, FlatList, ScrollView, Dimensions
}
    from 'react-native';

import homeBasedWorkout from '../data/HomeBasedWorkoutData';
import LoseWeight from '../data/LoseWeightData';

import Card from '../components/Card';

import Colors from '../constants/Colors';
import building from '../data/BuildMuscles';


const WorkoutTypes = ({ route, navigation }) => {
    const name = route.params.workoutName
    if (name === "Home Based Workout") {
        return (
            <View style={styles.screen}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={homeBasedWorkout}
                    keyExtractor={homeBasedWorkout.workoutId}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.cardStyles} >
                                <TouchableHighlight underlayColor={'white'}
                                    style={styles.buttonStyles}
                                    onPress={() => {
                                        navigation.navigate('WorkoutDetail', {
                                            id: item.workoutId, workName: name
                                        })
                                    }
                                    }>
                                    {/* <ImageBackground style={styles.imageStyle} source={item.image}>
                                 <Text style={styles.innerTextStyles}>
                                     {item.name}
                                     </Text>
                                    </ImageBackground> */}
                                    <Text style={styles.innerTextStyles}>
                                        {item.name}
                                    </Text>
                                </TouchableHighlight>
                            </Card>
                        )
                    }}
                />
            </View>
        )

    }
    else if (name === "Build Muscles") {
        return (
            <View style={styles.screen}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={building}
                    keyExtractor={building.workoutId}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.cardStyles} >
                                <TouchableHighlight underlayColor={'white'}
                                    style={styles.buttonStyles}
                                    onPress={() => {
                                        navigation.navigate('WorkoutDetail', {
                                            id: item.workoutId, workName: name
                                        })
                                    }
                                    }>
                                    <ImageBackground style={styles.imageStyle} source={item.image}>
                                        <Text style={styles.innerTextStyles}>
                                            {item.name}
                                        </Text>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }
    else {
        return (
            <View style={styles.screen}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={LoseWeight}
                    keyExtractor={LoseWeight.workoutId}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.cardStyles} >
                                <TouchableHighlight underlayColor={'white'}
                                    style={styles.buttonStyles}
                                    onPress={() => {
                                        navigation.navigate('WorkoutDetail', {
                                            id: item.workoutId, workName: name
                                        })
                                    }
                                    }>
                                    <ImageBackground style={styles.imageStyle} source={item.image}>
                                        <Text style={styles.innerTextStyles}>
                                            {item.name}
                                        </Text>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.backgroundGrey
    },
    scrollViewStyles: {
        flex: 1,
        height: '100%',
        justifyContent: 'center'
    },
    cardStyles: {
        height: 150,
        width: 350,
        margin: 10,
        overflow: 'hidden'
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
    buttonStyles: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        resizeMode: 'cover'
    },
})
export default WorkoutTypes;
