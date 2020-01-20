import React from 'react';
import { View, FlatList } from 'react-native';
import Item from '../src/components/Item';
import { useSelector } from 'react-redux';

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm'
//import AddItemForm from './AddItemForm';

export default function InventoryScreen(){
    const itemList = useSelector(state => state.itemListReducer)
        return (
            <View>
                <FlatList 
                    data={itemList}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={item => String(item.id)}
                />
            </View>
        )
}

InventoryScreen.navigationOptions = {
  title: 'Inventory',
};
