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
          {coinData.map((coin, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td style={{ textDecoration: "underline", color: "blue" }}>
                  <Link href={`/coins/${coin.id}`}>{coin.name}</Link>
                </td>
                <td>
                  <Image src={coin.icon} alt="img" width={50} height={50} />
                </td>
                <td>${coin.price}</td>
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
    props: { coinData: data.data.coins.slice(0, 25) },
  };
};

export default CoinList;
