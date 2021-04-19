import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'i18n-js';
import InputComponent from '../../../components/Input';
import ButtonComponent from '../../../components/Button';
import globalStyles from '../../../styles/globalStyles';
import { addBook } from '../../../store/reducers/books';
import PickerComponent from '../../../components/Picker';
import { fetchGenres } from '../../../store/reducers/genres';

export default function NewBook({ navigation: { navigate } }) {
  const dispatch = useDispatch();

  const { genres } = useSelector((state) => ({
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

    await dispatch(addBook(title, text, selectedGenre));

    await navigate('Books');
  };

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
        placeholder={i18n.t('books.newBook.title')}
        style={styles.input}
        onChange={(event) => setTitle(event.nativeEvent.text)}
      />
      <InputComponent
        value={text}
        placeholder={i18n.t('books.newBook.text')}
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
        {i18n.t('books.newBook.submit')}
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
