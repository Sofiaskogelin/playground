import Main from "../components/main";
import Head from "next/head";
import Layout from "../components/main/Layout";

function Home() {
  return (
    <div>
      <Head>
        <title>Sofia Skogelin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Head>
      <Layout />
      <Main />;
    </div>
  );
}

export default Home;
