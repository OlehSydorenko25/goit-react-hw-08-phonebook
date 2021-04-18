/* eslint-disable import/no-anonymous-default-export */
// import axios from 'axios';
// import actions from './contacts-actions';

// const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(actions.fetchContactsSuccess(data));
//   } catch (error) {
//     actions.fetchContactsError(error);
//   }
// };

// const addContact = ({ name, number }) => async dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(actions.addContactsRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
//     .catch(error => dispatch(actions.addContactsError(error)));
// };

// const deleteContact = id => dispatch => {
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => {
//       return dispatch(actions.deleteContactsSuccsess(id));
//     })
//     .catch(error => dispatch(actions.deleteContactsError(error.message)));
// };

// export default { fetchContacts, addContact, deleteContact };

// -----------------------

import axios from 'axios';
// import { connect } from 'react-redux';
import actions from './contacts-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    actions.fetchContactsError(error);
  }
};

const addContact = contact => async dispatch => {
  console.log(contact);

  // console.log(name);
  // console.log(number);

  dispatch(actions.addContactsRequest());

  try {
    const { data } = axios.post('/contacts', contact);
    console.log(data);
    // dispatch(actions.addContactsSuccsess(data));
  } catch (error) {
    actions.addContactsError(error);
  }

  // axios
  //   .post('/contacts', contact)
  //   .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
  //   .catch(error => dispatch(actions.addContactsError(error)));
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactsSuccess(id)))
    .catch(error => dispatch(actions.deleteContactsError(error)));
};

export default { addContact, deleteContact, fetchContacts };
