import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Apartments } from "../data/apartments";
import { mapApartments } from "../Function & Component/mapApartments";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Find my Apartment</title>
        <meta name="description" content="" />
      </Head>
      <main>
        
        <div>
          {mapApartments()}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  );
}
