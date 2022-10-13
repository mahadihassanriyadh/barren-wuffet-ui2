import { API } from "../../api/api";
import { funds } from "./funds";
import { pools } from "./pools";
import { priceFeed } from "./priceChart";

export class DummyAPI implements API {
  getPools = () => Promise.resolve(pools);
  getFunds = () => Promise.resolve(funds);
  getPriceFeed = () => Promise.resolve(priceFeed);
}
