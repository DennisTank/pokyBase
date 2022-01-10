import Head from "next/head";
import Nav from "./Nav";
function Layout({ title, children }) {
  return (
    <div className=" bg-white ">
      <Head>
        <title className="font-bold">{title}</title>
        <meta name="description" content="Pokeymon Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container mx-auto pt-2 min-h-screen">
        <Nav />
        {children}
      </main>
    </div>
  );
}

export default Layout;
