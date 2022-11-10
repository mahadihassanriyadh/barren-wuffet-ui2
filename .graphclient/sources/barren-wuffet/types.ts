// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BarrenWuffetTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** null **/
  fund: InContextSdkMethod<Query['fund'], QueryfundArgs, MeshContext>,
  /** null **/
  funds: InContextSdkMethod<Query['funds'], QueryfundsArgs, MeshContext>,
  /** null **/
  position: InContextSdkMethod<Query['position'], QuerypositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Query['positions'], QuerypositionsArgs, MeshContext>,
  /** null **/
  subConstraints: InContextSdkMethod<Query['subConstraints'], QuerysubConstraintsArgs, MeshContext>,
  /** null **/
  sub: InContextSdkMethod<Query['sub'], QuerysubArgs, MeshContext>,
  /** null **/
  subs: InContextSdkMethod<Query['subs'], QuerysubsArgs, MeshContext>,
  /** null **/
  rule: InContextSdkMethod<Query['rule'], QueryruleArgs, MeshContext>,
  /** null **/
  rules: InContextSdkMethod<Query['rules'], QueryrulesArgs, MeshContext>,
  /** null **/
  action: InContextSdkMethod<Query['action'], QueryactionArgs, MeshContext>,
  /** null **/
  actions: InContextSdkMethod<Query['actions'], QueryactionsArgs, MeshContext>,
  /** null **/
  trigger: InContextSdkMethod<Query['trigger'], QuerytriggerArgs, MeshContext>,
  /** null **/
  triggers: InContextSdkMethod<Query['triggers'], QuerytriggersArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  manager: InContextSdkMethod<Query['manager'], QuerymanagerArgs, MeshContext>,
  /** null **/
  managers: InContextSdkMethod<Query['managers'], QuerymanagersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  fund: InContextSdkMethod<Subscription['fund'], SubscriptionfundArgs, MeshContext>,
  /** null **/
  funds: InContextSdkMethod<Subscription['funds'], SubscriptionfundsArgs, MeshContext>,
  /** null **/
  position: InContextSdkMethod<Subscription['position'], SubscriptionpositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Subscription['positions'], SubscriptionpositionsArgs, MeshContext>,
  /** null **/
  subConstraints: InContextSdkMethod<Subscription['subConstraints'], SubscriptionsubConstraintsArgs, MeshContext>,
  /** null **/
  sub: InContextSdkMethod<Subscription['sub'], SubscriptionsubArgs, MeshContext>,
  /** null **/
  subs: InContextSdkMethod<Subscription['subs'], SubscriptionsubsArgs, MeshContext>,
  /** null **/
  rule: InContextSdkMethod<Subscription['rule'], SubscriptionruleArgs, MeshContext>,
  /** null **/
  rules: InContextSdkMethod<Subscription['rules'], SubscriptionrulesArgs, MeshContext>,
  /** null **/
  action: InContextSdkMethod<Subscription['action'], SubscriptionactionArgs, MeshContext>,
  /** null **/
  actions: InContextSdkMethod<Subscription['actions'], SubscriptionactionsArgs, MeshContext>,
  /** null **/
  trigger: InContextSdkMethod<Subscription['trigger'], SubscriptiontriggerArgs, MeshContext>,
  /** null **/
  triggers: InContextSdkMethod<Subscription['triggers'], SubscriptiontriggersArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  manager: InContextSdkMethod<Subscription['manager'], SubscriptionmanagerArgs, MeshContext>,
  /** null **/
  managers: InContextSdkMethod<Subscription['managers'], SubscriptionmanagersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["barren-wuffet"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
