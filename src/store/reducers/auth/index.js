import { auth } from 'firebase';
import { Alert } from 'react-native';
import i18n from 'i18n-js';

export const Types = {
  AUTHENTICATE: 'auth/AUTHENTICATE',
  LOGOUT: 'auth/LOGOUT',
  AUTHENTICATED: 'auth/AUTHENTICATED',
  UNAUTHENTICATED: 'auth/UNAUTHENTICATED',
};

const initialState = {
  loading: true,
  user: null,
  isAuthenticated: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
      };
    case Types.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
      };
    case Types.UNAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case Types.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export function verifyIfIsAuthenticated() {
  return async (dispatch) => {
    try {
      const { currentUser } = await auth();

      console.log(currentUser);

      if (currentUser) {
        await dispatch({
          type: Types.AUTHENTICATED,
          payload: {
            user: currentUser,
          },
        });
      } else {
        await dispatch({
          type: Types.UNAUTHENTICATED,
        });
      }
    } catch (err) {
      Alert.alert(
        i18n.t('error'),
        i18n.t('reducers.auth.verifyAuthenticationError')
      );
    }
  };
}

export function authenticate(email, password) {
  return async (dispatch) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);

      const { currentUser } = auth();

      await dispatch({
        type: Types.AUTHENTICATE,
        payload: {
          user: currentUser,
        },
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.auth.loginError'));
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await auth().signOut();

      await dispatch({
        type: Types.LOGOUT,
      });
    } catch (err) {
      Alert.alert(i18n.t('error'), i18n.t('reducers.auth.logoutError'));
    }
  };
}
