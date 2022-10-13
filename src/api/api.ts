import { Fund, Pool, PriceFeed } from "./models";
import { request, gql } from "graphql-request";
import { getGraphUrl } from "../config/env";

export interface API_Config {
  graph_url: string;
  rpc_url: string;
}

export class API {
  getPools(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  async getFunds(): Promise<Fund[]> {
    const data = await request<{ funds: Fund[] }>(
      getGraphUrl(),
      gql`
        {
          funds {
            id
            creation_timestamp
            closed_timestamp
            manager
            actions
            rules
            positions
          }
        }
      `
    );
    console.log(data);
    return Promise.resolve(
      data.funds.map((fund) => ({
        ...fund,
        // @ts-ignore
        creation_timestamp:
          fund.creation_timestamp &&
          // @ts-ignore
          new Date(parseInt(fund.creation_timestamp) * 1000),
        // @ts-ignore
        deploy_timestamp:
          fund.deploy_timestamp &&
          // @ts-ignore
          new Date(parseInt(fund.deploy_timestamp) * 1000),
        // @ts-ignore
        close_timestamp:
          fund.close_timestamp &&
          // @ts-ignore
          new Date(parseInt(fund.close_timestamp) * 1000),
      }))
    );
  }

  getPriceFeed(): Promise<PriceFeed[]> {
    throw new Error("Not implemented");
  }
}

export default API;
