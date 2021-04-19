import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import i18n from 'i18n-js';
import globalStyles from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>{i18n.t('aboutPage.text1')}</Text>
        <Text style={styles.text}>{i18n.t('aboutPage.text2')}</Text>
        <Text style={styles.text}>{i18n.t('aboutPage.text3')}</Text>
        <Text style={styles.text}>{i18n.t('aboutPage.text4')}</Text>
        <Text style={styles.author}>{i18n.t('aboutPage.author')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  text: {
    marginBottom: 5,
  },
  author: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
