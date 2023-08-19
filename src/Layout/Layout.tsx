import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Tabs from "src/component/Tabs";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="font-sans text-gray-800 dark:bg-gray-800 dark:text-white">
      <div className="flex min-h-screen w-full flex-col">
        <Head>
          <title>KM BLOG</title>
        </Head>
        <Tabs />
        <main className="m-auto flex w-3/4 flex-1 flex-col items-center">
          {children}
        </main>
        <footer className="mt-6 flex h-10 w-full items-center justify-center text-sm text-gray-500">
          <small>&copy; {`KM Blog ${new Date().getFullYear()}`}</small>
        </footer>
      </div>
    </div>
  );
};
