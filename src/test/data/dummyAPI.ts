import { API, API_Config } from "../../api/api";
import { Fund } from "../../api/models";
import { funds } from "./funds";
import { pools } from "./pools";
import { priceFeed } from "./priceChart";

export class DummyAPI implements API {
  graph_url: string;

  constructor(config?: API_Config) {
    // we ignore the config as the dummy api doesnt care.
    this.graph_url = "";
  }

  getPools = () => Promise.resolve(pools);
  getFunds: () => Promise<Fund[]> = async () => Promise.resolve(funds);
  //   getFunds = () => Promise.resolve(funds);
  getPriceFeed = () => Promise.resolve(priceFeed);
}
