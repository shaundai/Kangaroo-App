import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Item from '../src/components/Item';

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm'
//import AddItemForm from './AddItemForm';

export default function InventoryScreen(props){
        return (
            <View>
                <Text>yasss bish</Text>
                <FlatList 
                    data={props.screenProps.itemList}
                    renderItem={({ item }) => <Item />}
                    keyExtractor={item => item.key}
                />
            </View>
        )
}

InventoryScreen.navigationOptions = {
  title: 'Inventory',
};
