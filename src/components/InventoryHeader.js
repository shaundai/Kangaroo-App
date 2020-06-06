import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Input } from 'react-native-elements';

import Colors from '../../constants/Colors';

export default function InventoryHeader() {
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

  return (
    <View style={styles.container}>
      <Input inputContainerStyle={styles.searchContainer} inputStyle={styles.search} onChangeText={text => handleTermChange(text)} placeholder='Search for an item...'></Input>
    </View>
  );
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: 'black',
        fontSize: 12
    },
    headerStyle: {
        backgroundColor: Colors.blueHeader,
    },
    container: {
        backgroundColor: Colors.softGray,
        flex: 1,
        paddingBottom: 5,
        marginBottom: 8,
        },
    searchContainer: {
        borderBottomWidth: 0,
        width: 200,
        alignSelf: 'center',
        marginTop: 4,
        marginBottom: 2,
        },
    search: {
        borderColor: Colors.softBlue,
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
    },
})