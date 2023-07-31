import type { FC } from "react";

/**
 * @package
 */
export const Footer: FC = () => {
  return (
    <footer className="flex h-6 w-full items-center justify-center text-sm text-gray-500">
      <small>&copy; {`Keita Blog ${new Date().getFullYear()}`}</small>
    </footer>
  );
};
