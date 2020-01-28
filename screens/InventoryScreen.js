import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem, Text } from 'react-native-elements'
import { deleteItem } from '../src/actions/index';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';


//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm' 
//import AddItemForm from './AddItemForm';

export default function InventoryScreen(){
    const itemList = useSelector(state => state.itemListReducer);
    const list = itemList;
    const dispatch = useDispatch();
    keyExtractor = (item, index) => index.toString()

    renderHiddenItem = ({item}) => (
        <View style={styles.hiddenDelete}>
        <TouchableHighlight
            onPress={()=>dispatch(deleteItem(item.id))}
            activeOpacity={1}
            underlayColor={"transparent"}
            >
            <Ionicons name="ios-trash" size={52} color="white" style={styles.trash} />
            </TouchableHighlight>
            </View>
    )

    renderItem = ({ item }) => (
    <ListItem
        title={item.name}
        subtitleNumberOfLines={2}
        subtitle={item.desc}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        chevron
        />
)
        return (
            <View>
                <SwipeListView
                    useFlatList={true}
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                    onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                        rowMap[rowKey].closeRow()
                    }, 2000)
    }}
                />
            </View>
        )
}

const styles = StyleSheet.create({
    hiddenDelete: {
        zIndex: 1,
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignContent: 'center',
        height: "100%"
    },
    trash: {
        color: 'white',
        position: 'absolute',
        right: 0,
        paddingRight: 10,
    }
})

InventoryScreen.navigationOptions = {
  title: 'Inventory',
};
