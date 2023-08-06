import Head from "next/head";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Tabs from "src/component/Tabs";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="font-sans text-gray-800">
      <div className="mx-80 flex min-h-screen flex-col ">
        <Head>
          <title>KM BLOG</title>
        </Head>
        <Tabs />
        <main className="flex flex-1 flex-col items-center">{children}</main>
        <footer className="flex h-6 w-full items-center justify-center text-sm text-gray-500">
          <small>&copy; {`KM Blog ${new Date().getFullYear()}`}</small>
        </footer>
      </div>
    </div>
  );
};
