import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistReducer } from 'redux-persist';
import { persistStore } from 'redux-persist';

import { api } from '../api';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  version: 1,
  blacklist: ['api']
};

export const rootReducer = () => {
  return combineReducers({
    [api.reducerPath]: api.reducer
  });
};

const persistedReducer = persistReducer(persistConfig, rootReducer());

export const store = configureStore({
  reducer: persistedReducer
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
