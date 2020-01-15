import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function AddItemScreen() {
  return (
    <ScrollView style={styles.container}>

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
