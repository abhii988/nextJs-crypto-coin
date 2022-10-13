import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile Page</title>
      </Head>
      <h1>Profile Page</h1>
      <hr />
      <h2>This is the Profile Page.</h2>
      <form>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          placeholder="UserName..."
          name="user"
          value={userName}
          onChange={handleChange}
        />{" "}
        <Link
          href={`/profile/${userName}`}
          style={{ textDecoration: "underline", color: "blue" }}
        >
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Profile;
