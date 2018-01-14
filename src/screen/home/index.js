import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Header, Button, Icon } from 'react-native-elements';

import { NavigationActions } from 'react-navigation';

import CounterView from '../../components/Counter';

@inject('CounterStore', 'Drawer') @observer
export default class Home extends Component {



    render() {
      const { CounterStore, navigation: { navigate, setParams, state }, Drawer } = this.props;
      return (
        <View>
          <Header
            leftComponent={<Icon
              name='menu'
              size={26}
              type='material-community'
              color='#fff'
              underlayColor="red"
              onPress={() => Drawer.open() } />}
            centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Text>Index screen</Text>
          <TouchableOpacity onPress={()=>navigate("Search", { title: "Search", parentKey: state.key })}>
            <Text>Go to Search</Text>
          </TouchableOpacity>
          <Text>{ state.params && `${state.params.search}`}</Text>
          <CounterView
            count={CounterStore.count}
            onPlus={() => CounterStore.onPlus()}
            onMinus={() => CounterStore.onMinus()}
          />
        </View>
      )
    }
  }