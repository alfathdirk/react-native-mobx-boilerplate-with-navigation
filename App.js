/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react/native';
import { Provider } from 'mobx-react';
import stores from './src/store';

import Apps from './src/Apps';

@observer
export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Apps />
      </Provider>
    );
  }
}
