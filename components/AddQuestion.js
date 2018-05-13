import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { gray, purple, white, black } from '../utils/colors';
import CustomInput from './CustomInput';

class AddQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  handleChange = (textType) => (newText) => {
    this.setState({
      [textType]: newText
    });
  }

  handleSubmit = () => {
    const { question, answer } = this.state;
    console.log('Question: ', question);
    console.log('Answer: ', answer);

    // TODO: submit to database,
    // TODO: go back to deck
  }

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <CustomInput
          placeholder={'Question: '}
          value={question}
          handleChange={this.handleChange('question')}
        />
        <CustomInput
          placeholder={'Answer: '}
          value={answer}
          handleChange={this.handleChange('answer')}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  submitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    borderColor: purple,
    width: 150,
    alignSelf: 'center'
  },
  submitText: {
    color: white,
    textAlign: 'center'
  }
})

export default AddQuestion;
