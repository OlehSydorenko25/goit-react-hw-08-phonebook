import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const contacts = createReducer([], {
  [actions.fetchContactsSuccsess]: (_, { payload }) => payload,
  [actions.addContactsSuccsess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactsSuccsess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
