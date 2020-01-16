import React from 'react';
import { View, FlatList } from 'react-native';
import Item from '../src/components/Item';

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm'
//import AddItemForm from './AddItemForm';

export default function InventoryScreen({ screenProps }){
        return (
            <View>
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
