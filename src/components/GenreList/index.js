import React, { useEffect } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../store/reducers/genres';
import Genre from './Genre';

export default function GenreList({ navigation }) {
  const dispatch = useDispatch();

  const { genres } = useSelector((state) => ({
    genres: state.genres.genres,
  }));

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={genres}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Genre key={item.id} genre={item} navigation={navigation} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 10,
  },
});
