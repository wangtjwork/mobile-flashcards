import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import { Constants } from 'expo';
import { purple, white } from './utils/colors';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='dashboard' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
},{
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: purple, height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={purple} barStyle='light-content' />
        </View>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
