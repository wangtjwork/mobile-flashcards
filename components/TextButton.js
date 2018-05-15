import React from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { lightPurp, white } from '../utils/colors';

export default function TextButton({ children, disabled = false, onPress, style={}, textStyle={} }) {
  return (
    <TouchableOpacity disabled style={[styles.submitBtn, style, disabled && {opacity: 0.5}]} onPress={onPress}>
      <Text style={[styles.text, textStyle, disabled && {opacity: 0.5}]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    borderColor: lightPurp,
    alignSelf: 'center'
  },
  text: {
    color: white,
    textAlign: 'center',
    fontSize: 20
  }
});
