import React from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';
import { Input } from 'react-native-elements';
import ContactForm from '../src/components/AddItemForm';

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
          name: nameRef.current,
          desc: descRef.current.value,
          owner: ownerRef.current.value,
          box: boxRef.current.value,
          location: locationRef.current.value,
          quantity: quantityRef.current.value,
      }
      //addItem(item);
      //e.currentTarget.reset(); this needs to be a new global state
      console.log(item)
  }

  const handleSubmit = value => {
    alert(`submitting ${value}`)
  }
  return (
    <ScrollView style={styles.container}>
      <View>
      <Input name="name" ref={nameRef} placeholder="What is this?" required></Input>
      <Input name="desc" ref={descRef} placeholder="Describe this item."></Input>
      <Input name="owner" ref={ownerRef} placeholder="Who does this belong to? (ex. the cat, Sally)"></Input>
      <Input name="box" ref={boxRef} placeholder="Which box?" required></Input>
      <Input name="location" ref={locationRef} placeholder="Where is this box?"></Input>
      <Input name="quantity" ref={quantityRef} placeholder="Quantity"></Input>
      <Button title="Add Item"
      onPress={()=> createItem()}/>
      </View>
      <View>
      <ContactForm />
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
