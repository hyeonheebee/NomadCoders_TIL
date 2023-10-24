import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
          body{
            font-family: "Nanum Pen Script", cursive;
            font-size: 50px;
}
          }
        `}</style>
    </>
  );
}
