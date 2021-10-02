import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Dashboard from './Screens/Dashboard';

const Drawer = createDrawerNavigator();


const Drawer = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        {/* <Stack.Screen name="Home" component={Practice} /> */}
        <Drawer.Screen options={{ headerShown: false }} name="Login" component={Login} />
        {/* <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup}/>
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard}/>
        <Stack.Screen options={{ headerShown: false }} name="Drawer" component={}/> */}
      </Drawer.Navigator>
    // </NavigationContainer>
  )
}

export default Drawer;


