import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "../store/index";
import {
  persistStore,
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from "components/Layout"

let persistor = persistStore(store);

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};


function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  // Component.PageLayout = DashboardLayout;
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <Layout>
          {Component.PageLayout ? (
            // @ts-ignore
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
       </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp
