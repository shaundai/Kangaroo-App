import React, { useState } from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import { TextInput } from 'react-native';
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
      <View>
      <TextInput value={newItem.name} placeholder="What is this?" onChangeText={text => handleChangeText(text, name)} required></TextInput>
      <TextInput value={newItem.desc} placeholder="Describe this item." onChangeText={text => handleChangeText(text, desc)} ></TextInput>
      <TextInput value={newItem.owner} placeholder="Who does this belong to? (ex. Lila)" onChangeText={text => handleChangeText(text, owner)} ></TextInput>
      <TextInput value={newItem.box} placeholder="Which box?" onChangeText={text => handleChangeText(text, box)} required></TextInput>
      <TextInput value={newItem.location} placeholder="Where is this box?" onChangeText={text => handleChangeText(text, location)} ></TextInput>
      <TextInput value={newItem.quantity} placeholder="Quantity" onChangeText={text => handleChangeText(text, quantity)} ></TextInput>
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
  },
});
