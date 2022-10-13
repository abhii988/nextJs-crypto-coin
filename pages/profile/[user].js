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
      <Link href="/profile">
        <button>Go Back &#11013;</button>
      </Link>
      <hr />
      <h2>This is your Profile Page.</h2>
      <Link href="/">
        <button>Go Home {"\u2B1F"}</button>
      </Link>
    </div>
  );
};

export default User;
