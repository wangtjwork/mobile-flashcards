import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>DashBoard</Text>
      </View>
    )
  }
}

export default DashBoard
