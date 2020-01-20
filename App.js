import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index'

import AppNavigator from './navigation/AppNavigator';

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default function App(props) {
  const [itemList, setItemList] = useState([{ id: 1, name: "scissors", desc: "the scissors", box: 3, location: "here", owner: "sally", quantity: 4 },  {id: 2, name: "brush", desc: "the dopest brush", box: 3, location: "here", owner: "sally", quantity: 1 }])
  const [searchResults, setSearchResults] = useState([]);

  const addItem = (item) => {
    const newItemList = {...itemList};
    newItemList[`item${Date.now()}`] = item
    setItemList(newItemList);
  }
  const updateItem = (key, updatedItem) => {
    //take copy of the current state
    const items = { ...itemList };
    //update the state to that of the updatedItem we took in
    items[key] = updatedItem;
    //set the state with the updatedItem'
    setItemList(items);
  }

    const search = (term) => {
      //takes in the names or descriptions of any item
      //filters through to see if any of them contain words in the search term
      //returns terms with only terms searched for
      let results = itemList.filter(item => item.name.includes(term) || item.desc.includes(term))
      setSearchResults(results);
      console.log(searchResults)
    }

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Provider store={store}>
        <AppNavigator
          screenProps={{
            itemList,
            searchResults,
            addItem,
            updateItem,
            setItemList,
            setSearchResults,
            search,
            }} />
            </Provider>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
