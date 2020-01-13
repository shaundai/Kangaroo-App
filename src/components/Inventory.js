import React from 'react';
import { View, FlatList } from 'react-native';

//Components
//TODO add additemform at the top
import EditItemForm from './EditItemForm'
import AddItemForm from './AddItemForm';

function Inventory(props){
        return (
            <View>
                <FlatList 
                    data={props.itemList}
                    renderItem={({ item }) => <DealItem deal={item} onPress={this.props.onItemPress} />}
                    keyExtractor={item => item.key}
                />
            </View>
        )
}

export default Inventory;