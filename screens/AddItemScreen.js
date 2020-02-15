import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addItem } from '../src/actions/index';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      <View containerStyle={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '317873'}}>
      <Text style={styles.tag}>Item Name...</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.name} placeholder="Hair Dryer" placeholderTextColor='white' onChangeText={text => handleChangeText(text, name)} required></Input>
      <Text style={styles.tag}>Description...</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.desc} placeholder="Conair Blue" placeholderTextColor='white' onChangeText={text => handleChangeText(text, desc)} ></Input>
      <Text style={styles.tag}>Owner...</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.owner} placeholder="David" placeholderTextColor='white' onChangeText={text => handleChangeText(text, owner)} ></Input>
      <Text style={styles.tag}>Box...</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.box} placeholder="Kitchen 2" placeholderTextColor='white' onChangeText={text => handleChangeText(text, box)} required></Input>
      <Text style={styles.tag}>Box/Item Location...</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.location} placeholder="Public Storage" placeholderTextColor='white' onChangeText={text => handleChangeText(text, location)} ></Input>
      <Text style={styles.tag}>Quantity...</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.quantity} placeholder="40" placeholderTextColor='white' onChangeText={text => handleChangeText(text, quantity)} ></Input>
      <TouchableOpacity style={styles.button}
      onPress={(e)=>{
        dispatch(addItem(newItem))}}>
          <Text style={styles.buttonText}>Done! Add Item</Text>
          </TouchableOpacity>
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
    padding: 10,
    },
  tag: {
    color: 'black',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 0,
    fontSize: 19,
  },
  field: {
    backgroundColor: 'lightgray',
    fontSize: 16,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: 5,
    borderRadius: 8,
    borderBottomWidth: 0,
    borderBottomColor: 'white'
  },
  button: {
    marginTop: 30,
    width: 200,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#383838',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlignVertical: 'center',
    fontSize: 16,
    textAlign: 'center',
  }
});
