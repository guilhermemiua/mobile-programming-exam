import { Feather } from '@expo/vector-icons';
import React from 'react';
import i18n from 'i18n-js';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteGenre, selectGenre } from '../../../store/reducers/genres';
import { theme } from '../../../styles/theme';

export default function Genre({ navigate, genre }) {
  const dispatch = useDispatch();

  const displayDeleteAlert = () => {
    Alert.alert(
      i18n.t('genreList.genre.deleteTitle'),
      i18n.t('genreList.genre.deleteText'),
      [
        {
          text: i18n.t('cancel'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: i18n.t('confirm'),
          onPress: () => dispatch(deleteGenre(genre.id)),
        },
      ]
    );
  };

  const goToUpdateGenre = () => {
    dispatch(selectGenre(genre));

    navigate('Update Genre');
  };

  return (
    <View style={styles.genre}>
      <Text style={styles.genreName}>{genre.name}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={goToUpdateGenre}>
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
  );
}

const styles = StyleSheet.create({
  genre: {
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
