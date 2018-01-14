// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class SideBar extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>
          Helo
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
  },
  text: {
    margin: 10,
  },
  button: {
    height: 10,
    width: 10,
  }
});
