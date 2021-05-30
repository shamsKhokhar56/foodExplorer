import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Profile from './Profile';
import CustomSidebarMenu from './CustomSidebarMenu';
import RestaurantView from './RestaurantView';
import FoodView from './FoodView';
import FoodDetail from './FoodDetail';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CameraScreen from './Camera';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function dashboardScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    title: 'Dashboard', //Set Header Title
                    headerLeft: () => (
                        <Entypo name="menu" size={40} color="white" style={{ margin: 10 }} onPress={() => navigation.openDrawer()} />
                    ),
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}
function ProfileScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={40} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}
function FoodViewScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="FoodView">
            <Stack.Screen
                name="FoodView"
                component={FoodView}
                options={{
                    title: 'Food Items',
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={40} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#f4511e', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}



const HomeScreen = ({ route }) => {
    // const userEmail = "email.com"
    const userEmail = route.params.email
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                // activeTintColor: '#e91e63',
                activeTintColor: '#f4511e',
                itemStyle: { marginVertical: 3 },
            }}
            drawerContent={(props) => <CustomSidebarMenu userEmail={userEmail} {...props} />}
        >
            <Drawer.Screen
                name="Dashbaord"
                options={{ drawerLabel: 'Home' }}
                component={dashboardScreenStack}
            />
            <Drawer.Screen
                name="Food"
                options={{ drawerLabel: 'Food' }}
                component={FoodViewScreenStack}
            />
            <Drawer.Screen
                name="RestaurantView"
                options={{ drawerLabel: '' }}
                component={RestaurantView}
            />
            <Drawer.Screen
                name="CameraScreen"
                options={{ drawerLabel: '' }}
                component={CameraScreen}
            />
            <Drawer.Screen
                name="FoodDetail"
                options={{ drawerLabel: '' }}
                component={FoodDetail}
            />
        </Drawer.Navigator>
    )
}

export default HomeScreen;