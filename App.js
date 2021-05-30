import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Dashboard from './Screens/Dashboard';
import HomeScreen from './Screens/HomeScreen';
import CameraScreen from './Screens/Camera';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={CameraScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;




