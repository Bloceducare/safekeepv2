import type { NextPage } from "next";
import Head from "next/head";
import PressKitView from "@views/press-kit";

const PressKit: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Press Kit</title>
      </Head>
      <PressKitView />
    </div>
  );
};

export default PressKit;
