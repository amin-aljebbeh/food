//Import a library to help us create component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import CustomerList from './src/components/CustomerList'
// Create component

const App = () => (
<View style={styles.viewStyle}>
  <Header headerText={'Customers'} />
  <CustomerList />
</View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 1000,
    flex:1,

  }
};
// Render it to the device
AppRegistry.registerComponent('DemoApp', () => App);
