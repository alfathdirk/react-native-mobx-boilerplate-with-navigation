import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Header, Button, Icon } from 'react-native-elements';

import CounterView from '../../components/Counter';

@inject('CounterStore', 'Drawer', 'Account') @observer
export default class Home extends Component {

  render() {
    const {
      CounterStore,
      navigation: { navigate, state },
      Drawer, Account,
    } = this.props;
    return (
      <View>
        <Header
          backgroundColor="#d13431"
          leftComponent={<Icon
            name="menu"
            size={26}
            type="material-community"
            color="#fff"
            underlayColor="red"
            onPress={() => Drawer.open()}
          />}
          centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>Index screen</Text>
        <TouchableOpacity onPress={() => navigate('Search', { title: 'Search', parentKey: state.key })}>
          <Text>Go to Search</Text>
        </TouchableOpacity>
        <Button
          onPress={() => {
            navigate('Login', { title: 'Login Screen' });
            Account.logout();
          }}
          title={Account.authorized ? 'Logout' : 'Login'}
        />
        <Text>{ state.params && `${state.params.search}`}</Text>
        <CounterView
          count={CounterStore.count}
          onPlus={() => CounterStore.onPlus()}
          onMinus={() => CounterStore.onMinus()}
        />
      </View>
    );
  }
}
