/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
export const localStorage = {
  _headers: '',
  _user: '',

  // Global Helpers
  clearStorage() {
    sessionStorage.clear();
  },

  get isLogged() {
    return !!this.user && !!this.headers;
  },

  // OAuth Headers
  set headers(respHeaders) {
    if (respHeaders === '') {
      this._headers = '';
      sessionStorage.removeItem('authHeaders');
      return;
    }

    // TODO: Refactor X-TrackerToken?
    this._headers = {
      'access-token': respHeaders['access-token'],
      client: respHeaders.client,
      uid: respHeaders.uid,
      expiry: respHeaders.expiry,

      first_name: respHeaders.first_name,
      'X-TrackerToken': respHeaders['X-TrackerToken'],
    };

    sessionStorage.setItem('authHeaders', JSON.stringify(this._headers));
  },

  get headers() {
    const headers = this.getHeaders();
    return headers;
  },

  getHeaders() {
    const headers = JSON.parse(sessionStorage.getItem('authHeaders'));

    if (headers && headers.expiry < parseInt(Date.now() / 1000, 10)) {
      sessionStorage.removeItem('authHeaders');
      sessionStorage.removeItem('authUser');
      return null;
    }

    return headers;
  },

  // User Session
  set user(user) {
    if (user === '') {
      this._user = '';
      sessionStorage.removeItem('authUser');
      return;
    }

    this._user = user;
    sessionStorage.setItem('authUser', JSON.stringify(this._user));
  },

  get user() {
    const user = this.getUser();
    return user;
  },

  getUser() {
    const user = JSON.parse(sessionStorage.getItem('authUser'));
    return user;
  },
};
