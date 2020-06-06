import React from 'react';
import { Button, Image, Overlay } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ItemModal({details, handleClose, modalIsVisible}){

return (
    <Overlay
    overlayStyle={{padding: 0}}
    isVisible={modalIsVisible}
    onBackdropPress={handleClose}
    children={details}
    width="75%"
    height="60%">
        <Text style={styles.title}>{details.name}</Text>
        <View style={styles.boxContainer}>
            <Text style={styles.box}>{details.box}</Text>
        </View>
        <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'center'}}>About this item:</Text>
        <Text style={styles.description}>{details.desc}</Text>
        <View style={styles.details}>
            <Ionicons name="ios-person" size={25} color="black" style={{padding: 8}} />
            <View style={{width: 50, justifyContent: 'center'}}><Text style={{fontSize: 18}}>{details.owner}</Text></View>
            <Ionicons name="ios-pin" size={25} color="black" style={{padding: 8}} />
            <View style={{width: 50, justifyContent: 'center', margin: 0}}><Text style={{fontSize: 15}}>{details.location}</Text></View>
        </View>

        <View style={styles.details}>
            <Ionicons name="ios-cube" size={25} color="black" />
            <Text>{details.quantity}</Text>
        </View>
        <View style={{margin: 5, alignSelf: 'center', height: 140, width: 140, backgroundColor: 'pink'}}>
            <Image source={{}}></Image>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Button buttonStyle={styles.button} title={"Close"} onPress={handleClose}></Button>
            <Button buttonStyle={styles.editButton} titleStyle={{color: '#317873'}} title={"Edit"} type={'outline'}></Button>
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
    box: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        width: 'auto',
    },
    boxContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#317873',
        borderRadius: 15,
        height: 27,
        width: 60
    },
    quantity: {
        textAlign: 'center',
        color: 'white',
        width: 30,
        fontSize: 20,
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5, 
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#317873',
        width: '80%',
    },
    editButton: {
        alignSelf: 'center',
        width: '80%',
        borderColor: '#317873',
    }
})