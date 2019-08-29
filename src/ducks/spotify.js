import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import ApiClient from '../services/api';

// Actions
export const FETCH_ERROR = 'spotify/FETCH_ERROR';
export const GET_PLAYLISTS = 'spotify/GET_PLAYLISTS';
export const GET_PLAYLISTS_SUCCESS = 'spotify/GET_PLAYLISTS_SUCCESS';

// Reducer
const initialState = {
  playlists: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
}

// Actions Creators
export function fetchError() {
  return { type: FETCH_ERROR };
}

export function getPlaylists() {
  return {
    type: GET_PLAYLISTS,
  };
}

export function getPlaylistsSuccess(playlists) {
  return {
    type: GET_PLAYLISTS_SUCCESS,
    playlists,
  };
}

// Epics
export const getPlaylistsEpic = (action$) => action$.pipe(
  ofType(GET_PLAYLISTS),
  mergeMap(() => ApiClient.get('/spotify/my-playlists')
    .pipe(
      map((response) => getPlaylistsSuccess(response.data.items)),
    )),
  catchError((error) => of(fetchError(error))),
);
