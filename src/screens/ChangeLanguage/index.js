import React from 'react';
import { View } from 'react-native';
import SettingsMenu from '../../components/SettingsMenu';
import globalStyles from '../../styles/globalStyles';

export default function ChangeLanguage({ navigation: { navigate } }) {
  return (
    <View style={globalStyles.container}>
      <SettingsMenu navigate={navigate} />
    </View>
  );
}
