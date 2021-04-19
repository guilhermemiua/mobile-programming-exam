import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../../styles/theme';

export default function InputComponent({
  placeholder,
  style,
  onChange,
  value,
  secureTextEntry,
  multiline,
}) {
  return (
    <TextInput
      value={value}
      style={[style, styles.input]}
      placeholder={placeholder}
      onChange={onChange}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingLeft: 5,
  },
});
