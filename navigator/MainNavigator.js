import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Dashboard from '../Screens/Dashboard';
import Dashboard2 from '../Screens/Dashboard2';
import Profile from '../Screens/Profile';
import CustomSidebarMenu from '../Screens/CustomSidebarMenu';
import FoodView from '../Screens/FoodView';
import FoodScreen from '../Screens/FoodScreen';
import RestaurantScreen from '../Screens/RestaurantScreen';
import FoodDetail from '../Screens/FoodDetail';
import WorkoutMain from '../Screens/WorkoutMain';
import WorkoutTypes from '../Screens/WorkoutTypes';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import WorkoutDetail from '../Screens/WorkoutDetail';
import RestaurantDetail from '../Screens/RestaurantDetail';
import DietPlans from '../Screens/DietPlans';
import DietPlansDetails from '../Screens/DietPlansDetails';
import DietPlansDetailsView from '../Screens/DietPlansDetailsView';
import Settings from '../Screens/Settings';
import Login from '../Screens/Login'
import CameraScreen from '../Screens/Camera';
import CitiesScreen from '../Screens/CitiesScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function dashboardScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard2}
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
            <Stack.Screen
                name="FoodScreen"
                component={FoodScreen}
                options={{
                    title: 'Food', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="FoodDetail"
                component={FoodDetail}
                options={{
                    title: 'Food Detail', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="RestaurantScreen"
                component={RestaurantScreen}
                options={{
                    title: 'Restaurants', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetail}
                options={{
                    title: 'Restaurant Detail', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="CitiesScreen"
                component={CitiesScreen}
                options={{
                    title: 'Cities', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="DietPlans"
                component={DietPlans}
                options={{
                    title: 'Diet Plans', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="DietPlansDetails"
                component={DietPlansDetails}
                options={{
                    title: 'Diet Plan Details', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="DietPlansDetailsView"
                component={DietPlansDetailsView}
                options={{
                    title: 'Diet Plan Details View', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="WorkoutMain"
                component={WorkoutMain}
                options={{
                    title: 'Workout & Fitness', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="WorkoutTypes"
                component={WorkoutTypes}
                options={{
                    title: 'Workout Types', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="WorkoutDetail"
                component={WorkoutDetail}
                options={{
                    title: 'Workout Detail', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    title: 'Camera', //Set Header Title
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={35} color="white"
                            style={{ margin: 10 }} onPress={() => navigation.goBack()}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: Colors.primary, //Set Header color
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
function AccountSettingScreenStack({ navigation }) {
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
function ApplicationSettingScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Settings', //Set Header Title
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
function LoginSignupScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
function Suggestions({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Suggestions">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}



const DrawerNavigator = ({ route }) => {
    const userEmail = ""
    // const userEmail = route.params.email
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: Colors.primary,
                itemStyle: { marginVertical: 3 },
            }}
            drawerContent={(props) => <CustomSidebarMenu userEmail={userEmail} {...props} />}
        >
            <Drawer.Screen
                name="Dashbaord"
                options={{ drawerLabel: 'Home' }}
                component={dashboardScreenStack}
                options={{
                    title: 'Home',
                    drawerIcon: () => {
                        <Ionicons
                            name='md-home-outline' size={20} color={Colors.primary}
                        />
                    }
                }}
            />
            <Drawer.Screen
                name="Suggestions"
                options={{ drawerLabel: 'Suggestions' }}
                component={Suggestions}
                options={{
                    title: 'Suggestions',
                    drawerIcon: () => {
                        <Ionicons
                            name='md-home-outline' size={20} color={Colors.primary}
                        />
                    }
                }}
            />
            <Drawer.Screen
                name="Account Setting"
                options={{ drawerLabel: 'Account Setting' }}
                component={AccountSettingScreenStack}
                options={{
                    title: 'Account Setting',
                    drawerIcon: () => {
                        <Ionicons
                            name='md-home-outline' size={20} color={Colors.primary}
                        />
                    }
                }}
            />
            <Drawer.Screen
                name="Application Setting"
                options={{ drawerLabel: 'Application Setting' }}
                component={ApplicationSettingScreenStack}
                options={{
                    title: 'Application Setting',
                    drawerIcon: () => {
                        <Ionicons
                            name='md-home-outline' size={20} color={Colors.primary}
                        />
                    }
                }}
            />
            <Drawer.Screen
                name="Logout"
                options={{ drawerLabel: 'Logout' }}
                component={LoginSignupScreenStack}
                options={{
                    title: 'Logout',
                    drawerIcon: () => {
                        <Ionicons
                            name='md-home-outline' size={20} color={Colors.primary}
                        />
                    }
                }}
            />
            {/*
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
            /> */}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;