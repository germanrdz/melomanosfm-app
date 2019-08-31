import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import ApiClient from '../services/api';

// Actions
export const FETCH_ERROR = 'spotify/FETCH_ERROR';
export const GET_MY_PLAYLISTS = 'spotify/GET_PLAYLISTS';
export const GET_MY_PLAYLISTS_SUCCESS = 'spotify/GET_PLAYLISTS_SUCCESS';
export const GET_MY_TOP_ARTISTS = 'spotify/GET_TOP_ARTISTS';
export const GET_MY_TOP_ARTISTS_SUCCESS = 'spotify/GET_TOP_ARTISTS_SUCCESS';

// Reducer
const initialState = {
  playlists: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
}

// Global Action Creators
export const fetchError = () => ({
  type: FETCH_ERROR,
});

// Playlists Action Creators
export const getMyPlaylists = () => ({
  type: GET_MY_PLAYLISTS,
});

export const getMyPlaylistsSuccess = (playlists) => ({
  type: GET_MY_PLAYLISTS_SUCCESS,
  playlists,
});

// Top Artists Action Creators
export const getMyTopArtistsSuccess = (topArtists) => ({
  type: GET_MY_TOP_ARTISTS_SUCCESS,
  topArtists,
});

// Epics
export const getPlaylistsEpic = (action$) => action$.pipe(
  ofType(GET_MY_PLAYLISTS),
  mergeMap(() => ApiClient.get('/spotify/my-playlists')
    .pipe(
      map((response) => getMyPlaylistsSuccess(response.data.items)),
    )),
  catchError((error) => of(fetchError(error))),
);

export const getTopArtists = (action$) => action$.pipe(
  ofType(GET_MY_TOP_ARTISTS),
  mergeMap(() => ApiClient.get('/spotify/my-top-artists')
    .pipe(
      map((response) => getMyTopArtistsSuccess(response.data.items)),
    )),
  catchError((error) => of(fetchError(error))),
);
