import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { red, green, white } from '../utils/colors';
import { getDeck } from '../utils/helpers';

class Quiz extends Component {
  state = {
    curIndex: 0,
    deck: {},
    showQuestion: true,
    correctQuestions: 0
  }

  static navigationOptions = ({ navigation }) => {
    const { title, size } = navigation.state.params;

    return {
      title: `Quiz: ${title} - 0/${size}`
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
          }
        })
      })
  }

  changeTitle = () => {
    const { setParams } = this.props.navigation;
    const { curIndex, deck } = this.state;

    setParams({ title: `Quiz: ${deck.title} - ${curIndex}/${deck.questions.length}` });
  }

  goToNextCard = () => {
    this.setState((oldState) => ({
      curIndex: oldState.curIndex + 1,
      showQuestion: true,
    }));
  }

  toggleCard = () => {
    this.setState((oldState) => ({
      showQuestion: !oldState.showQuestion
    }));
  }

  handleCorrect = () => {
    this.goToNextCard();
    this.setState((oldState) => ({
      correctQuestions: correctQuestions + 1
    }));

    this.changeTitle();
  }

  handleIncorrect = () => {
    this.goToNextCard();
    this.changeTitle();
  }

  render() {
    const { deck, curIndex, showQuestion } = this.state;

    if (Object.keys(deck).length === 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Loading...</Text>
        </View>
      )
    }

    const card = deck.questions[curIndex];

    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>{ showQuestion ? card.question : card.answer }</Text>
          <TouchableOpacity onPress={this.toggleCard}>
            <Text style={{color: red}}>{ showQuestion ? 'Answer' : 'Question' }</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TextButton style={{backgroundColor: green, width: 200}} onPress={this.handleCorrect}>Correct</TextButton>
          <TextButton style={{backgroundColor: red, width: 200}} onPress={this.handleIncorrect}>Incorrect</TextButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flex: 1,
  }
})

export default Quiz;
