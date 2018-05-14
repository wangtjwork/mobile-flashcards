import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TextButton from './TextButton';
import { white, black, gray } from '../utils/colors';

class Deck extends Component {
  handleAddCard = () => {

  }

  handleStartQuiz = () => {

  }

  render() {
    const { deck } = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30}}>{deck.title}</Text>
          <Text style={{fontSize: 20, color: gray}}>{deck.questions.length} {deck.questions.length === 1 ? 'card': 'cards'}</Text>
        </View>
        <View style={{flex: 1}}>
          <TextButton style={{backgroundColor: white, width: 175, borderColor: black, borderWidth: 1}}
            textStyle={{color: black}} onPress={this.handleAddCard}>
            Add Card
          </TextButton>
          <TextButton style={{backgroundColor: black, width: 175, borderColor: black}}
            onPress={this.handleStartQuiz}>
            Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }
}

export default Deck;
