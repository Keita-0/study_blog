import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Tabs from "src/component/Tabs";
import { useState } from "react";
import { Layout } from "src/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTab, setActiveTab] = useState();
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
