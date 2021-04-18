// import React from 'react';
// import { connect } from 'react-redux';
// import Container from './сomponents/Container/Container';
// import ContactForm from './сomponents/ContactForm/ContactForm';
// import Filter from './сomponents/Filter/Filter';
// import ContactList from './сomponents/ContactList/ContactList';

// import './index.css';

// const App = () => {
//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </Container>
//   );
// };

// const mapStateToProps = state => ({
//   contactList: state.contacts,
// });

// export default connect(mapStateToProps)(App);

import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './сomponents/UserMenu/AppBar';
import routes from './routes';

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

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h4>Loading...</h4>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.contacts} component={ContactsPage} />

        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.login} component={LoginPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
