import React from 'react';
import i18n from 'i18n-js';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Stack = createStackNavigator();

export default function UnauthenticatedRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: i18n.t('unauthenticatedRoutes.register') }}
      />
    </Stack.Navigator>
  );
}
