import React from "react";

export default function PriceChart(props: {
  title: string;
  fromToken: string;
  toToken: string;
  priceFeed: () => { price: number; timestamp: number }[];
}) {
  const { title, priceFeed } = props;
  const tokenPair = "USD/ETH";
  const prices = priceFeed();
  return (
    <div>
      <h2>{title}</h2>
      <p>Token Pair: {tokenPair}</p>
      {prices.map((p) => (
        <div>
          <p>Price: {p.price}</p>
          <p>Time: {p.timestamp}</p>
        </div>
      ))}
    </div>
  );
}
