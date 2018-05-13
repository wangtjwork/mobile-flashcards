import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { black, gray, green } from '../utils/colors';

class CustomInput extends Component {
  state = {
    selected: false
  }

  handleFocus = () => {
    this.setState({
      selected: true
    })
  }

  handleBlur = () => {
    this.setState({
      selected: false
    })
  }

  render() {
    const { handleChange, ...res } = this.props;

    return (
      <View style={styles.inputWrap}>
        <TextInput
          style={[styles.input, {borderBottomColor: this.state.selected ? green : gray}]}
          onChangeText={(text) => handleChange(text)}
          {...res}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default CustomInput;
