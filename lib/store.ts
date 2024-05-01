'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import accountReducer from './reducers/auth';
import appConfigReducer from './reducers/appConfig';
import usersReducer from './reducers/users';
import { persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  account: accountReducer,
  users: usersReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false, //check data passed must be serializable
    immutableCheck: false,
  })
})

export type AppStore = typeof store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;