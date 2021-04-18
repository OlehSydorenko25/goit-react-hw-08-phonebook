import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNav = () => {
  return (
    <div>
      <NavLink to={routes.register}>Регистрацыя</NavLink>
      <NavLink to={routes.login}>Логин</NavLink>
    </div>
  );
};

export default AuthNav;
