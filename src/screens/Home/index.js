import React from 'react';
import { View } from 'react-native';
import HomeMenu from '../../components/HomeMenu';
import globalStyles from '../../styles/globalStyles';

export default function Home({ navigation: { navigate } }) {
  return (
    <View style={globalStyles.container}>
      <HomeMenu navigate={navigate} />
    </View>
  );
}
