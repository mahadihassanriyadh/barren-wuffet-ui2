import { API, APIConfig } from "../../api/api";
import { Fund, Order, Position } from "../../api/models";
import { funds } from "./funds";
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
  getFunds: () => Promise<Fund[]> = async () => Promise.resolve(funds);
  //   getFunds = () => Promise.resolve(funds);
  getPriceFeed = () => Promise.resolve(priceFeed);
  getOpenOrders: () => Promise<Order[]> = async () =>
    Promise.resolve(openOrders);
  getPositions: () => Promise<Position[]> = async () =>
    Promise.resolve(openPositions);
}
