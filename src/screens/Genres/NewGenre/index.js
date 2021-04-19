import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import i18n from 'i18n-js';
import { useDispatch } from 'react-redux';
import InputComponent from '../../../components/Input';
import ButtonComponent from '../../../components/Button';
import globalStyles from '../../../styles/globalStyles';
import { addGenre } from '../../../store/reducers/genres';

export default function NewGenre({ navigation: { navigate } }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (!name) {
      Alert.alert(i18n.t('error'), i18n.t('fieldsUnfilled'));
      return;
    }

    await dispatch(addGenre(name));

    await navigate('Genres');
  };

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
