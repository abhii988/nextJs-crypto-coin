import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <hr />
      <h2>This is the Home Page.</h2>
    </div>
  );
}
