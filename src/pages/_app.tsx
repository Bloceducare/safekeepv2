import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@components/Layout";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient, SIWEProvider } from "connectkit";
import { siweConfig } from "@config/siwe";

let persistor = persistStore(store);

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Safekeep",
    alchemyId
  })
);

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
        <WagmiConfig client={client}>
          <SIWEProvider {...siweConfig}>
            <ConnectKitProvider>
              {Component.PageLayout ? (
                // @ts-ignore
                <Component.PageLayout>
                  <Component {...pageProps} />
                </Component.PageLayout>
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </ConnectKitProvider>
          </SIWEProvider>
        </WagmiConfig>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
