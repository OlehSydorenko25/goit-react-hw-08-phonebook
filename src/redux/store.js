import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contacts/contacts-reducer';
import authReducer from '../redux/auth/auth-reducer';

// const rootReducer = combineReducers({
//   contacts: counterReducer,
//   filter: filterReduser,
// });

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
