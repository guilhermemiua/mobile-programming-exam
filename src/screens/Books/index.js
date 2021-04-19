import React from 'react';

import { View } from 'react-native';
import BookList from '../../components/BookList';
import AddButton from '../../components/AddButton';
import globalStyles from '../../styles/globalStyles';

export default function Books({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <BookList navigation={navigation} />
      <AddButton onPress={() => navigation.navigate('New Book')} />
    </View>
  );
}
