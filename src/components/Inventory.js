import React from 'react';
import { View, Text, FlatList } from 'react-native';

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm'
//import AddItemForm from './AddItemForm';

function Inventory(props){
        return (
            <View>
                <Text>yasss bish</Text>
                <FlatList 
                    data={props.screenProps.itemList}
                    renderItem={({ item }) => <Item details={props.screenProps.itemList[key]} deleteItem={props.screenProps.deleteItem} />}
                    keyExtractor={item => item.key}
                />
            </View>
        )
}

export default Inventory;