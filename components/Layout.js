import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>GuitarApp - {page}</title>
        <meta name="description" content="Site about guitar sales" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
