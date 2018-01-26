import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  BackHandler,
  Dimensions
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import Drawer from 'react-native-drawer'
import { observer, inject } from 'mobx-react/native';
import TabNavigator from 'react-native-tab-navigator';
import { Icon } from 'react-native-elements';
import stores from './store';
import StackNavigator from './router/navigator';
import SideBar from './screen/sidebar';

const deviceW = Dimensions.get('window').width
const basePx = 375
function px2dp(px) {
  return px *  deviceW / basePx
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#fff'},
    main: { paddingLeft: 3 },
}

@inject('Drawer') @observer
export default class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            selectedTab: 'home'
        };
        
    }

    get account () {
        return this.props.Account;
    }

    componentWillMount () {
        // stores.NavigationStore.navigationState.routes[0].routeName = 'Home' ;
    }

    componentDidMount () {
        const { Drawer  } = this.props;
        Drawer._drawer = this._drawer;
    }

    render() {
        return (
            <Drawer
                type="overlay"
                tapToClose={true}
                openDrawerOffset={0.3} // 20% gap on the right side of drawer
                panCloseMask={0.3}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});