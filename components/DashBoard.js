import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, DeviceEventEmitter, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { getDecks } from '../utils/helpers';
import { gray, red, white, purple, black } from '../utils/colors';
import TextButton from './TextButton';

class Dashboard extends Component {
  state = {
    decks: {},
    loading: true,
    bounceValue: new Animated.Value(1),
    selected: ''
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('addedDeck', ({ title }) => {
      this.updateDecksAsync()
        .then(() => {
          this.props.navigation.navigate(
            'Deck',
            { title }
          );
        });
    });
    DeviceEventEmitter.addListener('addedCard', () => this.updateDecksAsync());
  }

  componentDidMount() {
    this.updateDecksAsync();
  }

  updateDecksAsync = () => {
    return getDecks()
      .then((decks) => {
        this.setState({
          decks,
          loading: false
        });
      })
  }

  handleGoToDeck = (deckTitle) => {
    const { bounceValue } = this.state;
    const { navigation } = this.props;

    this.setState({
      selected: deckTitle
    }, () => {
      Animated.sequence([
        Animated.timing(bounceValue, { duration: 100, toValue: 1.10 }),
        Animated.spring(bounceValue, { toValue: 1, friction: 4 })
      ]).start(() => {
        navigation.navigate(
          'Deck',
          { title: deckTitle }
        )
      })
    });
  }

  render() {
    const { decks, loading, bounceValue, selected } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text style={{color: red}}>Loading...</Text>
        </View>
      )
    }

    if (Object.keys(decks).length === 0) {
      return (
        <View style={styles.container}>
          <Text style={{color: red, fontSize: 35}}>No decks yet</Text>
          <TextButton style={{backgroundColor: black, width: 150}}
            onPress={() => {this.props.navigation.navigate('AddDeck')}}>
            Add Deck
          </TextButton>
        </View>
      )
    }

    return (
      <ScrollView style={{flex: 1}}>
        {Object.keys(decks).map((deckTitle) => {
          const deck = decks[deckTitle];
          const size = deck.questions.length;

          return (
            <TouchableOpacity key={deck.title} style={styles.deckContainer} onPress={() => this.handleGoToDeck(deck.title)}>
              <Animated.Text
                style={[styles.deckTitle, selected === deck.title && { transform:[{scale: bounceValue}]}]}>
                {deck.title}
              </Animated.Text>
              <Text style={styles.deckSize}>{size} {size === 1 ? 'card' : 'cards'}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckContainer: {
    height: 150,
    borderBottomColor: gray,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 25
  },
  deckSize: {
    fontSize: 20,
    color: gray
  }
});


export default Dashboard
