import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Layout } from "src/component/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div className="mx-auto max-w-prose">
    //   <header className="border-b border-gray-300 py-8">
    //     <h1>
    //       <Link href="/" className="text-5xl font-bold">
    //         {/* <a className="text-5xl font-bold"> */}
    //         ITブログ
    //         {/* </a> */}
    //       </Link>
    //     </h1>
    //   </header>
    //   </div>
    <Layout title="Keita Blog">
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
