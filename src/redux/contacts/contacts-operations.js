/* eslint-disable import/no-anonymous-default-export */

import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactsSuccsess(data));
  } catch (error) {
    actions.fetchContactsError(error.massage);
  }
};

const addContact = contact => async dispatch => {
  dispatch(actions.addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(actions.addContactsSuccsess(data));
  } catch (error) {
    actions.addContactsError(error.massage);
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteContactsSuccsess(id));
  } catch (error) {
    actions.deleteContactsError(error.massage);
  }
};

export default { addContact, deleteContact, fetchContacts };
