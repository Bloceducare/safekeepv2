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
  // blacklist: [
  //   'Comment',
  //   'Product',
  // ], not to be persisted
}

const persistedReducer = persistReducer(persistConfig,  reducers)

const authMiddleware = (store)=>(next)=>(action)=>{
  const currentState = store.getState() as RootState
  // console.log(currentState.authReducer,  "next middleware")
  next(action)
}
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    .concat(safeKeepApi.middleware)
    .concat(authMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch