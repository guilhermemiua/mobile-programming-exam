import React from 'react';
import i18n from 'i18n-js';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import Books from '../../screens/Books';
import Genres from '../../screens/Genres';
import Settings from '../../screens/Settings';
import NewGenre from '../../screens/Genres/NewGenre';
import UpdateGenre from '../../screens/Genres/UpdateGenre';
import NewBook from '../../screens/Books/NewBook';
import UpdateBook from '../../screens/Books/UpdateBook';
import ViewBook from '../../screens/Books/ViewBook';
import About from '../../screens/About';

const Stack = createStackNavigator();

export default function AuthenticatedRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Books"
        component={Books}
        options={{ title: i18n.t('authenticatedRoutes.books') }}
      />
      <Stack.Screen
        name="New Book"
        component={NewBook}
        options={{ title: i18n.t('authenticatedRoutes.newBook') }}
      />
      <Stack.Screen
        name="Update Book"
        component={UpdateBook}
        options={{ title: i18n.t('authenticatedRoutes.updateBook') }}
      />
      <Stack.Screen
        name="View Book"
        component={ViewBook}
        options={({ route }) => ({
          headerTitle: route.params.title,
        })}
      />
      <Stack.Screen
        name="Genres"
        component={Genres}
        options={{ title: i18n.t('authenticatedRoutes.genres') }}
      />
      <Stack.Screen
        name="New Genre"
        component={NewGenre}
        options={{ title: i18n.t('authenticatedRoutes.newGenre') }}
      />
      <Stack.Screen
        name="Update Genre"
        component={UpdateGenre}
        options={{ title: i18n.t('authenticatedRoutes.updateGenre') }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: i18n.t('authenticatedRoutes.settings') }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: i18n.t('authenticatedRoutes.about') }}
      />
    </Stack.Navigator>
  );
}
