import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { getDecks } from '../utils/helpers';
import { gray, red, white, purple } from '../utils/colors';
import Deck from './Deck';

class Dashboard extends Component {
  state = {
    decks: {},
    loading: true,
  }

  componentDidMount() {
    getDecks()
      .then((decks) => {
        if (decks === null) {
          decks = {
            React: {
              title: 'React',
              questions: [
                {
                  question: 'What is React?',
                  answer: 'A library for managing user interfaces'
                },
                {
                  question: 'Where do you make Ajax requests in React?',
                  answer: 'The componentDidMount lifecycle event'
                }
              ]
            },
            JavaScript: {
              title: 'JavaScript',
              questions: [
                {
                  question: 'What is a closure?',
                  answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
              ]
            }
          };
        }
        this.setState({
          decks,
          loading: false
        });
      })
  }

  handleGoToDeck = () => {
    console.log('Pressed');
  }

  render() {
    const { decks, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text style={{color: red}}>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={{flex: 1}}>
        {Object.keys(decks).map((deckTitle) => {
          const deck = decks[deckTitle];
          const size = deck.questions.length;
          return (
            <TouchableOpacity key={deck.title} style={styles.deckContainer} onPress={this.handleGoToDeck}>
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text style={styles.deckSize}>{size} {size === 1 ? 'card' : 'cards'}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    height: 150,
    borderBottomColor: gray,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 25
  },
  deckSize: {
    fontSize: 20,
    color: gray
  }
});

const DecksNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
})

export default DecksNavigator
