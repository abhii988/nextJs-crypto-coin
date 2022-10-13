import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/coins">Coins</Link>
        <Link href="/profile">Profile</Link>
      </div>
      {/* <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
