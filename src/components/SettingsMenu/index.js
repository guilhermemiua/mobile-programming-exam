import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import i18n from 'i18n-js';

import { useDispatch } from 'react-redux';
import { theme } from '../../styles/theme';
import { logout } from '../../store/reducers/auth';

export default function SettingsMenu({ navigate }) {
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigate('Change Language')}
      >
        <View style={styles.itemContainer}>
          <Feather name="globe" size={32} color={theme.colors.primary} />
          <Text style={styles.itemTitle}>
            {i18n.t('settingsMenu.changeLanguage')}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigate('About')}>
        <View style={styles.itemContainer}>
          <Feather name="info" size={32} color={theme.colors.primary} />
          <Text style={styles.itemTitle}>{i18n.t('settingsMenu.about')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => dispatch(logout())}>
        <View style={styles.itemContainer}>
          <Feather name="log-out" size={32} color={theme.colors.primary} />
          <Text style={styles.itemTitle}>Logout</Text>
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
