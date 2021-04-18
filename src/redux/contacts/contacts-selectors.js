/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.phonebook.filter;

const geAllContacts = state => state.phonebook.contacts;

const getVisibleContacts = createSelector(
  [geAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getVisibleContacts,
  getFilter,
  geAllContacts,
};
