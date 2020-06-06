import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import Colors from '../../constants/Colors';

export default function InventoryHeader() {
        return (
            <View>
               <Text>Testing Text</Text> 
            </View>
        )
    }

const styles = StyleSheet.create ({
    header: {
        color: Colors.softGray,
        fontSize: 24
    },
    headerContainer: {
        backgroundColor: Colors.blueHeader,
        paddingBottom: 8,
    },
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
})