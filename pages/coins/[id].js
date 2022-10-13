import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

const CoinDetails = ({ coinData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{coinData.coin.name}</title>
      </Head>

      <h1>Details of &quot;{coinData.coin.name}&quot; are:</h1>
      <Link href="/coins">
        <button>Go Back &#11013;</button>
      </Link>
      <hr />
      <h2>User Id: {coinData.coin.id}</h2>
      <h2>Name: {coinData.coin.name}</h2>
      <h2> Price: ${coinData.coin.price} </h2>
      <h2> Rank: {coinData.coin.rank} </h2>
      <h2> Symbol: {coinData.coin.symbol} </h2>
      <h2> Price Change(1 week): {coinData.coin.priceChange1w} </h2>
      <h2> Total Supply: {coinData.coin.totalSupply} </h2>
      <h2>Image: </h2>
      <Image src={coinData.coin.icon} alt="img" height={100} width={100} />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const data = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${id}`
  );
  return {
    props: { coinData: data.data },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export default CoinDetails;
