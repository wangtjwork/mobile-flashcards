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
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={this.handleSubmit}>
          <Text style={styles.submitBtn}>Submit</Text>
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
  inputWrap: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    justifyContent: 'center'
  },
  input: {
    height: 35,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  submitBtn: {
    textAlign: 'center',
    backgroundColor: purple,
    color: white,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30
  }
})

export default AddQuestion;
