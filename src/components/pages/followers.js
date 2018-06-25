import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Linking,
  StyleSheet
} from 'react-native';
import {connect} from "react-redux";
import propTypes from 'prop-types';

import {
  UserCard,
  Spinner
} from '@common';
import {
  actionUsers,
  actionFollowers
} from '@actions';

class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: ''
    }
  }

  static propTypes = {
    users: propTypes.object
  };

  static defaultProps = {
    users: {}
  };

  errorMsg() {
    if (this.state.error) {
      return (
        <Text style={style.error}>
          {this.state.error}
        </Text>
      );
    } else {
      return null
    }
  }

  moveToBrowser(url) {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch((err) => {
      console.error('An error occurred', err)
    });
  }

  render() {
    return (
      <View style={style.main}>
        {
          this.state.loading ?
            <Spinner/>
            :
            <FlatList
              ListHeaderComponent={this.errorMsg.bind(this)}
              style={style.list}
              data={this.props.users.followers}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <UserCard
                  login={item.login}
                  avatar_url={item.avatar_url}
                  profileMove={this.moveToBrowser.bind(this, item.html_url)}
                  showFollowers={() => {
                  }}
                />
              )}
            />
        }
      </View>
    )
  };
}

export default connect(
  ({
     users
   }) => {
    return {
      users
    }
  }, {
    actionUsers,
    actionFollowers
  }
)(Followers);

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  error: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 22,
  }
});
