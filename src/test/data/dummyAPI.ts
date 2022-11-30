import { API, APIConfig } from "../../api/graph";
import {
  Fund,
  FundDetails,
  Order,
  PoolDetails,
  Position,
} from "../../api/models";
import { funds } from "./funds";
import { fundDetails } from "./fundDetails";
import { pools } from "./pools";
import { priceFeed } from "./priceChart";
import { openOrders } from "./openOrders";
import { openPositions } from "./openPositions";

export class DummyAPI implements API {
  graphUrl: string;

  constructor(config: APIConfig) {
    this.graphUrl = "";
  }

  getPools = () => Promise.resolve(pools);
  getPoolDetails: (poolId?: string) => Promise<PoolDetails> = async (
    poolId
  ) => {
    if (!poolId) {
      return Promise.reject("No poolId provided");
    }
    const pool = pools.find((f) => f.id === poolId);
    return pool ? Promise.resolve(pool) : Promise.reject("Pool not found");
  };

  getFunds: () => Promise<Fund[]> = async () => Promise.resolve(funds);
  getFundDetails: (fundId?: string) => Promise<FundDetails> = async (
    fundId
  ) => {
    if (!fundId) {
      return Promise.reject("No fundId provided");
    }
    const fund = fundDetails.find((f) => f.id === fundId);
    return fund ? Promise.resolve(fund) : Promise.reject("Fund not found");
  };
  getPriceFeed = () => Promise.resolve(priceFeed);
  getOpenOrders: () => Promise<Order[]> = async () =>
    Promise.resolve(openOrders);
  getPositions: () => Promise<Position[]> = async () =>
    Promise.resolve(openPositions);
}
