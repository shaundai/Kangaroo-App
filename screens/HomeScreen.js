import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Input, ListItem } from 'react-native-elements';

export default function HomeScreen() {
  const itemList = useSelector(state => state.itemListReducer);
  const list = itemList;
  const [term, setTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  keyExtractor = item => (
    item.id.toString()
)
    
    const handleTermChange = (e) => {
      setTerm(e)
    }

    const handleSearch = () => {
      let results = list.filter(item => item.name.includes(term) || item.desc.includes(term));
      setSearchResults(results);
      console.log(results)
    }

    renderItem = (item) => (
      <ListItem
      title={item.name}
      subtitle={item.desc}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      badge={{value: item.quantity, badgeStyle: {backgroundColor: '#000'}}}
      bottomDivider
      chevron
      />
    )

  return (
    <View contentContainerStyle={styles.container}>
      <Input onChangeText={text => handleTermChange(text)} placeholder='Search for an item...'></Input>
      <TouchableOpacity onPress={()=>{
        handleSearch(term)
      }}>
        <Text>Search</Text>
      </TouchableOpacity>
        <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={keyExtractor}/>
    </View>
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
