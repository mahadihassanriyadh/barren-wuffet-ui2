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

export interface Fund {
  id: string;
  manager: string;
  creation_timestamp: Date;
  closed_timestamp: Date;
  subscriptions: string[];
  actions: string[];
  rules: string[];
  positions: string[];
}

export interface PriceFeed {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}
