import { firestore } from 'firebase';
import { Alert } from 'react-native';
import i18n from 'i18n-js';

export const Types = {
  FETCH_BOOKS: 'books/FETCH_BOOKS',
  ADD_BOOK: 'books/ADD_BOOK',
  UPDATE_BOOK: 'books/UPDATE_BOOK',
  DELETE_BOOK: 'books/DELETE_BOOK',
  SELECT_BOOK: 'books/SELECT_BOOK',
  SET_REFRESHING: 'books/SET_REFRESHING',
};

const initialState = {
  books: [],
  selectedBook: null,
  refreshing: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_BOOKS:
      return {
        ...state,
        books: action.payload.books,
      };
    case Types.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload.book],
      };
    case Types.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.bookId),
      };
    case Types.UPDATE_BOOK:
      return {
        ...state,
        selectedBook: null,
        books: state.books.map((book) => {
          if (book.id === action.payload.book.id) {
            return action.payload.book;
          }

          return book;
        }),
      };
    case Types.SELECT_BOOK:
      return {
        ...state,
        selectedBook: action.payload.book,
      };
    default:
      return state;
  }
}

export function fetchBooks() {
  return async (dispatch, getState) => {
    try {
      const { user } = await getState().auth;

      const querySnapshot = await firestore()
        .collection('books')
        .where('user_id', '==', user.uid)
        .get();

      const books = [];
      const booksWithGenre = [];

      querySnapshot.forEach((doc) => {
        const { title, user_id, text, genre_id } = doc.data();

        books.push({
          user_id,
          title,
          text,
          genre_id,
          id: doc.id,
        });
      });

      await Promise.all(
        books.map(async (book) => {
          const genreDoc = await firestore()
            .collection('genres')
            .doc(book.genre_id)
            .get();

          const { name } = genreDoc.data();

          booksWithGenre.push({
            ...book,
            genre: {
              name,
              id: genreDoc.id,
            },
          });
        })
      );

      await dispatch({
        type: Types.FETCH_BOOKS,
        payload: {
          books: booksWithGenre,
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.books.fetchBooksError'));
    }
  };
}

export function addBook(title, text, genre_id) {
  return async (dispatch, getState) => {
    try {
      const { user } = await getState().auth;

      const doc = await firestore().collection('books').add({
        title,
        text,
        genre_id,
        user_id: user.uid,
      });

      const genreDoc = await firestore()
        .collection('genres')
        .doc(genre_id)
        .get();

      const { name: genreName } = genreDoc.data();

      await dispatch({
        type: Types.ADD_BOOK,
        payload: {
          book: {
            id: doc.id,
            title,
            text,
            genre_id,
            user_id: user.uid,
            genre: {
              id: genre_id,
              name: genreName,
            },
          },
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.books.addBookError'));
    }
  };
}

export function deleteBook(id) {
  return async (dispatch) => {
    try {
      await firestore().collection('books').doc(id).delete();

      await dispatch({
        type: Types.DELETE_BOOK,
        payload: {
          bookId: id,
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.books.deleteBookError'));
    }
  };
}

export function selectBook(book) {
  return async (dispatch) => {
    await dispatch({
      type: Types.SELECT_BOOK,
      payload: {
        book,
      },
    });
  };
}

export function updateBook(book) {
  return async (dispatch) => {
    try {
      await firestore().collection('books').doc(book.id).update({
        title: book.title,
        text: book.text,
        book: book.genre_id,
      });

      const genreDoc = await firestore()
        .collection('genres')
        .doc(book.genre_id)
        .get();

      const { name: genreName } = genreDoc.data();

      await dispatch({
        type: Types.UPDATE_BOOK,
        payload: {
          book: {
            ...book,
            genre: {
              id: book.genre_id,
              name: genreName,
            },
          },
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.books.updateBookError'));
    }
  };
}

export function setRefresh(refreshing) {
  return (dispatch) => {
    dispatch({
      type: Types.SET_REFRESHING,
      payload: {
        refreshing,
      },
    });
  };
}
