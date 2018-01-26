// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ListView,
} from 'react-native';
import { List, ListItem, Avatar, Icon, Divider } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';

const backgroundImage = require('../../assets/images/backgroundLogin.jpg');

export default class SideBar extends Component {
  
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      itemsDt: ds.cloneWithRows([{
        title: 'Company',
        icon: 'domain',
        iconColor: '#858fec',
      },{
        title: 'Contact',
        icon: 'contacts',
        iconColor: '#9c8fec',
      }]),
    };
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
              margin: 10
            }}
      >
          <Avatar
            xlarge
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
            <Text style={{ fontSize: 20 }}>Alfath Dirk</Text>
            <Text>PT Koltiva</Text>
            <ListView
              dataSource={this.state.itemsDt}
              renderRow={(item) => (
                <View style={{ height: 70 }}>
                  <Grid style={{ marginTop: 10 }}>
                    <Col style={{ flex: 0.2, justifyContent: 'center' }}>
                      <Icon
                        size={36}
                        name={item.icon}
                        color={item.iconColor} />
                    </Col>
                    <Col style={{ justifyContent: 'center'}}>
                      <Text style={{ fontSize: 20 }}>
                        {item.title}
                      </Text>
                    </Col>
                  </Grid>
                  <Divider style={{ backgroundColor: '#ccc' }} />
                </View>
              )}
            />
          </View>
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
