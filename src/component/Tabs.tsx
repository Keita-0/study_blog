import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

type TabProps = {
  tabs: string[];
};

const Tabs = React.memo(({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex w-full px-32 py-3 ">
      {tabs.map((tab) => (
        <Link
          key={tab}
          href={`/${tab}`}
          onClick={() => setActiveTab(tab)}
          className={`px-4 text-gray-600 hover:cursor-pointer hover:text-black ${
            tab === activeTab
              ? "rounded-b-none border-b-2 border-solid border-green-400"
              : ""
          }`}
        >
          {tab}
        </Link>
      ))}
    </div>
  );
});

export default Tabs;
