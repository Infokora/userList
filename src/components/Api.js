import axios from 'axios';

export const host = 'https://api.github.com';

const api = {
  // USER
  users: '/users',
};

const http = axios.create({
  baseURL: host,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  },
});

class ApiCreate {
  public loadingUsers() {
    return http.get(api.users)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export const Api = new ApiCreate();
