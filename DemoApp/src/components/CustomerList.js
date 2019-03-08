import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import CustomersDetail from './CustomersDetail';

class CustomerList extends Component {
  state = { DemoApp: [] };
  

  componentWillMount() {
      axios.get('http://127.0.0.1:3003/contractor_customers/1')
      .then(response => this.setState({DemoApp: response.data}));
    }
renderAlbums() {
  return this.state.DemoApp.map(DemoApp =>
    <CustomersDetail key={DemoApp.email} record={DemoApp} />)
}
  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
}
}
export default CustomerList;
