import { Pool } from "./models";

export class API {
  getPools(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }
}

export default API;
