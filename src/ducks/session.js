import { storage } from '../services/storage';

// Actions
export const TOKEN_UPDATED = 'session/TOKEN_UPDATED';
export const AUTHENTICATION_FAILED = 'session/AUTHENTICATION_FAILED';

export const LOGIN_SUCCESS = 'session/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'session/LOGIN_FAILED';

// Reducer
const initialState = {
  headers: storage.headers || '',
  user: storage.user || null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
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
    default:
      return state;
  }
}

// Action Creators
export function updateToken(token) {
  return {
    type: TOKEN_UPDATED,
    token,
  }
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

// Epics

