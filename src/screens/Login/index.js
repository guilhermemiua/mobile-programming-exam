import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import i18n from 'i18n-js';
import { useDispatch } from 'react-redux';
import { theme } from '../../styles/theme';

import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';

import { authenticate } from '../../store/reducers/auth';

export default function Login({ navigation: { navigate } }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert(i18n.t('error'), i18n.t('fieldsUnfilled'));
      return;
    }

    dispatch(authenticate(email, password));
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
        placeholder={i18n.t('login.password')}
        onChange={(event) => setPassword(event.nativeEvent.text)}
        secureTextEntry
      />

      <ButtonComponent
        type="primary"
        style={styles.loginButton}
        onPress={handleSubmit}
      >
        {i18n.t('login.submit')}
      </ButtonComponent>

      <View style={styles.register}>
        <Text>{i18n.t('login.noAccount')}</Text>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigate('Register')}
        >
          <Text style={styles.link}> {i18n.t('login.register')}</Text>
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
  loginButton: {
    marginBottom: 10,
    // marginTop: 10
  },
  link: {
    color: theme.colors.link,
    alignItems: 'center',
  },
});
