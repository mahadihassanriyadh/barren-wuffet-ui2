import { Fund, FundStatus, Pool, PriceFeed } from "./models";
import { request, gql } from "graphql-request";

export interface APIConfig {
  graphUrl: string;
}

export class API {
  graphUrl: string;
  constructor(config: APIConfig) {
    this.graphUrl = config.graphUrl;
  }

  getPools(): Promise<Pool[]> {
    throw new Error("Not implemented");
  }

  async getFunds(params: string): Promise<Fund[] | undefined> {
    try {
      const data = await request<{ funds: Fund[] }>(
        this.graphUrl,
        gql`
          {
            funds {
              id
              name
              creation_timestamp
              closed_timestamp
              manager_fee_percentage
              manager {
                id
              }
              subscription_constraints {
                id
                lockin
                deadline
              }
              rules
              positions
            }
          }
        `
      );
      return Promise.resolve(
        data.funds.map((fund) => ({
          ...fund,
          // @ts-ignore
          status: fund.closed_timestamp
            ? FundStatus.CLOSED
            : FundStatus.RAISING,
          // @ts-ignore
          admin_fee: fund.manager_fee_percentage,
          // @ts-ignore
          manager: fund.manager.id,
          // @ts-ignore
          creation_timestamp:
            fund.creation_timestamp &&
            // @ts-ignore
            new Date(parseInt(fund.creation_timestamp) * 1000),
          // @ts-ignore
          deploy_timestamp:
            // @ts-ignore
            fund.subscription_constraints.deadline &&
            // @ts-ignore
            new Date(parseInt(fund.subscription_constraints.deadline)),
          // @ts-ignore
          close_timestamp:
            // @ts-ignore
            fund.subscription_constraints.lockin &&
            // @ts-ignore
            new Date(parseInt(fund.subscription_constraints.lockin)),
        }))
      );
    } catch (err) {
      throw new Error("Error fetching funds");
    }
  }

  getPriceFeed(): Promise<PriceFeed[]> {
    throw new Error("Not implemented");
  }
}

export default API;
