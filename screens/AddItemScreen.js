import React from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import { Input } from 'react-native-elements';

export default function AddItemScreen({ nameRef, descRef, ownerRef, boxRef, locationRef, quantityRef, addItem}) {
  nameRef = React.createRef();
  descRef = React.createRef();
  ownerRef = React.createRef();
  boxRef = React.createRef();
  locationRef = React.createRef();
  quantityRef = React.createRef();

  const createItem = (e) => {
      e && e.preventDefault();
      const item = {
          name: nameRef.current.value,
          desc: descRef.current.value,
          owner: ownerRef.current.value,
          box: boxRef.current.value,
          location: locationRef.current.value,
          quantity: quantityRef.current.value,
      }
      //addItem(item);
      //e.currentTarget.reset(); this needs to be a new global state
      console.log('it worked')
  }
  return (
    <ScrollView style={styles.container}>
      <View>
      <Input name="name" ref={nameRef} type="text" placeholder="What is this?" required></Input>
      <Input name="desc" ref={descRef} type="text" placeholder="Describe this item."></Input>
      <Input name="owner" ref={ownerRef} type="text" placeholder="Who does this belong to? (ex. the cat, Sally)"></Input>
      <Input name="box" ref={boxRef} type="text" placeholder="Which box?" required></Input>
      <Input name="location" ref={locationRef} type="text" placeholder="Where is this box?"></Input>
      <Input name="quantity" ref={quantityRef} type="text" placeholder="Quantity"></Input>
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
