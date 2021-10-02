import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import homeBasedWorkout from '../data/HomeBasedWorkoutData';
import LoseWeight from '../data/LoseWeightData';

import Colors from '../constants/Colors';
import building from '../data/BuildMuscles';

const WorkoutDetail = ({ navigation, route }) => {
    const typeName = route.params.workName
    const id = route.params.id
    if (typeName === "Home Based Workout") {
        return (
            <View style={styles.screen}>
                <View>
                    <Text style={styles.noteText}>
                        * Perform Circuit 1 of all the exercises followed by Circuit 2 & Circuit 3. *
                    </Text>
                </View>
                <ScrollView>
                    {homeBasedWorkout[id].category.map(item => {
                        return (
                            <View key={item.id} style={styles.mainView}>
                                <Text style={styles.textStyles}>
                                    {item.id}. {item.catName}
                                </Text>
                                <Image style={styles.imageStyles} source={item.image1} />
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[1]}
                                </Text>
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[2]}
                                </Text>
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[3]}
                                </Text>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }
    else if (typeName === "Lose Weight") {
        return (
            <View style={styles.screen}>
                <View>
                    <Text style={styles.headingText}>
                        Home Workout
                    </Text>
                </View>
                <ScrollView>
                    {homeBasedWorkout[id].category.map(item => {
                        return (
                            <View key={item.id} style={styles.mainView}>
                                <Text style={styles.textStyles}>
                                    {item.id}. {item.catName}
                                </Text>
                                <Image style={styles.imageStyles} source={item.image1} />
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[1]}
                                </Text>
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[2]}
                                </Text>
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[3]}
                                </Text>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }
    else if (typeName === "Build Muscles") {
        return (
            <View style={styles.screen}>
                <View>
                    <Text style={styles.headingText}>
                        {building[id].name}
                    </Text>
                </View>
                <View>
                    <Text style={styles.noteText}>
                        * Perform Circuit 1 of all the exercises followed by Circuit 2 & Circuit 3. *
                    </Text>
                </View>
                <ScrollView>
                    {building[id].category.map(item => {
                        return (
                            <View key={item.id} style={styles.mainView}>
                                <Text style={styles.textStyles}>
                                    {item.id}. {item.catName}
                                </Text>
                                <Image style={styles.imageStyles} source={item.image1} />
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[1]}
                                </Text>
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[2]}
                                </Text>
                                <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                    {item.circuit[3]}
                                </Text>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: Colors.backgroundGrey
    },
    headingText: {
        color: 'black',
        fontSize: 22,
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    noteText: {
        color: Colors.primary,
        fontSize: 18,
        fontStyle: 'italic',
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainView: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    textStyles: {
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'white'
    },

    imageStyles: {
        width: '100%',
        height: 250

    },

})

export default WorkoutDetail
