import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDecks } from '../utils/helpers';
import { gray, red } from '../utils/colors';

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

export default Dashboard
