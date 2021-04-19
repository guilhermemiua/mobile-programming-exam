import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import i18n from 'i18n-js';
import { theme } from '../../styles/theme';

export default function PickerComponent({
  style,
  selectedValue,
  onValueChange,
  pickerItems,
}) {
  return (
    <Picker
      style={[style, styles.picker]}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
    >
      <Picker.Item label={i18n.t('picker.firstLabel')} value="0" />
      {pickerItems?.map((pickerItem) => (
        <Picker.Item label={pickerItem.label} value={pickerItem.value} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    backgroundColor: theme.colors.white,
    paddingLeft: 5,
  },
});
