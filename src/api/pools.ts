export interface Pool {
  key: string;
  indexToken: {
    symbol: string;
  };
  hasPendingChanges: boolean;
  vAPY: number;
  tAPY: number;
  volume: number;
  tvl: number;
}

export function getPools() {
  return [
    {
      key: "1",
      indexToken: {
        symbol: "ETH",
      },
      hasPendingChanges: false,
      vAPY: 10,
      tAPY: 10,
      volume: 1000,
      tvl: 100000,
    },
    {
      key: "2",
      indexToken: {
        symbol: "BTC",
      },
      hasPendingChanges: false,
      vAPY: 10,
      tAPY: 10,
      volume: 1000,
      tvl: 100000,
    },
    {
      key: "3",
      indexToken: {
        symbol: "USD",
      },
      hasPendingChanges: false,
      vAPY: 10,
      tAPY: 10,
      volume: 1000,
      tvl: 100000,
    },
  ];
}
