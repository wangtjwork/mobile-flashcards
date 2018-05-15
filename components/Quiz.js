import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { red, green, white, black } from '../utils/colors';
import { getDeck } from '../utils/helpers';

class Quiz extends Component {
  state = {
    curIndex: 0,
    deck: {},
    showQuestion: true,
    correctQuestions: 0
  }

  static navigationOptions = ({ navigation }) => {
    const { cardTitle } = navigation.state.params;

    return {
      title: `Quiz: ${cardTitle}`
    }
  }

  componentDidMount() {
    const { cardTitle } = this.props.navigation.state.params;

    getDeck(cardTitle)
      .then((deck) => {
        this.setState({
          deck
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

  // changeTitle = () => {
  //   const { setParams } = this.props.navigation;
  //   const { curIndex, deck } = this.state;
  //
  //   const newTitle = `Quiz: ${deck.title} - ${curIndex}/${deck.questions.length}`;
  //
  //   setParams({ title: newTitle });
  // }

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
    this.setState((oldState) => ({
      correctQuestions: oldState.correctQuestions + 1
    }));
    this.goToNextCard();
  }

  handleIncorrect = () => {
    this.goToNextCard();
  }

  restartQuiz = () => {
    this.setState({
      curIndex: 0,
      showQuestion: true,
      correctQuestions: 0
    });
  }

  toDeckPage = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { deck, curIndex, showQuestion, correctQuestions } = this.state;

    if (Object.keys(deck).length === 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Loading...</Text>
        </View>
      )
    }

    if (curIndex === deck.questions.length) { // reach end of quiz. Show scores
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 40}}>Congratulations!</Text>
          <Text style={{fontSize: 25}}>Your correct percentage: {Math.floor((correctQuestions / deck.questions.length) * 100)}%</Text>
          <TextButton
            style={{backgroundColor: white, width: 200}}
            textStyle={{color: black}}
            onPress={this.restartQuiz}
          >
            Restart Quiz
          </TextButton>
          <TextButton
            style={{backgroundColor: black, width: 200}}
            onPress={this.toDeckPage}
          >
            Go Back
          </TextButton>
        </View>
      )
    }

    const card = deck.questions[curIndex];

    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text>{deck.questions.length - curIndex}/{deck.questions.length}</Text>
        </View>
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
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flex: 3,
  }
})

export default Quiz;
