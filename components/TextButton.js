import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { lightPurp, white } from '../utils/colors';

export default function TextButton({ children, onPress, style={} }) {

  return (
    <TouchableOpacity style={[styles.submitBtn, style]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    borderColor: lightPurp,
    alignSelf: 'center'
  },
  text: {
    color: white,
    textAlign: 'center'
  }
});
