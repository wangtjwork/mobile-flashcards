import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks } from './utils/helpers';
import { red } from './utils/colors';
import AddQuestion from './components/AddQuestion';

export default class App extends React.Component {
  state = {
    decks: {},
    loading: true
  }

  componentDidMount() {
    getDecks()
      .then((decks) => {
        if (decks === null) {
          decks = {};
        }
        this.setState({
          decks,
          loading: false
        });
      })
  }

  render() {
    const { decks, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text style={{color: red}}>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <AddQuestion />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
