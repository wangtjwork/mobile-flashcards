import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AddDeck extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>What is the title of your new deck?</Text>
      </View>
    )
  }
}

export default AddDeck
