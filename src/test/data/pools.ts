import { parseEther } from "ethers/lib/utils";
import { Pool } from "../../api/models";

export const pools: Pool[] = [
  {
    id: "0x1",
    indexToken: {
      symbol: "ETH",
    },
    tokens: [
      {
        name: "Wrapped Ethereum (sushi)",
        decimals: 18,
        symbol: "WETH",
        address: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
        chainId: 5,
      },
      {
        name: "DAI (sushi)",
        decimals: 18,
        symbol: "DAI",
        address: "0xdc31ee1784292379fbb2964b3b9c4124d8f89c60",
        chainId: 5,
      },
    ],
    reserves: [parseEther("100000"), parseEther("100000")],
    apr: parseEther("10"),
    fee: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
  {
    id: "0x2",
    indexToken: {
      symbol: "BTC",
    },
    tokens: [
      {
        name: "Wrapped Bitcoin (sushi)",
        decimals: 18,
        symbol: "WBTC",
        address: "0xc4fbf271143f4fbf7b91a5ded31805e42b2208d6",
        chainId: 5,
      },
      {
        name: "DAI (sushi)",
        decimals: 18,
        symbol: "DAI",
        address: "0xdc31ee1784292379fbb2964b3b9c4124d8f89c60",
        chainId: 5,
      },
    ],
    reserves: [parseEther("100000"), parseEther("100000")],
    apr: parseEther("10"),
    fee: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
  {
    id: "0x3",
    indexToken: {
      symbol: "USD",
    },
    tokens: [
      {
        name: "Wrapped Bitcoin (sushi)",
        decimals: 18,
        symbol: "WBTC",
        address: "0xc4fbf271143f4fbf7b91a5ded31805e42b2208d6",
        chainId: 5,
      },
      {
        name: "Wrapped Ethereum (sushi)",
        decimals: 18,
        symbol: "WETH",
        address: "0xdc31ee1784292379fbb2964b3b9c4124d8f89c60",
        chainId: 5,
      },
    ],
    reserves: [parseEther("100000"), parseEther("100000")],
    apr: parseEther("10"),
    fee: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
];
