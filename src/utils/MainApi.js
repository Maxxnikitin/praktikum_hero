class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getCallbackWithRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`error${res.status}`);
  }
}

export const api = new Api({
  baseUrl: "#",
  headers: {
    "Content-Type": "application/json",
  },
});
