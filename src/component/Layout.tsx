import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Tabs from "src/component/Tabs";

type Props = {
  children: ReactNode;
  title: String;
};

export const Layout: FC<Props> = ({ children, title }) => {
  console.log("Layout");

  return (
    <div className="flex min-h-screen flex-col font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Tabs tabs={["Home", "Blog", "Profile"]} />
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-6 w-full items-center justify-center text-sm text-gray-500">
        {`@Keita Blog ${new Date().getFullYear()}`}
      </footer>
    </div>
  );
};
