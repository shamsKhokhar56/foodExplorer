import React from 'react';

import { SafeAreaView, View, StyleSheet, Text, Linking } from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { FontAwesome5 } from '@expo/vector-icons';

const CustomSidebarMenu = ({ userEmail, ...props }) => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 60 }}>
            <View style={{ height: '18%', borderBottomWidth: 2, borderBottomColor: 'grey', paddingRight: 20, marginHorizontal: 20 }}>
                <View style={{ alignItems: 'center', height: '80%' }}>
                    <FontAwesome5 name="user" size={80} color="#f4511e" />
                </View>
                <View style={{ height: '20%' }}>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>{userEmail}</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;
