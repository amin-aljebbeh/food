import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CustomerList from './CustomerList'
import AddNewCustomer from './AddNewCustomer'
import Canvas from './Canvas'
import ContractorCustomerView from './ContractorCustomerView'
import Login from './Login'
const RouterComponent = () => {

  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key= "auth">
        <Scene
        key="login_1"
        component={Login}
        title="Enter Your Info To Login"
        initial
        /> 
       </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.addnewcustomer()}
          rightTitle="Add"
          key="customerlist"
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
    </Scene>
    </Router>
  );
};

export default RouterComponent;
