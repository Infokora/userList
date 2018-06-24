import React, {Component} from 'react';
import {
  Scene,
  Router,
  ActionConst
} from 'react-native-router-flux';

// import { colors } from '@constants';
// import { title } from './components/styles/title';

import UsersList from './components/pages/usersList';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            type={ActionConst.RESET}
            key="usersList"
            component={UsersList}
            title={'Github users'}
            initial
          />
        </Scene>
      </Router>
    );
  };
};