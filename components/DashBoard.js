import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

class DashBoard extends Component {
  state = {
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
  }

  render() {
    const decks = Object.keys(this.state).map((key) => this.state[key]);

    return (
      <View style={{flex: 1}}>
        {decks.map((deck) => {
          const size = deck.questions.length;
          return (
            <View key={deck.title} style={styles.deckContainer}>
              <Text style={styles.deckTitle}>{deck.title}</Text>
              <Text style={styles.deckSize}>{size} {size === 1 ? 'card' : 'cards'}</Text>
            </View>
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
})

export default DashBoard
