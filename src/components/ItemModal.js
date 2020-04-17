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
        <Text>{details.name}</Text>
        <Text>{details.desc}</Text>
        <Text>{details.quantity}</Text>
        <Button title={"Close"} onPress={handleClose}></Button>
    </Overlay>
)
}

const styles = StyleSheet.create({

})