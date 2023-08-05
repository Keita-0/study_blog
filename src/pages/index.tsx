import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="white-space w-90 inline-block w-80 animate-caret-border overflow-hidden border-r-8 border-transparent text-5xl font-bold">
          <span>Hello,&nbsp;</span>
          <span>I'm&nbsp;</span>
          <span>KM.</span>
        </div>
      </div>
      <div>
        <Link
          href={`/blog/`}
          className="text-xl text-blue-800 underline hover:text-blue-400"
        >
          blog
        </Link>
      </div>
      <div>
        <Link
          href={`/profile/`}
          className="text-xl text-blue-800 underline hover:text-blue-400"
        >
          profile
        </Link>
      </div>
    </>
  );
};

export default Home;
