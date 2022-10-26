import { API, APIConfig } from "../../api/api";
import { Fund } from "../../api/models";
import { funds } from "./funds";
import { pools } from "./pools";
import { priceFeed } from "./priceChart";

export class DummyAPI implements API {
  graphUrl: string;

  constructor(config: APIConfig) {
    this.graphUrl = "";
  }

  getPools = () => Promise.resolve(pools);
  getFunds: () => Promise<Fund[]> = async () => Promise.resolve(funds);
  //   getFunds = () => Promise.resolve(funds);
  getPriceFeed = () => Promise.resolve(priceFeed);
}
