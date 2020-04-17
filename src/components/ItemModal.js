import React, { useState } from 'react';
import { Overlay } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native'


export default function ItemModal(props){

    hideModal = () => {
        setModalVisibility(false);
    }

return (
    <Overlay
    isVisible={props.modalIsVisible}
    onBackdropPress={()=>}
    width="auto"
    height="auto">
        <Text>This is a modal</Text>
    </Overlay>
)
}