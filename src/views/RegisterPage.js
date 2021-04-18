import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOparations from '../redux/auth/auth-operations';

class LoginPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.state);

    this.props.onRegister(this.state);

    this.resert();
  };

  resert = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Страница регисрации</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              type="name"
              name="name"
              velue={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Почта
            <input
              type="email"
              name="email"
              velue={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              name="password"
              velue={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Зарегестрировать</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOparations.register,
};

export default connect(null, mapDispatchToProps)(LoginPage);
