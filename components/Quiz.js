import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Quiz extends Component {
  state = {
    curIndex: 0,
    deck: {}
  }

  static navigationOptions = ({ navigation }) => {
    const { title, size } = navigation.state.params;

    return {
      title: `Quiz: ${title} - 0/${size}`
    }
  }

  changeTitle = () => {
    const { setParams } = this.props.navigation;
    const { curIndex, deck } = this.state;

    setParams({ title: `Quiz: ${deck.title} - ${curIndex}/${deck.questions.length}` })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default Quiz;
