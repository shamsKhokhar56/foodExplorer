import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground } from 'react-native';

import dietPlans from '../data/DietPlans';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const DietPlans = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.screenInner}>
                {dietPlans.map(item => {
                    return (
                        <Card style={styles.cardStyles} key={item.id}>
                            <TouchableHighlight
                                onPress={() => {
                                    navigation.navigate('DietPlansDetails', {
                                        name: item.name
                                    })
                                }}>
                                <ImageBackground style={styles.imageStyle}resizeMode='cover' source={item.imageSource}>
                                    {/* <Text style={styles.innerTextStyles}>
                                        {item.name} 
                                    </Text> */}
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
        height: '35%',
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

export default DietPlans
