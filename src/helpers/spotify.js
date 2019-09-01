/* eslint-disable import/prefer-default-export */

/**
 * Maps Spotify Resource to Grid Items for Grid Component
 * @param {*} items
 */
export const mapSpotifyResultToGridItems = (items) => items.map((item) => ({
  image: item.images[0].url,
  text: item.name,
  url: item.external_urls.spotify,
}));
