import {
  usersTypes,
} from '@actions';

import {Api} from "../components/Api";

export const actionUsers = () => dispatch => {
  return Api.loadingUsers()
    .then(res => {
      dispatch({
        type: usersTypes.LOADED,
        payload: res
      });
      return Promise.resolve(res);
    }).catch(error => Promise.reject(error));
};