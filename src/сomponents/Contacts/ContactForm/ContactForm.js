import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contacts-operations';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Проверка на Одинаковие слова разного регистра
    this.props.phonebook.contacts.find(
      ({ name, number }) =>
        name.toLowerCase() === this.state.name.toLowerCase() ||
        number === this.state.number,
    )
      ? alert('This contact is already in contacts')
      : this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={StyleSheet.label}>
          Name
          <input
            type="text"
            name="name"
            className={styles.input}
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label htmlFor={this.numberInputId} className={StyleSheet.label}>
          Number
          <input
            type="text"
            name="number"
            className={styles.input}
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <Button type="submit" variant="outlined" color="primary">
          Add contacts
        </Button>

        {/* <button type="submit">Add contact</button> */}
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return { state: state };
// };
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(contactsOperations.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
