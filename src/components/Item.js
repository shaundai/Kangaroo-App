import React from 'react';
import { TouchableOpacity, Button } from 'react-native';

function Item(props) {
    const { name, desc, quantity, box, location, owner } = props.details; //destructuring like a bawse
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