import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import i18n from 'i18n-js';
import { useDispatch, useSelector } from 'react-redux';
import InputComponent from '../../../components/Input';
import ButtonComponent from '../../../components/Button';
import globalStyles from '../../../styles/globalStyles';
import { updateGenre } from '../../../store/reducers/genres';

export default function UpdateGenre({ navigation: { navigate } }) {
  const dispatch = useDispatch();

  const { selectedGenre } = useSelector((state) => ({
    selectedGenre: state.genres.selectedGenre,
  }));

  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (!name) {
      Alert.alert(i18n.t('error'), i18n.t('fieldsUnfilled'));
      return;
    }

    await dispatch(
      updateGenre({
        ...selectedGenre,
        name,
      })
    );

    await navigate('Genres');
  };

  useEffect(() => {
    if (selectedGenre) {
      setName(selectedGenre.name);
    }
  }, [selectedGenre]);

  return (
    <View style={globalStyles.container}>
      <InputComponent
        value={name}
        placeholder={i18n.t('genres.newGenre.name')}
        style={styles.input}
        onChange={(event) => setName(event.nativeEvent.text)}
      />
      <ButtonComponent type="primary" onPress={handleSubmit}>
        {i18n.t('genres.newGenre.submit')}
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
