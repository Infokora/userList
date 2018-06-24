import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import propTypes from 'prop-types';

export const UserCard = ({login}) => {
  return (
    <TouchableOpacity style={style.wrapUser}>
      <Text>
        {login}
      </Text>

    </TouchableOpacity>
  )
};

UserCard.propTypes = {
  login: propTypes.string
};

UserCard.defaultProps = {
  login: ''
};

const style = StyleSheet.create({
  wrapUser: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundSpinner: {

  }
});