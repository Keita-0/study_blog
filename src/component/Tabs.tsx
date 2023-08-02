import Link from "next/link";
import React, { useState } from "react";

type TabType = { title: string; path: string };

const tabObj: TabType[] = [
  { title: "Blog", path: "/" },
  { title: "About Me", path: "/profile" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabObj[0].title);

  return (
    <div className="mb-1.5 flex w-full px-32 py-3">
      {tabObj.map((tab) => (
        <Link
          key={tab.title}
          href={`/${tab.path}`}
          onClick={() => setActiveTab(tab.title)}
          className={`px-4 text-gray-600 hover:cursor-pointer hover:text-black ${
            tab.title === activeTab
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
