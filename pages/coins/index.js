/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const CoinList = ({ coinData }) => {
  return (
    <div className={styles.container}>
      <h1>Coins Page</h1>
      <hr />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {coinData.coins.slice(0, 25).map((coin, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    href={`/coins/${coin.id}`}
                    style={{ textDecoration: "underline", color: "blue" }}
                  >
                    {coin.name}
                  </Link>
                </td>
                <td>
                  <img src={coin.icon} alt="img" width={50} height={50} />
                </td>
                <td>${coin.price}</td>
                {/* <td>{coin}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: { coinData: data.data },
    revalidate: 10,
  };
};

export default CoinList;
