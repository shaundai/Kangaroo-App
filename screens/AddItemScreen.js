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
      <Text style={styles.tag}>Item</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.name} placeholder="Hair Dryer" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, name)} required></Input>
      <Text style={styles.tag}>Owner</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.owner} placeholder="David" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, owner)} ></Input>
      <View style={styles.miniGrid}>
        <View>
          <Text style={styles.tag}>Box</Text>
          <Input inputContainerStyle={{borderBottomWidth: 0, width: 150}} inputStyle={styles.field} value={newItem.box} placeholder="Kitchen 2" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, box)} required></Input>
        </View>
        <View>
          <Text style={styles.tag}>Box/Item Location</Text>
          <Input inputContainerStyle={{borderBottomWidth: 0, width: 150}} inputStyle={styles.field} value={newItem.location} placeholder="Public Storage" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, location)} ></Input>
        </View>
      </View>
      <View>
          <Text style={styles.tag}>Quantity</Text>
          <Input inputContainerStyle={{borderBottomWidth: 0, width: 50}} inputStyle={styles.field} value={newItem.quantity} placeholder="1" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, quantity)} ></Input>
      </View>
      <Text style={styles.tag}>Description</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.desc} placeholder="Conair Blue" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, desc)} ></Input>
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
    backgroundColor: '#F0F0F0',
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
  miniGrid: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  field: {
    backgroundColor: 'white',
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
    backgroundColor: '#484848',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlignVertical: 'center',
    fontSize: 16,
    textAlign: 'center',
  }
});
