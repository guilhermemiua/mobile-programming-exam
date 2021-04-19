import { firestore } from 'firebase';
import { Alert } from 'react-native';
import i18n from 'i18n-js';

export const Types = {
  FETCH_GENRES: 'genres/FETCH_GENRES',
  ADD_GENRE: 'genres/ADD_GENRE',
  UPDATE_GENRE: 'genres/UPDATE_GENRE',
  DELETE_GENRE: 'genres/DELETE_GENRE',
  SELECT_GENRE: 'genres/SELECT_GENRE',
};

const initialState = {
  genres: [],
  selectedGenre: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_GENRES:
      return {
        ...state,
        genres: action.payload.genres,
      };
    case Types.ADD_GENRE:
      return {
        ...state,
        genres: [...state.genres, action.payload.genre],
      };
    case Types.DELETE_GENRE:
      return {
        ...state,
        genres: state.genres.filter(
          (genre) => genre.id !== action.payload.genreId
        ),
      };
    case Types.UPDATE_GENRE:
      return {
        ...state,
        selectedGenre: null,
        genres: state.genres.map((genre) => {
          if (genre.id === action.payload.genre.id) {
            return action.payload.genre;
          }

          return genre;
        }),
      };
    case Types.SELECT_GENRE:
      return {
        ...state,
        selectedGenre: action.payload.genre,
      };
    default:
      return state;
  }
}

export function fetchGenres() {
  return async (dispatch, getState) => {
    try {
      const { user } = getState().auth;

      const genres = [];
      const querySnapshot = await firestore()
        .collection('genres')
        .where('user_id', '==', user.uid)
        .get();

      querySnapshot.forEach((doc) => {
        const { name, user_id } = doc.data();

        genres.push({
          user_id,
          name,
          id: doc.id,
        });
      });

      await dispatch({
        type: Types.FETCH_GENRES,
        payload: {
          genres,
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.genres.fetchGenresError'));
    }
  };
}

export function addGenre(name) {
  return async (dispatch, getState) => {
    try {
      const { user } = getState().auth;

      const doc = await firestore().collection('genres').add({
        name,
        user_id: user.uid,
      });

      await dispatch({
        type: Types.ADD_GENRE,
        payload: {
          genre: {
            id: doc.id,
            name,
            user_id: user.uid,
          },
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.genres.addGenreError'));
    }
  };
}

export function deleteGenre(genreId) {
  return async (dispatch) => {
    try {
      const querySnapshot = await firestore()
        .collection('books')
        .where('genre_id', '==', genreId)

        .get();

      let exists = false;

      querySnapshot.forEach((book) => {
        if (book) {
          exists = true;
        }
      });

      if (!exists) {
        await firestore().collection('genres').doc(genreId).delete();

        await dispatch({
          type: Types.DELETE_GENRE,
          payload: {
            genreId,
          },
        });
      } else {
        Alert.alert(
          i18n.t('error'),
          i18n.t('reducers.genres.existingBookError')
        );
      }
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.genres.deleteGenreError'));
    }
  };
}

export function selectGenre(genre) {
  return (dispatch) => {
    dispatch({
      type: Types.SELECT_GENRE,
      payload: {
        genre,
      },
    });
  };
}

export function updateGenre(genre) {
  return async (dispatch) => {
    try {
      await firestore().collection('genres').doc(genre.id).update({
        name: genre.name,
      });

      await dispatch({
        type: Types.UPDATE_GENRE,
        payload: {
          genre,
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.genres.updateGenreError'));
    }
  };
}
