import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Feather name="plus" size={16} color={theme.colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
    padding: 20,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
  },
});
