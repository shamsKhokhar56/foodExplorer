import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

const RestaurantView = ({ route, navigation }) => {
    const name = route.params.name;
    const number = route.params.number;
    const opTime = route.params.opTime;
    const clTime = route.params.clTime;
    const address = route.params.address;
    const city = route.params.city;
    const rating = route.params.rating;
    const website = route.params.website;
    const locationE = route.params.locationE;
    const locationN = route.params.locationN;


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
                    Restaurant Detail
                </Text>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: '100%', backgroundColor: 'white', width: '100%', paddingLeft: 20 , justifyContent: 'center' }}>
                    <View style={{ height: '90%' }} >
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Restaurant Name:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {name}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Contact Number:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {number}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Rating:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {rating}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Address:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '80%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {address}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                City:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {city}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Location:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    N: {locationN}, E: {locationE}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Opening Time:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {opTime}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Closing Time:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {clTime}
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Website:
                            </Text>
                            <View style={{ justifyContent: 'center', width: '50%', marginLeft: 40 }}>
                                <Text style={{ fontSize: 18 }}>
                                    {website}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

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
    }

})

export default RestaurantView;
