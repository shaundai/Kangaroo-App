import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { addItem } from '../src/actions/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function AddItemScreen({ name, desc, owner, box, location, quantity}) {
  const [count, setCount] = useState(1);
  const [newItem, setNewItem] = useState({ name: '', desc: '', owner: '', box: '', location: '', quantity: count});
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

    handleIncrement = () => {
      setCount(count + 1)
      newItem.quantity = count
    }

    handleDecrement = () => {
      setCount(count - 1)
      newItem.quantity = count
    }

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
      <View style={{alignItems: 'center', marginTop: 10}}>
          <Text style={styles.tag}>Quantity</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 90}}>
            <TouchableOpacity onPress={() => handleDecrement()}>
              <Ionicons name="ios-remove-circle-outline" size={25} color="black" style={styles.increment}/>
            </TouchableOpacity>
            <Input inputContainerStyle={{borderBottomWidth: 0, width: 60, alignSelf: 'center'}} inputStyle={styles.field} value={`${newItem.quantity}`} placeholder='1' placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, quantity)} ></Input>
            <TouchableOpacity onPress={() => handleIncrement()}>
              <Ionicons name="ios-add-circle-outline" size={25} color="black" style={styles.increment}/>
            </TouchableOpacity>
          </View>
      </View>
      <Text style={styles.tag}>Description</Text>
      <Input inputContainerStyle={{borderBottomWidth: 0}} inputStyle={styles.field} value={newItem.desc} placeholder="Conair Blue" placeholderTextColor='#BEBEBE' onChangeText={text => handleChangeText(text, desc)} ></Input>
      <TouchableOpacity style={styles.button}
      onPress={(e)=>{
        dispatch(addItem(newItem))}}>
          <Text style={styles.buttonText}>Add</Text>
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
    width: 120,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#484848',
    justifyContent: 'center',
  },
  quantity: {

  },
  buttonText: {
    color: 'white',
    textAlignVertical: 'center',
    fontSize: 20,
    textAlign: 'center',
  }
});
