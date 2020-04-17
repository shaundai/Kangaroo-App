import React from 'react';
import { Overlay } from 'react-native-elements';
import { StyleSheet, Text, Button } from 'react-native'

export default function ItemModal({details, handleClose, modalIsVisible}){

return (
    <Overlay
    isVisible={modalIsVisible}
    onBackdropPress={handleClose}
    children={details}
    width="auto"
    height="auto">
        <Text style={styles.title}>{details.name}</Text>
        <Text style={styles.details}>{details.desc}</Text>
        <Text style={styles.details}>{details.quantity}</Text>
        <Text h3>{details.location}</Text>
        <Button title={"Close"} onPress={handleClose}></Button>
    </Overlay>
)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    details: {
        fontSize: 25,
        textAlign: 'center',
    }
})