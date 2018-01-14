import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import App from './App';

import { observer } from 'mobx-react/native';
import { Provider } from 'mobx-react';
import stores from './store';

@observer
export default class AppNavigator extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Provider {...stores}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('SippoMobx', () => AppNavigator);
