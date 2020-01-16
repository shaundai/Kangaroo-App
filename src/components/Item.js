import React from 'react';
import { TouchableOpacity, Button, Text } from 'react-native';

function Item({ name, desc, quantity, box, location, owner }) {
        return (
            <TouchableOpacity>
                <Text>{name}</Text>
                <Text>Description: {desc}</Text>
                <Text>Box Number: clickable link {box}</Text>
                <Text>Quantity: {quantity}</Text>
                <Text>Location: {location}</Text>
                <Text>Owner: {owner}</Text>
                <Button title="Delete Item"
                onPress={()=>{if (window.confirm('Are you sure you want to delete me?'))props.deleteItem(props.index)}}
                />
            </TouchableOpacity>
        )
}

export default Item;