import React from 'react';
import { TouchableOpacity, Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/index';

function Item({ id, name, desc, quantity, box, location, owner }) {
    const dispatch = useDispatch();
        return (
            <TouchableOpacity>
                <Text>{name}</Text>
                <Text>Description: {desc}</Text>
                <Text>Box Number: clickable link {box}</Text>
                <Text>Quantity: {quantity}</Text>
                <Text>Location: {location}</Text>
                <Text>Owner: {owner}</Text>
                <Text>{id}</Text>
                <Button title="Delete Item"
                onPress={()=>dispatch(deleteItem(id))}
                />
            </TouchableOpacity>
        )
}

export default Item;