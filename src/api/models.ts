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
  name: string;
  manager: string;
  creation_timestamp: Date;
  close_timestamp?: Date | null;
  deploy_timestamp: Date;
  amount_raised: number;
  admin_fee: number;
  status: FundStatus;
  subscriptions: string[];
  actions: string[];
  rules: string[];
  positions: string[];
  change_percent?: number;
  investor_count?: number;
}

export enum FundStatus {
  RAISING = 0, // deposits possible, withdraws possible (inputToken), manager can't move funds
  DEPLOYED = 1, // deposits not possible, withdraws not possible, manager can move funds
  CLOSABLE = 2, // deposits not possible, withdraws not possible, manager can't move funds
  CLOSED = 3, // deposits not possible, withdraws possible (outputTokens), manager can take out managementFee but not move funds
}
export interface PriceFeed {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}
