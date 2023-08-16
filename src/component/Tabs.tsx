import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type TabType = { title: string; path: string };

const tabObj: TabType[] = [
  { title: "About Me", path: "/profile" },
  { title: "Blog", path: "/blog" },
];

const Tabs = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClickNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-10 flex w-full flex-row justify-center bg-white py-3">
      <div className="flex w-5/6 flex-row place-items-end justify-between md:justify-start xl:w-2/3 ">
        <Link href={`/`} className="mr-4 flex flex-row text-xl font-bold">
          <h1 className="text-green-500">KM</h1>&nbsp;<h1>Blog</h1>
        </Link>
        <nav className="hidden flex-row md:flex">
          {tabObj.map((tab) => (
            <Link
              key={tab.title}
              href={`${tab.path}`}
              className={`mr-1 border-b-2  px-3 transition-all duration-200 lg:hover:cursor-pointer  lg:hover:text-black ${
                router.asPath.includes(tab.path)
                  ? "border-green-400"
                  : "border-transparent lg:hover:border-gray-400"
              }`}
            >
              <li className="list-none">{tab.title}</li>
            </Link>
          ))}
        </nav>
      </div>
      <button
        id="menu-button"
        aria-label="menu-button"
        className="z-30 md:hidden"
        onClick={onClickNavBar}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 animate-nav-icon-animation"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div
        className={`fixed top-0 z-20 h-full w-full transition-all duration-500 ${
          isOpen ? "" : "-translate-y-full"
        } bg-gray-100 md:hidden`}
      >
        <ul className="absolute top-8 w-full">
          <li className="flex h-7 w-full justify-center border-b-2">
            <Link href={`/`} onClick={onClickNavBar}>
              home
            </Link>
          </li>
          <li className="flex h-7 w-full justify-center border-b-2">
            <Link href="/profile" onClick={onClickNavBar}>
              About Me
            </Link>
          </li>
          <li className="flex h-7 w-full justify-center border-b-2">
            <Link href="/blog" onClick={onClickNavBar}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
