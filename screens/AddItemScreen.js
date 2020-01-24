import React, { useState } from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import { TextInput } from 'react-native';

export default function AddItemScreen({ nameRef, descRef, ownerRef, boxRef, locationRef, quantityRef}) {
  const [newItem, setNewItem] = useState({ name: '', desc: '', owner: '', box: '', location: '', quantity: ''});



  handleChangeText = (text) => {
    const newItemPart = {...newItem};
    newItemPart[`${itemPart}`] = text;//how to get itemPart to work dynamically?
    setNewItem(newItemPart)
    console.log(newItemPart)
    };


    
  nameRef = React.createRef();
  descRef = React.createRef();
  ownerRef = React.createRef();
  boxRef = React.createRef();
  locationRef = React.createRef();
  quantityRef = React.createRef();

  const createItem = (e) => {
      e && e.preventDefault();
      const item = {
          name: nameRef.current.input._lastNativeText,
          desc: descRef.current.input._lastNativeText,
          owner: ownerRef.current.input._lastNativeText,
          box: boxRef.current.input._lastNativeText,
          location: locationRef.current.input._lastNativeText,
          quantity: quantityRef.current.input._lastNativeText,
      }
      //addItem(item);
      //e.currentTarget.reset(); this needs to be a new global state
      console.log(item)
  }

  return (
    <ScrollView style={styles.container}>
      <View>
      <TextInput name="name" ref={nameRef} value={newItem.name} placeholder="What is this?" onChangeText={text => handleChangeText(text)} required></TextInput>
      <TextInput name="desc" ref={descRef} value={newItem.desc} placeholder="Describe this item."></TextInput>
      <TextInput name="owner" ref={ownerRef} value={newItem.owner} placeholder="Who does this belong to? (ex. the cat, Sally)"></TextInput>
      <TextInput name="box" ref={boxRef} value={newItem.box} placeholder="Which box?" required></TextInput>
      <TextInput name="location" ref={locationRef} value={newItem.location} placeholder="Where is this box?"></TextInput>
      <TextInput name="quantity" ref={quantityRef} value={newItem.quantity} placeholder="Quantity"></TextInput>
      <Button title="Add Item"
      onPress={()=> createItem()}/>
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
