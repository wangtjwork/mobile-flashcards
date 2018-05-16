import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, DeviceEventEmitter } from 'react-native';
import { black } from '../utils/colors';
import CustomInput from './CustomInput';
import TextButton from './TextButton';
import { addCardToDeck } from '../utils/helpers';

class AddQuestion extends Component {
  state = {
    question: '',
    answer: ''
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title: `Add Card for ${title}`
    }
  }

  handleChange = (textType) => (newText) => {
    this.setState({
      [textType]: newText
    });
  }

  handleSubmit = () => {
    const { question, answer } = this.state;
    const { title } = this.props.navigation.state.params;
    addCardToDeck(title, question, answer)
      .then(() => {
        DeviceEventEmitter.emit('addedCard');
      })
      .then(() => {
        this.props.navigation.goBack();
      })
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
          style={{width: 150, backgroundColor: black}}
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
