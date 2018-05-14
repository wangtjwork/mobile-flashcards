import React from 'react';
import { StyleSheet, Text, View, StatusBar, YellowBox } from 'react-native';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import { Constants } from 'expo';
import { purple } from './utils/colors';
import { createBottomTabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
