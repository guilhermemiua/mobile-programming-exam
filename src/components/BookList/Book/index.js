import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import i18n from 'i18n-js';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteBook, selectBook } from '../../../store/reducers/books';
import { theme } from '../../../styles/theme';

export default function Book({ navigation, book }) {
  const dispatch = useDispatch();
  const [showAbstract, setShowAbstract] = useState(false);

  const toggleAbstract = () => setShowAbstract(!showAbstract);

  const goToViewBook = async () => {
    await dispatch(selectBook(book));

    await navigation.navigate('View Book', { title: book.title });
  };

  const displayDeleteAlert = () => {
    Alert.alert(
      i18n.t('bookList.book.deleteTitle'),
      i18n.t('bookList.book.deleteText'),
      [
        {
          text: i18n.t('cancel'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: i18n.t('confirm'),
          onPress: () => dispatch(deleteBook(book.id)),
        },
      ]
    );
  };

  const goToUpdateBook = () => {
    dispatch(selectBook(book));

    navigation.navigate('Update Book');
  };

  return (
    <View style={styles.book}>
      <View style={styles.bookHeader}>
        <TouchableOpacity onPress={toggleAbstract}>
          <Text style={styles.bookTitle}>{book.title}</Text>
        </TouchableOpacity>
        <View style={styles.actions}>
          <TouchableOpacity onPress={goToViewBook}>
            <Feather name="eye" size={25} color={theme.colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 5 }} onPress={goToUpdateBook}>
            <Feather name="edit" size={25} color={theme.colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={displayDeleteAlert}
          >
            <Feather name="trash" size={25} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {showAbstract && (
        <View style={styles.abstract}>
          <Text style={styles.genre}>{book.genre.name}</Text>
          <Text style={styles.bookAuthor}>
            {book.text.length > 100
              ? `${book.text.substring(0, book.text.length / 2)}...`
              : book.text}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  book: {
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.white,
  },
  bookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookText: {
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  abstract: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: theme.colors.black,
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
