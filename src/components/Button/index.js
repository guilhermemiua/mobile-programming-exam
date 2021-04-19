import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { theme } from '../../styles/theme';

export default function ButtonComponent({
  type = 'default',
  style,
  onPress,
  children,
}) {
  return (
    <TouchableOpacity
      style={[style, styles.touchableOpacity, styles[type]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`${type}Text`]]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
  },
  default: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  primaryText: {
    color: theme.colors.white,
  },
});
