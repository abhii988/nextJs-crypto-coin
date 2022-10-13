import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>About Page</h1>
      <hr />
      <h2>This is the About Page.</h2>
    </div>
  );
};

export default About;
