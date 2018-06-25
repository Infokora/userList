import {
  usersTypes,
} from '@actions';

import {Api} from "../components/Api";

export const actionUsers = () => dispatch => {
  return Api.loadingUsers()
    .then(res => {
      dispatch({
        type: usersTypes.LOADED,
        payload: res.data
      });
      return Promise.resolve(res);
    }).catch(error => Promise.reject(error));
};

export const actionFollowers = (login) => dispatch => {
  return Api.loadingFollowers(login)
    .then(res => {
      dispatch({
        type: usersTypes.FOLLOWERS_LOADED,
        payload: res.data
      });
      return Promise.resolve(res);
    }).catch(error => Promise.reject(error));
};