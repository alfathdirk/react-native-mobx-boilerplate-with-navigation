import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import CounterView from '../../components/Counter';

@inject('CounterStore') @observer
export default class Home extends Component {
    render() {
      const { CounterStore, navigation: { navigate, setParams, state } } = this.props;

      return (
        <View>
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