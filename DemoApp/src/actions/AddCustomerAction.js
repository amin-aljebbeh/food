import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    NAME_CHANGE,
    PHONE_CHANGED,
    NOTES_CHANGED
  } from './types';

export const nameChanged = (text) => {
    return {
      type: NAME_CHANGE,
      payload: text
    };
  };

  export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
    return {
      type: PHONE_CHANGED,
      payload: text
    };
  };

  export const notes = (text) => {
    return {
      type: NOTES_CHANGED,
      payload: text
    };
  };


  export const addCustomer = ({ name, email, phone, notes }) => {
    return (dispatch) => {
      console.log('Hello Add Customer from actions');
    };
  };