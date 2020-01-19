import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Item from '../src/components/Item';
import { useSelector } from 'react-redux';

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm'
//import AddItemForm from './AddItemForm';

export default function InventoryScreen({ screenProps }){
    const testStuff = useSelector(state => state.itemListReducer[0].name)
        return (
            <View>
                <Text>{testStuff}</Text>
                <FlatList 
                    data={screenProps.itemList}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={item => String(item.id)}
                />
            </View>
        )
}

InventoryScreen.navigationOptions = {
  title: 'Inventory',
};
