import React from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-360';

import MyApp from './components/MyApp'

export default class outthere360 extends React.Component {
  render() {
    return (
        <MyApp/>
    );
  }
};


AppRegistry.registerComponent('outthere360', () => outthere360);
