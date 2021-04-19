import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import PickerComponent from '../../components/Picker';
import { languagesArray } from '../../constants/languages';
import globalStyles from '../../styles/globalStyles';
import ButtonComponent from '../../components/Button';

export default function ChangeLanguage({ navigation: { navigate } }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSubmit = async () => {
    i18n.locale = selectedLanguage;

    await navigate('Settings');
  };

  useEffect(() => {
    if (Localization?.locale) {
      setSelectedLanguage(Localization.locale);
    }
  }, [Localization.locale]);

  return (
    <View style={globalStyles.container}>
      <PickerComponent
        style={styles.input}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => {
          setSelectedLanguage(itemValue);
        }}
        pickerItems={languagesArray}
      />

      <ButtonComponent type="primary" onPress={handleSubmit}>
        {i18n.t('changeLanguage.submit')}
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
});
