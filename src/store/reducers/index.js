import { combineReducers } from 'redux';

import booksReducer from './books';
import genresReducer from './genres';
import authReducer from './auth';

export default combineReducers({
  books: booksReducer,
  auth: authReducer,
  genres: genresReducer,
});
