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
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BarrenWuffetTypes } from './sources/barren-wuffet/types';
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
};

export type Position_orderBy =
  | 'id'
  | 'next_actions'
  | 'fund'
  | 'creation_timestamp'
  | 'closed_timestamp';

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

export type Token = {
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  type: Scalars['BigInt'];
  nft_id?: Maybe<Scalars['BigInt']>;
  input_of: Array<Action>;
  output_of: Array<Action>;
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
};

export type Token_orderBy =
  | 'id'
  | 'address'
  | 'type'
  | 'nft_id'
  | 'input_of'
  | 'output_of';

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
  Query: ResolverTypeWrapper<{}>;
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
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  Trigger: ResolverTypeWrapper<Trigger>;
  Trigger_filter: Trigger_filter;
  Trigger_orderBy: Trigger_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
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
  Query: {};
  Rule: Rule;
  Rule_filter: Rule_filter;
  String: Scalars['String'];
  Sub: Sub;
  SubConstraints: SubConstraints;
  SubConstraints_filter: SubConstraints_filter;
  Sub_filter: Sub_filter;
  Subscription: {};
  Token: Token;
  Token_filter: Token_filter;
  Trigger: Trigger;
  Trigger_filter: Trigger_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nft_id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  input_of?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<Tokeninput_ofArgs, 'skip' | 'first'>>;
  output_of?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<Tokenoutput_ofArgs, 'skip' | 'first'>>;
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

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Action?: ActionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Fund?: FundResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Rule?: RuleResolvers<ContextType>;
  Sub?: SubResolvers<ContextType>;
  SubConstraints?: SubConstraintsResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  Trigger?: TriggerResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BarrenWuffetTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/barren-wuffet/introspectionSchema":
      return import("./sources/barren-wuffet/introspectionSchema") as T;
    
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
sources[0] = {
          name: 'barren-wuffet',
          handler: barrenWuffetHandler,
          transforms: barrenWuffetTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
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