import React from 'react';
import { TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import { lightPurp, white } from '../utils/colors';

export default function TextButton({ children, disabled = false, onPress, style={}, textStyle={} }) {

  if (disabled === true) {
    return (
      <View style={[styles.submitBtn, style]}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </View>
    )
  }

  return (
    <TouchableOpacity style={[styles.submitBtn, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
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
