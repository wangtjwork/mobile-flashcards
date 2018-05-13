import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { gray, purple, white, black } from '../utils/colors';
import CustomInput from './CustomInput';
import TextButton from './TextButton';

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
        <TextButton
          onPress={this.handleSubmit}
          style={{width: 150, backgroundColor: purple}}
        >
          Submit
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
})

export default AddQuestion
