import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { inject, observer } from 'mobx-react/native';

import CounterView from '../../components/Counter';

@inject('CounterStore') @observer
export default class Search extends Component {

  updateHome = (params) => {
    const {state, dispatch, goBack} = this.props.navigation
    dispatch(NavigationActions.setParams({
      params,
      key: state.params.parentKey, 
    }))
    goBack(null)
  }

  render() {
      const { CounterStore, navigation: { navigate } } = this.props;
    
      return (
        <View>
          <Text>Search screen</Text>
          <TouchableOpacity onPress={()=>this.updateHome({search: "Cats", title: "Cats"})}>
          <Text>Search for Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.updateHome({search: "Dogs", title: "Dogs"})}>
          <Text>Search for Dogs</Text>
        </TouchableOpacity>
        <CounterView
          count={CounterStore.count}
          onPlus={() => CounterStore.onPlus()}
          onMinus={() => CounterStore.onMinus()}
        />
        <Button
          onPress={() => navigate("NewScreen", { title: "New Screen" })}
          title="Tap me to load the next scene"
        />
        </View>
      )
    }
  }
  
  