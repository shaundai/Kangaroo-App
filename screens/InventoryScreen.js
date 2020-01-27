import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, Text, Button, ButtonGroup } from 'react-native-elements'
import { deleteItem } from '../src/actions/index';
import Item from '../src/components/Item';
import { TouchableHighlight } from 'react-native-gesture-handler';

//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm' 
//import AddItemForm from './AddItemForm';

export default function InventoryScreen(){
    const itemList = useSelector(state => state.itemListReducer);
    const list = itemList;
    const dispatch = useDispatch();
    keyExtractor = (item, index) => index.toString()



    renderItem = ({ item }) => (
    <ListItem
        title={item.name}
        subtitle={item.desc}
        subtitle={item.owner}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        chevron
        rightElement={<TouchableHighlight
            onPress={()=>dispatch(deleteItem(item.id))}
            activeOpacity={1}
            underlayColor={"transparent"}
            ><Text>Delete</Text></TouchableHighlight>}


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
