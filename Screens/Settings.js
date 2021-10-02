import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Text>
                Hello Settings Screen
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Settings
