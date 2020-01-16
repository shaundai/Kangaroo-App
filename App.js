import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Inventory from './src/components/Inventory';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
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

    const deleteItem = (key) => {
    setItemList(itemList.filter(item => itemList[key] !== item));
    console.log(key)
  }

    const search = (term) => {
      //takes in the names or descriptions of any item
      //filters through to see if any of them contain words in the search term
      //returns terms with only terms searched for
      let results = itemList.filter(item => item.name.includes(term) || item.desc.includes(term))
      setSearchResults(results);
      console.log(searchResults)
    }

//TODO - clean this up.  expo cli stuff starts here
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator
          screenProps={{
            itemList,
            searchResults,
            addItem,
            updateItem,
            deleteItem,
            setItemList,
            setSearchResults,
            search,
            }} />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      //require('./assets/images/robot-dev.png'),
      //require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
