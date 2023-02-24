import { configureStore } from '@reduxjs/toolkit'
import {combineReducers} from "redux"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { safeKeepApi } from '../services/api';
import auth from './auth';


const reducers = combineReducers({
  [safeKeepApi.reducerPath]:safeKeepApi.reducer,
  authReducer:auth
 //...            
});

const persistConfig = {
  key: 'safekeep-root@0.0.1',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig,  reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch