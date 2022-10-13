import { Fund, Pool, PriceFeed } from "./models";

export class API {
  getPools(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  getFunds(): Promise<Fund[]> {
    throw new Error("Not implemented");
  }

  getPriceFeed(): Promise<PriceFeed[]> {
    throw new Error("Not implemented");
  }
}

export default API;
