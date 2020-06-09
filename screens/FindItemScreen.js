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
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        {searchResults.length > 0 ? <View style={{marginLeft: 12, marginBottom: 5}}>
        <Text style={{fontSize: 18}}>Search Results:</Text>
        </View> : console.log('nothing here')}
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
  headerTintColor: Colors.softGray,
  headerStyle: {
    backgroundColor: Colors.blueHeader,
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
  searchButton: {
    marginTop: 10,
    width: 100,
    height: 35,
    backgroundColor: Colors.blueMain,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  searchButtonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
