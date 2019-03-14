import {
    EMAIL_CHANGED,
    NAME_CHANGE,
    PHONE_CHANGED,
    NOTES_CHANGED
  } from '../actions/types';
  
  const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    notes: '',
    loading : false,
    error: '',

  };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case NAME_CHANGE:
        return { ...state,  name: action.payload };
      case EMAIL_CHANGED:
        return { ...state,  email: action.payload };
      case PHONE_CHANGED:
        return {  ...state, phone: action.payload };
      case NOTES_CHANGED:
        return {  ...state, notes: action.payload };
      default:
        return state;
    }
  };