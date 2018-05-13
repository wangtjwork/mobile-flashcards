import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomInput from './CustomInput';

class AddDeck extends Component {
  state = {
    title: ''
  }

  handleChange = (newTitle) => {
    this.setState({
      title: newTitle
    });
  }

  render() {
    const { title, handleChange } = this.state;

    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>What is the title of your new deck?</Text>
        <CustomInput
          placeholder={'Deck Title'}
          value={title}
          handleChange={this.handleChange}
        />
      </View>
    )
  }
}

export default AddDeck
