import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { observer, inject } from 'mobx-react/native';

import { NavigationActions } from 'react-navigation';

const backgroundImage = require('../../assets/images/backgroundLogin.jpg');

@inject('Account') @observer
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }
    
    
    navigate(route) {
        const { navigate } = this.props.navigation;
        navigate(route);
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
                >
                <FormLabel  labelStyle={{ color: '#fff', borderColor: 'red'}} >Username</FormLabel>
                <FormInput 
                    value={this.state.username}
                    onChangeText={(text) => {
                        this.setState({ username:text });
                    }}
                    inputStyle={{ color: '#fff' }}
                    underlineColorAndroid="#fff"
                />
                <FormLabel labelStyle={{ color: '#fff'}} >Password</FormLabel>
                <FormInput 
                    value={this.state.password}
                    onChangeText={(text) => {
                        this.setState({ password:text });
                    }}
                    inputStyle={{ color: '#fff' }}
                    underlineColorAndroid="#fff"
                />

                <Button
                    large
                    icon={{name: 'lock-open', type: 'material-community', color: '#fff'}}
                    title='Login' 
                    buttonStyle={{backgroundColor: '#2d2d2d',}}
                    color="#fff"
                    onPress={async () => {
                        let { Account } = this.props;
                        await Account.login('alfathdirk','password');
                        this.navigate('Home');
                    }}
                />

                </View>
            </View>

        )
    }
}