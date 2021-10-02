import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialIcon } from 'react-native-elements';

import firebase from '../Firebase/fire';
import Colors from '../constants/Colors';

import { LoginManager, AccessToken } from 'react-native-fbsdk';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginCheck = async () => {
        if (email === '' || password === '') {
            Alert.alert('Enter details to signup')
        }
        else {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email.trim(), password);
                // navigation.navigate('Dashboard', { email: email.trim() });
                navigation.navigate('HomeScreen', {email: email.trim()});

            } catch (err) {
                console.log("Error message: " + err.message)
            }
        }
    }

    // async function LoginWithFacebook() {
    //     // Attempt login with permissions
    //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    //     if (result.isCancelled) {
    //         throw 'User cancelled the login process';
    //     }

    //     // Once signed in, get the users AccesToken
    //     const data = await AccessToken.getCurrentAccessToken();

    //     if (!data) {
    //         throw 'Something went wrong obtaining access token';
    //     }

    //     // Create a Firebase credential with the AccessToken
    //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(facebookCredential);
    // }

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradient} style={styles.background}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>
                        Login
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.inputEmail}
                        keyboardType='email-address'
                        placeholder='Email'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        onChangeText={setEmail}
                    />
                    <TextInput style={styles.inputEmail}
                        placeholder='Password'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onChangeText={setPassword}
                    />
                    <View style={{ height: '20%', width: '50%', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableHighlight
                            style={{ backgroundColor: 'white', width: '80%', borderRadius: 30 }}
                            onPress={loginCheck}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 30, color: 'orange', padding: 10 }}>
                                Login
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20 }}>Don't have account? </Text>
                        <TouchableOpacity style={{ borderBottomWidth: 2 }} onPress={() => { navigation.navigate('Signup') }}>
                            <Text style={{ fontSize: 18 }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', margin: 10 }}>
                        <Text style={{ fontSize: 20, padding: 10 }}>OR</Text>
                        <Text style={{ fontSize: 20 }}>
                            Continue with
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight>
                            <SocialIcon type="google" />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <SocialIcon type="facebook" />
                        </TouchableHighlight>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'orange',
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
        alignItems: 'center',
        paddingTop: 30,
        paddingVertical: 40

    },
    inputEmail: {
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
export default Login;