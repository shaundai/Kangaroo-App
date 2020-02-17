import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from 'react-native-elements';

export default function HomeScreen() {
  const [term, setTerm] = useState('');
    
    const handleTermChange = (e) => {
        setTerm(e)
        console.log(e)
    }

    const search = () => {
        const newTerm = Object.values({term})
        onSearch(newTerm)
        console.log(newTerm)
        }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input onChangeText={text => handleTermChange(text)} placeholder='Search for an item...'></Input>
      <TouchableOpacity onPress={search}>
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
