import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';

export default function HomeScreen() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
    
    const handleTermChange = (e) => {
        setTerm(e)
       // console.log(e)
    }

    // not sure if I need this? const search = () => {
       // const newTerm = Object.values({term})
       // onSearch(newTerm)
      //  console.log(newTerm)
      //  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input onChangeText={text => handleTermChange(text)} placeholder='Search for an item...'></Input>
      <TouchableOpacity onPress={(e)=>{
        dispatch(search(term));
      }}>
        <Text>Search</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Find Item',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    padding: 10,
    paddingTop: 5,
    },
});
