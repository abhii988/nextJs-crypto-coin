import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

const User = () => {
  const router = useRouter();
  const { user } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>User: {user}</title>
      </Head>
      <h1>Hello &quot;{user}&quot;</h1>
      <h2>This is your Profile Page.</h2>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default User;
