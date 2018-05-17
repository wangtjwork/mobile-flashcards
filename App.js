import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import { Constants } from 'expo';
import { purple, white } from './utils/colors';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { setLocalNotification } from './utils/helpers';

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
});


const DecksNavigator = createStackNavigator({
  HomePage: {
    screen: Tabs,
    navigationOptions: {
      title: 'Home',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: purple, height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={purple} barStyle='light-content' />
        </View>
        <DecksNavigator />
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
