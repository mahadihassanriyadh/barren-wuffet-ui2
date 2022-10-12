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
