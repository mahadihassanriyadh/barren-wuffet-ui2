import React from "react";

export default function PriceChart(props: {
  title: string;
  tokenPair: string;
  priceFeed: () => { price: number; timestamp: number }[];
}) {
  const { title, tokenPair, priceFeed } = props;
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
