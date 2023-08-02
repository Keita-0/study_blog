import Head from "next/head";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Tabs from "src/component/Tabs";
import { Footer } from "src/Layout/Footer";
import { Header } from "src/Layout/Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="mx-80 flex min-h-screen flex-col font-sans ">
      <Header />
      <Tabs />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
