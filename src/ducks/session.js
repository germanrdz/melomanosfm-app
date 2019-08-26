// Actions
export const TOKENS_UPDATED = 'session/TOKENS_UPDATED';
export const AUTHENTICATION_FAILED = 'session/AUTHENTICATION_FAILED';
export const LOGIN_SUCCESS = 'session/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'session/LOGIN_FAILED';

// Reducer
const initialState = {
  accessToken: '',
  refreshToken: '',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case TOKENS_UPDATED:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    default:
      return state;
  }
}

// Action Creators
export function updateTokens(accessToken, refreshToken) {
  return {
    type: TOKENS_UPDATED,
    accessToken,
    refreshToken,
  }
}

// Epics

