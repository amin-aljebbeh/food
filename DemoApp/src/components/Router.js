import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CustomerList from './CustomerList'
import AddNewCustomer from './AddNewCustomer'
import Canvas from './Canvas'
import ContractorCustomerView from './ContractorCustomerView'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main">
        <Scene
          onRight={() => Actions.addnewcustomer()}
          rightTitle="Add"
          key="employeeList"
          component={CustomerList}
          title="Customers"
          initial
        />
        <Scene
          key="addnewcustomer"
          component={AddNewCustomer}
          title="Add Customer Section"
        />

        <Scene
          key="contractorcustomerview"
          component={ContractorCustomerView}
          title="Customer Detail"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
