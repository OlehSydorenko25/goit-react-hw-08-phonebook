import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contacts-operations';
import selectors from '../../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';
import Button from '@material-ui/core/Button';

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <ul className={styles.contactList}>
        {this.props.contactList.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}: </span>
              <span>{number}</span>

              <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactList: selectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
