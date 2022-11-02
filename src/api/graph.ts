import { Fund, FundStatus, Order, Pool, Position, PriceFeed } from "./models";
import { request, gql } from "graphql-request";
import { Fund as Graph_Fund } from "../../.graphclient";
import { BigNumber as BN } from "ethers";

const toDate = (ts: BigInt) => new Date(BN.from(ts).toNumber() * 1000);

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

  async getFunds(): Promise<Fund[] | undefined> {
    const data = await request<{ funds: Graph_Fund[] }>(
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
      data.funds.map((fund: Graph_Fund) => ({
        id: fund.id,
        name: fund.name,
        amount_raised: fund.total_collateral_raised,
        subscriptions: fund.subscriptions?.map((s) => s.address),
        rules: fund.rules?.map((r) => r.id),
        positions: fund.positions?.map((p) => p.id),
        status: fund.closed_timestamp ? FundStatus.CLOSED : FundStatus.RAISING,
        admin_fee: fund.manager_fee_percentage,
        manager: fund.manager.id,
        creation_timestamp: toDate(fund.creation_timestamp),
        deploy_timestamp: new Date(
          parseInt(fund.subscription_constraints.deadline || "")
        ),
        close_timestamp: new Date(
          parseInt(fund.subscription_constraints.lockin || "")
        ),
      }))
    );
  }

  getPriceFeed(): Promise<PriceFeed[]> {
    throw new Error("Not implemented");
  }

  getOpenOrders(): Promise<Order[]> {
    throw new Error("Not implemented");
  }

  getPositions(): Promise<Position[]> {
    throw new Error("Not implemented");
  }
}

export default API;
