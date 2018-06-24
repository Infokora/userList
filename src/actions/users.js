import {
  usersTypes,
} from '@actions';

import {Api} from "../components/Api";

export const actionUsers = () => dispatch => {
  return Api.loadingUsers()
    .then(res => {
      console.log('action', res);
      dispatch({
        type: usersTypes.LOADED,
        payload: res.data
      });
      return Promise.resolve(res);
    }).catch(error => {
      console.dir(error);
      return Promise.reject(error)
    });
};