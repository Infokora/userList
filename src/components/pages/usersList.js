import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import {connect} from "react-redux";

import {
  UserCard,
  Spinner
} from '@common';
import {
  actionUsers
} from '../../actions';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({loading: true}, this.userLoading);
  }

  static userLoading() {
    this.props.actionUsers()
      .then(res => console.log(res))
      .catch(error => console.warn(error))
      .finally(() => this.setState({loading: false}));
  }

  render() {


    return (
      <View style={{}}>
        {
          this.props.users.map((item, i) => {
            return <UserCard key={i} login={item.login} />
          })
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
    actionUsers
  }
)(UsersList)
