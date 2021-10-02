import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.screen}>
            <Text>
                Data is loading
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Loading
