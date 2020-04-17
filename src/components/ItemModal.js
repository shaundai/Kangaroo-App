import React from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native'

export default function ItemModal({details, handleClose, modalIsVisible}){

return (
    <Overlay
    overlayStyle={{padding: 0}}
    isVisible={modalIsVisible}
    onBackdropPress={handleClose}
    children={details}
    width="75%"
    height="50%">
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
        width: 'auto',
        color: 'black',
        margin: 0,
        padding: 10,
    },
    details: {
        fontSize: 25,
        textAlign: 'center',
    }
})