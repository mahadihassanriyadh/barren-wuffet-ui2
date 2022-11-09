import { Address } from "../config/tokens";

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
  id: Address;
  name: string;
  manager: string;
  creation_timestamp: Date;
  close_timestamp?: Date | null;
  deploy_timestamp: Date;
  rules: string[];
  total_collateral_raised: number;
  manager_fee_percentage: number;
  status: FundStatus;
  subscriptions: string[];
  positions: string[];
  change_percent?: number;
  investor_count?: number;
}

export interface FundDetails extends Fund {
  logo?: string;
  portfolioValue: number;
  newlyAddedMoney: number;
  upPercentage: number;
  wallet: number;
  assetBalances: object;
  protocolBalances: object;
}

export enum TradeOptions {
  LIMIT = "limit",
  OCO = "oco",
  TRAILING_STOP = "trailing_stop",
  LIMIT_TRIGGER = "limit_trigger",
}

export interface Order {
  platform: string;
  position: string;
  trigger_type: TradeOptions;
  collateral: number;
  limit_price?: number;
  fill_price?: number;
  creation_timestamp: Date;
  expiry_timestamp: Date;
  is_executed: boolean;
  twap_orders?: TwapOrder[];
}

export enum PositionType {
  LP = "LP",
  SPOT = "SPOT",
}
export interface Position {
  platform: string;
  asset: string;
  value: number;
  size: number;
  creation_timestamp: Date;
  collateral?: number;
  yield?: number;
  liquidation_price?: number;
  asset_prices?: {
    asset: string;
    price: number;
  }[];
  position_type: PositionType;
}

export type TwapOrder = Omit<Order, "twap_orders">;

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
