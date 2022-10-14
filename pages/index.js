import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Header from "../components/cardcomponent/Header";
import HeaderMain from "../components/header/header";

export default function Home() {
  return (
    <div style={{ background: "black" }}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
      </Head>
      <HeaderMain/>
      <Header />
      <Footer />
    </div>
  );
}
