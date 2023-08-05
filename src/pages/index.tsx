import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="white-space w-90 inline-block w-80 animate-caret-border overflow-hidden border-r-8 border-transparent text-5xl font-bold">
          <span>Hello,&nbsp;I&apos;m&nbsp;</span>
          <span className="text-green-500">KM</span>
          <span>.</span>
        </div>
      </div>
      <div className="mt-10 flex w-9/12 flex-row justify-around">
        <Link href={`/profile/`} className="text-xl underline no-underline">
          <div className="flex h-60 w-60 flex-col items-center justify-center rounded-2xl border-4 transition-all duration-500 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mb-2 h-20 w-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            About Me
          </div>
        </Link>
        <Link href={`/blog/`} className="text-xl underline no-underline">
          <div className="flex h-60 w-60 flex-col items-center justify-center rounded-2xl border-4 transition-all duration-500 ease-out hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mb-2 h-20 w-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Blog
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
