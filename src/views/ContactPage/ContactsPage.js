import React, { Component } from 'react';
import ContactForm from '../../сomponents/Contacts/ContactForm/ContactForm';
import ContactList from '../../сomponents/Contacts/ContactList/ContactList';
import Filter from '../../сomponents/Contacts/Filter/Filter';
import styles from './Contacts.module.css';

class ContactsPage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <ContactForm />
        <h3>Filter</h3>
        <Filter />
        <h3>Contacts</h3>
        <ContactList />
      </div>
    );
  }
}

export default ContactsPage;
