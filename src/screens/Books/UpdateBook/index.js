import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import i18n from 'i18n-js';
import { useDispatch, useSelector } from 'react-redux';

import InputComponent from '../../../components/Input';
import ButtonComponent from '../../../components/Button';
import globalStyles from '../../../styles/globalStyles';
import { updateBook } from '../../../store/reducers/books';
import { fetchGenres } from '../../../store/reducers/genres';
import PickerComponent from '../../../components/Picker';

export default function UpdateBook({ navigation: { navigate } }) {
  const dispatch = useDispatch();

  const { selectedBook, genres } = useSelector((state) => ({
    selectedBook: state.books.selectedBook,
    genres: state.genres.genres,
  }));

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [pickerGenres, setPickerGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSubmit = async () => {
    if (!title || !text || !selectedGenre) {
      Alert.alert(i18n.t('error'), i18n.t('fieldsUnfilled'));
      return;
    }

    await dispatch(
      updateBook({
        ...selectedBook,
        title,
        text,
        genre_id: selectedGenre,
      })
    );

    await navigate('Books');
  };

  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title);
      setText(selectedBook.text);
      setSelectedGenre(selectedBook.genre_id);
    }
  }, [selectedBook]);

  useEffect(() => {
    if (Array.isArray(genres) && genres.length > 0) {
      setPickerGenres(
        genres.map((genre) => ({
          value: genre.id,
          label: genre.name,
        }))
      );
    }
  }, [genres]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <View style={globalStyles.container}>
      <InputComponent
        value={title}
        placeholder={i18n.t('books.updateBook.title')}
        style={styles.input}
        onChange={(event) => setTitle(event.nativeEvent.text)}
      />
      <InputComponent
        value={text}
        placeholder={i18n.t('books.updateBook.text')}
        style={styles.input}
        multiline
        onChange={(event) => setText(event.nativeEvent.text)}
      />
      <PickerComponent
        style={styles.input}
        selectedValue={selectedGenre}
        onValueChange={(itemValue) => {
          setSelectedGenre(itemValue);
        }}
        pickerItems={pickerGenres}
      />
      <ButtonComponent type="primary" onPress={handleSubmit}>
        {i18n.t('books.updateBook.submit')}
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
