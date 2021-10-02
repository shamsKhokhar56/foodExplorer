import React from 'react'
import { Text, View, Modal, StyleSheet, TouchableHighlight } from 'react-native'

const ModalComponent = ({ props }) => {
    return (
        <View style={styles.screen}>
            <Modal visible={props.visible} animationType="slide" >
                <TouchableHighlight onPress={props.closeModal}>
                    <Text>
                        this is modal happening
                    </Text>
                </TouchableHighlight>
            </Modal>
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

export default ModalComponent;
