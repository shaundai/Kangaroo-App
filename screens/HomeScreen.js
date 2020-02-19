import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../src/actions/index';
import {
  FlatList,
  ListItem,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';

export default function HomeScreen() {
  const [term, setTerm] = useState('');
  const searchResults = useSelector(state => state.itemListReducer);
  const list = searchResults;
  const dispatch = useDispatch();
  keyExtractor = item => (
    item.id.toString()
)
    
    const handleTermChange = (e) => {
      setTerm(e)
      console.log(e)
    }

    renderItem = ({ item }) => (
      <ListItem
          title={item.name}
          subtitleNumberOfLines={2}
          subtitle={item.desc}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          badge={{value: item.quantity, badgeStyle: {backgroundColor: '#000'}}}
          bottomDivider
          chevron
          />
    )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input onChangeText={text => handleTermChange(text)} placeholder='Search for an item...'></Input>
      <TouchableOpacity onPress={()=>{
        dispatch(search(term));
      }}>
        <Text>Search</Text>
      </TouchableOpacity>
      <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}/>
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
