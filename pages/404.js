import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/404.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.body}>
      <section className={styles.notFound}>
        <div className={styles.img}>
          <Image
            src="/backToTheHomepage.png"
            alt="Back to the Homepage"
            // layout="fill"
            // className={styles.img}
            width={770}
            height={262}
          />
          <Image
            src="/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
            // layout="fill"
            // className={styles.img}
            width={839}
            height={377}
          />
        </div>
        <div className={styles.text}>
          <h1>Error 404</h1>
          <h2>PAGE NOT FOUND</h2>
          <h3>BACK TO HOME?</h3>
          <Link href="/" className={styles.yes}>
            YES
          </Link>
          <Link href="/">DEFINITELY YES</Link>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
