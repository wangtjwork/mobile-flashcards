import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

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
        <View style={styles.inputWrap}>
          <TextInput
            onChangeText={(text) => this.handleChange('question', text)}
            value={question}
            placeholder={'Question: '}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            onChangeText={(text) => this.handleChange('answer', text)}
            value={answer}
            placeholder={'Answer: '}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  inputWrap: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    height: 45,
    borderColor: gray,
    borderWidth: 1,
  }
})

export default AddQuestion;
