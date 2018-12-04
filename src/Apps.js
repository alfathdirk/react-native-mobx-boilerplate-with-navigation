import React, { Component } from 'react';
import SideDrawer from 'react-native-drawer';
import { observer, inject } from 'mobx-react/native';

import AppNavigator from './router/router';
import SideBar from './screen/sidebar';


const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: '#fff',
  },
  main: { paddingLeft: 3 },
};

@inject('Drawer') @observer
export default class App extends Component {

  componentDidMount() {
    const { Drawer } = this.props;
    Drawer._drawer = this._drawer;
  }

  render() {
    return (
      <SideDrawer
        type="overlay"
        tapToClose
        openDrawerOffset={0.3} // 20% gap on the right side of drawer
        panCloseMask={0.3}
        acceptPan
        closedDrawerOffset={-3}
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 },
        })}
        styles={drawerStyles}
        ref={ref => this._drawer = ref}
        content={<SideBar />}
      >
        <AppNavigator />
      </SideDrawer>
    );
  }
}
