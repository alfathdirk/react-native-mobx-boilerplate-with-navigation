import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react/native';
import { addNavigationHelpers } from 'react-navigation';
import { Provider } from 'mobx-react';

import stores from './store';
import AppNavigator from './router/navigator';

@observer
class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
        <Provider {...stores}>
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: stores.NavigationStore.dispatch,
                state: stores.NavigationStore.navigationState,
            })}/>
        </Provider>
        )
    }
};
AppRegistry.registerComponent('SippoMobx', () => App);
