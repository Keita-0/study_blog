import { Footer } from "./Footer";
import { Header } from "./Header";

export const getLayout = (page: React.ReactElement) => {
  return (
    <div className="flex min-h-screen flex-col font-mono">
      <Header />
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {page}
      </main>
      <Footer />
    </div>
  );
};
