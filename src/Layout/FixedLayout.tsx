import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const FixedLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-mono">
      <Header />
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
