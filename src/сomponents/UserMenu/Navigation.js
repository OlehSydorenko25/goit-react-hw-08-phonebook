import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <NavLink to={routes.home}>Home</NavLink>

      <NavLink to={routes.contacts}>Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
