import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { auth } from 'firebase';
import i18n from 'i18n-js';
import { theme } from '../../styles/theme';

import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';

export default function Register({ navigation: { navigate } }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email || password) {
      Alert.alert(i18n.t('error'), i18n.t('fieldsUnfilled'));
      return;
    }

    await auth().createUserWithEmailAndPassword(email, password);

    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <InputComponent
        style={styles.input}
        value={email}
        placeholder="E-mail"
        onChange={(event) => setEmail(event.nativeEvent.text)}
      />
      <InputComponent
        style={styles.input}
        value={password}
        placeholder={i18n.t('register.password')}
        onChange={(event) => setPassword(event.nativeEvent.text)}
        secureTextEntry
      />

      <ButtonComponent
        type="primary"
        style={styles.registerButton}
        onPress={handleSubmit}
      >
        {i18n.t('register.submit')}
      </ButtonComponent>

      <View style={styles.register}>
        <Text>{i18n.t('register.hasAccount')}</Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigate('Login')}
        >
          <Text style={styles.link}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerButton: {
    marginBottom: 10,
    // marginTop: 10
  },
  link: {
    color: theme.colors.link,
    alignItems: 'center',
  },
});
