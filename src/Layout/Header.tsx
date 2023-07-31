import Image from "next/image";
import type { FC } from "react";

/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="flex justify-between gap-8">
      <div className="m-8 flex flex-row justify-between">
        <Image
          src="/Icon.svg"
          width={200}
          height={200}
          alt="Icon"
          className="object-cover"
        />
      </div>
      <div className="flex gap-2">
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </header>
  );
};
