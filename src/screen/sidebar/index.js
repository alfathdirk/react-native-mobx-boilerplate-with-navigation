// @flow

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import {
  Avatar,
  Divider,
} from 'react-native-elements';

const backgroundImage = require('../../assets/images/backgroundLogin.jpg');

export default class SideBar extends Component {
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
            height: '30%',
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
            margin: 10,
          }}
        >
          <Avatar
            xlarge
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg' }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <Text style={{ fontSize: 20 }}>Alfath Dirk</Text>
          <Text>PT Koltiva</Text>

        </View>
      </View>
    );
  }
}
