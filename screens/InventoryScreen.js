import React from 'react';
import { View, FlatList } from 'react-native';
import Item from '../src/components/Item';
import { useSelector } from 'react-redux';
import { ListItem } from 'react-native-elements'

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm'
//import AddItemForm from './AddItemForm';

export default function InventoryScreen(){
    const itemList = useSelector(state => state.itemListReducer);
    const list = itemList;

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
    <ListItem
        title={item.name}
        subtitle={item.desc}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        rightElement={item.box}
        bottomDivider
        chevron
    />
)
        return (
            <View>
                <FlatList 
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </View>
        )
}

InventoryScreen.navigationOptions = {
  title: 'Inventory',
};
