import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import i18n from 'i18n-js';
import { theme } from '../../styles/theme';

export default function HomeMenu({ navigate }) {
  return (
    <>
      <TouchableOpacity style={styles.item} onPress={() => navigate('Books')}>
        <View style={styles.itemContainer}>
          <Feather name="book" size={32} color={theme.colors.primary} />
          <Text style={styles.itemTitle}>{i18n.t('homeMenu.books')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigate('Genres')}>
        <View style={styles.itemContainer}>
          <Feather name="book-open" size={32} color={theme.colors.primary} />
          <Text style={styles.itemTitle}>{i18n.t('homeMenu.bookGenres')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigate('Settings')}
      >
        <View style={styles.itemContainer}>
          <Feather name="settings" size={32} color={theme.colors.primary} />
          <Text style={styles.itemTitle}>{i18n.t('homeMenu.settings')}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 7,
    paddingVertical: 20,
    marginBottom: 10,
    backgroundColor: theme.colors.white,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemTitle: {
    marginLeft: 10,
    fontSize: 18,
  },
});
