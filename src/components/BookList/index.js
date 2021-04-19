import React, { useEffect, useState } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, setRefresh } from '../../store/reducers/books';
import Book from './Book';

export default function BookList({ navigation }) {
  const dispatch = useDispatch();

  const { books, refreshing } = useSelector((state) => ({
    books: state.books.books,
    refreshing: state.books.refreshing,
  }));

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={books}
      keyExtractor={(item) => item.id}
      onRefresh={async () => {
        await dispatch(setRefresh(true));
        await dispatch(fetchBooks());
        await dispatch(setRefresh(false));
      }}
      refreshing={refreshing}
      renderItem={({ item }) => (
        <Book key={item.id} book={item} navigation={navigation} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 10,
  },
});
