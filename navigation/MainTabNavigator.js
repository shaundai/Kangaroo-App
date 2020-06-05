import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import FindItemScreen from '../screens/FindItemScreen';
import AddItemScreen from '../screens/AddItemScreen';
import InventoryScreen from '../screens/InventoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const FindItemStack = createStackNavigator({
    FindItem: FindItemScreen,
  },
  config
);

FindItemStack.navigationOptions = {
  tabBarLabel: 'Find Item',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-search'
          : 'md-search'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
  },
};

FindItemStack.path = '';

const AddItemStack = createStackNavigator(
  {
    AddItem: AddItemScreen,
  },
  config
);

AddItemStack.navigationOptions = {
  tabBarLabel: 'Add Item',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle-outline'} />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
  },
};

AddItemStack.path = '';


const InventoryStack = createStackNavigator({
    Inventory: InventoryScreen,
  },
  config
);

InventoryStack.navigationOptions = {
  tabBarLabel: 'Inventory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-clipboard' : 'md-clipboard'} />
  ),
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected,
  }
};

InventoryStack.path = '';


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
},
config
);

SettingsStack.navigationOptions = {
tabBarLabel: 'Scan Box',
tabBarIcon: ({ focused }) => (
  <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'} />
),
tabBarOptions: {
  activeTintColor: Colors.tabIconSelected,
},
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  FindItemStack,
  AddItemStack,
  InventoryStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
