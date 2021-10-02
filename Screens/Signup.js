import React, { useState } from 'react';
import {
  Alert, StyleSheet, Text, TextInput, TouchableHighlight,
  TouchableOpacity, View, KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import firebase from '../Firebase/fire';

import Colors from '../constants/Colors';

const Signup = ({ navigation }) => {
  // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const signup = async () => {
    if (email === '' || password === '') {
      Alert.alert('Enter details to signup')
    }
    // if (password !== confirmPassword) {
    //   Alert.alert("Passwords do not match");
    // }
    else {
      try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email.trim(), password);
        console.log('worked 1')
        navigation.navigate('Login');
        console.log('worked 2')

      } catch (err) {
        console.log("Error message: " + err.message);
        Alert.alert("Error: " + err.message);
      }
    }
  }

  return (
      <View style={styles.container}>
        <LinearGradient colors={Colors.gradient} style={styles.background}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>
              Sign Up
            </Text>
          </View>
          <View style={styles.bottomView}>
            {/* <TextInput style={styles.inputSignup}
            placeholder='User Name'
            placeholderTextColor='white'
            onChangeText={setUserName}
            autoCapitalize='none'
          /> */}
            <TextInput style={styles.inputSignup}
              placeholder='Email'
              placeholderTextColor='white'
              autoCapitalize='none'
              onChangeText={setEmail}
            />
            <TextInput style={styles.inputSignup}
              placeholder='Password'
              placeholderTextColor='white'
              autoCapitalize='none'
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            {/* <TextInput style={styles.inputSignup}
            placeholder='Confirm Password'
            placeholderTextColor='white'
            onChangeText={setConfirmPassword}
            autoCapitalize='none'
            secureTextEntry={true}
          /> */}
            <View style={{ height: '20%', width: '50%', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
              <TouchableHighlight
                style={{ backgroundColor: 'white', width: '80%', borderRadius: 30 }}
                onPress={signup}
              >
                <Text style={{ textAlign: 'center', fontSize: 30, color: 'orange', padding: 10 }}>
                  Sign Up
                </Text>
              </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Text style={{ fontSize: 20, color: 'white' }}>Already have account? </Text>
              <TouchableOpacity style={{ borderBottomWidth: 2, borderBottomColor: 'white' }} underlayColor='white' onPress={() => { navigation.navigate('Login') }}>
                <Text style={{ fontSize: 18, color: 'white' }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    height: '100%',
    position: 'absolute',
    borderBottomLeftRadius: 300,
    left: 0,
    right: 0,
    top: 0,
  },
  heading: {
    flex: 3,
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  bottomView: {
    flex: 7,
    // backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: 30,
    paddingVertical: 40

  },
  inputSignup: {
    color: '#6A4545',
    fontSize: 18,
    height: 50,
    width: '70%',
    borderColor: 'grey',
    borderBottomWidth: 3,
    borderBottomColor: '#707070',
    textAlign: 'center'
  }

});
export default Signup;