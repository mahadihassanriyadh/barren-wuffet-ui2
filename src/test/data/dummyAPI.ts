import { API, APIConfig } from "../../api/graph";
import { Fund, FundDetails, Order, Position } from "../../api/models";
import { funds } from "./funds";
import { fundDetails } from "./fundDetails";
import { pools } from "./pools";
import { priceFeeds } from "./priceChart";
import { openOrders } from "./openOrders";
import { openPositions } from "./openPositions";
import { Address } from "../../config/tokens";

export class DummyAPI implements API {
  graphUrl: string;

  constructor(config: APIConfig) {
    this.graphUrl = "";
  }

  getPools = () => Promise.resolve(pools);
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
  getPriceFeed = (
    start_time: number,
    end_time: number,
    id: Address,
    vs_currency: Address
  ) => Promise.resolve(priceFeeds);
  getOpenOrders: () => Promise<Order[]> = async () =>
    Promise.resolve(openOrders);
  getPositions: () => Promise<Position[]> = async () =>
    Promise.resolve(openPositions);
}
