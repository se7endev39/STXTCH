import Head from "next/head";

import { Footer, Header } from "../blockPages";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>STXTCH</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="stxtch test" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
