import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import DietPlansData from '../data/DietPlansData';

import Colors from '../constants/Colors';

const DietPlansDetailsView = ({ navigation, route }) => {
    const id = route.params.id
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Sunday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].sundayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].sundaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].sundayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].sundayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].sundayDinner}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Monday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].mondayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].mondaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].mondayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].mondayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].mondayDinner}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Tuesday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].tuesdayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].tuesdaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].tuesdayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].tuesdayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].tuesdayDinner}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Wednesday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].wednesdayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].wednesdaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].wednesdayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].wednesdayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].wednesdayDinner}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Thursday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].thursdayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].thursdaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].thursdayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].thursdayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].thursdayDinner}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Friday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].fridayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].fridaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].fridayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].fridayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].fridayDinner}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <Text style={styles.dayText}>
                        Saturday
                    </Text>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Breakfast {DietPlansData[id].breakfastTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].saturdayBreakfast}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Mid-Meal {DietPlansData[id].snackTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].saturdaySnack}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Lunch {DietPlansData[id].lunchTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].saturdayLunch}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Evening {DietPlansData[id].eveningTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].saturdayEvening}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={{ width: '20%', borderRightWidth: 1, borderRightColor: 'black', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                            Dinner {DietPlansData[id].dinnerTime}:
                        </Text>
                    </View>
                    <View style={{ width: '80%', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: 'black', justifyContent: 'center' }}>
                        <Text style={styles.textStyles}>
                            {DietPlansData[id].saturdayDinner}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    dayView: {
        justifyContent: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: '100%'
    },
    dayText: {
        fontSize: 28,
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    dietPlanView: {
        flexDirection: 'row',
        margin: 5
    },
    textStyles: {
        fontSize: 16,
        textAlign: 'justify'
    },

})

export default DietPlansDetailsView
