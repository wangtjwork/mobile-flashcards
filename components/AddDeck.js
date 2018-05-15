import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';
import TextButton from './TextButton';
import { black } from '../utils/colors';

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

    this.props.navigation.navigate('Dashboard');
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
