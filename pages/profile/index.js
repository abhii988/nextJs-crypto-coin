import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile Page</title>
      </Head>
      <h1>Profile Page</h1>
      <hr />
      <h2>This is the Profile Page.</h2>
    </div>
  );
};

export default Profile;
