import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class AddQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleChange = (textType, newText) => {
    this.setState({
      [textType]: newText
    });
  }

  render() {
    const { question, answer } = this.state;
    console.log('Question is now: ', question);
    console.log('Answer is now: ', answer);

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          multiline={false}
          onChangeText={(text) => this.handleChange('question', text)}
          value={question}
        />
        <TextInput
          style={styles.input}
          multiline={false}
          onChangeText={(text) => this.handleChange('answer', text)}
          value={answer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 15,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default AddQuestion;
