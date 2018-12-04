import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

import { observer, inject } from 'mobx-react/native';

const backgroundImage = require('../../assets/images/backgroundLogin.jpg');

@inject('Account') @observer
export default class SplashScreen extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  componentWillMount() {
    let { navigation: { dispatch }, Account } = this.props;
    setTimeout(() => {
      let route = (Account.authorized) ? 'Home' : 'Login';
      dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [{ type: 'Navigate', routeName: route }],
      });
    }, 300);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
            }}
            source={backgroundImage}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        />
      </View>

    );
  }
}
