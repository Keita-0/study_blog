import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type TabType = { title: string; path: string };

const tabObj: TabType[] = [
  { title: "About Me", path: "/profile" },
  { title: "Blog", path: "/blog" },
];

const Tabs = () => {
  const router = useRouter();

  return (
    <div className="top fixed mx-auto w-full bg-white px-80 py-3">
      <Link href={`/`} className="mr-4 text-xl font-bold">
        <span className="text-green-500">KM</span> <span>Blog</span>
      </Link>
      {tabObj.map((tab) => (
        <Link
          key={tab.title}
          href={`/${tab.path}`}
          className={`mr-1 px-3  transition-all duration-200 hover:cursor-pointer hover:border-b-2 hover:text-black ${
            router.asPath.includes(tab.path)
              ? "rounded-b-none border-b-2 border-solid border-green-400"
              : ""
          }`}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
