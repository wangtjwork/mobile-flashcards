import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Quiz extends Component {
  state = {
    curIndex: 0,
    questions: []
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default Quiz;
