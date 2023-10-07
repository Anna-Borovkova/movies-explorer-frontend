class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._contentType = headers["Content-Type"];
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/` + endpoint, options).then(
      this._checkResponse
    );
  }

  signUp(name, email, password) {
    return this._request("signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    });
  }

  signIn(name, email, password) {
    return this._request("signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    });
  }

  signOut() {
    return this._request("signout", {
      credentials: "include",
    });
  }

  getUserInfo() {
    return this._request("users/me", {
      credentials: "include",
    });
  }

  changeUserInfo(name, email) {
    return this._request("users/me", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  getUserMovies() {
    return this._request("movies", {
      credentials: "include",
    });
  }

  addMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return this._request("movies", {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
      }),
    });
  }

  deleteMovie(id) {
    return this._request("movies/" + id, {
      method: "DELETE",
      credentials: "include",
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: "api.bitfilms.nomoredomainsicu.ru",
  headers: {
    "Content-Type": "application/json",
  },
});