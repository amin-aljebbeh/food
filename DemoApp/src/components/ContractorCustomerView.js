import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ContractorCustomerDetail from './ContractorCustomerDetail';

class ContractorCustomerView extends Component {
  state = { CustomerDetail: [] };
  

  componentWillMount() {
      axios.get('http://127.0.0.1:3003/contractor_customers/1/'+this.props.customer_id)
      .then(response => this.setState({CustomerDetail: response.data}));
    }
renderAlbums() {
  return this.state.CustomerDetail.map(CustomerDetail =>
    <ContractorCustomerDetail key={CustomerDetail.email} record={CustomerDetail} />)
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
export default ContractorCustomerView;
