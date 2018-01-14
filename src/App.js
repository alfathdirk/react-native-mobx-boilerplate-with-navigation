import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import Drawer from 'react-native-drawer'
import { observer, inject } from 'mobx-react/native';

import stores from './store';
import StackNavigator from './router/navigator';
import SideBar from './screen/sidebar';

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#fff'},
    main: { paddingLeft: 3 },
}

@inject('Drawer') @observer
export default class App extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount () {
        const { Drawer } = this.props;
        Drawer._drawer = this._drawer;
    }

    render() {
        return (
            <Drawer
                type="overlay"
                tapToClose={true}
                openDrawerOffset={0.5} // 20% gap on the right side of drawer
                panCloseMask={0.5}
                acceptPan={true}
                closedDrawerOffset={-3}
                tweenHandler={(ratio) => ({
                    main: { opacity:(2-ratio)/2 }
                })}
                styles={drawerStyles}
                ref={(ref) => this._drawer = ref }
                content={<SideBar />}
                >
                <StackNavigator
                 navigation={addNavigationHelpers({
                    dispatch: stores.NavigationStore.dispatch,
                    state: stores.NavigationStore.navigationState,
                })}/>
            </Drawer>
        )
    }
};
