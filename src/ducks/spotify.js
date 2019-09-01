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
  topArtists: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case GET_MY_TOP_ARTISTS_SUCCESS:
      return {
        ...state,
        topArtists: action.topArtists,
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
export const getMyTopArtists = () => ({
  type: GET_MY_TOP_ARTISTS,
});

export const getMyTopArtistsSuccess = (topArtists) => ({
  type: GET_MY_TOP_ARTISTS_SUCCESS,
  topArtists,
});

// Epics
export const getMyPlaylistsEpic = (action$) => action$.pipe(
  ofType(GET_MY_PLAYLISTS),
  mergeMap(() => ApiClient.get('/spotify/my-playlists')
    .pipe(
      map((response) => {
        const playlists = response.data.items.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.images[0].url,
          url: item.external_urls.spotify,
        }));
        return getMyPlaylistsSuccess(playlists);
      }),
    )),
  catchError((error) => of(fetchError(error))),
);


export const getMyTopArtistsEpic = (action$) => action$.pipe(
  ofType(GET_MY_TOP_ARTISTS),
  mergeMap(() => ApiClient.get('/spotify/my-top-artists')
    .pipe(
      map((response) => {
        const topArtists = response.data.items.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.images[0].url,
          url: item.external_urls.spotify,
        }));
        return getMyTopArtistsSuccess(topArtists);
      }),
    )),
  catchError((error) => of(fetchError(error))),
);
