import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { getDecks } from './utils/helpers';
import { red } from './utils/colors';
import AddDeck from './components/AddDeck';
import AddQuestion from './components/AddQuestion';
import Dashboard from './components/Dashboard';
import Deck from './components/Deck';
import { Constants } from 'expo';
import { purple } from './utils/colors';

export default class App extends React.Component {
  state = {
    decks: {},
    loading: true
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
        <View style={{backgroundColor: purple, height: Constants.statusBarHeight}}>
          <StatusBar translucent backgroundColor={purple} barStyle='light-content' />
        </View>
        <Deck deck={this.state.decks['React']}/>
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
