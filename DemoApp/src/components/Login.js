import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import axios from 'axios'
import {  Actions } from 'react-native-router-flux';

class Login extends Component {
  state = { username: '', password: '', error: '', loading: false, auth:false };

  onButtonPress() {
    Actions.main()
    const { username, password } = this.state;

    this.setState({ error: '', loading: false });

    const params = {
      username: username,
      password: password,
    };
    axios.post('http://127.0.0.1:3003/login', params, {
       headers: {
            'content-type': 'application/x-www-form-urlencoded',
       },
  }).then(function (response) {
    console.log(response.data);
    if(response.data == '1')
    {

      this.onLoginSuccess.bind(this);
      
    }
    else
    {
      this.onLoginFail.bind(this);
    }
  })

  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      username: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Your Username"
            label="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default Login;
