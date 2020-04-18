import React from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Person from '../../assets/images/person.png';

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
        
        <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-person" size={30} color="black" />
            <Text h3>{details.owner}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-pin" size={30} color="black" />
            <Text h3>{details.location}</Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Button buttonStyle={styles.button} title={"Close"} onPress={handleClose}></Button>
            <Button buttonStyle={styles.editButton} title={"Edit"}></Button>
        </View>
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
    },
    button: {
        alignSelf: 'center',
        width: '80%'
    },
    editButton: {
        alignSelf: 'center',
        width: '80%',
        backgroundColor: 'darkgray',
    }
})