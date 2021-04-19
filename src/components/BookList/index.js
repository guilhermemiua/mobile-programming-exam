import React, { useEffect } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../store/reducers/books';
import Book from './Book';

export default function BookList({ navigation }) {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => ({
    books: state.books.books,
  }));

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={books}
      keyExtractor={(item) => item.id}
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
