import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { gray, purple, white } from '../utils/colors';

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
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.handleChange('question', text)}
            value={question}
            placeholder={'Question: '}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.handleChange('answer', text)}
            value={answer}
            placeholder={'Answer: '}
          />
        </View>
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
    height: 45,
    borderColor: gray,
    borderWidth: 1,
  },
  input: {
    height: 40,
    marginLeft: 2,
    marginRight: 2,
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
