import React from 'react';
import { View } from 'react-native';
import AddButton from '../../components/AddButton';
import globalStyles from '../../styles/globalStyles';
import GenreList from '../../components/GenreList';

export default function Genres({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <GenreList navigation={navigation} />

      <AddButton onPress={() => navigation.navigate('New Genre')} />
    </View>
  );
}
