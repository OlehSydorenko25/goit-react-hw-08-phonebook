/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUserName,
};
