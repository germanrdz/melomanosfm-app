import { storage } from '../services/storage';

// Actions
export const TOKEN_UPDATED = 'session/TOKEN_UPDATED';
export const AUTHENTICATION_FAILED = 'session/AUTHENTICATION_FAILED';

export const LOGIN_SUCCESS = 'session/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'session/LOGIN_FAILED';
export const LOGOUT_USER = 'session/LOGOUT_USER';

// Reducer
const initialState = {
  headers: storage.headers || '',
  user: storage.user || null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case TOKEN_UPDATED:
      return {
        ...state,
        headers: { token: action.token },
      };
    case LOGOUT_USER:
      return {
        headers: '',
        user: null,
      };
    default:
      return state;
  }
}

// Action Creators
export const updateToken = token => ({
  type: TOKEN_UPDATED,
  token,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// Selectors
export const getSession = state => state.session;
export const getUser = state => state.session.user;
