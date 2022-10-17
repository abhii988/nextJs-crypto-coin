import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";

const CoinDetails = ({ coinData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div
        className={styles.cointainer}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-100px 0 0 -150px",
        }}
      >
        <div className={styles.loader} />
        <h1>Please Wait, Loading...</h1>
      </div>
    );
  }
  // console.log(coinData);
  return (
    <div className={styles.container}>
      <Head>
        <title>{coinData.name}</title>
      </Head>

      <h1>Details of &quot;{coinData.name}&quot; are:</h1>
      <Link href="/coins">
        <button>Go Back &#11013;</button>
      </Link>
      <hr />
      <h2>User Id: {coinData.id}</h2>
      <h2>Name: {coinData.name}</h2>
      <h2> Price: ${coinData.price} </h2>
      <h2> Rank: {coinData.rank} </h2>
      <h2> Symbol: {coinData.symbol} </h2>
      <h2> Price Change(1 week): {coinData.priceChange1w} </h2>
      <h2> Total Supply: {coinData.totalSupply} </h2>
      <h2>Image: </h2>
      <Image src={coinData.icon} alt="img" height={100} width={100} />
    </div>
  );
};

//SSR (Server-Side Rendering Method to fetch data)
//Useful for big app whose data changes often and has more pages like social media,ecommerce website

// export const getServerSideProps = async ({ params }) => {
//   const data = await axios.get(
//     `https://api.coinstats.app/public/v1/coins/${params.id}`
//   );
//   return {
//     props: { coinData: data.data },
//   };
// };

//SSG (Static Site Generation Method to fetch data)
//Useful for small app whose data doesn't change often and has less pages like blogs,info page

export const getStaticProps = async ({ params }) => {
  const data = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${params.id}`
  );
  return {
    props: { coinData: data.data.coin },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  const coinData = data.data;
  const paths = coinData.coins.slice(0, 25).map((coin) => {
    return {
      params: { id: coin.id },
    };
  });

  return {
    paths, //indicates that no page needs be created at build time
    fallback: true, //indicates the type of fallback
  };
};

export default CoinDetails;
