import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import { v4 as uuidv4 } from 'uuid';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  emailInputId = uuidv4();
  passwordInputId = uuidv4();

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Страница авторизации</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.emailInputId}>
            Почта
            <input
              type="email"
              name="email"
              velue={email}
              onChange={this.handleChange}
              id={this.emailInputId}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              name="password"
              velue={password}
              onChange={this.handleChange}
              id={this.passwordInputId}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
