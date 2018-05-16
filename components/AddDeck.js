import React, { Component } from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';
import CustomInput from './CustomInput';
import TextButton from './TextButton';
import { black } from '../utils/colors';
import { saveDeckTitle, clearStorage } from '../utils/helpers';

class AddDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (newTitle) => {
    this.setState({
      title: newTitle
    });
  }

  handleSubmit = () => {
    // TODO: Add a new deck
    saveDeckTitle(this.state.title)
      .then(() => {
        DeviceEventEmitter.emit('addedDeck');
      })
      .then(() => {
        this.props.navigation.navigate('Dashboard');
      })
  }

  render() {
    const { title, handleChange } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <CustomInput
          placeholder={'Deck Title'}
          value={title}
          handleChange={this.handleChange}
        />
        <TextButton
          onPress={this.handleSubmit}
          style={{width: 150, backgroundColor: black}}
        >
          Submit
        </TextButton>
        <TextButton
          onPress={() => clearStorage()}
          style={{width: 150, backgroundColor: black}}
        >
          Clear
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    padding: 15
  }
})

export default AddDeck
