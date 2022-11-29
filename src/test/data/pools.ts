import { parseEther } from "ethers/lib/utils";
import { Pool } from "../../api/models";

export const pools: Pool[] = [
  {
    key: "1",
    indexToken: {
      symbol: "ETH",
    },
    vAPY: parseEther("10"),
    tAPY: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
  {
    key: "2",
    indexToken: {
      symbol: "BTC",
    },
    vAPY: parseEther("10"),
    tAPY: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
  {
    key: "3",
    indexToken: {
      symbol: "USD",
    },
    vAPY: parseEther("10"),
    tAPY: parseEther("10"),
    volume: parseEther("1000"),
    tvl: parseEther("100000"),
  },
];
