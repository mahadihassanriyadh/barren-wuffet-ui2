import { chain as chainConfig } from "wagmi";
import axios from "axios";

import {
  Fund,
  FundStatus,
  FundDetails,
  Order,
  Pool,
  Position,
  PricePoint,
  getFundStatus,
  PoolDetails,
  PriceFeed,
  PriceFeeds,
} from "./models";
import { request, gql } from "graphql-request";
import { Fund as Graph_Fund } from "../../.graphclient";
import { BigNumber as BN, ethers } from "ethers";
import { getSushiPool, getSushiPools } from "./sushi";
import { Address, ETH_ADDRESS, USD_ADDRESS } from "../config/tokens";
import { UTCTimestamp } from "lightweight-charts";
import { supported_vs } from "./coingecko_supported_vs_currency_cache_20221130";
import coins from "./coingecko_coin_list_cache_20221130.json";

const toDate = (ts: BigInt): Date | null =>
  ts ? new Date(BN.from(ts).toNumber() * 1000) : null;

function getArbiTokenAddrToIdMap() {
  const arbiCoins = coins.filter(
    (coin) => coin["platforms"]["arbitrum-one"] !== undefined
  );

  const addrToIdMap = new Map<Address, string>();

  arbiCoins.forEach((coin) => {
    addrToIdMap.set(coin["platforms"]["arbitrum-one"], coin["id"]);
  });

  return addrToIdMap;
}

function getIdFromTokenAddr(addr: Address) {
  // TODO: make this case insensitive
  if (addr === ETH_ADDRESS) return "ethereum";
  else if (addr === USD_ADDRESS) return "usd";
  else {
    const addrToIdMap = getArbiTokenAddrToIdMap();
    console.log(addrToIdMap);
    console.log(addr);
    return addrToIdMap.get(addr);
  }
}

function isSupportedVs(vs: string) {
  return supported_vs.includes(vs);
}

function parseFund(fund: Graph_Fund): Fund {
  const _fund: Fund = {
    id: fund.id as Address,
    name: fund.name,
    // formatUnits(number, decimals) is the right way to do this.
    // but we need to store a map of the decimals for the asset in question
    // try and get this from the gmx stuff.
    // It will be actually be best to everything as BN all the way till the actual display to user.
    // then we just have to figure it out at the TextBox.
    total_collateral_raised: parseFloat(
      ethers.utils.formatEther(fund.total_collateral_raised)
    ),
    investor_count: fund.subscriptions.length,
    subscriptions: fund.subscriptions?.map((s) => s.address),
    rules: fund.rules, //?.map((r) => r.id),
    positions: fund.positions?.map((p) => p.id),
    status: FundStatus.RAISING,
    manager_fee_percentage: fund.manager_fee_percentage,
    manager: fund.manager.id,
    creation_timestamp: toDate(fund.creation_timestamp) || new Date(),
    deploy_timestamp:
      toDate(fund.subscription_constraints.deadline) || new Date(),
    close_timestamp: toDate(fund.subscription_constraints.lockin) || new Date(),
  };

  _fund.status = getFundStatus(
    !!fund.closed_timestamp,
    _fund.deploy_timestamp,
    //@ts-ignore
    _fund.close_timestamp,
    BN.from(fund.total_collateral_raised || "0"),
    BN.from(fund.subscription_constraints.minCollateralTotal || "0"),
    !!fund.positions?.length
  );

  return _fund;
}

export interface APIConfig {
  graphUrl: string;
}

export class API {
  graphUrl: string;
  constructor(config: APIConfig) {
    this.graphUrl = config.graphUrl;
  }

  async getPools(): Promise<Pool[] | undefined> {
    return getSushiPools(chainConfig.arbitrum);
  }

  async getPoolDetails(poolId?: string): Promise<PoolDetails | undefined> {
    return poolId ? getSushiPool(poolId, chainConfig.arbitrum) : undefined;
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
            total_collateral_raised
            subscriptions {
              id
            }
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
      data.funds.map((fund: Graph_Fund): Fund => parseFund(fund))
    );
  }

  // May return 2 priceFeeds if vs_token_addr is not supported as a vs_currency
  async getPriceFeed(
    start_time: number,
    end_time: number,
    token_addr: Address,
    vs_token_addr: Address = USD_ADDRESS
  ): Promise<PriceFeeds> {
    const id = getIdFromTokenAddr(token_addr);
    const vs = getIdFromTokenAddr(vs_token_addr);

    console.log(id, vs);
    if (id === undefined || vs === undefined) {
      return Promise.resolve([]);
    }

    if (isSupportedVs(vs)) {
      const resp = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=${vs}&from=${start_time}&to=${end_time}`
      );
      const prices = resp.data.prices;
      return Promise.resolve([
        {
          title: `${id}/${vs}`,
          feed: prices.map((point: any) => {
            return { time: (point[0] / 1000) as UTCTimestamp, value: point[1] };
          }),
        },
      ]);
    } else {
      const respA = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=${start_time}&to=${end_time}`
      );
      const respB = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${vs}/market_chart/range?vs_currency=usd&from=${start_time}&to=${end_time}`
      );
      const pricesA = respA.data.prices;
      const pricesB = respB.data.prices;
      return Promise.resolve([
        {
          title: `${id}/usd`,
          feed: pricesA.map((point: any) => {
            return { time: (point[0] / 1000) as UTCTimestamp, value: point[1] };
          }),
        },
        {
          title: `${vs}/usd`,
          feed: pricesB.map((point: any) => {
            return { time: (point[0] / 1000) as UTCTimestamp, value: point[1] };
          }),
        },
      ]);
    }
  }

  async getOpenOrders(): Promise<Order[]> {
    throw new Error("Not implemented");
  }

  async getPositions(): Promise<Position[]> {
    throw new Error("Not implemented");
  }

  async getFundDetails(fundId?: string): Promise<FundDetails | undefined> {
    const { fund } = await request<{ fund: Graph_Fund }>(
      this.graphUrl,
      gql`
        {
          fund(id: "${fundId}") {
            id
            name
            creation_timestamp
            closed_timestamp
            manager_fee_percentage
            total_collateral_raised
            subscriptions {
              id
            }
            manager {
              id
            }
            subscription_constraints {
              id
              lockin
              deadline
            }
            rules {
              id
              creation_timestamp
              activation_timestamps            
              deactivation_timestamps
              execution_timestamp
              redemption_timestamp
              actions {
                id
                callee
                data
                input_tokens {
                  id
                  address
                  type
                  nft_id
                }
                output_tokens {
                  id
                  address
                  type
                  nft_id
                }
              }
              triggers {
                id
                callee
                type
                create_time_params
              }
              outputs
              collaterals
            }
            positions {
              id
              next_actions
              fund
              creation_timestamp
              closed_timestamp
            }
          }
        }
      `
    );
    return Promise.resolve({
      ...parseFund(fund),
      // TODO: calculate the rest of the fields
      portfolioValue: 0,
      newlyAddedMoney: 0,
      upPercentage: 0,
      wallet: 0,
      unredeemedBalances: fund.rules
        .filter(
          (r) => r.execution_timestamp && !r.redemption_timestamp && r.outputs
          // r.actions?.[-1]?.output_tokens // this is the last action
        )
        .map((r) => {
          const lastAction = r.actions[-1];
          return r.outputs?.map((val, i) => ({
            address: lastAction?.output_tokens?.[i]?.address || ETH_ADDRESS,
            amount: BN.from(val),
          }));
        })
        .flat(),
      assetBalances: [
        {
          address: "0x124",
          name: "Dummy Asset A",
          shortName: "wBTC",
          dollarValue: 0,
          down: 0,
          percentage: 0,
        },
        {
          address: "0x224",
          name: "Dummy Asset E",
          shortName: "ETH",
          dollarValue: 0,
          down: 0,
          percentage: 0,
        },
      ],
      protocolBalances: [
        {
          address: "0x555",
          name: "Dummy Protocol A",
          dollarValue: 0,
          percentage: 0,
        },
        {
          address: "0x666",
          name: "Dummy Protocol B",
          dollarValue: 0,
          percentage: 0,
        },
      ],
    });
  }
}

export default API;
