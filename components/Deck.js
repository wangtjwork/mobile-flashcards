import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextButton from './TextButton';
import { white, black, gray } from '../utils/colors';
import { getDeck } from '../utils/helpers'

class Deck extends Component {
  state = {
    deck: {},
    loading: true,
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title: title
    }
  }

  componentDidMount() {
    const { title } = this.props.navigation.state.params;

    getDeck(title)
      .then((deck) => {
        this.setState({
          deck,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          deck: {
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
          loading: false
        })
      })
  }

  handleAddCard = (title) => {
    this.props.navigation.navigate(
      'AddQuestion',
      { title }
    );
  }

  handleStartQuiz = (deck) => {
    this.props.navigation.navigate(
      'Quiz',
      { cardTitle: deck.title }
    );
  }

  render() {
    const { deck, loading } = this.state;

    if (loading === true) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>{deck.title}</Text>
          <Text style={{fontSize: 20, color: gray}}>{deck.questions.length} {deck.questions.length === 1 ? 'card': 'cards'}</Text>
        </View>
        <View style={{flex: 1}}>
          <TextButton style={{backgroundColor: white, width: 175, borderColor: black, borderWidth: 1}}
            textStyle={{color: black}} onPress={() => this.handleAddCard(deck.title)}>
            Add Card
          </TextButton>
          <TextButton style={{backgroundColor: black, width: 175, borderColor: black}}
            onPress={() => this.handleStartQuiz(deck)}
            disabled={deck.questions.length === 0}
          >
            Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }
}

export default Deck;
