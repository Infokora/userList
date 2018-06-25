import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import propTypes from 'prop-types';

export const UserCard = ({login, avatar_url, profileMove, showFollowers}) => {
  return (
    <TouchableOpacity style={style.wrapUser} onPress={showFollowers}>
      <Image style={style.avatar} source={{uri: avatar_url}}/>

      <View style={style.loginWrap}>
        <TouchableOpacity onPress={profileMove} style={style.loginBtn}>
          <Text style={style.login}>
            {login}
          </Text>
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  )
};

UserCard.propTypes = {
  login: propTypes.string,
  avatar_url: propTypes.string,
  profileMove: propTypes.func.isRequired,
  showFollowers: propTypes.func.isRequired
};

UserCard.defaultProps = {
  login: '',
  avatar_url: '',
  profileMove: undefined,
  showFollowers: undefined
};

const style = StyleSheet.create({
  wrapUser: {
    height: 110,
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  loginWrap: {
    paddingHorizontal: 10,
  },
  loginBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  login: {
    fontSize: 16,
    color: '#4a90e2'
  }
});