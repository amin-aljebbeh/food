/*import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, addCustomer, nameChanged,phoneChanged,noteChanged } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class AddCustomer extends Component {

  onNameChange(text){
      this.props.nameChanged(text);
  }

  onEmailChange(text){
      this.props.emailChanged(text);
  }

  onPhoneChange(text){
    this.props.phoneChanged(text);
}

onNotesChange(text){
    this.props.noteChanged(text);
}

  onButtonPress() {
    const { name, email, phone, notes } = this.props;

    this.props.loginUser({ name, email, phone, notes });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Name"
            placeholder="Amin"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="+1 888-888-8888"
            onChangeText={this.onPhoneChange.bind(this)}
            value={this.props.phone}
          />
        </CardSection>


        <CardSection>
          <Input
            label="Notes"
            placeholder="Any Notes To Remember About This Customer"
            onChangeText={this.onNotesChange.bind(this)}
            value={this.props.notes}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
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

const mapStateToProps = ({ props }) => {
  const { name, email, phone, notes } = props;

  return { name, email, phone, notes };
};

export default connect(mapStateToProps, {
  emailChanged,nameChanged, phoneChanged, noteChanged, addCustomer
})(AddCustomer);
*/