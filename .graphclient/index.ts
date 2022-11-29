// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BarrenWuffetTypes } from './sources/barren-wuffet/types';
import type { SushiswapTypes } from './sources/sushiswap/types';
import type { UniswapTypes } from './sources/uniswap/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Query = {
  fund?: Maybe<Fund>;
  funds: Array<Fund>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  subConstraints: Array<SubConstraints>;
  sub?: Maybe<Sub>;
  subs: Array<Sub>;
  rule?: Maybe<Rule>;
  rules: Array<Rule>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  trigger?: Maybe<Trigger>;
  triggers: Array<Trigger>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  manager?: Maybe<Manager>;
  managers: Array<Manager>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  version?: Maybe<_Version>;
  versions: Array<_Version>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  tokenPair?: Maybe<_TokenPair>;
  tokenPairs: Array<_TokenPair>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  pairHourSnapshot?: Maybe<PairHourSnapshot>;
  pairHourSnapshots: Array<PairHourSnapshot>;
  pairDaySnapshot?: Maybe<PairDaySnapshot>;
  pairDaySnapshots: Array<PairDaySnapshot>;
  tokenHourSnapshot?: Maybe<TokenHourSnapshot>;
  tokenHourSnapshots: Array<TokenHourSnapshot>;
  tokenDaySnapshot?: Maybe<TokenDaySnapshot>;
  tokenDaySnapshots: Array<TokenDaySnapshot>;
  factoryHourSnapshot?: Maybe<FactoryHourSnapshot>;
  factoryHourSnapshots: Array<FactoryHourSnapshot>;
  factoryDaySnapshot?: Maybe<FactoryDaySnapshot>;
  factoryDaySnapshots: Array<FactoryDaySnapshot>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  tickHourData?: Maybe<TickHourData>;
  tickHourDatas: Array<TickHourData>;
  tickDayData?: Maybe<TickDayData>;
  tickDayDatas: Array<TickDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
};


export type QueryfundArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fund_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fund_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubConstraintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubConstraints_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubConstraints_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysubsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sub_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sub_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryruleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrulesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rule_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rule_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytriggerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytriggersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trigger_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trigger_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymanagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymanagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Manager_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Manager_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryversionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_Version_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_Version_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_TokenPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_TokenPair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypairDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoryHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoryHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FactoryHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoryDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfactoryDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FactoryDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryflashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Flash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Flash_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription = {
  fund?: Maybe<Fund>;
  funds: Array<Fund>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  subConstraints: Array<SubConstraints>;
  sub?: Maybe<Sub>;
  subs: Array<Sub>;
  rule?: Maybe<Rule>;
  rules: Array<Rule>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  trigger?: Maybe<Trigger>;
  triggers: Array<Trigger>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  manager?: Maybe<Manager>;
  managers: Array<Manager>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  version?: Maybe<_Version>;
  versions: Array<_Version>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  tokenPair?: Maybe<_TokenPair>;
  tokenPairs: Array<_TokenPair>;
  pair?: Maybe<Pair>;
  pairs: Array<Pair>;
  user?: Maybe<User>;
  users: Array<User>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  pairHourSnapshot?: Maybe<PairHourSnapshot>;
  pairHourSnapshots: Array<PairHourSnapshot>;
  pairDaySnapshot?: Maybe<PairDaySnapshot>;
  pairDaySnapshots: Array<PairDaySnapshot>;
  tokenHourSnapshot?: Maybe<TokenHourSnapshot>;
  tokenHourSnapshots: Array<TokenHourSnapshot>;
  tokenDaySnapshot?: Maybe<TokenDaySnapshot>;
  tokenDaySnapshots: Array<TokenDaySnapshot>;
  factoryHourSnapshot?: Maybe<FactoryHourSnapshot>;
  factoryHourSnapshots: Array<FactoryHourSnapshot>;
  factoryDaySnapshot?: Maybe<FactoryDaySnapshot>;
  factoryDaySnapshots: Array<FactoryDaySnapshot>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  uniswapDayData?: Maybe<UniswapDayData>;
  uniswapDayDatas: Array<UniswapDayData>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  tickHourData?: Maybe<TickHourData>;
  tickHourDatas: Array<TickHourData>;
  tickDayData?: Maybe<TickDayData>;
  tickDayDatas: Array<TickDayData>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
};


export type SubscriptionfundArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fund_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fund_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubConstraintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SubConstraints_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SubConstraints_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsubsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sub_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sub_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionruleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrulesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rule_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rule_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontriggerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontriggersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trigger_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trigger_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmanagerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmanagersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Manager_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Manager_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionversionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionversionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_Version_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_Version_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Factory_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Factory_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_TokenPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_TokenPair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpairDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoryHourSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoryHourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FactoryHourSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoryDaySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfactoryDaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FactoryDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FactoryDaySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionflashesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Flash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Flash_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UniswapDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontickDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TickDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TickDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourDataArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenHourData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Action = {
  id: Scalars['ID'];
  callee: Scalars['Bytes'];
  data: Scalars['Bytes'];
  input_tokens: Array<Token>;
  output_tokens: Array<Token>;
  rule: Rule;
};


export type Actioninput_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type Actionoutput_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Action_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  callee?: InputMaybe<Scalars['Bytes']>;
  callee_not?: InputMaybe<Scalars['Bytes']>;
  callee_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callee_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callee_contains?: InputMaybe<Scalars['Bytes']>;
  callee_not_contains?: InputMaybe<Scalars['Bytes']>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  input_tokens_?: InputMaybe<Token_filter>;
  output_tokens_?: InputMaybe<Token_filter>;
  rule?: InputMaybe<Scalars['String']>;
  rule_not?: InputMaybe<Scalars['String']>;
  rule_gt?: InputMaybe<Scalars['String']>;
  rule_lt?: InputMaybe<Scalars['String']>;
  rule_gte?: InputMaybe<Scalars['String']>;
  rule_lte?: InputMaybe<Scalars['String']>;
  rule_in?: InputMaybe<Array<Scalars['String']>>;
  rule_not_in?: InputMaybe<Array<Scalars['String']>>;
  rule_contains?: InputMaybe<Scalars['String']>;
  rule_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_not_contains?: InputMaybe<Scalars['String']>;
  rule_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_starts_with?: InputMaybe<Scalars['String']>;
  rule_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rule_not_starts_with?: InputMaybe<Scalars['String']>;
  rule_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rule_ends_with?: InputMaybe<Scalars['String']>;
  rule_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_not_ends_with?: InputMaybe<Scalars['String']>;
  rule_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_?: InputMaybe<Rule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Action_orderBy =
  | 'id'
  | 'callee'
  | 'data'
  | 'input_tokens'
  | 'output_tokens'
  | 'rule';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Fund = {
  id: Scalars['ID'];
  name: Scalars['String'];
  manager: Manager;
  creation_timestamp: Scalars['BigInt'];
  closed_timestamp?: Maybe<Scalars['BigInt']>;
  subscriptions: Array<Sub>;
  total_collateral_raised: Scalars['BigInt'];
  manager_fee_percentage: Scalars['BigInt'];
  subscription_constraints: SubConstraints;
  rules: Array<Rule>;
  positions: Array<Position>;
};


export type FundsubscriptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Sub_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Sub_filter>;
};


export type FundrulesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Rule_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Rule_filter>;
};


export type FundpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
};

export type Fund_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  manager_not?: InputMaybe<Scalars['String']>;
  manager_gt?: InputMaybe<Scalars['String']>;
  manager_lt?: InputMaybe<Scalars['String']>;
  manager_gte?: InputMaybe<Scalars['String']>;
  manager_lte?: InputMaybe<Scalars['String']>;
  manager_in?: InputMaybe<Array<Scalars['String']>>;
  manager_not_in?: InputMaybe<Array<Scalars['String']>>;
  manager_contains?: InputMaybe<Scalars['String']>;
  manager_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_not_contains?: InputMaybe<Scalars['String']>;
  manager_not_contains_nocase?: InputMaybe<Scalars['String']>;
  manager_starts_with?: InputMaybe<Scalars['String']>;
  manager_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_starts_with?: InputMaybe<Scalars['String']>;
  manager_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  manager_ends_with?: InputMaybe<Scalars['String']>;
  manager_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_not_ends_with?: InputMaybe<Scalars['String']>;
  manager_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  manager_?: InputMaybe<Manager_filter>;
  creation_timestamp?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creation_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closed_timestamp?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closed_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscriptions_?: InputMaybe<Sub_filter>;
  total_collateral_raised?: InputMaybe<Scalars['BigInt']>;
  total_collateral_raised_not?: InputMaybe<Scalars['BigInt']>;
  total_collateral_raised_gt?: InputMaybe<Scalars['BigInt']>;
  total_collateral_raised_lt?: InputMaybe<Scalars['BigInt']>;
  total_collateral_raised_gte?: InputMaybe<Scalars['BigInt']>;
  total_collateral_raised_lte?: InputMaybe<Scalars['BigInt']>;
  total_collateral_raised_in?: InputMaybe<Array<Scalars['BigInt']>>;
  total_collateral_raised_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  manager_fee_percentage?: InputMaybe<Scalars['BigInt']>;
  manager_fee_percentage_not?: InputMaybe<Scalars['BigInt']>;
  manager_fee_percentage_gt?: InputMaybe<Scalars['BigInt']>;
  manager_fee_percentage_lt?: InputMaybe<Scalars['BigInt']>;
  manager_fee_percentage_gte?: InputMaybe<Scalars['BigInt']>;
  manager_fee_percentage_lte?: InputMaybe<Scalars['BigInt']>;
  manager_fee_percentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  manager_fee_percentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  subscription_constraints_?: InputMaybe<SubConstraints_filter>;
  rules_?: InputMaybe<Rule_filter>;
  positions_?: InputMaybe<Position_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Fund_orderBy =
  | 'id'
  | 'name'
  | 'manager'
  | 'creation_timestamp'
  | 'closed_timestamp'
  | 'subscriptions'
  | 'total_collateral_raised'
  | 'manager_fee_percentage'
  | 'subscription_constraints'
  | 'rules'
  | 'positions';

export type Manager = {
  id: Scalars['ID'];
  socialHandle?: Maybe<Scalars['String']>;
  chatroomInvite?: Maybe<Scalars['String']>;
  customLink?: Maybe<Scalars['String']>;
  aboutText?: Maybe<Scalars['String']>;
  strategyText?: Maybe<Scalars['String']>;
  funds: Array<Fund>;
};


export type ManagerfundsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Fund_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Fund_filter>;
};

export type Manager_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  socialHandle?: InputMaybe<Scalars['String']>;
  socialHandle_not?: InputMaybe<Scalars['String']>;
  socialHandle_gt?: InputMaybe<Scalars['String']>;
  socialHandle_lt?: InputMaybe<Scalars['String']>;
  socialHandle_gte?: InputMaybe<Scalars['String']>;
  socialHandle_lte?: InputMaybe<Scalars['String']>;
  socialHandle_in?: InputMaybe<Array<Scalars['String']>>;
  socialHandle_not_in?: InputMaybe<Array<Scalars['String']>>;
  socialHandle_contains?: InputMaybe<Scalars['String']>;
  socialHandle_contains_nocase?: InputMaybe<Scalars['String']>;
  socialHandle_not_contains?: InputMaybe<Scalars['String']>;
  socialHandle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  socialHandle_starts_with?: InputMaybe<Scalars['String']>;
  socialHandle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  socialHandle_not_starts_with?: InputMaybe<Scalars['String']>;
  socialHandle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  socialHandle_ends_with?: InputMaybe<Scalars['String']>;
  socialHandle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  socialHandle_not_ends_with?: InputMaybe<Scalars['String']>;
  socialHandle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chatroomInvite?: InputMaybe<Scalars['String']>;
  chatroomInvite_not?: InputMaybe<Scalars['String']>;
  chatroomInvite_gt?: InputMaybe<Scalars['String']>;
  chatroomInvite_lt?: InputMaybe<Scalars['String']>;
  chatroomInvite_gte?: InputMaybe<Scalars['String']>;
  chatroomInvite_lte?: InputMaybe<Scalars['String']>;
  chatroomInvite_in?: InputMaybe<Array<Scalars['String']>>;
  chatroomInvite_not_in?: InputMaybe<Array<Scalars['String']>>;
  chatroomInvite_contains?: InputMaybe<Scalars['String']>;
  chatroomInvite_contains_nocase?: InputMaybe<Scalars['String']>;
  chatroomInvite_not_contains?: InputMaybe<Scalars['String']>;
  chatroomInvite_not_contains_nocase?: InputMaybe<Scalars['String']>;
  chatroomInvite_starts_with?: InputMaybe<Scalars['String']>;
  chatroomInvite_starts_with_nocase?: InputMaybe<Scalars['String']>;
  chatroomInvite_not_starts_with?: InputMaybe<Scalars['String']>;
  chatroomInvite_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  chatroomInvite_ends_with?: InputMaybe<Scalars['String']>;
  chatroomInvite_ends_with_nocase?: InputMaybe<Scalars['String']>;
  chatroomInvite_not_ends_with?: InputMaybe<Scalars['String']>;
  chatroomInvite_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  customLink?: InputMaybe<Scalars['String']>;
  customLink_not?: InputMaybe<Scalars['String']>;
  customLink_gt?: InputMaybe<Scalars['String']>;
  customLink_lt?: InputMaybe<Scalars['String']>;
  customLink_gte?: InputMaybe<Scalars['String']>;
  customLink_lte?: InputMaybe<Scalars['String']>;
  customLink_in?: InputMaybe<Array<Scalars['String']>>;
  customLink_not_in?: InputMaybe<Array<Scalars['String']>>;
  customLink_contains?: InputMaybe<Scalars['String']>;
  customLink_contains_nocase?: InputMaybe<Scalars['String']>;
  customLink_not_contains?: InputMaybe<Scalars['String']>;
  customLink_not_contains_nocase?: InputMaybe<Scalars['String']>;
  customLink_starts_with?: InputMaybe<Scalars['String']>;
  customLink_starts_with_nocase?: InputMaybe<Scalars['String']>;
  customLink_not_starts_with?: InputMaybe<Scalars['String']>;
  customLink_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  customLink_ends_with?: InputMaybe<Scalars['String']>;
  customLink_ends_with_nocase?: InputMaybe<Scalars['String']>;
  customLink_not_ends_with?: InputMaybe<Scalars['String']>;
  customLink_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aboutText?: InputMaybe<Scalars['String']>;
  aboutText_not?: InputMaybe<Scalars['String']>;
  aboutText_gt?: InputMaybe<Scalars['String']>;
  aboutText_lt?: InputMaybe<Scalars['String']>;
  aboutText_gte?: InputMaybe<Scalars['String']>;
  aboutText_lte?: InputMaybe<Scalars['String']>;
  aboutText_in?: InputMaybe<Array<Scalars['String']>>;
  aboutText_not_in?: InputMaybe<Array<Scalars['String']>>;
  aboutText_contains?: InputMaybe<Scalars['String']>;
  aboutText_contains_nocase?: InputMaybe<Scalars['String']>;
  aboutText_not_contains?: InputMaybe<Scalars['String']>;
  aboutText_not_contains_nocase?: InputMaybe<Scalars['String']>;
  aboutText_starts_with?: InputMaybe<Scalars['String']>;
  aboutText_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aboutText_not_starts_with?: InputMaybe<Scalars['String']>;
  aboutText_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  aboutText_ends_with?: InputMaybe<Scalars['String']>;
  aboutText_ends_with_nocase?: InputMaybe<Scalars['String']>;
  aboutText_not_ends_with?: InputMaybe<Scalars['String']>;
  aboutText_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyText?: InputMaybe<Scalars['String']>;
  strategyText_not?: InputMaybe<Scalars['String']>;
  strategyText_gt?: InputMaybe<Scalars['String']>;
  strategyText_lt?: InputMaybe<Scalars['String']>;
  strategyText_gte?: InputMaybe<Scalars['String']>;
  strategyText_lte?: InputMaybe<Scalars['String']>;
  strategyText_in?: InputMaybe<Array<Scalars['String']>>;
  strategyText_not_in?: InputMaybe<Array<Scalars['String']>>;
  strategyText_contains?: InputMaybe<Scalars['String']>;
  strategyText_contains_nocase?: InputMaybe<Scalars['String']>;
  strategyText_not_contains?: InputMaybe<Scalars['String']>;
  strategyText_not_contains_nocase?: InputMaybe<Scalars['String']>;
  strategyText_starts_with?: InputMaybe<Scalars['String']>;
  strategyText_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategyText_not_starts_with?: InputMaybe<Scalars['String']>;
  strategyText_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  strategyText_ends_with?: InputMaybe<Scalars['String']>;
  strategyText_ends_with_nocase?: InputMaybe<Scalars['String']>;
  strategyText_not_ends_with?: InputMaybe<Scalars['String']>;
  strategyText_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  funds_?: InputMaybe<Fund_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Manager_orderBy =
  | 'id'
  | 'socialHandle'
  | 'chatroomInvite'
  | 'customLink'
  | 'aboutText'
  | 'strategyText'
  | 'funds';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Position = {
  id: Scalars['ID'];
  next_actions: Array<Scalars['Bytes']>;
  fund: Fund;
  creation_timestamp: Scalars['BigInt'];
  closed_timestamp?: Maybe<Scalars['BigInt']>;
  owner: Scalars['Bytes'];
  pool: Pool;
  token0: Token;
  token1: Token;
  tickLower: Tick;
  tickUpper: Tick;
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['BigDecimal'];
  depositedToken1: Scalars['BigDecimal'];
  withdrawnToken0: Scalars['BigDecimal'];
  withdrawnToken1: Scalars['BigDecimal'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  transaction: Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type Position_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  next_actions?: InputMaybe<Array<Scalars['Bytes']>>;
  next_actions_not?: InputMaybe<Array<Scalars['Bytes']>>;
  next_actions_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  next_actions_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  next_actions_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  next_actions_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  fund?: InputMaybe<Scalars['String']>;
  fund_not?: InputMaybe<Scalars['String']>;
  fund_gt?: InputMaybe<Scalars['String']>;
  fund_lt?: InputMaybe<Scalars['String']>;
  fund_gte?: InputMaybe<Scalars['String']>;
  fund_lte?: InputMaybe<Scalars['String']>;
  fund_in?: InputMaybe<Array<Scalars['String']>>;
  fund_not_in?: InputMaybe<Array<Scalars['String']>>;
  fund_contains?: InputMaybe<Scalars['String']>;
  fund_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_not_contains?: InputMaybe<Scalars['String']>;
  fund_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_starts_with?: InputMaybe<Scalars['String']>;
  fund_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_starts_with?: InputMaybe<Scalars['String']>;
  fund_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_ends_with?: InputMaybe<Scalars['String']>;
  fund_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_ends_with?: InputMaybe<Scalars['String']>;
  fund_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_?: InputMaybe<Fund_filter>;
  creation_timestamp?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creation_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closed_timestamp?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  closed_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  closed_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  tickLower?: InputMaybe<Scalars['String']>;
  tickLower_not?: InputMaybe<Scalars['String']>;
  tickLower_gt?: InputMaybe<Scalars['String']>;
  tickLower_lt?: InputMaybe<Scalars['String']>;
  tickLower_gte?: InputMaybe<Scalars['String']>;
  tickLower_lte?: InputMaybe<Scalars['String']>;
  tickLower_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickLower_contains?: InputMaybe<Scalars['String']>;
  tickLower_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_contains?: InputMaybe<Scalars['String']>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickLower_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with?: InputMaybe<Scalars['String']>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with?: InputMaybe<Scalars['String']>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickLower_?: InputMaybe<Tick_filter>;
  tickUpper?: InputMaybe<Scalars['String']>;
  tickUpper_not?: InputMaybe<Scalars['String']>;
  tickUpper_gt?: InputMaybe<Scalars['String']>;
  tickUpper_lt?: InputMaybe<Scalars['String']>;
  tickUpper_gte?: InputMaybe<Scalars['String']>;
  tickUpper_lte?: InputMaybe<Scalars['String']>;
  tickUpper_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']>>;
  tickUpper_contains?: InputMaybe<Scalars['String']>;
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains?: InputMaybe<Scalars['String']>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickUpper_?: InputMaybe<Tick_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Position_orderBy =
  | 'id'
  | 'next_actions'
  | 'fund'
  | 'creation_timestamp'
  | 'closed_timestamp'
  | 'owner'
  | 'pool'
  | 'token0'
  | 'token1'
  | 'tickLower'
  | 'tickUpper'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type Rule = {
  id: Scalars['ID'];
  creation_timestamp: Scalars['BigInt'];
  activation_timestamps: Array<Scalars['BigInt']>;
  deactivation_timestamps: Array<Scalars['BigInt']>;
  execution_timestamp?: Maybe<Scalars['BigInt']>;
  redemption_timestamp?: Maybe<Scalars['BigInt']>;
  actions: Array<Action>;
  triggers: Array<Trigger>;
  outputs: Array<Scalars['BigInt']>;
  collaterals?: Maybe<Array<Scalars['BigInt']>>;
  fund: Fund;
};


export type RuleactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
};


export type RuletriggersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trigger_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Trigger_filter>;
};

export type Rule_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  creation_timestamp?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  creation_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creation_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  activation_timestamps?: InputMaybe<Array<Scalars['BigInt']>>;
  activation_timestamps_not?: InputMaybe<Array<Scalars['BigInt']>>;
  activation_timestamps_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  activation_timestamps_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  activation_timestamps_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  activation_timestamps_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  deactivation_timestamps?: InputMaybe<Array<Scalars['BigInt']>>;
  deactivation_timestamps_not?: InputMaybe<Array<Scalars['BigInt']>>;
  deactivation_timestamps_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  deactivation_timestamps_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  deactivation_timestamps_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  deactivation_timestamps_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  execution_timestamp?: InputMaybe<Scalars['BigInt']>;
  execution_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  execution_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  execution_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  execution_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  execution_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  execution_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  execution_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redemption_timestamp?: InputMaybe<Scalars['BigInt']>;
  redemption_timestamp_not?: InputMaybe<Scalars['BigInt']>;
  redemption_timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  redemption_timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  redemption_timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  redemption_timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  redemption_timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redemption_timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  actions_?: InputMaybe<Action_filter>;
  triggers_?: InputMaybe<Trigger_filter>;
  outputs?: InputMaybe<Array<Scalars['BigInt']>>;
  outputs_not?: InputMaybe<Array<Scalars['BigInt']>>;
  outputs_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  outputs_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  outputs_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  outputs_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  collaterals?: InputMaybe<Array<Scalars['BigInt']>>;
  collaterals_not?: InputMaybe<Array<Scalars['BigInt']>>;
  collaterals_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  collaterals_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  collaterals_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  collaterals_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fund?: InputMaybe<Scalars['String']>;
  fund_not?: InputMaybe<Scalars['String']>;
  fund_gt?: InputMaybe<Scalars['String']>;
  fund_lt?: InputMaybe<Scalars['String']>;
  fund_gte?: InputMaybe<Scalars['String']>;
  fund_lte?: InputMaybe<Scalars['String']>;
  fund_in?: InputMaybe<Array<Scalars['String']>>;
  fund_not_in?: InputMaybe<Array<Scalars['String']>>;
  fund_contains?: InputMaybe<Scalars['String']>;
  fund_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_not_contains?: InputMaybe<Scalars['String']>;
  fund_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_starts_with?: InputMaybe<Scalars['String']>;
  fund_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_starts_with?: InputMaybe<Scalars['String']>;
  fund_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_ends_with?: InputMaybe<Scalars['String']>;
  fund_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_ends_with?: InputMaybe<Scalars['String']>;
  fund_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_?: InputMaybe<Fund_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Rule_orderBy =
  | 'id'
  | 'creation_timestamp'
  | 'activation_timestamps'
  | 'deactivation_timestamps'
  | 'execution_timestamp'
  | 'redemption_timestamp'
  | 'actions'
  | 'triggers'
  | 'outputs'
  | 'collaterals'
  | 'fund';

export type Sub = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  fund: Fund;
  deposit_timestamps: Array<Scalars['BigInt']>;
  deposit_amounts: Array<Scalars['BigInt']>;
  withdraw_timestamps: Array<Scalars['BigInt']>;
};

export type SubConstraints = {
  id: Scalars['ID'];
  minCollateralPerSub: Scalars['BigInt'];
  maxCollateralPerSub: Scalars['BigInt'];
  minCollateralTotal: Scalars['BigInt'];
  maxCollateralTotal: Scalars['BigInt'];
  deadline: Scalars['BigInt'];
  lockin: Scalars['BigInt'];
  fund: Fund;
};

export type SubConstraints_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  minCollateralPerSub?: InputMaybe<Scalars['BigInt']>;
  minCollateralPerSub_not?: InputMaybe<Scalars['BigInt']>;
  minCollateralPerSub_gt?: InputMaybe<Scalars['BigInt']>;
  minCollateralPerSub_lt?: InputMaybe<Scalars['BigInt']>;
  minCollateralPerSub_gte?: InputMaybe<Scalars['BigInt']>;
  minCollateralPerSub_lte?: InputMaybe<Scalars['BigInt']>;
  minCollateralPerSub_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minCollateralPerSub_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxCollateralPerSub?: InputMaybe<Scalars['BigInt']>;
  maxCollateralPerSub_not?: InputMaybe<Scalars['BigInt']>;
  maxCollateralPerSub_gt?: InputMaybe<Scalars['BigInt']>;
  maxCollateralPerSub_lt?: InputMaybe<Scalars['BigInt']>;
  maxCollateralPerSub_gte?: InputMaybe<Scalars['BigInt']>;
  maxCollateralPerSub_lte?: InputMaybe<Scalars['BigInt']>;
  maxCollateralPerSub_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxCollateralPerSub_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minCollateralTotal?: InputMaybe<Scalars['BigInt']>;
  minCollateralTotal_not?: InputMaybe<Scalars['BigInt']>;
  minCollateralTotal_gt?: InputMaybe<Scalars['BigInt']>;
  minCollateralTotal_lt?: InputMaybe<Scalars['BigInt']>;
  minCollateralTotal_gte?: InputMaybe<Scalars['BigInt']>;
  minCollateralTotal_lte?: InputMaybe<Scalars['BigInt']>;
  minCollateralTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minCollateralTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxCollateralTotal?: InputMaybe<Scalars['BigInt']>;
  maxCollateralTotal_not?: InputMaybe<Scalars['BigInt']>;
  maxCollateralTotal_gt?: InputMaybe<Scalars['BigInt']>;
  maxCollateralTotal_lt?: InputMaybe<Scalars['BigInt']>;
  maxCollateralTotal_gte?: InputMaybe<Scalars['BigInt']>;
  maxCollateralTotal_lte?: InputMaybe<Scalars['BigInt']>;
  maxCollateralTotal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxCollateralTotal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deadline?: InputMaybe<Scalars['BigInt']>;
  deadline_not?: InputMaybe<Scalars['BigInt']>;
  deadline_gt?: InputMaybe<Scalars['BigInt']>;
  deadline_lt?: InputMaybe<Scalars['BigInt']>;
  deadline_gte?: InputMaybe<Scalars['BigInt']>;
  deadline_lte?: InputMaybe<Scalars['BigInt']>;
  deadline_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deadline_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockin?: InputMaybe<Scalars['BigInt']>;
  lockin_not?: InputMaybe<Scalars['BigInt']>;
  lockin_gt?: InputMaybe<Scalars['BigInt']>;
  lockin_lt?: InputMaybe<Scalars['BigInt']>;
  lockin_gte?: InputMaybe<Scalars['BigInt']>;
  lockin_lte?: InputMaybe<Scalars['BigInt']>;
  lockin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lockin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fund?: InputMaybe<Scalars['String']>;
  fund_not?: InputMaybe<Scalars['String']>;
  fund_gt?: InputMaybe<Scalars['String']>;
  fund_lt?: InputMaybe<Scalars['String']>;
  fund_gte?: InputMaybe<Scalars['String']>;
  fund_lte?: InputMaybe<Scalars['String']>;
  fund_in?: InputMaybe<Array<Scalars['String']>>;
  fund_not_in?: InputMaybe<Array<Scalars['String']>>;
  fund_contains?: InputMaybe<Scalars['String']>;
  fund_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_not_contains?: InputMaybe<Scalars['String']>;
  fund_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_starts_with?: InputMaybe<Scalars['String']>;
  fund_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_starts_with?: InputMaybe<Scalars['String']>;
  fund_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_ends_with?: InputMaybe<Scalars['String']>;
  fund_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_ends_with?: InputMaybe<Scalars['String']>;
  fund_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_?: InputMaybe<Fund_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type SubConstraints_orderBy =
  | 'id'
  | 'minCollateralPerSub'
  | 'maxCollateralPerSub'
  | 'minCollateralTotal'
  | 'maxCollateralTotal'
  | 'deadline'
  | 'lockin'
  | 'fund';

export type Sub_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  fund?: InputMaybe<Scalars['String']>;
  fund_not?: InputMaybe<Scalars['String']>;
  fund_gt?: InputMaybe<Scalars['String']>;
  fund_lt?: InputMaybe<Scalars['String']>;
  fund_gte?: InputMaybe<Scalars['String']>;
  fund_lte?: InputMaybe<Scalars['String']>;
  fund_in?: InputMaybe<Array<Scalars['String']>>;
  fund_not_in?: InputMaybe<Array<Scalars['String']>>;
  fund_contains?: InputMaybe<Scalars['String']>;
  fund_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_not_contains?: InputMaybe<Scalars['String']>;
  fund_not_contains_nocase?: InputMaybe<Scalars['String']>;
  fund_starts_with?: InputMaybe<Scalars['String']>;
  fund_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_starts_with?: InputMaybe<Scalars['String']>;
  fund_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  fund_ends_with?: InputMaybe<Scalars['String']>;
  fund_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_not_ends_with?: InputMaybe<Scalars['String']>;
  fund_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fund_?: InputMaybe<Fund_filter>;
  deposit_timestamps?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_timestamps_not?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_timestamps_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_timestamps_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_timestamps_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_timestamps_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_amounts?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_amounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_amounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  deposit_amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  withdraw_timestamps?: InputMaybe<Array<Scalars['BigInt']>>;
  withdraw_timestamps_not?: InputMaybe<Array<Scalars['BigInt']>>;
  withdraw_timestamps_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  withdraw_timestamps_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  withdraw_timestamps_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  withdraw_timestamps_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Sub_orderBy =
  | 'id'
  | 'address'
  | 'fund'
  | 'deposit_timestamps'
  | 'deposit_amounts'
  | 'withdraw_timestamps';

export type Token = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  type: Scalars['BigInt'];
  nft_id?: Maybe<Scalars['BigInt']>;
  input_of: Array<Action>;
  output_of: Array<Action>;
  /**  Token Price  */
  price: TokenPrice;
  symbol: Scalars['String'];
  /**  if symbol was successfully retrieved  */
  symbolSuccess: Scalars['Boolean'];
  name: Scalars['String'];
  /**  if name was successfully retrieved  */
  nameSuccess: Scalars['Boolean'];
  decimals: Scalars['BigInt'];
  /**  if decimals were successfully retrieved  */
  decimalsSuccess: Scalars['Boolean'];
  /**  Liquidity  */
  liquidity: Scalars['BigInt'];
  /**  Liquidity in native  */
  liquidityNative: Scalars['BigDecimal'];
  /**  Liquidity in USD  */
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  /**  Volume in native  */
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  /**  Fee in USD  */
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  /**  Count of all the pairs  */
  pairCount: Scalars['BigInt'];
  /**  All pairs where this token is involved in  */
  pairs: Array<_TokenPair>;
  totalSupply: Scalars['BigInt'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  poolCount: Scalars['BigInt'];
  totalValueLocked: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal'];
  derivedETH: Scalars['BigDecimal'];
  whitelistPools: Array<Pool>;
  tokenDayData: Array<TokenDayData>;
};


export type Tokeninput_ofArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
};


export type Tokenoutput_ofArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
};


export type TokenpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_TokenPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_TokenPair_filter>;
};


export type TokenwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};


export type TokentokenDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenDayData_filter>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  type?: InputMaybe<Scalars['BigInt']>;
  type_not?: InputMaybe<Scalars['BigInt']>;
  type_gt?: InputMaybe<Scalars['BigInt']>;
  type_lt?: InputMaybe<Scalars['BigInt']>;
  type_gte?: InputMaybe<Scalars['BigInt']>;
  type_lte?: InputMaybe<Scalars['BigInt']>;
  type_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft_id?: InputMaybe<Scalars['BigInt']>;
  nft_id_not?: InputMaybe<Scalars['BigInt']>;
  nft_id_gt?: InputMaybe<Scalars['BigInt']>;
  nft_id_lt?: InputMaybe<Scalars['BigInt']>;
  nft_id_gte?: InputMaybe<Scalars['BigInt']>;
  nft_id_lte?: InputMaybe<Scalars['BigInt']>;
  nft_id_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nft_id_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  input_of?: InputMaybe<Array<Scalars['String']>>;
  input_of_not?: InputMaybe<Array<Scalars['String']>>;
  input_of_contains?: InputMaybe<Array<Scalars['String']>>;
  input_of_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  input_of_not_contains?: InputMaybe<Array<Scalars['String']>>;
  input_of_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  input_of_?: InputMaybe<Action_filter>;
  output_of?: InputMaybe<Array<Scalars['String']>>;
  output_of_not?: InputMaybe<Array<Scalars['String']>>;
  output_of_contains?: InputMaybe<Array<Scalars['String']>>;
  output_of_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  output_of_not_contains?: InputMaybe<Array<Scalars['String']>>;
  output_of_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  output_of_?: InputMaybe<Action_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  price?: InputMaybe<Scalars['String']>;
  price_not?: InputMaybe<Scalars['String']>;
  price_gt?: InputMaybe<Scalars['String']>;
  price_lt?: InputMaybe<Scalars['String']>;
  price_gte?: InputMaybe<Scalars['String']>;
  price_lte?: InputMaybe<Scalars['String']>;
  price_in?: InputMaybe<Array<Scalars['String']>>;
  price_not_in?: InputMaybe<Array<Scalars['String']>>;
  price_contains?: InputMaybe<Scalars['String']>;
  price_contains_nocase?: InputMaybe<Scalars['String']>;
  price_not_contains?: InputMaybe<Scalars['String']>;
  price_not_contains_nocase?: InputMaybe<Scalars['String']>;
  price_starts_with?: InputMaybe<Scalars['String']>;
  price_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_starts_with?: InputMaybe<Scalars['String']>;
  price_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  price_ends_with?: InputMaybe<Scalars['String']>;
  price_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_not_ends_with?: InputMaybe<Scalars['String']>;
  price_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  price_?: InputMaybe<TokenPrice_filter>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbolSuccess?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_not?: InputMaybe<Scalars['Boolean']>;
  symbolSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  symbolSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nameSuccess?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_not?: InputMaybe<Scalars['Boolean']>;
  nameSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  nameSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimalsSuccess?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_not?: InputMaybe<Scalars['Boolean']>;
  decimalsSuccess_in?: InputMaybe<Array<Scalars['Boolean']>>;
  decimalsSuccess_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount?: InputMaybe<Scalars['BigInt']>;
  pairCount_not?: InputMaybe<Scalars['BigInt']>;
  pairCount_gt?: InputMaybe<Scalars['BigInt']>;
  pairCount_lt?: InputMaybe<Scalars['BigInt']>;
  pairCount_gte?: InputMaybe<Scalars['BigInt']>;
  pairCount_lte?: InputMaybe<Scalars['BigInt']>;
  pairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairs_?: InputMaybe<_TokenPair_filter>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedETH?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_?: InputMaybe<Pool_filter>;
  tokenDayData_?: InputMaybe<TokenDayData_filter>;
};

export type Token_orderBy =
  | 'id'
  | 'address'
  | 'type'
  | 'nft_id'
  | 'input_of'
  | 'output_of'
  | 'price'
  | 'symbol'
  | 'symbolSuccess'
  | 'name'
  | 'nameSuccess'
  | 'decimals'
  | 'decimalsSuccess'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'txCount'
  | 'pairCount'
  | 'pairs'
  | 'totalSupply'
  | 'untrackedVolumeUSD'
  | 'poolCount'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'derivedETH'
  | 'whitelistPools'
  | 'tokenDayData';

export type Trigger = {
  id: Scalars['ID'];
  type: Scalars['BigInt'];
  callee: Scalars['Bytes'];
  create_time_params: Scalars['Bytes'];
  rule: Rule;
};

export type Trigger_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<Scalars['BigInt']>;
  type_not?: InputMaybe<Scalars['BigInt']>;
  type_gt?: InputMaybe<Scalars['BigInt']>;
  type_lt?: InputMaybe<Scalars['BigInt']>;
  type_gte?: InputMaybe<Scalars['BigInt']>;
  type_lte?: InputMaybe<Scalars['BigInt']>;
  type_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callee?: InputMaybe<Scalars['Bytes']>;
  callee_not?: InputMaybe<Scalars['Bytes']>;
  callee_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callee_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  callee_contains?: InputMaybe<Scalars['Bytes']>;
  callee_not_contains?: InputMaybe<Scalars['Bytes']>;
  create_time_params?: InputMaybe<Scalars['Bytes']>;
  create_time_params_not?: InputMaybe<Scalars['Bytes']>;
  create_time_params_in?: InputMaybe<Array<Scalars['Bytes']>>;
  create_time_params_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  create_time_params_contains?: InputMaybe<Scalars['Bytes']>;
  create_time_params_not_contains?: InputMaybe<Scalars['Bytes']>;
  rule?: InputMaybe<Scalars['String']>;
  rule_not?: InputMaybe<Scalars['String']>;
  rule_gt?: InputMaybe<Scalars['String']>;
  rule_lt?: InputMaybe<Scalars['String']>;
  rule_gte?: InputMaybe<Scalars['String']>;
  rule_lte?: InputMaybe<Scalars['String']>;
  rule_in?: InputMaybe<Array<Scalars['String']>>;
  rule_not_in?: InputMaybe<Array<Scalars['String']>>;
  rule_contains?: InputMaybe<Scalars['String']>;
  rule_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_not_contains?: InputMaybe<Scalars['String']>;
  rule_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rule_starts_with?: InputMaybe<Scalars['String']>;
  rule_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rule_not_starts_with?: InputMaybe<Scalars['String']>;
  rule_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rule_ends_with?: InputMaybe<Scalars['String']>;
  rule_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_not_ends_with?: InputMaybe<Scalars['String']>;
  rule_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rule_?: InputMaybe<Rule_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Trigger_orderBy =
  | 'id'
  | 'type'
  | 'callee'
  | 'create_time_params'
  | 'rule';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type Bundle = {
  id: Scalars['ID'];
  /**  Price of native  */
  nativePrice: Scalars['BigDecimal'];
  ethPriceUSD: Scalars['BigDecimal'];
};

export type Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nativePrice?: InputMaybe<Scalars['BigDecimal']>;
  nativePrice_not?: InputMaybe<Scalars['BigDecimal']>;
  nativePrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  nativePrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  nativePrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  nativePrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  nativePrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  nativePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  ethPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  ethPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  ethPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export type Bundle_orderBy =
  | 'id'
  | 'nativePrice'
  | 'ethPriceUSD';

export type Burn = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['String']>;
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  to?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  complete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['String']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  pool: Pool;
  token0: Token;
  token1: Token;
  owner?: Maybe<Scalars['Bytes']>;
  origin: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
};

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  complete?: InputMaybe<Scalars['Boolean']>;
  complete_not?: InputMaybe<Scalars['Boolean']>;
  complete_in?: InputMaybe<Array<Scalars['Boolean']>>;
  complete_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  feeTo?: InputMaybe<Scalars['String']>;
  feeTo_not?: InputMaybe<Scalars['String']>;
  feeTo_gt?: InputMaybe<Scalars['String']>;
  feeTo_lt?: InputMaybe<Scalars['String']>;
  feeTo_gte?: InputMaybe<Scalars['String']>;
  feeTo_lte?: InputMaybe<Scalars['String']>;
  feeTo_in?: InputMaybe<Array<Scalars['String']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['String']>>;
  feeTo_contains?: InputMaybe<Scalars['String']>;
  feeTo_contains_nocase?: InputMaybe<Scalars['String']>;
  feeTo_not_contains?: InputMaybe<Scalars['String']>;
  feeTo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  feeTo_starts_with?: InputMaybe<Scalars['String']>;
  feeTo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feeTo_not_starts_with?: InputMaybe<Scalars['String']>;
  feeTo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  feeTo_ends_with?: InputMaybe<Scalars['String']>;
  feeTo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feeTo_not_ends_with?: InputMaybe<Scalars['String']>;
  feeTo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'complete'
  | 'feeTo'
  | 'feeLiquidity'
  | 'pool'
  | 'token0'
  | 'token1'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'tickLower'
  | 'tickUpper';

export type Factory = {
  id: Scalars['ID'];
  /**  Factory type  */
  type: PairType;
  /**  Volume USD  */
  volumeUSD: Scalars['BigDecimal'];
  /**  Volume Native  */
  volumeNative: Scalars['BigDecimal'];
  /**  Liquidity USD  */
  liquidityUSD: Scalars['BigDecimal'];
  /**  Liquidity NATIVE  */
  liquidityNative: Scalars['BigDecimal'];
  /**  Fees USD  */
  feesUSD: Scalars['BigDecimal'];
  /**  Fees NATIVE  */
  feesNative: Scalars['BigDecimal'];
  /**  Pair count  */
  pairCount: Scalars['BigInt'];
  /**  Transaction count  */
  transactionCount: Scalars['BigInt'];
  /**  Token count  */
  tokenCount: Scalars['BigInt'];
  /**  User count  */
  userCount: Scalars['BigInt'];
  poolCount: Scalars['BigInt'];
  txCount: Scalars['BigInt'];
  totalVolumeUSD: Scalars['BigDecimal'];
  totalVolumeETH: Scalars['BigDecimal'];
  totalFeesUSD: Scalars['BigDecimal'];
  totalFeesETH: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  totalValueLockedETH: Scalars['BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal'];
  totalValueLockedETHUntracked: Scalars['BigDecimal'];
  owner: Scalars['ID'];
};

export type FactoryDaySnapshot = {
  /**  {factoryId}-day-{timestamp}  */
  id: Scalars['ID'];
  factory: Factory;
  date: Scalars['Int'];
  volumeUSD: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
};

export type FactoryDaySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<Factory_filter>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FactoryDaySnapshot_orderBy =
  | 'id'
  | 'factory'
  | 'date'
  | 'volumeUSD'
  | 'volumeNative'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount';

export type FactoryHourSnapshot = {
  /**  {factoryId}-hour-{timestamp}  */
  id: Scalars['ID'];
  factory: Factory;
  date: Scalars['Int'];
  volumeUSD: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
};

export type FactoryHourSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  factory?: InputMaybe<Scalars['String']>;
  factory_not?: InputMaybe<Scalars['String']>;
  factory_gt?: InputMaybe<Scalars['String']>;
  factory_lt?: InputMaybe<Scalars['String']>;
  factory_gte?: InputMaybe<Scalars['String']>;
  factory_lte?: InputMaybe<Scalars['String']>;
  factory_in?: InputMaybe<Array<Scalars['String']>>;
  factory_not_in?: InputMaybe<Array<Scalars['String']>>;
  factory_contains?: InputMaybe<Scalars['String']>;
  factory_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_not_contains?: InputMaybe<Scalars['String']>;
  factory_not_contains_nocase?: InputMaybe<Scalars['String']>;
  factory_starts_with?: InputMaybe<Scalars['String']>;
  factory_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_starts_with?: InputMaybe<Scalars['String']>;
  factory_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  factory_ends_with?: InputMaybe<Scalars['String']>;
  factory_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_not_ends_with?: InputMaybe<Scalars['String']>;
  factory_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factory_?: InputMaybe<Factory_filter>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type FactoryHourSnapshot_orderBy =
  | 'id'
  | 'factory'
  | 'date'
  | 'volumeUSD'
  | 'volumeNative'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount';

export type Factory_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<PairType>;
  type_not?: InputMaybe<PairType>;
  type_in?: InputMaybe<Array<PairType>>;
  type_not_in?: InputMaybe<Array<PairType>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pairCount?: InputMaybe<Scalars['BigInt']>;
  pairCount_not?: InputMaybe<Scalars['BigInt']>;
  pairCount_gt?: InputMaybe<Scalars['BigInt']>;
  pairCount_lt?: InputMaybe<Scalars['BigInt']>;
  pairCount_gte?: InputMaybe<Scalars['BigInt']>;
  pairCount_lte?: InputMaybe<Scalars['BigInt']>;
  pairCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pairCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount?: InputMaybe<Scalars['BigInt']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount?: InputMaybe<Scalars['BigInt']>;
  userCount_not?: InputMaybe<Scalars['BigInt']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  poolCount?: InputMaybe<Scalars['BigInt']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesETH?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalFeesETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalFeesETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  owner?: InputMaybe<Scalars['ID']>;
  owner_not?: InputMaybe<Scalars['ID']>;
  owner_gt?: InputMaybe<Scalars['ID']>;
  owner_lt?: InputMaybe<Scalars['ID']>;
  owner_gte?: InputMaybe<Scalars['ID']>;
  owner_lte?: InputMaybe<Scalars['ID']>;
  owner_in?: InputMaybe<Array<Scalars['ID']>>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Factory_orderBy =
  | 'id'
  | 'type'
  | 'volumeUSD'
  | 'volumeNative'
  | 'liquidityUSD'
  | 'liquidityNative'
  | 'feesUSD'
  | 'feesNative'
  | 'pairCount'
  | 'transactionCount'
  | 'tokenCount'
  | 'userCount'
  | 'poolCount'
  | 'txCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'totalFeesUSD'
  | 'totalFeesETH'
  | 'untrackedVolumeUSD'
  | 'totalValueLockedUSD'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSDUntracked'
  | 'totalValueLockedETHUntracked'
  | 'owner';

export type LiquidityPosition = {
  /** pair.id:user.id */
  id: Scalars['ID'];
  pair: Pair;
  user: User;
  balance: Scalars['BigInt'];
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
};

export type LiquidityPositionSnapshot = {
  /**  {lp.id}-{timestamp}  */
  id: Scalars['ID'];
  liquidityPosition: LiquidityPosition;
  /**  saved for fast historical lookups  */
  timestamp: Scalars['Int'];
  /**  saved for fast historical lookups  */
  block: Scalars['Int'];
  /**  reference to user  */
  user: User;
  /**  reference to pair  */
  pair: Pair;
  /**  snapshot of token0 price  */
  token0PriceUSD: Scalars['BigDecimal'];
  /**  snapshot of token1 price  */
  token1PriceUSD: Scalars['BigDecimal'];
  /**  snapshot of pair token0 reserves  */
  reserve0: Scalars['BigInt'];
  /**  snapshot of pair token1 reserves  */
  reserve1: Scalars['BigInt'];
  /**  snapshot of pair reserves in USD  */
  reserveUSD: Scalars['BigDecimal'];
  /**  snapshot of pool token supply  */
  liquidityTokenTotalSupply: Scalars['BigInt'];
  /**  snapshot of users pool token balance  */
  liquidityTokenBalance: Scalars['BigInt'];
};

export type LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidityPosition?: InputMaybe<Scalars['String']>;
  liquidityPosition_not?: InputMaybe<Scalars['String']>;
  liquidityPosition_gt?: InputMaybe<Scalars['String']>;
  liquidityPosition_lt?: InputMaybe<Scalars['String']>;
  liquidityPosition_gte?: InputMaybe<Scalars['String']>;
  liquidityPosition_lte?: InputMaybe<Scalars['String']>;
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidityPosition_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidityPosition_?: InputMaybe<LiquidityPosition_filter>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  block?: InputMaybe<Scalars['Int']>;
  block_not?: InputMaybe<Scalars['Int']>;
  block_gt?: InputMaybe<Scalars['Int']>;
  block_lt?: InputMaybe<Scalars['Int']>;
  block_gte?: InputMaybe<Scalars['Int']>;
  block_lte?: InputMaybe<Scalars['Int']>;
  block_in?: InputMaybe<Array<Scalars['Int']>>;
  block_not_in?: InputMaybe<Array<Scalars['Int']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserve0?: InputMaybe<Scalars['BigInt']>;
  reserve0_not?: InputMaybe<Scalars['BigInt']>;
  reserve0_gt?: InputMaybe<Scalars['BigInt']>;
  reserve0_lt?: InputMaybe<Scalars['BigInt']>;
  reserve0_gte?: InputMaybe<Scalars['BigInt']>;
  reserve0_lte?: InputMaybe<Scalars['BigInt']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve1?: InputMaybe<Scalars['BigInt']>;
  reserve1_not?: InputMaybe<Scalars['BigInt']>;
  reserve1_gt?: InputMaybe<Scalars['BigInt']>;
  reserve1_lt?: InputMaybe<Scalars['BigInt']>;
  reserve1_gte?: InputMaybe<Scalars['BigInt']>;
  reserve1_lte?: InputMaybe<Scalars['BigInt']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityTokenTotalSupply?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityTokenBalance?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'pair'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance';

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'pair'
  | 'user'
  | 'balance'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

export type Mint = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  to: Scalars['String'];
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  pool: Pool;
  token0: Token;
  token1: Token;
  owner: Scalars['Bytes'];
  origin: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
};

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeTo?: InputMaybe<Scalars['Bytes']>;
  feeTo_not?: InputMaybe<Scalars['Bytes']>;
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeTo_contains?: InputMaybe<Scalars['Bytes']>;
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity'
  | 'pool'
  | 'token0'
  | 'token1'
  | 'owner'
  | 'origin'
  | 'amount'
  | 'tickLower'
  | 'tickUpper';

export type Pair = {
  /**  Pair address (contract address)  */
  id: Scalars['ID'];
  /**  Pair type  */
  type: PairType;
  /**  Swap fee  */
  swapFee: Scalars['BigInt'];
  /**  TWAP - time weighted average price  */
  twapEnabled: Scalars['Boolean'];
  /**  name of the pair, this combines symbol of both tokens, e.g. WETH/SUSHI  */
  name: Scalars['String'];
  /**  First Token  */
  token0: Token;
  /**  Second Token  */
  token1: Token;
  /**  Which source this pair comes from, in this case it will always be 'LEGACY'  */
  source: Scalars['String'];
  /**  Which block this pair was created on  */
  createdAtBlock: Scalars['BigInt'];
  /**  When this pair was created  */
  createdAtTimestamp: Scalars['BigInt'];
  /**  Liquidity of first token  */
  reserve0: Scalars['BigInt'];
  /**  Liquidity of second token  */
  reserve1: Scalars['BigInt'];
  /**  which block _k was saved  */
  _cacheUpdatedAtBlock: Scalars['BigInt'];
  /**  Liquidity of first token, this is only updated for the first transaction in a block  */
  _cache_reserve0: Scalars['BigInt'];
  /**  Liquidity of second token, this is only updated for the first transaction in a block  */
  _cache_reserve1: Scalars['BigInt'];
  /**  Price of the first token in this pair, this is only updated for the first transaction in a block  */
  _cache_token0Price: Scalars['BigDecimal'];
  /**  Price of the second token in this pair, this is only updated for the first transaction in a block  */
  _cache_token1Price: Scalars['BigDecimal'];
  /**  Liquidity, Total supply of all LP in this pool  */
  liquidity: Scalars['BigInt'];
  /**  USD liquidity */
  liquidityUSD: Scalars['BigDecimal'];
  /**  Native Liquidity  */
  liquidityNative: Scalars['BigDecimal'];
  /**  Tracked Liquidity native  */
  trackedLiquidityNative: Scalars['BigDecimal'];
  /**  Price of the first token in this pair, not to be confused with TokenPrice entity  */
  token0Price: Scalars['BigDecimal'];
  /**  Price of the second token in this pair, not to be confused with TokenPrice entity  */
  token1Price: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  /**  Fee in Native  */
  feesNative: Scalars['BigDecimal'];
  /**  Fee in USD  */
  feesUSD: Scalars['BigDecimal'];
  /**  APR  */
  apr: Scalars['BigDecimal'];
  /**  When APR was last updated  */
  aprUpdatedAtTimestamp: Scalars['BigInt'];
  /**  Transaction count  */
  txCount: Scalars['BigInt'];
  /**  Liquidity Positions  */
  liquidityPositions: Array<LiquidityPosition>;
  /**  Liquidity position snapshots  */
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  /**  Pair Hour Snapshot  */
  hourSnapshots: Array<PairHourSnapshot>;
  /**  Pair Day Snapshot  */
  daySnapshots: Array<PairDaySnapshot>;
};


export type PairliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};


export type PairliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPositionSnapshot_filter>;
};


export type PairhourSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairHourSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairHourSnapshot_filter>;
};


export type PairdaySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PairDaySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PairDaySnapshot_filter>;
};

export type PairDaySnapshot = {
  /**  {pairId}-day-{timestamp}  */
  id: Scalars['ID'];
  pair: Pair;
  date: Scalars['Int'];
  /**  Used to calculate apr  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  apr: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
};

export type PairDaySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PairDaySnapshot_orderBy =
  | 'id'
  | 'pair'
  | 'date'
  | 'cumulativeVolumeUSD'
  | 'volumeUSD'
  | 'volumeNative'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'apr'
  | 'transactionCount';

export type PairHourSnapshot = {
  /**  {pairId}-hour-{timestamp}  */
  id: Scalars['ID'];
  pair: Pair;
  date: Scalars['Int'];
  /**  Used to calculate apr  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  apr: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
};

export type PairHourSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PairHourSnapshot_orderBy =
  | 'id'
  | 'pair'
  | 'date'
  | 'cumulativeVolumeUSD'
  | 'volumeUSD'
  | 'volumeNative'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'apr'
  | 'transactionCount';

export type PairType =
  | 'CONSTANT_PRODUCT_POOL';

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<PairType>;
  type_not?: InputMaybe<PairType>;
  type_in?: InputMaybe<Array<PairType>>;
  type_not_in?: InputMaybe<Array<PairType>>;
  swapFee?: InputMaybe<Scalars['BigInt']>;
  swapFee_not?: InputMaybe<Scalars['BigInt']>;
  swapFee_gt?: InputMaybe<Scalars['BigInt']>;
  swapFee_lt?: InputMaybe<Scalars['BigInt']>;
  swapFee_gte?: InputMaybe<Scalars['BigInt']>;
  swapFee_lte?: InputMaybe<Scalars['BigInt']>;
  swapFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  twapEnabled?: InputMaybe<Scalars['Boolean']>;
  twapEnabled_not?: InputMaybe<Scalars['Boolean']>;
  twapEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  twapEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  source?: InputMaybe<Scalars['String']>;
  source_not?: InputMaybe<Scalars['String']>;
  source_gt?: InputMaybe<Scalars['String']>;
  source_lt?: InputMaybe<Scalars['String']>;
  source_gte?: InputMaybe<Scalars['String']>;
  source_lte?: InputMaybe<Scalars['String']>;
  source_in?: InputMaybe<Array<Scalars['String']>>;
  source_not_in?: InputMaybe<Array<Scalars['String']>>;
  source_contains?: InputMaybe<Scalars['String']>;
  source_contains_nocase?: InputMaybe<Scalars['String']>;
  source_not_contains?: InputMaybe<Scalars['String']>;
  source_not_contains_nocase?: InputMaybe<Scalars['String']>;
  source_starts_with?: InputMaybe<Scalars['String']>;
  source_starts_with_nocase?: InputMaybe<Scalars['String']>;
  source_not_starts_with?: InputMaybe<Scalars['String']>;
  source_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  source_ends_with?: InputMaybe<Scalars['String']>;
  source_ends_with_nocase?: InputMaybe<Scalars['String']>;
  source_not_ends_with?: InputMaybe<Scalars['String']>;
  source_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve0?: InputMaybe<Scalars['BigInt']>;
  reserve0_not?: InputMaybe<Scalars['BigInt']>;
  reserve0_gt?: InputMaybe<Scalars['BigInt']>;
  reserve0_lt?: InputMaybe<Scalars['BigInt']>;
  reserve0_gte?: InputMaybe<Scalars['BigInt']>;
  reserve0_lte?: InputMaybe<Scalars['BigInt']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve1?: InputMaybe<Scalars['BigInt']>;
  reserve1_not?: InputMaybe<Scalars['BigInt']>;
  reserve1_gt?: InputMaybe<Scalars['BigInt']>;
  reserve1_lt?: InputMaybe<Scalars['BigInt']>;
  reserve1_gte?: InputMaybe<Scalars['BigInt']>;
  reserve1_lte?: InputMaybe<Scalars['BigInt']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cacheUpdatedAtBlock?: InputMaybe<Scalars['BigInt']>;
  _cacheUpdatedAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  _cacheUpdatedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  _cacheUpdatedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  _cacheUpdatedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  _cacheUpdatedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  _cacheUpdatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cacheUpdatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cache_reserve0?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve0_not?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve0_gt?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve0_lt?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve0_gte?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve0_lte?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cache_reserve0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cache_reserve1?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve1_not?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve1_gt?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve1_lt?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve1_gte?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve1_lte?: InputMaybe<Scalars['BigInt']>;
  _cache_reserve1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cache_reserve1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _cache_token0Price?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _cache_token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _cache_token1Price?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  _cache_token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _cache_token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  trackedLiquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  trackedLiquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  trackedLiquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  trackedLiquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  trackedLiquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  trackedLiquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  trackedLiquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  trackedLiquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  aprUpdatedAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  aprUpdatedAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aprUpdatedAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  liquidityPositionSnapshots_?: InputMaybe<LiquidityPositionSnapshot_filter>;
  hourSnapshots_?: InputMaybe<PairHourSnapshot_filter>;
  daySnapshots_?: InputMaybe<PairDaySnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Pair_orderBy =
  | 'id'
  | 'type'
  | 'swapFee'
  | 'twapEnabled'
  | 'name'
  | 'token0'
  | 'token1'
  | 'source'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'reserve0'
  | 'reserve1'
  | '_cacheUpdatedAtBlock'
  | '_cache_reserve0'
  | '_cache_reserve1'
  | '_cache_token0Price'
  | '_cache_token1Price'
  | 'liquidity'
  | 'liquidityUSD'
  | 'liquidityNative'
  | 'trackedLiquidityNative'
  | 'token0Price'
  | 'token1Price'
  | 'volumeNative'
  | 'volumeUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'feesNative'
  | 'feesUSD'
  | 'apr'
  | 'aprUpdatedAtTimestamp'
  | 'txCount'
  | 'liquidityPositions'
  | 'liquidityPositionSnapshots'
  | 'hourSnapshots'
  | 'daySnapshots';

export type Swap = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  sender: Scalars['Bytes'];
  tokenIn: Token;
  tokenOut: Token;
  amountIn: Scalars['BigDecimal'];
  amountOut: Scalars['BigDecimal'];
  to: Scalars['String'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['BigDecimal'];
  pool: Pool;
  token0: Token;
  token1: Token;
  recipient: Scalars['Bytes'];
  origin: Scalars['Bytes'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  sqrtPriceX96: Scalars['BigInt'];
  tick: Scalars['BigInt'];
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn?: InputMaybe<Scalars['String']>;
  tokenIn_not?: InputMaybe<Scalars['String']>;
  tokenIn_gt?: InputMaybe<Scalars['String']>;
  tokenIn_lt?: InputMaybe<Scalars['String']>;
  tokenIn_gte?: InputMaybe<Scalars['String']>;
  tokenIn_lte?: InputMaybe<Scalars['String']>;
  tokenIn_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_contains?: InputMaybe<Scalars['String']>;
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_?: InputMaybe<Token_filter>;
  tokenOut?: InputMaybe<Scalars['String']>;
  tokenOut_not?: InputMaybe<Scalars['String']>;
  tokenOut_gt?: InputMaybe<Scalars['String']>;
  tokenOut_lt?: InputMaybe<Scalars['String']>;
  tokenOut_gte?: InputMaybe<Scalars['String']>;
  tokenOut_lte?: InputMaybe<Scalars['String']>;
  tokenOut_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_contains?: InputMaybe<Scalars['String']>;
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_?: InputMaybe<Token_filter>;
  amountIn?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_not?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOut?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_not?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  origin?: InputMaybe<Scalars['Bytes']>;
  origin_not?: InputMaybe<Scalars['Bytes']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  origin_contains?: InputMaybe<Scalars['Bytes']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'sender'
  | 'tokenIn'
  | 'tokenOut'
  | 'amountIn'
  | 'amountOut'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'pool'
  | 'token0'
  | 'token1'
  | 'recipient'
  | 'origin'
  | 'amount0'
  | 'amount1'
  | 'sqrtPriceX96'
  | 'tick';

export type TokenDaySnapshot = {
  /**  {tokenId}-day-{timestamp}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  priceNative: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
};

export type TokenDaySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceNative?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_not?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenDaySnapshot_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'priceNative'
  | 'priceUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount';

export type TokenHourSnapshot = {
  /**  {tokenId}-hour-{timestamp}  */
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  liquidity: Scalars['BigDecimal'];
  liquidityNative: Scalars['BigDecimal'];
  liquidityUSD: Scalars['BigDecimal'];
  volume: Scalars['BigDecimal'];
  volumeNative: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  priceNative: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  feesNative: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  transactionCount: Scalars['BigInt'];
};

export type TokenHourSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  liquidity?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceNative?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_not?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_not?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['BigInt']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenHourSnapshot_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'liquidity'
  | 'liquidityNative'
  | 'liquidityUSD'
  | 'volume'
  | 'volumeNative'
  | 'volumeUSD'
  | 'priceNative'
  | 'priceUSD'
  | 'feesNative'
  | 'feesUSD'
  | 'transactionCount';

export type TokenPrice = {
  /**  same as token entity id, address of token  */
  id: Scalars['ID'];
  /**  Token  */
  token: Token;
  /**  derived native, this is useful for calculating price. (derivedNative * bundle.nativePrice = USD price)  */
  derivedNative: Scalars['BigDecimal'];
  /**  price in USD. NOTE: this will not always be up to date, it only updates when onSync event is emitted, bundle.nativePrice could have changed.  */
  lastUsdPrice: Scalars['BigDecimal'];
  /**  Which token this price is based on  */
  pricedOffToken?: Maybe<Token>;
  /**  Which pair this price is based on  */
  pricedOffPair?: Maybe<Pair>;
};

export type TokenPrice_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  derivedNative?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_not?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_gt?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_lt?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_gte?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_lte?: InputMaybe<Scalars['BigDecimal']>;
  derivedNative_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  derivedNative_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastUsdPrice?: InputMaybe<Scalars['BigDecimal']>;
  lastUsdPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  lastUsdPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastUsdPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastUsdPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastUsdPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastUsdPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastUsdPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pricedOffToken?: InputMaybe<Scalars['String']>;
  pricedOffToken_not?: InputMaybe<Scalars['String']>;
  pricedOffToken_gt?: InputMaybe<Scalars['String']>;
  pricedOffToken_lt?: InputMaybe<Scalars['String']>;
  pricedOffToken_gte?: InputMaybe<Scalars['String']>;
  pricedOffToken_lte?: InputMaybe<Scalars['String']>;
  pricedOffToken_in?: InputMaybe<Array<Scalars['String']>>;
  pricedOffToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  pricedOffToken_contains?: InputMaybe<Scalars['String']>;
  pricedOffToken_contains_nocase?: InputMaybe<Scalars['String']>;
  pricedOffToken_not_contains?: InputMaybe<Scalars['String']>;
  pricedOffToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pricedOffToken_starts_with?: InputMaybe<Scalars['String']>;
  pricedOffToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffToken_not_starts_with?: InputMaybe<Scalars['String']>;
  pricedOffToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffToken_ends_with?: InputMaybe<Scalars['String']>;
  pricedOffToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffToken_not_ends_with?: InputMaybe<Scalars['String']>;
  pricedOffToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffToken_?: InputMaybe<Token_filter>;
  pricedOffPair?: InputMaybe<Scalars['String']>;
  pricedOffPair_not?: InputMaybe<Scalars['String']>;
  pricedOffPair_gt?: InputMaybe<Scalars['String']>;
  pricedOffPair_lt?: InputMaybe<Scalars['String']>;
  pricedOffPair_gte?: InputMaybe<Scalars['String']>;
  pricedOffPair_lte?: InputMaybe<Scalars['String']>;
  pricedOffPair_in?: InputMaybe<Array<Scalars['String']>>;
  pricedOffPair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pricedOffPair_contains?: InputMaybe<Scalars['String']>;
  pricedOffPair_contains_nocase?: InputMaybe<Scalars['String']>;
  pricedOffPair_not_contains?: InputMaybe<Scalars['String']>;
  pricedOffPair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pricedOffPair_starts_with?: InputMaybe<Scalars['String']>;
  pricedOffPair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffPair_not_starts_with?: InputMaybe<Scalars['String']>;
  pricedOffPair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffPair_ends_with?: InputMaybe<Scalars['String']>;
  pricedOffPair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffPair_not_ends_with?: InputMaybe<Scalars['String']>;
  pricedOffPair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pricedOffPair_?: InputMaybe<Pair_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenPrice_orderBy =
  | 'id'
  | 'token'
  | 'derivedNative'
  | 'lastUsdPrice'
  | 'pricedOffToken'
  | 'pricedOffPair';

export type Transaction = {
  id: Scalars['ID'];
  gasLimit: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Maybe<Mint>>;
  burns: Array<Maybe<Burn>>;
  swaps: Array<Maybe<Swap>>;
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  gasUsed: Scalars['BigInt'];
  flashed: Array<Maybe<Flash>>;
  collects: Array<Maybe<Collect>>;
};


export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type TransactionflashedArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Flash_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Flash_filter>;
};


export type TransactioncollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mints?: InputMaybe<Array<Scalars['String']>>;
  mints_not?: InputMaybe<Array<Scalars['String']>>;
  mints_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mints_?: InputMaybe<Mint_filter>;
  burns?: InputMaybe<Array<Scalars['String']>>;
  burns_not?: InputMaybe<Array<Scalars['String']>>;
  burns_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>;
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  burns_?: InputMaybe<Burn_filter>;
  swaps?: InputMaybe<Array<Scalars['String']>>;
  swaps_not?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swaps_?: InputMaybe<Swap_filter>;
  createdAtBlock?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  flashed_?: InputMaybe<Flash_filter>;
  collects_?: InputMaybe<Collect_filter>;
};

export type Transaction_orderBy =
  | 'id'
  | 'gasLimit'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'createdAtBlock'
  | 'createdAtTimestamp'
  | 'blockNumber'
  | 'timestamp'
  | 'gasUsed'
  | 'flashed'
  | 'collects';

export type User = {
  id: Scalars['ID'];
  lpSnapshotsCount: Scalars['BigInt'];
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
};


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lpSnapshotsCount?: InputMaybe<Scalars['BigInt']>;
  lpSnapshotsCount_not?: InputMaybe<Scalars['BigInt']>;
  lpSnapshotsCount_gt?: InputMaybe<Scalars['BigInt']>;
  lpSnapshotsCount_lt?: InputMaybe<Scalars['BigInt']>;
  lpSnapshotsCount_gte?: InputMaybe<Scalars['BigInt']>;
  lpSnapshotsCount_lte?: InputMaybe<Scalars['BigInt']>;
  lpSnapshotsCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpSnapshotsCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type User_orderBy =
  | 'id'
  | 'lpSnapshotsCount'
  | 'liquidityPositions';

export type _TokenPair = {
  /**  id is created by combining token.id and count, e.g. 0x00x00:1  */
  id: Scalars['ID'];
  /**  Pair  */
  pair: Pair;
  /**  Token  */
  token: Token;
};

export type _TokenPair_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pair?: InputMaybe<Scalars['String']>;
  pair_not?: InputMaybe<Scalars['String']>;
  pair_gt?: InputMaybe<Scalars['String']>;
  pair_lt?: InputMaybe<Scalars['String']>;
  pair_gte?: InputMaybe<Scalars['String']>;
  pair_lte?: InputMaybe<Scalars['String']>;
  pair_in?: InputMaybe<Array<Scalars['String']>>;
  pair_not_in?: InputMaybe<Array<Scalars['String']>>;
  pair_contains?: InputMaybe<Scalars['String']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_not_contains?: InputMaybe<Scalars['String']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pair_starts_with?: InputMaybe<Scalars['String']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_starts_with?: InputMaybe<Scalars['String']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pair_ends_with?: InputMaybe<Scalars['String']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pair_?: InputMaybe<Pair_filter>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type _TokenPair_orderBy =
  | 'id'
  | 'pair'
  | 'token';

export type _Version = {
  id: Scalars['ID'];
  version: Scalars['String'];
};

export type _Version_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  version?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type _Version_orderBy =
  | 'id'
  | 'version';

export type Collect = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pool: Pool;
  owner?: Maybe<Scalars['Bytes']>;
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type Collect_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Collect_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pool'
  | 'owner'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'tickLower'
  | 'tickUpper'
  | 'logIndex';

export type Flash = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pool: Pool;
  sender: Scalars['Bytes'];
  recipient: Scalars['Bytes'];
  amount0: Scalars['BigDecimal'];
  amount1: Scalars['BigDecimal'];
  amountUSD: Scalars['BigDecimal'];
  amount0Paid: Scalars['BigDecimal'];
  amount1Paid: Scalars['BigDecimal'];
  logIndex?: Maybe<Scalars['BigInt']>;
};

export type Flash_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  recipient?: InputMaybe<Scalars['Bytes']>;
  recipient_not?: InputMaybe<Scalars['Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount0?: InputMaybe<Scalars['BigDecimal']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Paid?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_not?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount0Paid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount0Paid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Paid?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_not?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount1Paid_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount1Paid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  logIndex?: InputMaybe<Scalars['BigInt']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Flash_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pool'
  | 'sender'
  | 'recipient'
  | 'amount0'
  | 'amount1'
  | 'amountUSD'
  | 'amount0Paid'
  | 'amount1Paid'
  | 'logIndex';

export type Pool = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  token0: Token;
  token1: Token;
  feeTier: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  observationIndex: Scalars['BigInt'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  collectedFeesUSD: Scalars['BigDecimal'];
  totalValueLockedToken0: Scalars['BigDecimal'];
  totalValueLockedToken1: Scalars['BigDecimal'];
  totalValueLockedETH: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal'];
  liquidityProviderCount: Scalars['BigInt'];
  poolHourData: Array<PoolHourData>;
  poolDayData: Array<PoolDayData>;
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
  collects: Array<Collect>;
  ticks: Array<Tick>;
};


export type PoolpoolHourDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolHourData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolHourData_filter>;
};


export type PoolpoolDayDataArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
};


export type PoolmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Mint_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Mint_filter>;
};


export type PoolburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Burn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Burn_filter>;
};


export type PoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};


export type PoolcollectsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Collect_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collect_filter>;
};


export type PoolticksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
};

export type PoolDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type PoolDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PoolDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type PoolHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: Pool;
  liquidity: Scalars['BigInt'];
  sqrtPrice: Scalars['BigInt'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  tick?: Maybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128: Scalars['BigInt'];
  feeGrowthGlobal1X128: Scalars['BigInt'];
  tvlUSD: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type PoolHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PoolHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'liquidity'
  | 'sqrtPrice'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'tvlUSD'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type Pool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0?: InputMaybe<Scalars['String']>;
  token0_not?: InputMaybe<Scalars['String']>;
  token0_gt?: InputMaybe<Scalars['String']>;
  token0_lt?: InputMaybe<Scalars['String']>;
  token0_gte?: InputMaybe<Scalars['String']>;
  token0_lte?: InputMaybe<Scalars['String']>;
  token0_in?: InputMaybe<Array<Scalars['String']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']>>;
  token0_contains?: InputMaybe<Scalars['String']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_not_contains?: InputMaybe<Scalars['String']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token0_starts_with?: InputMaybe<Scalars['String']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token0_ends_with?: InputMaybe<Scalars['String']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']>;
  token1_not?: InputMaybe<Scalars['String']>;
  token1_gt?: InputMaybe<Scalars['String']>;
  token1_lt?: InputMaybe<Scalars['String']>;
  token1_gte?: InputMaybe<Scalars['String']>;
  token1_lte?: InputMaybe<Scalars['String']>;
  token1_in?: InputMaybe<Array<Scalars['String']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']>>;
  token1_contains?: InputMaybe<Scalars['String']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_not_contains?: InputMaybe<Scalars['String']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token1_starts_with?: InputMaybe<Scalars['String']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token1_ends_with?: InputMaybe<Scalars['String']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token1_?: InputMaybe<Token_filter>;
  feeTier?: InputMaybe<Scalars['BigInt']>;
  feeTier_not?: InputMaybe<Scalars['BigInt']>;
  feeTier_gt?: InputMaybe<Scalars['BigInt']>;
  feeTier_lt?: InputMaybe<Scalars['BigInt']>;
  feeTier_gte?: InputMaybe<Scalars['BigInt']>;
  feeTier_lte?: InputMaybe<Scalars['BigInt']>;
  feeTier_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeTier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex?: InputMaybe<Scalars['BigInt']>;
  observationIndex_not?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lt?: InputMaybe<Scalars['BigInt']>;
  observationIndex_gte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_lte?: InputMaybe<Scalars['BigInt']>;
  observationIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  observationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  poolHourData_?: InputMaybe<PoolHourData_filter>;
  poolDayData_?: InputMaybe<PoolDayData_filter>;
  mints_?: InputMaybe<Mint_filter>;
  burns_?: InputMaybe<Burn_filter>;
  swaps_?: InputMaybe<Swap_filter>;
  collects_?: InputMaybe<Collect_filter>;
  ticks_?: InputMaybe<Tick_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Pool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'token0'
  | 'token1'
  | 'feeTier'
  | 'liquidity'
  | 'sqrtPrice'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'token0Price'
  | 'token1Price'
  | 'tick'
  | 'observationIndex'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'txCount'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'totalValueLockedToken0'
  | 'totalValueLockedToken1'
  | 'totalValueLockedETH'
  | 'totalValueLockedUSD'
  | 'totalValueLockedUSDUntracked'
  | 'liquidityProviderCount'
  | 'poolHourData'
  | 'poolDayData'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'collects'
  | 'ticks';

export type PositionSnapshot = {
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  pool: Pool;
  position: Position;
  blockNumber: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  depositedToken0: Scalars['BigDecimal'];
  depositedToken1: Scalars['BigDecimal'];
  withdrawnToken0: Scalars['BigDecimal'];
  withdrawnToken1: Scalars['BigDecimal'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  transaction: Transaction;
  feeGrowthInside0LastX128: Scalars['BigInt'];
  feeGrowthInside1LastX128: Scalars['BigInt'];
};

export type PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositedToken0?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type PositionSnapshot_orderBy =
  | 'id'
  | 'owner'
  | 'pool'
  | 'position'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'depositedToken0'
  | 'depositedToken1'
  | 'withdrawnToken0'
  | 'withdrawnToken1'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'transaction'
  | 'feeGrowthInside0LastX128'
  | 'feeGrowthInside1LastX128';

export type Tick = {
  id: Scalars['ID'];
  poolAddress?: Maybe<Scalars['String']>;
  tickIdx: Scalars['BigInt'];
  pool: Pool;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  price0: Scalars['BigDecimal'];
  price1: Scalars['BigDecimal'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  collectedFeesToken0: Scalars['BigDecimal'];
  collectedFeesToken1: Scalars['BigDecimal'];
  collectedFeesUSD: Scalars['BigDecimal'];
  createdAtTimestamp: Scalars['BigInt'];
  createdAtBlockNumber: Scalars['BigInt'];
  liquidityProviderCount: Scalars['BigInt'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type TickDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: Pool;
  tick: Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  feeGrowthOutside0X128: Scalars['BigInt'];
  feeGrowthOutside1X128: Scalars['BigInt'];
};

export type TickDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TickDayData_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'tick'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type TickHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  pool: Pool;
  tick: Tick;
  liquidityGross: Scalars['BigInt'];
  liquidityNet: Scalars['BigInt'];
  volumeToken0: Scalars['BigDecimal'];
  volumeToken1: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
};

export type TickHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  tick?: InputMaybe<Scalars['String']>;
  tick_not?: InputMaybe<Scalars['String']>;
  tick_gt?: InputMaybe<Scalars['String']>;
  tick_lt?: InputMaybe<Scalars['String']>;
  tick_gte?: InputMaybe<Scalars['String']>;
  tick_lte?: InputMaybe<Scalars['String']>;
  tick_in?: InputMaybe<Array<Scalars['String']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']>>;
  tick_contains?: InputMaybe<Scalars['String']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_not_contains?: InputMaybe<Scalars['String']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tick_starts_with?: InputMaybe<Scalars['String']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tick_ends_with?: InputMaybe<Scalars['String']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tick_?: InputMaybe<Tick_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TickHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'pool'
  | 'tick'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'feesUSD';

export type Tick_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  poolAddress?: InputMaybe<Scalars['String']>;
  poolAddress_not?: InputMaybe<Scalars['String']>;
  poolAddress_gt?: InputMaybe<Scalars['String']>;
  poolAddress_lt?: InputMaybe<Scalars['String']>;
  poolAddress_gte?: InputMaybe<Scalars['String']>;
  poolAddress_lte?: InputMaybe<Scalars['String']>;
  poolAddress_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  poolAddress_contains?: InputMaybe<Scalars['String']>;
  poolAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains?: InputMaybe<Scalars['String']>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tickIdx?: InputMaybe<Scalars['BigInt']>;
  tickIdx_not?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lt?: InputMaybe<Scalars['BigInt']>;
  tickIdx_gte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_lte?: InputMaybe<Scalars['BigInt']>;
  tickIdx_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickIdx_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  price0?: InputMaybe<Scalars['BigDecimal']>;
  price0_not?: InputMaybe<Scalars['BigDecimal']>;
  price0_gt?: InputMaybe<Scalars['BigDecimal']>;
  price0_lt?: InputMaybe<Scalars['BigDecimal']>;
  price0_gte?: InputMaybe<Scalars['BigDecimal']>;
  price0_lte?: InputMaybe<Scalars['BigDecimal']>;
  price0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price1?: InputMaybe<Scalars['BigDecimal']>;
  price1_not?: InputMaybe<Scalars['BigDecimal']>;
  price1_gt?: InputMaybe<Scalars['BigDecimal']>;
  price1_lt?: InputMaybe<Scalars['BigDecimal']>;
  price1_gte?: InputMaybe<Scalars['BigDecimal']>;
  price1_lte?: InputMaybe<Scalars['BigDecimal']>;
  price1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  price1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Tick_orderBy =
  | 'id'
  | 'poolAddress'
  | 'tickIdx'
  | 'pool'
  | 'liquidityGross'
  | 'liquidityNet'
  | 'price0'
  | 'price1'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'feesUSD'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'collectedFeesUSD'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'
  | 'feeGrowthOutside0X128'
  | 'feeGrowthOutside1X128';

export type TokenDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  token: Token;
  volume: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalValueLocked: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type TokenHourData = {
  id: Scalars['ID'];
  periodStartUnix: Scalars['Int'];
  token: Token;
  volume: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  untrackedVolumeUSD: Scalars['BigDecimal'];
  totalValueLocked: Scalars['BigDecimal'];
  totalValueLockedUSD: Scalars['BigDecimal'];
  priceUSD: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  open: Scalars['BigDecimal'];
  high: Scalars['BigDecimal'];
  low: Scalars['BigDecimal'];
  close: Scalars['BigDecimal'];
};

export type TokenHourData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  periodStartUnix?: InputMaybe<Scalars['Int']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']>>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  volume?: InputMaybe<Scalars['BigDecimal']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open?: InputMaybe<Scalars['BigDecimal']>;
  open_not?: InputMaybe<Scalars['BigDecimal']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']>;
  open_lt?: InputMaybe<Scalars['BigDecimal']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high?: InputMaybe<Scalars['BigDecimal']>;
  high_not?: InputMaybe<Scalars['BigDecimal']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']>;
  high_lt?: InputMaybe<Scalars['BigDecimal']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low?: InputMaybe<Scalars['BigDecimal']>;
  low_not?: InputMaybe<Scalars['BigDecimal']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']>;
  low_lt?: InputMaybe<Scalars['BigDecimal']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close?: InputMaybe<Scalars['BigDecimal']>;
  close_not?: InputMaybe<Scalars['BigDecimal']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']>;
  close_lt?: InputMaybe<Scalars['BigDecimal']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type TokenHourData_orderBy =
  | 'id'
  | 'periodStartUnix'
  | 'token'
  | 'volume'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'totalValueLocked'
  | 'totalValueLockedUSD'
  | 'priceUSD'
  | 'feesUSD'
  | 'open'
  | 'high'
  | 'low'
  | 'close';

export type UniswapDayData = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  volumeETH: Scalars['BigDecimal'];
  volumeUSD: Scalars['BigDecimal'];
  volumeUSDUntracked: Scalars['BigDecimal'];
  feesUSD: Scalars['BigDecimal'];
  txCount: Scalars['BigInt'];
  tvlUSD: Scalars['BigDecimal'];
};

export type UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeETH?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSDUntracked?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  txCount?: InputMaybe<Scalars['BigInt']>;
  txCount_not?: InputMaybe<Scalars['BigInt']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'volumeETH'
  | 'volumeUSD'
  | 'volumeUSDUntracked'
  | 'feesUSD'
  | 'txCount'
  | 'tvlUSD';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Action: ResolverTypeWrapper<Action>;
  Action_filter: Action_filter;
  Action_orderBy: Action_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Fund: ResolverTypeWrapper<Fund>;
  Fund_filter: Fund_filter;
  Fund_orderBy: Fund_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Manager: ResolverTypeWrapper<Manager>;
  Manager_filter: Manager_filter;
  Manager_orderBy: Manager_orderBy;
  OrderDirection: OrderDirection;
  Position: ResolverTypeWrapper<Position>;
  Position_filter: Position_filter;
  Position_orderBy: Position_orderBy;
  Rule: ResolverTypeWrapper<Rule>;
  Rule_filter: Rule_filter;
  Rule_orderBy: Rule_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Sub: ResolverTypeWrapper<Sub>;
  SubConstraints: ResolverTypeWrapper<SubConstraints>;
  SubConstraints_filter: SubConstraints_filter;
  SubConstraints_orderBy: SubConstraints_orderBy;
  Sub_filter: Sub_filter;
  Sub_orderBy: Sub_orderBy;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Trigger: ResolverTypeWrapper<Trigger>;
  Trigger_filter: Trigger_filter;
  Trigger_orderBy: Trigger_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_filter;
  Bundle_orderBy: Bundle_orderBy;
  Burn: ResolverTypeWrapper<Burn>;
  Burn_filter: Burn_filter;
  Burn_orderBy: Burn_orderBy;
  Factory: ResolverTypeWrapper<Factory>;
  FactoryDaySnapshot: ResolverTypeWrapper<FactoryDaySnapshot>;
  FactoryDaySnapshot_filter: FactoryDaySnapshot_filter;
  FactoryDaySnapshot_orderBy: FactoryDaySnapshot_orderBy;
  FactoryHourSnapshot: ResolverTypeWrapper<FactoryHourSnapshot>;
  FactoryHourSnapshot_filter: FactoryHourSnapshot_filter;
  FactoryHourSnapshot_orderBy: FactoryHourSnapshot_orderBy;
  Factory_filter: Factory_filter;
  Factory_orderBy: Factory_orderBy;
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>;
  LiquidityPositionSnapshot: ResolverTypeWrapper<LiquidityPositionSnapshot>;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPositionSnapshot_orderBy: LiquidityPositionSnapshot_orderBy;
  LiquidityPosition_filter: LiquidityPosition_filter;
  LiquidityPosition_orderBy: LiquidityPosition_orderBy;
  Mint: ResolverTypeWrapper<Mint>;
  Mint_filter: Mint_filter;
  Mint_orderBy: Mint_orderBy;
  Pair: ResolverTypeWrapper<Pair>;
  PairDaySnapshot: ResolverTypeWrapper<PairDaySnapshot>;
  PairDaySnapshot_filter: PairDaySnapshot_filter;
  PairDaySnapshot_orderBy: PairDaySnapshot_orderBy;
  PairHourSnapshot: ResolverTypeWrapper<PairHourSnapshot>;
  PairHourSnapshot_filter: PairHourSnapshot_filter;
  PairHourSnapshot_orderBy: PairHourSnapshot_orderBy;
  PairType: PairType;
  Pair_filter: Pair_filter;
  Pair_orderBy: Pair_orderBy;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  TokenDaySnapshot: ResolverTypeWrapper<TokenDaySnapshot>;
  TokenDaySnapshot_filter: TokenDaySnapshot_filter;
  TokenDaySnapshot_orderBy: TokenDaySnapshot_orderBy;
  TokenHourSnapshot: ResolverTypeWrapper<TokenHourSnapshot>;
  TokenHourSnapshot_filter: TokenHourSnapshot_filter;
  TokenHourSnapshot_orderBy: TokenHourSnapshot_orderBy;
  TokenPrice: ResolverTypeWrapper<TokenPrice>;
  TokenPrice_filter: TokenPrice_filter;
  TokenPrice_orderBy: TokenPrice_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _TokenPair: ResolverTypeWrapper<_TokenPair>;
  _TokenPair_filter: _TokenPair_filter;
  _TokenPair_orderBy: _TokenPair_orderBy;
  _Version: ResolverTypeWrapper<_Version>;
  _Version_filter: _Version_filter;
  _Version_orderBy: _Version_orderBy;
  Collect: ResolverTypeWrapper<Collect>;
  Collect_filter: Collect_filter;
  Collect_orderBy: Collect_orderBy;
  Flash: ResolverTypeWrapper<Flash>;
  Flash_filter: Flash_filter;
  Flash_orderBy: Flash_orderBy;
  Pool: ResolverTypeWrapper<Pool>;
  PoolDayData: ResolverTypeWrapper<PoolDayData>;
  PoolDayData_filter: PoolDayData_filter;
  PoolDayData_orderBy: PoolDayData_orderBy;
  PoolHourData: ResolverTypeWrapper<PoolHourData>;
  PoolHourData_filter: PoolHourData_filter;
  PoolHourData_orderBy: PoolHourData_orderBy;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  PositionSnapshot: ResolverTypeWrapper<PositionSnapshot>;
  PositionSnapshot_filter: PositionSnapshot_filter;
  PositionSnapshot_orderBy: PositionSnapshot_orderBy;
  Tick: ResolverTypeWrapper<Tick>;
  TickDayData: ResolverTypeWrapper<TickDayData>;
  TickDayData_filter: TickDayData_filter;
  TickDayData_orderBy: TickDayData_orderBy;
  TickHourData: ResolverTypeWrapper<TickHourData>;
  TickHourData_filter: TickHourData_filter;
  TickHourData_orderBy: TickHourData_orderBy;
  Tick_filter: Tick_filter;
  Tick_orderBy: Tick_orderBy;
  TokenDayData: ResolverTypeWrapper<TokenDayData>;
  TokenDayData_filter: TokenDayData_filter;
  TokenDayData_orderBy: TokenDayData_orderBy;
  TokenHourData: ResolverTypeWrapper<TokenHourData>;
  TokenHourData_filter: TokenHourData_filter;
  TokenHourData_orderBy: TokenHourData_orderBy;
  UniswapDayData: ResolverTypeWrapper<UniswapDayData>;
  UniswapDayData_filter: UniswapDayData_filter;
  UniswapDayData_orderBy: UniswapDayData_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  Action: Action;
  Action_filter: Action_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  Fund: Fund;
  Fund_filter: Fund_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Manager: Manager;
  Manager_filter: Manager_filter;
  Position: Position;
  Position_filter: Position_filter;
  Rule: Rule;
  Rule_filter: Rule_filter;
  String: Scalars['String'];
  Sub: Sub;
  SubConstraints: SubConstraints;
  SubConstraints_filter: SubConstraints_filter;
  Sub_filter: Sub_filter;
  Token: Token;
  Token_filter: Token_filter;
  Trigger: Trigger;
  Trigger_filter: Trigger_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  Bundle: Bundle;
  Bundle_filter: Bundle_filter;
  Burn: Burn;
  Burn_filter: Burn_filter;
  Factory: Factory;
  FactoryDaySnapshot: FactoryDaySnapshot;
  FactoryDaySnapshot_filter: FactoryDaySnapshot_filter;
  FactoryHourSnapshot: FactoryHourSnapshot;
  FactoryHourSnapshot_filter: FactoryHourSnapshot_filter;
  Factory_filter: Factory_filter;
  LiquidityPosition: LiquidityPosition;
  LiquidityPositionSnapshot: LiquidityPositionSnapshot;
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter;
  LiquidityPosition_filter: LiquidityPosition_filter;
  Mint: Mint;
  Mint_filter: Mint_filter;
  Pair: Pair;
  PairDaySnapshot: PairDaySnapshot;
  PairDaySnapshot_filter: PairDaySnapshot_filter;
  PairHourSnapshot: PairHourSnapshot;
  PairHourSnapshot_filter: PairHourSnapshot_filter;
  Pair_filter: Pair_filter;
  Swap: Swap;
  Swap_filter: Swap_filter;
  TokenDaySnapshot: TokenDaySnapshot;
  TokenDaySnapshot_filter: TokenDaySnapshot_filter;
  TokenHourSnapshot: TokenHourSnapshot;
  TokenHourSnapshot_filter: TokenHourSnapshot_filter;
  TokenPrice: TokenPrice;
  TokenPrice_filter: TokenPrice_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  User: User;
  User_filter: User_filter;
  _TokenPair: _TokenPair;
  _TokenPair_filter: _TokenPair_filter;
  _Version: _Version;
  _Version_filter: _Version_filter;
  Collect: Collect;
  Collect_filter: Collect_filter;
  Flash: Flash;
  Flash_filter: Flash_filter;
  Pool: Pool;
  PoolDayData: PoolDayData;
  PoolDayData_filter: PoolDayData_filter;
  PoolHourData: PoolHourData;
  PoolHourData_filter: PoolHourData_filter;
  Pool_filter: Pool_filter;
  PositionSnapshot: PositionSnapshot;
  PositionSnapshot_filter: PositionSnapshot_filter;
  Tick: Tick;
  TickDayData: TickDayData;
  TickDayData_filter: TickDayData_filter;
  TickHourData: TickHourData;
  TickHourData_filter: TickHourData_filter;
  Tick_filter: Tick_filter;
  TokenDayData: TokenDayData;
  TokenDayData_filter: TokenDayData_filter;
  TokenHourData: TokenHourData;
  TokenHourData_filter: TokenHourData_filter;
  UniswapDayData: UniswapDayData;
  UniswapDayData_filter: UniswapDayData_filter;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fund?: Resolver<Maybe<ResolversTypes['Fund']>, ParentType, ContextType, RequireFields<QueryfundArgs, 'id' | 'subgraphError'>>;
  funds?: Resolver<Array<ResolversTypes['Fund']>, ParentType, ContextType, RequireFields<QueryfundsArgs, 'skip' | 'first' | 'subgraphError'>>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionArgs, 'id' | 'subgraphError'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subConstraints?: Resolver<Array<ResolversTypes['SubConstraints']>, ParentType, ContextType, RequireFields<QuerysubConstraintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sub?: Resolver<Maybe<ResolversTypes['Sub']>, ParentType, ContextType, RequireFields<QuerysubArgs, 'id' | 'subgraphError'>>;
  subs?: Resolver<Array<ResolversTypes['Sub']>, ParentType, ContextType, RequireFields<QuerysubsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rule?: Resolver<Maybe<ResolversTypes['Rule']>, ParentType, ContextType, RequireFields<QueryruleArgs, 'id' | 'subgraphError'>>;
  rules?: Resolver<Array<ResolversTypes['Rule']>, ParentType, ContextType, RequireFields<QueryrulesArgs, 'skip' | 'first' | 'subgraphError'>>;
  action?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<QueryactionArgs, 'id' | 'subgraphError'>>;
  actions?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<QueryactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  trigger?: Resolver<Maybe<ResolversTypes['Trigger']>, ParentType, ContextType, RequireFields<QuerytriggerArgs, 'id' | 'subgraphError'>>;
  triggers?: Resolver<Array<ResolversTypes['Trigger']>, ParentType, ContextType, RequireFields<QuerytriggersArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  manager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<QuerymanagerArgs, 'id' | 'subgraphError'>>;
  managers?: Resolver<Array<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<QuerymanagersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  version?: Resolver<Maybe<ResolversTypes['_Version']>, ParentType, ContextType, RequireFields<QueryversionArgs, 'id' | 'subgraphError'>>;
  versions?: Resolver<Array<ResolversTypes['_Version']>, ParentType, ContextType, RequireFields<QueryversionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  factory?: Resolver<Maybe<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryfactoryArgs, 'id' | 'subgraphError'>>;
  factories?: Resolver<Array<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryfactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundleArgs, 'id' | 'subgraphError'>>;
  bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QuerybundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPrice?: Resolver<Maybe<ResolversTypes['TokenPrice']>, ParentType, ContextType, RequireFields<QuerytokenPriceArgs, 'id' | 'subgraphError'>>;
  tokenPrices?: Resolver<Array<ResolversTypes['TokenPrice']>, ParentType, ContextType, RequireFields<QuerytokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPair?: Resolver<Maybe<ResolversTypes['_TokenPair']>, ParentType, ContextType, RequireFields<QuerytokenPairArgs, 'id' | 'subgraphError'>>;
  tokenPairs?: Resolver<Array<ResolversTypes['_TokenPair']>, ParentType, ContextType, RequireFields<QuerytokenPairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: Resolver<Maybe<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairArgs, 'id' | 'subgraphError'>>;
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: Resolver<Maybe<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: Resolver<Maybe<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintArgs, 'id' | 'subgraphError'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QuerymintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: Resolver<Maybe<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnArgs, 'id' | 'subgraphError'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: Resolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourSnapshot?: Resolver<Maybe<ResolversTypes['PairHourSnapshot']>, ParentType, ContextType, RequireFields<QuerypairHourSnapshotArgs, 'id' | 'subgraphError'>>;
  pairHourSnapshots?: Resolver<Array<ResolversTypes['PairHourSnapshot']>, ParentType, ContextType, RequireFields<QuerypairHourSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDaySnapshot?: Resolver<Maybe<ResolversTypes['PairDaySnapshot']>, ParentType, ContextType, RequireFields<QuerypairDaySnapshotArgs, 'id' | 'subgraphError'>>;
  pairDaySnapshots?: Resolver<Array<ResolversTypes['PairDaySnapshot']>, ParentType, ContextType, RequireFields<QuerypairDaySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenHourSnapshot?: Resolver<Maybe<ResolversTypes['TokenHourSnapshot']>, ParentType, ContextType, RequireFields<QuerytokenHourSnapshotArgs, 'id' | 'subgraphError'>>;
  tokenHourSnapshots?: Resolver<Array<ResolversTypes['TokenHourSnapshot']>, ParentType, ContextType, RequireFields<QuerytokenHourSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDaySnapshot?: Resolver<Maybe<ResolversTypes['TokenDaySnapshot']>, ParentType, ContextType, RequireFields<QuerytokenDaySnapshotArgs, 'id' | 'subgraphError'>>;
  tokenDaySnapshots?: Resolver<Array<ResolversTypes['TokenDaySnapshot']>, ParentType, ContextType, RequireFields<QuerytokenDaySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  factoryHourSnapshot?: Resolver<Maybe<ResolversTypes['FactoryHourSnapshot']>, ParentType, ContextType, RequireFields<QueryfactoryHourSnapshotArgs, 'id' | 'subgraphError'>>;
  factoryHourSnapshots?: Resolver<Array<ResolversTypes['FactoryHourSnapshot']>, ParentType, ContextType, RequireFields<QueryfactoryHourSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  factoryDaySnapshot?: Resolver<Maybe<ResolversTypes['FactoryDaySnapshot']>, ParentType, ContextType, RequireFields<QueryfactoryDaySnapshotArgs, 'id' | 'subgraphError'>>;
  factoryDaySnapshots?: Resolver<Array<ResolversTypes['FactoryDaySnapshot']>, ParentType, ContextType, RequireFields<QueryfactoryDaySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolArgs, 'id' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tick?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QuerytickArgs, 'id' | 'subgraphError'>>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QueryticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionSnapshot?: Resolver<Maybe<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotArgs, 'id' | 'subgraphError'>>;
  positionSnapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collect?: Resolver<Maybe<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<QuerycollectArgs, 'id' | 'subgraphError'>>;
  collects?: Resolver<Array<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<QuerycollectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flash?: Resolver<Maybe<ResolversTypes['Flash']>, ParentType, ContextType, RequireFields<QueryflashArgs, 'id' | 'subgraphError'>>;
  flashes?: Resolver<Array<ResolversTypes['Flash']>, ParentType, ContextType, RequireFields<QueryflashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: Resolver<Maybe<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: Resolver<Array<ResolversTypes['UniswapDayData']>, ParentType, ContextType, RequireFields<QueryuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolDayData?: Resolver<Maybe<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<QuerypoolDayDataArgs, 'id' | 'subgraphError'>>;
  poolDayDatas?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<QuerypoolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolHourData?: Resolver<Maybe<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<QuerypoolHourDataArgs, 'id' | 'subgraphError'>>;
  poolHourDatas?: Resolver<Array<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<QuerypoolHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickHourData?: Resolver<Maybe<ResolversTypes['TickHourData']>, ParentType, ContextType, RequireFields<QuerytickHourDataArgs, 'id' | 'subgraphError'>>;
  tickHourDatas?: Resolver<Array<ResolversTypes['TickHourData']>, ParentType, ContextType, RequireFields<QuerytickHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickDayData?: Resolver<Maybe<ResolversTypes['TickDayData']>, ParentType, ContextType, RequireFields<QuerytickDayDataArgs, 'id' | 'subgraphError'>>;
  tickDayDatas?: Resolver<Array<ResolversTypes['TickDayData']>, ParentType, ContextType, RequireFields<QuerytickDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: Resolver<Maybe<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QuerytokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenHourData?: Resolver<Maybe<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<QuerytokenHourDataArgs, 'id' | 'subgraphError'>>;
  tokenHourDatas?: Resolver<Array<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<QuerytokenHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  fund?: SubscriptionResolver<Maybe<ResolversTypes['Fund']>, "fund", ParentType, ContextType, RequireFields<SubscriptionfundArgs, 'id' | 'subgraphError'>>;
  funds?: SubscriptionResolver<Array<ResolversTypes['Fund']>, "funds", ParentType, ContextType, RequireFields<SubscriptionfundsArgs, 'skip' | 'first' | 'subgraphError'>>;
  position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionpositionArgs, 'id' | 'subgraphError'>>;
  positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionpositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  subConstraints?: SubscriptionResolver<Array<ResolversTypes['SubConstraints']>, "subConstraints", ParentType, ContextType, RequireFields<SubscriptionsubConstraintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sub?: SubscriptionResolver<Maybe<ResolversTypes['Sub']>, "sub", ParentType, ContextType, RequireFields<SubscriptionsubArgs, 'id' | 'subgraphError'>>;
  subs?: SubscriptionResolver<Array<ResolversTypes['Sub']>, "subs", ParentType, ContextType, RequireFields<SubscriptionsubsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rule?: SubscriptionResolver<Maybe<ResolversTypes['Rule']>, "rule", ParentType, ContextType, RequireFields<SubscriptionruleArgs, 'id' | 'subgraphError'>>;
  rules?: SubscriptionResolver<Array<ResolversTypes['Rule']>, "rules", ParentType, ContextType, RequireFields<SubscriptionrulesArgs, 'skip' | 'first' | 'subgraphError'>>;
  action?: SubscriptionResolver<Maybe<ResolversTypes['Action']>, "action", ParentType, ContextType, RequireFields<SubscriptionactionArgs, 'id' | 'subgraphError'>>;
  actions?: SubscriptionResolver<Array<ResolversTypes['Action']>, "actions", ParentType, ContextType, RequireFields<SubscriptionactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  trigger?: SubscriptionResolver<Maybe<ResolversTypes['Trigger']>, "trigger", ParentType, ContextType, RequireFields<SubscriptiontriggerArgs, 'id' | 'subgraphError'>>;
  triggers?: SubscriptionResolver<Array<ResolversTypes['Trigger']>, "triggers", ParentType, ContextType, RequireFields<SubscriptiontriggersArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  manager?: SubscriptionResolver<Maybe<ResolversTypes['Manager']>, "manager", ParentType, ContextType, RequireFields<SubscriptionmanagerArgs, 'id' | 'subgraphError'>>;
  managers?: SubscriptionResolver<Array<ResolversTypes['Manager']>, "managers", ParentType, ContextType, RequireFields<SubscriptionmanagersArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  version?: SubscriptionResolver<Maybe<ResolversTypes['_Version']>, "version", ParentType, ContextType, RequireFields<SubscriptionversionArgs, 'id' | 'subgraphError'>>;
  versions?: SubscriptionResolver<Array<ResolversTypes['_Version']>, "versions", ParentType, ContextType, RequireFields<SubscriptionversionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  factory?: SubscriptionResolver<Maybe<ResolversTypes['Factory']>, "factory", ParentType, ContextType, RequireFields<SubscriptionfactoryArgs, 'id' | 'subgraphError'>>;
  factories?: SubscriptionResolver<Array<ResolversTypes['Factory']>, "factories", ParentType, ContextType, RequireFields<SubscriptionfactoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "bundle", ParentType, ContextType, RequireFields<SubscriptionbundleArgs, 'id' | 'subgraphError'>>;
  bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "bundles", ParentType, ContextType, RequireFields<SubscriptionbundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPrice?: SubscriptionResolver<Maybe<ResolversTypes['TokenPrice']>, "tokenPrice", ParentType, ContextType, RequireFields<SubscriptiontokenPriceArgs, 'id' | 'subgraphError'>>;
  tokenPrices?: SubscriptionResolver<Array<ResolversTypes['TokenPrice']>, "tokenPrices", ParentType, ContextType, RequireFields<SubscriptiontokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPair?: SubscriptionResolver<Maybe<ResolversTypes['_TokenPair']>, "tokenPair", ParentType, ContextType, RequireFields<SubscriptiontokenPairArgs, 'id' | 'subgraphError'>>;
  tokenPairs?: SubscriptionResolver<Array<ResolversTypes['_TokenPair']>, "tokenPairs", ParentType, ContextType, RequireFields<SubscriptiontokenPairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pair?: SubscriptionResolver<Maybe<ResolversTypes['Pair']>, "pair", ParentType, ContextType, RequireFields<SubscriptionpairArgs, 'id' | 'subgraphError'>>;
  pairs?: SubscriptionResolver<Array<ResolversTypes['Pair']>, "pairs", ParentType, ContextType, RequireFields<SubscriptionpairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPosition?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPosition']>, "liquidityPosition", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>>;
  liquidityPositions?: SubscriptionResolver<Array<ResolversTypes['LiquidityPosition']>, "liquidityPositions", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  mint?: SubscriptionResolver<Maybe<ResolversTypes['Mint']>, "mint", ParentType, ContextType, RequireFields<SubscriptionmintArgs, 'id' | 'subgraphError'>>;
  mints?: SubscriptionResolver<Array<ResolversTypes['Mint']>, "mints", ParentType, ContextType, RequireFields<SubscriptionmintsArgs, 'skip' | 'first' | 'subgraphError'>>;
  burn?: SubscriptionResolver<Maybe<ResolversTypes['Burn']>, "burn", ParentType, ContextType, RequireFields<SubscriptionburnArgs, 'id' | 'subgraphError'>>;
  burns?: SubscriptionResolver<Array<ResolversTypes['Burn']>, "burns", ParentType, ContextType, RequireFields<SubscriptionburnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPositionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPositionSnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, "liquidityPositionSnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairHourSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PairHourSnapshot']>, "pairHourSnapshot", ParentType, ContextType, RequireFields<SubscriptionpairHourSnapshotArgs, 'id' | 'subgraphError'>>;
  pairHourSnapshots?: SubscriptionResolver<Array<ResolversTypes['PairHourSnapshot']>, "pairHourSnapshots", ParentType, ContextType, RequireFields<SubscriptionpairHourSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pairDaySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PairDaySnapshot']>, "pairDaySnapshot", ParentType, ContextType, RequireFields<SubscriptionpairDaySnapshotArgs, 'id' | 'subgraphError'>>;
  pairDaySnapshots?: SubscriptionResolver<Array<ResolversTypes['PairDaySnapshot']>, "pairDaySnapshots", ParentType, ContextType, RequireFields<SubscriptionpairDaySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenHourSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['TokenHourSnapshot']>, "tokenHourSnapshot", ParentType, ContextType, RequireFields<SubscriptiontokenHourSnapshotArgs, 'id' | 'subgraphError'>>;
  tokenHourSnapshots?: SubscriptionResolver<Array<ResolversTypes['TokenHourSnapshot']>, "tokenHourSnapshots", ParentType, ContextType, RequireFields<SubscriptiontokenHourSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDaySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['TokenDaySnapshot']>, "tokenDaySnapshot", ParentType, ContextType, RequireFields<SubscriptiontokenDaySnapshotArgs, 'id' | 'subgraphError'>>;
  tokenDaySnapshots?: SubscriptionResolver<Array<ResolversTypes['TokenDaySnapshot']>, "tokenDaySnapshots", ParentType, ContextType, RequireFields<SubscriptiontokenDaySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  factoryHourSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['FactoryHourSnapshot']>, "factoryHourSnapshot", ParentType, ContextType, RequireFields<SubscriptionfactoryHourSnapshotArgs, 'id' | 'subgraphError'>>;
  factoryHourSnapshots?: SubscriptionResolver<Array<ResolversTypes['FactoryHourSnapshot']>, "factoryHourSnapshots", ParentType, ContextType, RequireFields<SubscriptionfactoryHourSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  factoryDaySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['FactoryDaySnapshot']>, "factoryDaySnapshot", ParentType, ContextType, RequireFields<SubscriptionfactoryDaySnapshotArgs, 'id' | 'subgraphError'>>;
  factoryDaySnapshots?: SubscriptionResolver<Array<ResolversTypes['FactoryDaySnapshot']>, "factoryDaySnapshots", ParentType, ContextType, RequireFields<SubscriptionfactoryDaySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionpoolArgs, 'id' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionpoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tick?: SubscriptionResolver<Maybe<ResolversTypes['Tick']>, "tick", ParentType, ContextType, RequireFields<SubscriptiontickArgs, 'id' | 'subgraphError'>>;
  ticks?: SubscriptionResolver<Array<ResolversTypes['Tick']>, "ticks", ParentType, ContextType, RequireFields<SubscriptionticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PositionSnapshot']>, "positionSnapshot", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotArgs, 'id' | 'subgraphError'>>;
  positionSnapshots?: SubscriptionResolver<Array<ResolversTypes['PositionSnapshot']>, "positionSnapshots", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collect?: SubscriptionResolver<Maybe<ResolversTypes['Collect']>, "collect", ParentType, ContextType, RequireFields<SubscriptioncollectArgs, 'id' | 'subgraphError'>>;
  collects?: SubscriptionResolver<Array<ResolversTypes['Collect']>, "collects", ParentType, ContextType, RequireFields<SubscriptioncollectsArgs, 'skip' | 'first' | 'subgraphError'>>;
  flash?: SubscriptionResolver<Maybe<ResolversTypes['Flash']>, "flash", ParentType, ContextType, RequireFields<SubscriptionflashArgs, 'id' | 'subgraphError'>>;
  flashes?: SubscriptionResolver<Array<ResolversTypes['Flash']>, "flashes", ParentType, ContextType, RequireFields<SubscriptionflashesArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapDayData?: SubscriptionResolver<Maybe<ResolversTypes['UniswapDayData']>, "uniswapDayData", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDataArgs, 'id' | 'subgraphError'>>;
  uniswapDayDatas?: SubscriptionResolver<Array<ResolversTypes['UniswapDayData']>, "uniswapDayDatas", ParentType, ContextType, RequireFields<SubscriptionuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolDayData?: SubscriptionResolver<Maybe<ResolversTypes['PoolDayData']>, "poolDayData", ParentType, ContextType, RequireFields<SubscriptionpoolDayDataArgs, 'id' | 'subgraphError'>>;
  poolDayDatas?: SubscriptionResolver<Array<ResolversTypes['PoolDayData']>, "poolDayDatas", ParentType, ContextType, RequireFields<SubscriptionpoolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolHourData?: SubscriptionResolver<Maybe<ResolversTypes['PoolHourData']>, "poolHourData", ParentType, ContextType, RequireFields<SubscriptionpoolHourDataArgs, 'id' | 'subgraphError'>>;
  poolHourDatas?: SubscriptionResolver<Array<ResolversTypes['PoolHourData']>, "poolHourDatas", ParentType, ContextType, RequireFields<SubscriptionpoolHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickHourData?: SubscriptionResolver<Maybe<ResolversTypes['TickHourData']>, "tickHourData", ParentType, ContextType, RequireFields<SubscriptiontickHourDataArgs, 'id' | 'subgraphError'>>;
  tickHourDatas?: SubscriptionResolver<Array<ResolversTypes['TickHourData']>, "tickHourDatas", ParentType, ContextType, RequireFields<SubscriptiontickHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tickDayData?: SubscriptionResolver<Maybe<ResolversTypes['TickDayData']>, "tickDayData", ParentType, ContextType, RequireFields<SubscriptiontickDayDataArgs, 'id' | 'subgraphError'>>;
  tickDayDatas?: SubscriptionResolver<Array<ResolversTypes['TickDayData']>, "tickDayDatas", ParentType, ContextType, RequireFields<SubscriptiontickDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenDayData?: SubscriptionResolver<Maybe<ResolversTypes['TokenDayData']>, "tokenDayData", ParentType, ContextType, RequireFields<SubscriptiontokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: SubscriptionResolver<Array<ResolversTypes['TokenDayData']>, "tokenDayDatas", ParentType, ContextType, RequireFields<SubscriptiontokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenHourData?: SubscriptionResolver<Maybe<ResolversTypes['TokenHourData']>, "tokenHourData", ParentType, ContextType, RequireFields<SubscriptiontokenHourDataArgs, 'id' | 'subgraphError'>>;
  tokenHourDatas?: SubscriptionResolver<Array<ResolversTypes['TokenHourData']>, "tokenHourDatas", ParentType, ContextType, RequireFields<SubscriptiontokenHourDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type ActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  callee?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  input_tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Actioninput_tokensArgs, 'skip' | 'first'>>;
  output_tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Actionoutput_tokensArgs, 'skip' | 'first'>>;
  rule?: Resolver<ResolversTypes['Rule'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type FundResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fund'] = ResolversParentTypes['Fund']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manager?: Resolver<ResolversTypes['Manager'], ParentType, ContextType>;
  creation_timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  closed_timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  subscriptions?: Resolver<Array<ResolversTypes['Sub']>, ParentType, ContextType, RequireFields<FundsubscriptionsArgs, 'skip' | 'first'>>;
  total_collateral_raised?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  manager_fee_percentage?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  subscription_constraints?: Resolver<ResolversTypes['SubConstraints'], ParentType, ContextType>;
  rules?: Resolver<Array<ResolversTypes['Rule']>, ParentType, ContextType, RequireFields<FundrulesArgs, 'skip' | 'first'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<FundpositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManagerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  socialHandle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chatroomInvite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aboutText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  strategyText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  funds?: Resolver<Array<ResolversTypes['Fund']>, ParentType, ContextType, RequireFields<ManagerfundsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  next_actions?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  fund?: Resolver<ResolversTypes['Fund'], ParentType, ContextType>;
  creation_timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  closed_timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RuleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Rule'] = ResolversParentTypes['Rule']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  creation_timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  activation_timestamps?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  deactivation_timestamps?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  execution_timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  redemption_timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  actions?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<RuleactionsArgs, 'skip' | 'first'>>;
  triggers?: Resolver<Array<ResolversTypes['Trigger']>, ParentType, ContextType, RequireFields<RuletriggersArgs, 'skip' | 'first'>>;
  outputs?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  collaterals?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  fund?: Resolver<ResolversTypes['Fund'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Sub'] = ResolversParentTypes['Sub']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fund?: Resolver<ResolversTypes['Fund'], ParentType, ContextType>;
  deposit_timestamps?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  deposit_amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  withdraw_timestamps?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubConstraintsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubConstraints'] = ResolversParentTypes['SubConstraints']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minCollateralPerSub?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maxCollateralPerSub?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  minCollateralTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maxCollateralTotal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lockin?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fund?: Resolver<ResolversTypes['Fund'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nft_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  input_of?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<Tokeninput_ofArgs, 'skip' | 'first'>>;
  output_of?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<Tokenoutput_ofArgs, 'skip' | 'first'>>;
  price?: Resolver<ResolversTypes['TokenPrice'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbolSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  decimalsSuccess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pairCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pairs?: Resolver<Array<ResolversTypes['_TokenPair']>, ParentType, ContextType, RequireFields<TokenpairsArgs, 'skip' | 'first'>>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  derivedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  whitelistPools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<TokenwhitelistPoolsArgs, 'skip' | 'first'>>;
  tokenDayData?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<TokentokenDayDataArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TriggerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Trigger'] = ResolversParentTypes['Trigger']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  callee?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  create_time_params?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['Rule'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nativePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  ethPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BurnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Factory'] = ResolversParentTypes['Factory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PairType'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pairCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalFeesETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETHUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryDaySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FactoryDaySnapshot'] = ResolversParentTypes['FactoryDaySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['Factory'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FactoryHourSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FactoryHourSnapshot'] = ResolversParentTypes['FactoryHourSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['Factory'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPosition'] = ResolversParentTypes['LiquidityPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPositionSnapshot'] = ResolversParentTypes['LiquidityPositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityPosition?: Resolver<ResolversTypes['LiquidityPosition'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token0PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityTokenTotalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MintResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pair'] = ResolversParentTypes['Pair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PairType'], ParentType, ContextType>;
  swapFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  twapEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  _cacheUpdatedAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  _cache_reserve0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  _cache_reserve1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  _cache_token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  _cache_token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  trackedLiquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  aprUpdatedAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityPositions?: Resolver<Array<ResolversTypes['LiquidityPosition']>, ParentType, ContextType, RequireFields<PairliquidityPositionsArgs, 'skip' | 'first'>>;
  liquidityPositionSnapshots?: Resolver<Array<ResolversTypes['LiquidityPositionSnapshot']>, ParentType, ContextType, RequireFields<PairliquidityPositionSnapshotsArgs, 'skip' | 'first'>>;
  hourSnapshots?: Resolver<Array<ResolversTypes['PairHourSnapshot']>, ParentType, ContextType, RequireFields<PairhourSnapshotsArgs, 'skip' | 'first'>>;
  daySnapshots?: Resolver<Array<ResolversTypes['PairDaySnapshot']>, ParentType, ContextType, RequireFields<PairdaySnapshotsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairDaySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairDaySnapshot'] = ResolversParentTypes['PairDaySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PairHourSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PairHourSnapshot'] = ResolversParentTypes['PairHourSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  tokenOut?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amountIn?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountOut?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDaySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenDaySnapshot'] = ResolversParentTypes['TokenDaySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenHourSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenHourSnapshot'] = ResolversParentTypes['TokenHourSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenPrice'] = ResolversParentTypes['TokenPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  derivedNative?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lastUsdPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pricedOffToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  pricedOffPair?: Resolver<Maybe<ResolversTypes['Pair']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  gasLimit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<Maybe<ResolversTypes['Mint']>>, ParentType, ContextType, RequireFields<TransactionmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<Maybe<ResolversTypes['Burn']>>, ParentType, ContextType, RequireFields<TransactionburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<Maybe<ResolversTypes['Swap']>>, ParentType, ContextType, RequireFields<TransactionswapsArgs, 'skip' | 'first'>>;
  createdAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  flashed?: Resolver<Array<Maybe<ResolversTypes['Flash']>>, ParentType, ContextType, RequireFields<TransactionflashedArgs, 'skip' | 'first'>>;
  collects?: Resolver<Array<Maybe<ResolversTypes['Collect']>>, ParentType, ContextType, RequireFields<TransactioncollectsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lpSnapshotsCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityPositions?: Resolver<Maybe<Array<ResolversTypes['LiquidityPosition']>>, ParentType, ContextType, RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _TokenPairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_TokenPair'] = ResolversParentTypes['_TokenPair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _VersionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Version'] = ResolversParentTypes['_Version']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Collect'] = ResolversParentTypes['Collect']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlashResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Flash'] = ResolversParentTypes['Flash']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount0Paid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1Paid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  feeTier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  observationIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  poolHourData?: Resolver<Array<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<PoolpoolHourDataArgs, 'skip' | 'first'>>;
  poolDayData?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<PoolpoolDayDataArgs, 'skip' | 'first'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<PoolmintsArgs, 'skip' | 'first'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<PoolburnsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<PoolswapsArgs, 'skip' | 'first'>>;
  collects?: Resolver<Array<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<PoolcollectsArgs, 'skip' | 'first'>>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<PoolticksArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolDayData'] = ResolversParentTypes['PoolDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolHourData'] = ResolversParentTypes['PoolHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionSnapshot'] = ResolversParentTypes['PositionSnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tick'] = ResolversParentTypes['Tick']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tickIdx?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  price0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  price1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TickDayData'] = ResolversParentTypes['TickDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TickHourData'] = ResolversParentTypes['TickHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenDayData'] = ResolversParentTypes['TokenDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenHourDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenHourData'] = ResolversParentTypes['TokenHourData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapDayData'] = ResolversParentTypes['UniswapDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Action?: ActionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Fund?: FundResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Rule?: RuleResolvers<ContextType>;
  Sub?: SubResolvers<ContextType>;
  SubConstraints?: SubConstraintsResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Trigger?: TriggerResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Bundle?: BundleResolvers<ContextType>;
  Burn?: BurnResolvers<ContextType>;
  Factory?: FactoryResolvers<ContextType>;
  FactoryDaySnapshot?: FactoryDaySnapshotResolvers<ContextType>;
  FactoryHourSnapshot?: FactoryHourSnapshotResolvers<ContextType>;
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>;
  LiquidityPositionSnapshot?: LiquidityPositionSnapshotResolvers<ContextType>;
  Mint?: MintResolvers<ContextType>;
  Pair?: PairResolvers<ContextType>;
  PairDaySnapshot?: PairDaySnapshotResolvers<ContextType>;
  PairHourSnapshot?: PairHourSnapshotResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  TokenDaySnapshot?: TokenDaySnapshotResolvers<ContextType>;
  TokenHourSnapshot?: TokenHourSnapshotResolvers<ContextType>;
  TokenPrice?: TokenPriceResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _TokenPair?: _TokenPairResolvers<ContextType>;
  _Version?: _VersionResolvers<ContextType>;
  Collect?: CollectResolvers<ContextType>;
  Flash?: FlashResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolDayData?: PoolDayDataResolvers<ContextType>;
  PoolHourData?: PoolHourDataResolvers<ContextType>;
  PositionSnapshot?: PositionSnapshotResolvers<ContextType>;
  Tick?: TickResolvers<ContextType>;
  TickDayData?: TickDayDataResolvers<ContextType>;
  TickHourData?: TickHourDataResolvers<ContextType>;
  TokenDayData?: TokenDayDataResolvers<ContextType>;
  TokenHourData?: TokenHourDataResolvers<ContextType>;
  UniswapDayData?: UniswapDayDataResolvers<ContextType>;
}>;


export type MeshContext = BarrenWuffetTypes.Context & SushiswapTypes.Context & UniswapTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/barren-wuffet/introspectionSchema":
      return import("./sources/barren-wuffet/introspectionSchema") as T;
    
    case ".graphclient/sources/sushiswap/introspectionSchema":
      return import("./sources/sushiswap/introspectionSchema") as T;
    
    case ".graphclient/sources/uniswap/introspectionSchema":
      return import("./sources/uniswap/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const barrenWuffetTransforms = [];
const sushiswapTransforms = [];
const uniswapTransforms = [];
const additionalTypeDefs = [] as any[];
const barrenWuffetHandler = new GraphqlHandler({
              name: "barren-wuffet",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/psyf/bw-goerli-v1-0"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("barren-wuffet"),
              logger: logger.child("barren-wuffet"),
              importFn,
            });
const sushiswapHandler = new GraphqlHandler({
              name: "sushiswap",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/sushiswap-subgraphs/sushiswap-arbitrum"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("sushiswap"),
              logger: logger.child("sushiswap"),
              importFn,
            });
const uniswapHandler = new GraphqlHandler({
              name: "uniswap",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-gorli"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswap"),
              logger: logger.child("uniswap"),
              importFn,
            });
sources[0] = {
          name: 'barren-wuffet',
          handler: barrenWuffetHandler,
          transforms: barrenWuffetTransforms
        }
sources[1] = {
          name: 'sushiswap',
          handler: sushiswapHandler,
          transforms: sushiswapTransforms
        }
sources[2] = {
          name: 'uniswap',
          handler: uniswapHandler,
          transforms: uniswapTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));