import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import {  Actions } from 'react-native-router-flux';

class Login extends Component {
  state = { username: '', password: '', error: '', loading: false, auth:false, dataa:null };

  onButtonPress = async () => {
    //Actions.main()

    const { username, password, dataa } = this.state;

    this.setState({ error: '', loading: true });

    const params = {
      username: username,
      password: password,
    }
    const response = await fetch('http://127.0.0.1:3003/login', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({params})
    });
    const json = await response.json();
    // just log ‘json’
    console.log(json);
    if (json == '1')
    {
        Actions.main()
        this.setState({loading: false });


    }
    else
    {
      alert('Error Username or Password ');
      this.setState({loading: false });

    }
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
