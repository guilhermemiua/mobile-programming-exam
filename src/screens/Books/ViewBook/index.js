import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import globalStyles from '../../../styles/globalStyles';
import { theme } from '../../../styles/theme';

export default function ViewBook() {
  const { selectedBook } = useSelector((state) => ({
    selectedBook: state.books.selectedBook,
  }));

  return (
    <ScrollView style={[globalStyles.container]}>
      <Text style={styles.genre}>{selectedBook?.genre?.name}</Text>
      <View style={styles.bookCard}>
        <Text style={styles.text}>{selectedBook?.text}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bookCard: {
    backgroundColor: theme.colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
  },
  genre: {
    backgroundColor: theme.colors.white,
    textAlign: 'center',
    color: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    marginBottom: 10,
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
});
