// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SushiswapTypes {
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

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/**  Bundle - should only ever be one created */
export type Bundle = {
  /**  hardcoded to '1' */
  id: Scalars['ID'];
  /**  Price of native  */
  nativePrice: Scalars['BigDecimal'];
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
};

export type Bundle_orderBy =
  | 'id'
  | 'nativePrice';

export type Burn = {
  /**  transaction.id:transaction.burns.length  */
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['String']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  to?: Maybe<Scalars['String']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  complete: Scalars['Boolean'];
  feeTo?: Maybe<Scalars['String']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
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
  | 'feeLiquidity';

export type Factory = {
  /**  Contract address  */
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
  | 'userCount';

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
  /**  transaction.id:transaction.mints.length  */
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  to: Scalars['String'];
  liquidity: Scalars['BigDecimal'];
  sender?: Maybe<Scalars['Bytes']>;
  amount0?: Maybe<Scalars['BigDecimal']>;
  amount1?: Maybe<Scalars['BigDecimal']>;
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD?: Maybe<Scalars['BigDecimal']>;
  feeTo?: Maybe<Scalars['Bytes']>;
  feeLiquidity?: Maybe<Scalars['BigDecimal']>;
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
  | 'feeLiquidity';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

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

export type Query = {
  version?: Maybe<_Version>;
  versions: Array<_Version>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  version?: Maybe<_Version>;
  versions: Array<_Version>;
  factory?: Maybe<Factory>;
  factories: Array<Factory>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
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
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = {
  id: Scalars['ID'];
  transaction: Transaction;
  timestamp: Scalars['BigInt'];
  pair: Pair;
  sender: Scalars['String'];
  tokenIn: Token;
  tokenOut: Token;
  amountIn: Scalars['BigDecimal'];
  amountOut: Scalars['BigDecimal'];
  to: Scalars['String'];
  logIndex?: Maybe<Scalars['BigInt']>;
  amountUSD: Scalars['BigDecimal'];
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
  | 'amountUSD';

export type Token = {
  /**  Token address  */
  id: Scalars['ID'];
  /**  Token Price  */
  price: TokenPrice;
  /**  Symbol of the token  */
  symbol: Scalars['String'];
  /**  if symbol was successfully retrieved  */
  symbolSuccess: Scalars['Boolean'];
  /**  Name of the token  */
  name: Scalars['String'];
  /**  if name was successfully retrieved  */
  nameSuccess: Scalars['Boolean'];
  /**  Decimals of the token  */
  decimals: Scalars['BigInt'];
  /**  if decimals were successfully retrieved  */
  decimalsSuccess: Scalars['Boolean'];
  /**  Liquidity  */
  liquidity: Scalars['BigInt'];
  /**  Liquidity in native  */
  liquidityNative: Scalars['BigDecimal'];
  /**  Liquidity in USD  */
  liquidityUSD: Scalars['BigDecimal'];
  /**  Volume  */
  volume: Scalars['BigDecimal'];
  /**  Volume in native  */
  volumeNative: Scalars['BigDecimal'];
  /**  Volume in USD  */
  volumeUSD: Scalars['BigDecimal'];
  /**  Fee in USD  */
  feesNative: Scalars['BigDecimal'];
  /**  Volume in USD  */
  feesUSD: Scalars['BigDecimal'];
  /**  Count of all the transactions  */
  txCount: Scalars['BigInt'];
  /**  Count of all the pairs  */
  pairCount: Scalars['BigInt'];
  /**  All pairs where this token is involved in  */
  pairs: Array<_TokenPair>;
};


export type TokenpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_TokenPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_TokenPair_filter>;
};

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

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
};

export type Token_orderBy =
  | 'id'
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
  | 'pairs';

export type Transaction = {
  /**  Tx hash  */
  id: Scalars['ID'];
  gasLimit: Scalars['BigInt'];
  gasPrice: Scalars['BigInt'];
  mints: Array<Mint>;
  burns: Array<Burn>;
  swaps: Array<Swap>;
  createdAtBlock: Scalars['BigInt'];
  createdAtTimestamp: Scalars['BigInt'];
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
};

export type Transaction_orderBy =
  | 'id'
  | 'gasLimit'
  | 'gasPrice'
  | 'mints'
  | 'burns'
  | 'swaps'
  | 'createdAtBlock'
  | 'createdAtTimestamp';

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

  export type QuerySdk = {
      /** null **/
  version: InContextSdkMethod<Query['version'], QueryversionArgs, MeshContext>,
  /** null **/
  versions: InContextSdkMethod<Query['versions'], QueryversionsArgs, MeshContext>,
  /** null **/
  factory: InContextSdkMethod<Query['factory'], QueryfactoryArgs, MeshContext>,
  /** null **/
  factories: InContextSdkMethod<Query['factories'], QueryfactoriesArgs, MeshContext>,
  /** null **/
  bundle: InContextSdkMethod<Query['bundle'], QuerybundleArgs, MeshContext>,
  /** null **/
  bundles: InContextSdkMethod<Query['bundles'], QuerybundlesArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<Query['tokenPrice'], QuerytokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<Query['tokenPrices'], QuerytokenPricesArgs, MeshContext>,
  /** null **/
  tokenPair: InContextSdkMethod<Query['tokenPair'], QuerytokenPairArgs, MeshContext>,
  /** null **/
  tokenPairs: InContextSdkMethod<Query['tokenPairs'], QuerytokenPairsArgs, MeshContext>,
  /** null **/
  pair: InContextSdkMethod<Query['pair'], QuerypairArgs, MeshContext>,
  /** null **/
  pairs: InContextSdkMethod<Query['pairs'], QuerypairsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Query['liquidityPosition'], QueryliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Query['liquidityPositions'], QueryliquidityPositionsArgs, MeshContext>,
  /** null **/
  mint: InContextSdkMethod<Query['mint'], QuerymintArgs, MeshContext>,
  /** null **/
  mints: InContextSdkMethod<Query['mints'], QuerymintsArgs, MeshContext>,
  /** null **/
  burn: InContextSdkMethod<Query['burn'], QueryburnArgs, MeshContext>,
  /** null **/
  burns: InContextSdkMethod<Query['burns'], QueryburnsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshot: InContextSdkMethod<Query['liquidityPositionSnapshot'], QueryliquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshots: InContextSdkMethod<Query['liquidityPositionSnapshots'], QueryliquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  pairHourSnapshot: InContextSdkMethod<Query['pairHourSnapshot'], QuerypairHourSnapshotArgs, MeshContext>,
  /** null **/
  pairHourSnapshots: InContextSdkMethod<Query['pairHourSnapshots'], QuerypairHourSnapshotsArgs, MeshContext>,
  /** null **/
  pairDaySnapshot: InContextSdkMethod<Query['pairDaySnapshot'], QuerypairDaySnapshotArgs, MeshContext>,
  /** null **/
  pairDaySnapshots: InContextSdkMethod<Query['pairDaySnapshots'], QuerypairDaySnapshotsArgs, MeshContext>,
  /** null **/
  tokenHourSnapshot: InContextSdkMethod<Query['tokenHourSnapshot'], QuerytokenHourSnapshotArgs, MeshContext>,
  /** null **/
  tokenHourSnapshots: InContextSdkMethod<Query['tokenHourSnapshots'], QuerytokenHourSnapshotsArgs, MeshContext>,
  /** null **/
  tokenDaySnapshot: InContextSdkMethod<Query['tokenDaySnapshot'], QuerytokenDaySnapshotArgs, MeshContext>,
  /** null **/
  tokenDaySnapshots: InContextSdkMethod<Query['tokenDaySnapshots'], QuerytokenDaySnapshotsArgs, MeshContext>,
  /** null **/
  factoryHourSnapshot: InContextSdkMethod<Query['factoryHourSnapshot'], QueryfactoryHourSnapshotArgs, MeshContext>,
  /** null **/
  factoryHourSnapshots: InContextSdkMethod<Query['factoryHourSnapshots'], QueryfactoryHourSnapshotsArgs, MeshContext>,
  /** null **/
  factoryDaySnapshot: InContextSdkMethod<Query['factoryDaySnapshot'], QueryfactoryDaySnapshotArgs, MeshContext>,
  /** null **/
  factoryDaySnapshots: InContextSdkMethod<Query['factoryDaySnapshots'], QueryfactoryDaySnapshotsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  version: InContextSdkMethod<Subscription['version'], SubscriptionversionArgs, MeshContext>,
  /** null **/
  versions: InContextSdkMethod<Subscription['versions'], SubscriptionversionsArgs, MeshContext>,
  /** null **/
  factory: InContextSdkMethod<Subscription['factory'], SubscriptionfactoryArgs, MeshContext>,
  /** null **/
  factories: InContextSdkMethod<Subscription['factories'], SubscriptionfactoriesArgs, MeshContext>,
  /** null **/
  bundle: InContextSdkMethod<Subscription['bundle'], SubscriptionbundleArgs, MeshContext>,
  /** null **/
  bundles: InContextSdkMethod<Subscription['bundles'], SubscriptionbundlesArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<Subscription['tokenPrice'], SubscriptiontokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<Subscription['tokenPrices'], SubscriptiontokenPricesArgs, MeshContext>,
  /** null **/
  tokenPair: InContextSdkMethod<Subscription['tokenPair'], SubscriptiontokenPairArgs, MeshContext>,
  /** null **/
  tokenPairs: InContextSdkMethod<Subscription['tokenPairs'], SubscriptiontokenPairsArgs, MeshContext>,
  /** null **/
  pair: InContextSdkMethod<Subscription['pair'], SubscriptionpairArgs, MeshContext>,
  /** null **/
  pairs: InContextSdkMethod<Subscription['pairs'], SubscriptionpairsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Subscription['liquidityPosition'], SubscriptionliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Subscription['liquidityPositions'], SubscriptionliquidityPositionsArgs, MeshContext>,
  /** null **/
  mint: InContextSdkMethod<Subscription['mint'], SubscriptionmintArgs, MeshContext>,
  /** null **/
  mints: InContextSdkMethod<Subscription['mints'], SubscriptionmintsArgs, MeshContext>,
  /** null **/
  burn: InContextSdkMethod<Subscription['burn'], SubscriptionburnArgs, MeshContext>,
  /** null **/
  burns: InContextSdkMethod<Subscription['burns'], SubscriptionburnsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshot: InContextSdkMethod<Subscription['liquidityPositionSnapshot'], SubscriptionliquidityPositionSnapshotArgs, MeshContext>,
  /** null **/
  liquidityPositionSnapshots: InContextSdkMethod<Subscription['liquidityPositionSnapshots'], SubscriptionliquidityPositionSnapshotsArgs, MeshContext>,
  /** null **/
  pairHourSnapshot: InContextSdkMethod<Subscription['pairHourSnapshot'], SubscriptionpairHourSnapshotArgs, MeshContext>,
  /** null **/
  pairHourSnapshots: InContextSdkMethod<Subscription['pairHourSnapshots'], SubscriptionpairHourSnapshotsArgs, MeshContext>,
  /** null **/
  pairDaySnapshot: InContextSdkMethod<Subscription['pairDaySnapshot'], SubscriptionpairDaySnapshotArgs, MeshContext>,
  /** null **/
  pairDaySnapshots: InContextSdkMethod<Subscription['pairDaySnapshots'], SubscriptionpairDaySnapshotsArgs, MeshContext>,
  /** null **/
  tokenHourSnapshot: InContextSdkMethod<Subscription['tokenHourSnapshot'], SubscriptiontokenHourSnapshotArgs, MeshContext>,
  /** null **/
  tokenHourSnapshots: InContextSdkMethod<Subscription['tokenHourSnapshots'], SubscriptiontokenHourSnapshotsArgs, MeshContext>,
  /** null **/
  tokenDaySnapshot: InContextSdkMethod<Subscription['tokenDaySnapshot'], SubscriptiontokenDaySnapshotArgs, MeshContext>,
  /** null **/
  tokenDaySnapshots: InContextSdkMethod<Subscription['tokenDaySnapshots'], SubscriptiontokenDaySnapshotsArgs, MeshContext>,
  /** null **/
  factoryHourSnapshot: InContextSdkMethod<Subscription['factoryHourSnapshot'], SubscriptionfactoryHourSnapshotArgs, MeshContext>,
  /** null **/
  factoryHourSnapshots: InContextSdkMethod<Subscription['factoryHourSnapshots'], SubscriptionfactoryHourSnapshotsArgs, MeshContext>,
  /** null **/
  factoryDaySnapshot: InContextSdkMethod<Subscription['factoryDaySnapshot'], SubscriptionfactoryDaySnapshotArgs, MeshContext>,
  /** null **/
  factoryDaySnapshots: InContextSdkMethod<Subscription['factoryDaySnapshots'], SubscriptionfactoryDaySnapshotsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["sushiswap"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
