import { combineReducers } from 'redux';
import AddCustomerReducer from './AddCustomerReducer'
import CustomerFormAdd from './CustomerFormAdd'

export default combineReducers({
  AddCustomerReducer: AddCustomerReducer,
  customerForm : CustomerFormAdd
});

