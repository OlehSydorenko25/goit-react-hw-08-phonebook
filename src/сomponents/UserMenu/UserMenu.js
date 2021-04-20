import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';

const UserMenu = ({ email, onLogout }) => {
  // console.log(email);
  return (
    <div>
      <span>{email}</span>

      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        onClick={onLogout}
      >
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
