import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

function Searchbar(props){
    const [term, setTerm] = useState('');
    
    const handleTermChange = (e) => {
        setTerm(e.currentTarget.value)
    }

    const search = () => {
        const newTerm = Object.values({term})
        props.onSearch(newTerm)
        }

    return (
        <View>
            <TextInput
            onChangeText={handleTermChange}
            placeholder='Search for an item...'></TextInput>
            <button onClick={search}>SEARCH</button>
        </View>
    )
}

export default Searchbar;