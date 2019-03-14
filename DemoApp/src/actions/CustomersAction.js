/*import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_CREATE
} from './types';



export const customerCreate = ({ name, email, phone, note, link, contracto_id }) => {

  return (dispatch) => {
    //firebase.database().ref(`/users/${currentUser.uid}/employees`)
     // .push({ name, phone, shift })
     // Insert New customer to the database server 
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.CustomerList({ type: 'reset' });
      });
  };
};

*/