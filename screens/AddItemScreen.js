import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Button, withTheme } from 'react-native-elements';
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
    <ScrollView contentContainerStyle={styles.container} >
      <View containerStyle={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
      <Input inputStyle={styles.field} value={newItem.name} placeholder="What is this?" placeholderTextColor='white' onChangeText={text => handleChangeText(text, name)} required></Input>
      <Input inputStyle={styles.field} value={newItem.desc} placeholder="Describe this item." placeholderTextColor='white' onChangeText={text => handleChangeText(text, desc)} ></Input>
      <Input inputStyle={styles.field} value={newItem.owner} placeholder="Who does this item belong to?" placeholderTextColor='white' onChangeText={text => handleChangeText(text, owner)} ></Input>
      <Input inputStyle={styles.field} value={newItem.box} placeholder="Which box?" placeholderTextColor='white' onChangeText={text => handleChangeText(text, box)} required></Input>
      <Input inputStyle={styles.field} value={newItem.location} placeholder="Where is this box?" placeholderTextColor='white' onChangeText={text => handleChangeText(text, location)} ></Input>
      <Input inputStyle={styles.field} value={newItem.quantity} placeholder="Quantity" placeholderTextColor='white' onChangeText={text => handleChangeText(text, quantity)} ></Input>
      <Button style={styles.button} title="Add Item"
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
    backgroundColor: '#fff',
    padding: 10,
    },
  field: {
    backgroundColor: 'lightblue',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderRadius: 8,
    borderBottomWidth: 0,
    borderBottomColor: 'white'
  },
  button: {
    marginTop: 30,
    width: 200,
    alignSelf: 'center',
  }
});
