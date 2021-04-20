import React, { Suspense, lazy, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './сomponents/UserMenu/AppBar';
import routes from './routes';
import authOps from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './сomponents/UserMenu/PrivateRoute';
import PublicRoute from './сomponents/UserMenu/PublicRoute';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(() =>
  import('./views/RegisterPage.js' /* webpackChunkName: "RegisterPage" */),
);

const LoginPage = lazy(() =>
  import('./views/LoginPage.js' /* webpackChunkName: "LoginPage" */),
);

const ContactsPage = lazy(() =>
  import(
    './views/ContactPage/ContactsPage' /* webpackChunkName: "ContactsPage" */
  ),
);

const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage' /* webpackChunkName: "Not-found-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h4>Loading...</h4>}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsPage}
              redirectTo="/login"
            />

            <PublicRoute
              path={routes.register}
              restricted
              component={RegisterPage}
              redirectTo="/contacts"
            />

            <PublicRoute
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo="/contacts"
            />

            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOps.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
