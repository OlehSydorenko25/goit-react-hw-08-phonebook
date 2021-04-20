import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import routes from '../../routes';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to={routes.home}>Home</NavLink>

      {isAuthenticated && <NavLink to={routes.contacts}>Contacts</NavLink>}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
