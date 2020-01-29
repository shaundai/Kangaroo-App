import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addItem } from '../src/actions/index';

export default function AddItemScreen({ name, desc, owner, box, location, quantity}) {
  const [newItem, setNewItem] = useState({ name: '', desc: '', owner: '', box: '', location: '', quantity: ''});
  const dispatch = useDispatch();

  name = 'name';
  desc = 'desc';
  owner = 'owner';
  box = 'box';
  location = 'location';
  quantity = 'quantity';

  handleChangeText = (text, itemPart) => {
    const newItemPart = {...newItem};
    newItemPart[`${itemPart}`] = text;
    setNewItem(newItemPart)
    console.log(newItemPart)
    };

  return (
    <ScrollView style={styles.container}>
      <View containerStyle={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
      <Input value={newItem.name} placeholder="What is this?" onChangeText={text => handleChangeText(text, name)} required></Input>
      <Input value={newItem.desc} placeholder="Describe this item." onChangeText={text => handleChangeText(text, desc)} ></Input>
      <Input value={newItem.owner} placeholder="Who does this item belong to?" onChangeText={text => handleChangeText(text, owner)} ></Input>
      <Input value={newItem.box} placeholder="Which box?" onChangeText={text => handleChangeText(text, box)} required></Input>
      <Input value={newItem.location} placeholder="Where is this box?" onChangeText={text => handleChangeText(text, location)} ></Input>
      <Input value={newItem.quantity} placeholder="Quantity" onChangeText={text => handleChangeText(text, quantity)} ></Input>
      <Button title="Add Item"
      onPress={(e)=>{
        e.preventDefault();
        dispatch(addItem(newItem))}}/>
      </View>
    </ScrollView>
  );
}

AddItemScreen.navigationOptions = {
  title: 'Add Item',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    width: 350,
  },
});
