import {useState} from "react";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "../store/index";
import {
  persistStore,
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store)


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
    </Provider>
  )
}

export default MyApp
