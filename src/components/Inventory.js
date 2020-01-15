import React from 'react';
import { View, Text, FlatList } from 'react-native';

//Components
//TODO add additemform at the top
import EditItemForm from './EditItemForm'
import AddItemForm from './AddItemForm';

function Inventory(props){
        return (
            <View>
                <Text>yasss bish</Text>
                <FlatList 
                    data={props.itemList}
                    renderItem={({ item }) => <Item deal={item} onPress={this.props.onItemPress} />}
                    keyExtractor={item => item.key}
                />
            </View>
        )
}

export default Inventory;