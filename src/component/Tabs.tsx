import Image from "next/image";
import { useState } from "react";

type TabProps = {
  tabs: string[];
};

const Tabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col">
      <div className="m-8">
        <Image
          src="/Icon.svg"
          width={200}
          height={200}
          alt="Icon"
          className="object-cover"
        />
      </div>

      <div className="flex w-full px-32 py-3 ">
        {tabs.map((tab) => (
          <a
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 text-gray-600 hover:cursor-pointer hover:text-black ${
              tab === activeTab
                ? "rounded-b-none border-b-2 border-solid border-green-400"
                : ""
            }`}
          >
            {tab}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
