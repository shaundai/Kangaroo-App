import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input, ListItem } from 'react-native-elements';

import Colors from '../constants/Colors';

export default function FindItemScreen() {
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

    renderItem = ({ item }) => (
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
    <View style={styles.container}>
      <Input inputContainerStyle={{borderBottomWidth: 0, width: 250, alignSelf: 'center', marginTop: 20, marginBottom: 8, color: 'white'}} inputStyle={styles.search} onChangeText={text => handleTermChange(text)} placeholder='Search for an item...'></Input>
      <TouchableOpacity onPress={()=>{
        handleSearch(term)
      }}>
        <View style={styles.searchButtonContainer}>
          <Text style={styles.searchButton}>Search</Text>
        </View>
        <View style={{marginLeft: 12}}>
        <Text>Search Results:</Text>
        </View>
      </TouchableOpacity>
        <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={keyExtractor}/>
    </View>
  );
}

FindItemScreen.navigationOptions = {
  title: 'Find Item',
  headerTintColor: Colors.blueHeader,
  headerStyle: {
    backgroundColor: Colors.softGray,
    paddingBottom: 8,
  },
  headerTitleStyle: {
    fontSize: 24
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.softGray,
    flex: 1,
    padding: 10,
    paddingTop: 5,
    },
  search: {
    borderColor: Colors.softBlue,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
  },
  searchButtonContainer: {
    backgroundColor: Colors.blueMain,
    borderRadius: 10,
    width: 100,
    alignSelf: 'center',
    margin: 10,
    marginBottom: 25,
  },
  searchButton: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
