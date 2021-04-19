import React from 'react';
import * as firebase from 'firebase';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import { LogBox } from 'react-native';
import firebaseConfig from './src/config/firebase';
import translations from './src/internationalization';

import 'react-native-gesture-handler';

import store from './src/store';
import Routes from './src/routes';

i18n.translations = translations;

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase');
    firebase.initializeApp(firebaseConfig);
  }

  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />

        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
