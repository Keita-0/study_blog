import Head from "next/head";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Tabs from "src/component/Tabs";
import { Footer } from "src/Layout/Footer";
import { Header } from "src/Layout/Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const [test, setTest] = useState("start");

  return (
    <div className="flex min-h-screen flex-col font-mono">
      {/* <Header /> */}
      <div onClick={() => setTest("second")}>test</div>
      <p>{test}</p>
      <Tabs tabs={["home", "Blog", "profile"]} />
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
