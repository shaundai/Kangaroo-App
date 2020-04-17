import React, { useState } from 'react';
import { Overlay } from 'react-native-elements';
import { StyleSheet, Text, Button } from 'react-native'

export default function ItemModal(props){

return (
    <Overlay
    isVisible={props.modalIsVisible}
    onBackdropPress={props.handleClose}
    width="auto"
    height="auto">
        <Text>This is a modal</Text>
        <Button title={"Close"} onPress={props.handleClose}></Button>
    </Overlay>
)
}