import React from 'react';
import { connect } from 'react-redux';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = ({ isAutenticated }) => {
  return (
    <header>
      <Navigation />
      {isAutenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAutenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
