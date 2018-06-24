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
  loadingUsers() {
    return http.get(api.users)
      .then(res => Promise.resolve(res))
      .catch(error => Promise.reject(error));
  }
}

export const Api = new ApiCreate();
