import React from 'react';

function Item(props) {
    const { name, desc, quantity, box, location, owner } = props.details; //destructuring like a bawse
        return (
            <li className="item">
                <Text>{name}</Text>
                <Text>Description: {desc}</Text>
                <Text>Box Number: clickable link {box}</Text>
                <Text>Quantity: {quantity}</Text>
                <Text>Location: {location}</Text>
                <Text>Owner: {owner}</Text>
                <button onClick={()=>{if (window.confirm('Are you sure you want to delete me?'))props.deleteItem(props.index)}}>Delete Item</button>
            </li>
        )
}

export default Item;