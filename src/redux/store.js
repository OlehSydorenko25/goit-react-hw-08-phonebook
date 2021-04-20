/* eslint-disable import/no-anonymous-default-export */
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from '../redux/contacts/contacts-reducer';
// import authReducer from '../redux/auth/auth-reducer';

// const middleweare = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
//     },
//   }),
// ];

// const persistConfig = {
//   key: 'auth',
//   storage,
//   whiteList: ['token'],
// };

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//     phonebook: contactsReducer,
//   },
//   middleweare,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistior = persistStore(store);

// export default { store, persistior };

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './contacts/contacts-reducer';
import authReducer from './auth/auth-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
