import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from 'react-native-elements'
import { deleteItem } from '../src/actions/index';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

import ItemModal from '../src/components/ItemModal';

import Colors from '../constants/Colors';


//Components
//TODO add additemform at the top
//import EditItemForm from './EditItemForm' 
//import AddItemForm from './AddItemForm';

export default function InventoryScreen(){
    const itemList = useSelector(state => state.itemListReducer);
    const list = itemList;
    const dispatch = useDispatch();
    keyExtractor = item => (
        item.id.toString()
    )
    const [modalIsVisible, setModalVisibility] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    renderHiddenItem = ({item}) => (
        <View style={styles.hiddenDelete}>
        <TouchableHighlight
            onPress={()=>dispatch(deleteItem(item.id))}
            >
            <Ionicons name="ios-trash" size={50} color="white" style={styles.trash} />
            </TouchableHighlight>
            </View>
    )
    
    handlePress = (item) => {
        setModalVisibility(true);
        setSelectedItem(item);
    }

    hideModal = () => {
        setModalVisibility(false);
    }

    renderItem = ({ item }) => (
    <ListItem
        title={item.name}
        subtitleNumberOfLines={2}
        subtitle={item.desc}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        badge={{value: item.quantity, badgeStyle: {backgroundColor: '#000'}}}
        onPress={() => {handlePress(item)}}
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
                    renderHiddenItem={renderHiddenItem}
                    keyExtractor={keyExtractor}
                    leftOpenValue={0}
                    rightOpenValue={-75}
                    onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                        if (rowMap[rowKey]){
                            rowMap[rowKey].closeRow()
                    }}, 2000)
    }}
                />
         <ItemModal modalIsVisible={modalIsVisible} handleClose={hideModal} details={selectedItem}/>
            </View>
        )
}

const styles = StyleSheet.create({
    hiddenDelete: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        height: "100%",
        width: 70,
    },
    trash: {
        color: 'white',
        position: 'absolute',
        top: 8,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})

InventoryScreen.navigationOptions = {
  title: 'Inventory',
  headerTintColor: Colors.softGray,
  headerStyle: {
    backgroundColor: Colors.blueHeader,
    paddingBottom: 8,
  },
  headerTitleStyle: {
    fontSize: 24
  },
};
