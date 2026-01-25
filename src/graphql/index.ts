/* eslint-disable */
// @ts-nocheck
// Generated file
// Last modified: Sun, 28 Jan 2024 07:40:23 GMT
import {GraphQLClient} from 'graphql-request';
import {GraphQLClientRequestHeaders} from 'graphql-request/build/cjs/types';
import {gql} from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  jsonb: {input: {[key: string]: any}; output: {[key: string]: any}};
}

export interface BooleanComparisonExp {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
}

export interface IntComparisonExp {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
}

export interface StringComparisonExp {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  _niregex?: InputMaybe<Scalars['String']['input']>;
  _nlike?: InputMaybe<Scalars['String']['input']>;
  _nregex?: InputMaybe<Scalars['String']['input']>;
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  _regex?: InputMaybe<Scalars['String']['input']>;
  _similar?: InputMaybe<Scalars['String']['input']>;
}

export type CursorOrdering = 'ASC' | 'DESC';

export interface JsonbCastExp {
  String?: InputMaybe<StringComparisonExp>;
}

export interface JsonbComparisonExp {
  _cast?: InputMaybe<JsonbCastExp>;
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  _has_key?: InputMaybe<Scalars['String']['input']>;
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
}

export type OrderBy =
  | 'asc'
  | 'asc_nulls_first'
  | 'asc_nulls_last'
  | 'desc'
  | 'desc_nulls_first'
  | 'desc_nulls_last';

export interface PokemonV2AbilityAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2AbilityAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2AbilityAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2AbilityAggregateBoolExpCount>;
}

export interface PokemonV2AbilityAggregateBoolExpBoolAnd {
  arguments: PokemonV2AbilitySelectColumnPokemonV2AbilityAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilityBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2AbilityAggregateBoolExpBoolOr {
  arguments: PokemonV2AbilitySelectColumnPokemonV2AbilityAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilityBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2AbilityAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2AbilitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilityBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2AbilityAggregateOrderBy {
  avg?: InputMaybe<PokemonV2AbilityAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2AbilityMaxOrderBy>;
  min?: InputMaybe<PokemonV2AbilityMinOrderBy>;
  stddev?: InputMaybe<PokemonV2AbilityStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2AbilityStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2AbilityStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2AbilitySumOrderBy>;
  var_pop?: InputMaybe<PokemonV2AbilityVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2AbilityVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2AbilityVarianceOrderBy>;
}

export interface PokemonV2AbilityAvgOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityBoolExp {
  _and?: InputMaybe<Array<PokemonV2AbilityBoolExp>>;
  _not?: InputMaybe<PokemonV2AbilityBoolExp>;
  _or?: InputMaybe<Array<PokemonV2AbilityBoolExp>>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_main_series?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_abilitychanges?: InputMaybe<PokemonV2AbilitychangeBoolExp>;
  pokemon_v2_abilitychanges_aggregate?: InputMaybe<PokemonV2AbilitychangeAggregateBoolExp>;
  pokemon_v2_abilityeffecttexts?: InputMaybe<PokemonV2AbilityeffecttextBoolExp>;
  pokemon_v2_abilityeffecttexts_aggregate?: InputMaybe<PokemonV2AbilityeffecttextAggregateBoolExp>;
  pokemon_v2_abilityflavortexts?: InputMaybe<PokemonV2AbilityflavortextBoolExp>;
  pokemon_v2_abilityflavortexts_aggregate?: InputMaybe<PokemonV2AbilityflavortextAggregateBoolExp>;
  pokemon_v2_abilitynames?: InputMaybe<PokemonV2AbilitynameBoolExp>;
  pokemon_v2_abilitynames_aggregate?: InputMaybe<PokemonV2AbilitynameAggregateBoolExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_pokemonabilities?: InputMaybe<PokemonV2PokemonabilityBoolExp>;
  pokemon_v2_pokemonabilities_aggregate?: InputMaybe<PokemonV2PokemonabilityAggregateBoolExp>;
}

export interface PokemonV2AbilityMaxOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityMinOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_main_series?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_abilitychanges_aggregate?: InputMaybe<PokemonV2AbilitychangeAggregateOrderBy>;
  pokemon_v2_abilityeffecttexts_aggregate?: InputMaybe<PokemonV2AbilityeffecttextAggregateOrderBy>;
  pokemon_v2_abilityflavortexts_aggregate?: InputMaybe<PokemonV2AbilityflavortextAggregateOrderBy>;
  pokemon_v2_abilitynames_aggregate?: InputMaybe<PokemonV2AbilitynameAggregateOrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_pokemonabilities_aggregate?: InputMaybe<PokemonV2PokemonabilityAggregateOrderBy>;
}

export type PokemonV2AbilitySelectColumn =
  | 'generation_id'
  | 'id'
  | 'is_main_series'
  | 'name';

export type PokemonV2AbilitySelectColumnPokemonV2AbilityAggregateBoolExpBoolAndArgumentsColumns =
  'is_main_series';

export type PokemonV2AbilitySelectColumnPokemonV2AbilityAggregateBoolExpBoolOrArgumentsColumns =
  'is_main_series';

export interface PokemonV2AbilityStddevOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityStddevPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityStddevSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityStreamCursorInput {
  initial_value: PokemonV2AbilityStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2AbilityStreamCursorValueInput {
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_main_series?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2AbilitySumOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityVarPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityVarSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityVarianceOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeAggregateBoolExp {
  count?: InputMaybe<PokemonV2AbilitychangeAggregateBoolExpCount>;
}

export interface PokemonV2AbilitychangeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2AbilitychangeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilitychangeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2AbilitychangeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2AbilitychangeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2AbilitychangeMaxOrderBy>;
  min?: InputMaybe<PokemonV2AbilitychangeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2AbilitychangeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2AbilitychangeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2AbilitychangeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2AbilitychangeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2AbilitychangeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2AbilitychangeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2AbilitychangeVarianceOrderBy>;
}

export interface PokemonV2AbilitychangeAvgOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeBoolExp {
  _and?: InputMaybe<Array<PokemonV2AbilitychangeBoolExp>>;
  _not?: InputMaybe<PokemonV2AbilitychangeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2AbilitychangeBoolExp>>;
  ability_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityBoolExp>;
  pokemon_v2_abilitychangeeffecttexts?: InputMaybe<PokemonV2AbilitychangeeffecttextBoolExp>;
  pokemon_v2_abilitychangeeffecttexts_aggregate?: InputMaybe<PokemonV2AbilitychangeeffecttextAggregateBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2AbilitychangeMaxOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeMinOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityOrderBy>;
  pokemon_v2_abilitychangeeffecttexts_aggregate?: InputMaybe<PokemonV2AbilitychangeeffecttextAggregateOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2AbilitychangeSelectColumn =
  | 'ability_id'
  | 'id'
  | 'version_group_id';

export interface PokemonV2AbilitychangeStddevOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeStddevPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeStddevSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeStreamCursorInput {
  initial_value: PokemonV2AbilitychangeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2AbilitychangeStreamCursorValueInput {
  ability_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2AbilitychangeSumOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeVarPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeVarSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeVarianceOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2AbilitychangeeffecttextAggregateBoolExpCount>;
}

export interface PokemonV2AbilitychangeeffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2AbilitychangeeffecttextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilitychangeeffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2AbilitychangeeffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2AbilitychangeeffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2AbilitychangeeffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2AbilitychangeeffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2AbilitychangeeffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2AbilitychangeeffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2AbilitychangeeffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2AbilitychangeeffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2AbilitychangeeffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2AbilitychangeeffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2AbilitychangeeffecttextVarianceOrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextAvgOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2AbilitychangeeffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2AbilitychangeeffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2AbilitychangeeffecttextBoolExp>>;
  ability_change_id?: InputMaybe<IntComparisonExp>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_abilitychange?: InputMaybe<PokemonV2AbilitychangeBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2AbilitychangeeffecttextMaxOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextMinOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_abilitychange?: InputMaybe<PokemonV2AbilitychangeOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2AbilitychangeeffecttextSelectColumn =
  | 'ability_change_id'
  | 'effect'
  | 'id'
  | 'language_id';

export interface PokemonV2AbilitychangeeffecttextStddevOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextStddevPopOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextStddevSampOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextStreamCursorInput {
  initial_value: PokemonV2AbilitychangeeffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2AbilitychangeeffecttextStreamCursorValueInput {
  ability_change_id?: InputMaybe<Scalars['Int']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2AbilitychangeeffecttextSumOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextVarPopOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextVarSampOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitychangeeffecttextVarianceOrderBy {
  ability_change_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2AbilityeffecttextAggregateBoolExpCount>;
}

export interface PokemonV2AbilityeffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2AbilityeffecttextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilityeffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2AbilityeffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2AbilityeffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2AbilityeffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2AbilityeffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2AbilityeffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2AbilityeffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2AbilityeffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2AbilityeffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2AbilityeffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2AbilityeffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2AbilityeffecttextVarianceOrderBy>;
}

export interface PokemonV2AbilityeffecttextAvgOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2AbilityeffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2AbilityeffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2AbilityeffecttextBoolExp>>;
  ability_id?: InputMaybe<IntComparisonExp>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  short_effect?: InputMaybe<StringComparisonExp>;
}

export interface PokemonV2AbilityeffecttextMaxOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextMinOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export type PokemonV2AbilityeffecttextSelectColumn =
  | 'ability_id'
  | 'effect'
  | 'id'
  | 'language_id'
  | 'short_effect';

export interface PokemonV2AbilityeffecttextStddevOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextStddevPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextStddevSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextStreamCursorInput {
  initial_value: PokemonV2AbilityeffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2AbilityeffecttextStreamCursorValueInput {
  ability_id?: InputMaybe<Scalars['Int']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  short_effect?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2AbilityeffecttextSumOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextVarPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextVarSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityeffecttextVarianceOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextAggregateBoolExp {
  count?: InputMaybe<PokemonV2AbilityflavortextAggregateBoolExpCount>;
}

export interface PokemonV2AbilityflavortextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2AbilityflavortextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilityflavortextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2AbilityflavortextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2AbilityflavortextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2AbilityflavortextMaxOrderBy>;
  min?: InputMaybe<PokemonV2AbilityflavortextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2AbilityflavortextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2AbilityflavortextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2AbilityflavortextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2AbilityflavortextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2AbilityflavortextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2AbilityflavortextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2AbilityflavortextVarianceOrderBy>;
}

export interface PokemonV2AbilityflavortextAvgOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextBoolExp {
  _and?: InputMaybe<Array<PokemonV2AbilityflavortextBoolExp>>;
  _not?: InputMaybe<PokemonV2AbilityflavortextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2AbilityflavortextBoolExp>>;
  ability_id?: InputMaybe<IntComparisonExp>;
  flavor_text?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2AbilityflavortextMaxOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextMinOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2AbilityflavortextSelectColumn =
  | 'ability_id'
  | 'flavor_text'
  | 'id'
  | 'language_id'
  | 'version_group_id';

export interface PokemonV2AbilityflavortextStddevOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextStddevPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextStddevSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextStreamCursorInput {
  initial_value: PokemonV2AbilityflavortextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2AbilityflavortextStreamCursorValueInput {
  ability_id?: InputMaybe<Scalars['Int']['input']>;
  flavor_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2AbilityflavortextSumOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextVarPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextVarSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilityflavortextVarianceOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameAggregateBoolExp {
  count?: InputMaybe<PokemonV2AbilitynameAggregateBoolExpCount>;
}

export interface PokemonV2AbilitynameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2AbilitynameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2AbilitynameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2AbilitynameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2AbilitynameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2AbilitynameMaxOrderBy>;
  min?: InputMaybe<PokemonV2AbilitynameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2AbilitynameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2AbilitynameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2AbilitynameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2AbilitynameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2AbilitynameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2AbilitynameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2AbilitynameVarianceOrderBy>;
}

export interface PokemonV2AbilitynameAvgOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameBoolExp {
  _and?: InputMaybe<Array<PokemonV2AbilitynameBoolExp>>;
  _not?: InputMaybe<PokemonV2AbilitynameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2AbilitynameBoolExp>>;
  ability_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2AbilitynameMaxOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameMinOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2AbilitynameSelectColumn =
  | 'ability_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2AbilitynameStddevOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameStddevPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameStddevSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameStreamCursorInput {
  initial_value: PokemonV2AbilitynameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2AbilitynameStreamCursorValueInput {
  ability_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2AbilitynameSumOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameVarPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameVarSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2AbilitynameVarianceOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryAggregateBoolExp {
  count?: InputMaybe<PokemonV2BerryAggregateBoolExpCount>;
}

export interface PokemonV2BerryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2BerrySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2BerryBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2BerryAggregateOrderBy {
  avg?: InputMaybe<PokemonV2BerryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2BerryMaxOrderBy>;
  min?: InputMaybe<PokemonV2BerryMinOrderBy>;
  stddev?: InputMaybe<PokemonV2BerryStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2BerryStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2BerryStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2BerrySumOrderBy>;
  var_pop?: InputMaybe<PokemonV2BerryVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2BerryVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2BerryVarianceOrderBy>;
}

export interface PokemonV2BerryAvgOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryBoolExp {
  _and?: InputMaybe<Array<PokemonV2BerryBoolExp>>;
  _not?: InputMaybe<PokemonV2BerryBoolExp>;
  _or?: InputMaybe<Array<PokemonV2BerryBoolExp>>;
  berry_firmness_id?: InputMaybe<IntComparisonExp>;
  growth_time?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  max_harvest?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  natural_gift_power?: InputMaybe<IntComparisonExp>;
  natural_gift_type_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_berryfirmness?: InputMaybe<PokemonV2BerryfirmnessBoolExp>;
  pokemon_v2_berryflavormaps?: InputMaybe<PokemonV2BerryflavormapBoolExp>;
  pokemon_v2_berryflavormaps_aggregate?: InputMaybe<PokemonV2BerryflavormapAggregateBoolExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  size?: InputMaybe<IntComparisonExp>;
  smoothness?: InputMaybe<IntComparisonExp>;
  soil_dryness?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2BerryMaxOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryMinOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  pokemon_v2_berryfirmness?: InputMaybe<PokemonV2BerryfirmnessOrderBy>;
  pokemon_v2_berryflavormaps_aggregate?: InputMaybe<PokemonV2BerryflavormapAggregateOrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export type PokemonV2BerrySelectColumn =
  | 'berry_firmness_id'
  | 'growth_time'
  | 'id'
  | 'item_id'
  | 'max_harvest'
  | 'name'
  | 'natural_gift_power'
  | 'natural_gift_type_id'
  | 'size'
  | 'smoothness'
  | 'soil_dryness';

export interface PokemonV2BerryStddevOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryStddevPopOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryStddevSampOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryStreamCursorInput {
  initial_value: PokemonV2BerryStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2BerryStreamCursorValueInput {
  berry_firmness_id?: InputMaybe<Scalars['Int']['input']>;
  growth_time?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  max_harvest?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  natural_gift_power?: InputMaybe<Scalars['Int']['input']>;
  natural_gift_type_id?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  smoothness?: InputMaybe<Scalars['Int']['input']>;
  soil_dryness?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2BerrySumOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryVarPopOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryVarSampOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryVarianceOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  growth_time?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  max_harvest?: InputMaybe<OrderBy>;
  natural_gift_power?: InputMaybe<OrderBy>;
  natural_gift_type_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  smoothness?: InputMaybe<OrderBy>;
  soil_dryness?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessBoolExp {
  _and?: InputMaybe<Array<PokemonV2BerryfirmnessBoolExp>>;
  _not?: InputMaybe<PokemonV2BerryfirmnessBoolExp>;
  _or?: InputMaybe<Array<PokemonV2BerryfirmnessBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_berries?: InputMaybe<PokemonV2BerryBoolExp>;
  pokemon_v2_berries_aggregate?: InputMaybe<PokemonV2BerryAggregateBoolExp>;
  pokemon_v2_berryfirmnessnames?: InputMaybe<PokemonV2BerryfirmnessnameBoolExp>;
  pokemon_v2_berryfirmnessnames_aggregate?: InputMaybe<PokemonV2BerryfirmnessnameAggregateBoolExp>;
}

export interface PokemonV2BerryfirmnessOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_berries_aggregate?: InputMaybe<PokemonV2BerryAggregateOrderBy>;
  pokemon_v2_berryfirmnessnames_aggregate?: InputMaybe<PokemonV2BerryfirmnessnameAggregateOrderBy>;
}

export type PokemonV2BerryfirmnessSelectColumn = 'id' | 'name';

export interface PokemonV2BerryfirmnessStreamCursorInput {
  initial_value: PokemonV2BerryfirmnessStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2BerryfirmnessStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2BerryfirmnessnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2BerryfirmnessnameAggregateBoolExpCount>;
}

export interface PokemonV2BerryfirmnessnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2BerryfirmnessnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2BerryfirmnessnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2BerryfirmnessnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2BerryfirmnessnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2BerryfirmnessnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2BerryfirmnessnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2BerryfirmnessnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2BerryfirmnessnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2BerryfirmnessnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2BerryfirmnessnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2BerryfirmnessnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2BerryfirmnessnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2BerryfirmnessnameVarianceOrderBy>;
}

export interface PokemonV2BerryfirmnessnameAvgOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2BerryfirmnessnameBoolExp>>;
  _not?: InputMaybe<PokemonV2BerryfirmnessnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2BerryfirmnessnameBoolExp>>;
  berry_firmness_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_berryfirmness?: InputMaybe<PokemonV2BerryfirmnessBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2BerryfirmnessnameMaxOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameMinOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_berryfirmness?: InputMaybe<PokemonV2BerryfirmnessOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2BerryfirmnessnameSelectColumn =
  | 'berry_firmness_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2BerryfirmnessnameStddevOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameStddevPopOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameStddevSampOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameStreamCursorInput {
  initial_value: PokemonV2BerryfirmnessnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2BerryfirmnessnameStreamCursorValueInput {
  berry_firmness_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2BerryfirmnessnameSumOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameVarPopOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameVarSampOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryfirmnessnameVarianceOrderBy {
  berry_firmness_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorAggregateBoolExp {
  count?: InputMaybe<PokemonV2BerryflavorAggregateBoolExpCount>;
}

export interface PokemonV2BerryflavorAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2BerryflavorSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2BerryflavorAggregateOrderBy {
  avg?: InputMaybe<PokemonV2BerryflavorAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2BerryflavorMaxOrderBy>;
  min?: InputMaybe<PokemonV2BerryflavorMinOrderBy>;
  stddev?: InputMaybe<PokemonV2BerryflavorStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2BerryflavorStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2BerryflavorStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2BerryflavorSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2BerryflavorVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2BerryflavorVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2BerryflavorVarianceOrderBy>;
}

export interface PokemonV2BerryflavorAvgOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorBoolExp {
  _and?: InputMaybe<Array<PokemonV2BerryflavorBoolExp>>;
  _not?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  _or?: InputMaybe<Array<PokemonV2BerryflavorBoolExp>>;
  contest_type_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2NaturesByLikesFlavorId?: InputMaybe<PokemonV2NatureBoolExp>;
  pokemonV2NaturesByLikesFlavorId_aggregate?: InputMaybe<PokemonV2NatureAggregateBoolExp>;
  pokemon_v2_berryflavormaps?: InputMaybe<PokemonV2BerryflavormapBoolExp>;
  pokemon_v2_berryflavormaps_aggregate?: InputMaybe<PokemonV2BerryflavormapAggregateBoolExp>;
  pokemon_v2_berryflavornames?: InputMaybe<PokemonV2BerryflavornameBoolExp>;
  pokemon_v2_berryflavornames_aggregate?: InputMaybe<PokemonV2BerryflavornameAggregateBoolExp>;
  pokemon_v2_contesttype?: InputMaybe<PokemonV2ContesttypeBoolExp>;
  pokemon_v2_natures?: InputMaybe<PokemonV2NatureBoolExp>;
  pokemon_v2_natures_aggregate?: InputMaybe<PokemonV2NatureAggregateBoolExp>;
}

export interface PokemonV2BerryflavorMaxOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorMinOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2NaturesByLikesFlavorId_aggregate?: InputMaybe<PokemonV2NatureAggregateOrderBy>;
  pokemon_v2_berryflavormaps_aggregate?: InputMaybe<PokemonV2BerryflavormapAggregateOrderBy>;
  pokemon_v2_berryflavornames_aggregate?: InputMaybe<PokemonV2BerryflavornameAggregateOrderBy>;
  pokemon_v2_contesttype?: InputMaybe<PokemonV2ContesttypeOrderBy>;
  pokemon_v2_natures_aggregate?: InputMaybe<PokemonV2NatureAggregateOrderBy>;
}

export type PokemonV2BerryflavorSelectColumn =
  | 'contest_type_id'
  | 'id'
  | 'name';

export interface PokemonV2BerryflavorStddevOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorStddevPopOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorStddevSampOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorStreamCursorInput {
  initial_value: PokemonV2BerryflavorStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2BerryflavorStreamCursorValueInput {
  contest_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2BerryflavorSumOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorVarPopOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorVarSampOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavorVarianceOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapAggregateBoolExp {
  count?: InputMaybe<PokemonV2BerryflavormapAggregateBoolExpCount>;
}

export interface PokemonV2BerryflavormapAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2BerryflavormapSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2BerryflavormapBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2BerryflavormapAggregateOrderBy {
  avg?: InputMaybe<PokemonV2BerryflavormapAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2BerryflavormapMaxOrderBy>;
  min?: InputMaybe<PokemonV2BerryflavormapMinOrderBy>;
  stddev?: InputMaybe<PokemonV2BerryflavormapStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2BerryflavormapStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2BerryflavormapStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2BerryflavormapSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2BerryflavormapVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2BerryflavormapVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2BerryflavormapVarianceOrderBy>;
}

export interface PokemonV2BerryflavormapAvgOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapBoolExp {
  _and?: InputMaybe<Array<PokemonV2BerryflavormapBoolExp>>;
  _not?: InputMaybe<PokemonV2BerryflavormapBoolExp>;
  _or?: InputMaybe<Array<PokemonV2BerryflavormapBoolExp>>;
  berry_flavor_id?: InputMaybe<IntComparisonExp>;
  berry_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_berry?: InputMaybe<PokemonV2BerryBoolExp>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  potency?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2BerryflavormapMaxOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapMinOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_berry?: InputMaybe<PokemonV2BerryOrderBy>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorOrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export type PokemonV2BerryflavormapSelectColumn =
  | 'berry_flavor_id'
  | 'berry_id'
  | 'id'
  | 'potency';

export interface PokemonV2BerryflavormapStddevOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapStddevPopOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapStddevSampOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapStreamCursorInput {
  initial_value: PokemonV2BerryflavormapStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2BerryflavormapStreamCursorValueInput {
  berry_flavor_id?: InputMaybe<Scalars['Int']['input']>;
  berry_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  potency?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2BerryflavormapSumOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapVarPopOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapVarSampOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavormapVarianceOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  berry_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  potency?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameAggregateBoolExp {
  count?: InputMaybe<PokemonV2BerryflavornameAggregateBoolExpCount>;
}

export interface PokemonV2BerryflavornameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2BerryflavornameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2BerryflavornameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2BerryflavornameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2BerryflavornameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2BerryflavornameMaxOrderBy>;
  min?: InputMaybe<PokemonV2BerryflavornameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2BerryflavornameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2BerryflavornameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2BerryflavornameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2BerryflavornameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2BerryflavornameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2BerryflavornameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2BerryflavornameVarianceOrderBy>;
}

export interface PokemonV2BerryflavornameAvgOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameBoolExp {
  _and?: InputMaybe<Array<PokemonV2BerryflavornameBoolExp>>;
  _not?: InputMaybe<PokemonV2BerryflavornameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2BerryflavornameBoolExp>>;
  berry_flavor_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2BerryflavornameMaxOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameMinOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2BerryflavornameSelectColumn =
  | 'berry_flavor_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2BerryflavornameStddevOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameStddevPopOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameStddevSampOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameStreamCursorInput {
  initial_value: PokemonV2BerryflavornameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2BerryflavornameStreamCursorValueInput {
  berry_flavor_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2BerryflavornameSumOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameVarPopOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameVarSampOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2BerryflavornameVarianceOrderBy {
  berry_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicAggregateBoolExp {
  count?: InputMaybe<PokemonV2CharacteristicAggregateBoolExpCount>;
}

export interface PokemonV2CharacteristicAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2CharacteristicSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2CharacteristicBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2CharacteristicAggregateOrderBy {
  avg?: InputMaybe<PokemonV2CharacteristicAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2CharacteristicMaxOrderBy>;
  min?: InputMaybe<PokemonV2CharacteristicMinOrderBy>;
  stddev?: InputMaybe<PokemonV2CharacteristicStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2CharacteristicStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2CharacteristicStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2CharacteristicSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2CharacteristicVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2CharacteristicVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2CharacteristicVarianceOrderBy>;
}

export interface PokemonV2CharacteristicAvgOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicBoolExp {
  _and?: InputMaybe<Array<PokemonV2CharacteristicBoolExp>>;
  _not?: InputMaybe<PokemonV2CharacteristicBoolExp>;
  _or?: InputMaybe<Array<PokemonV2CharacteristicBoolExp>>;
  gene_mod_5?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_characteristicdescriptions?: InputMaybe<PokemonV2CharacteristicdescriptionBoolExp>;
  pokemon_v2_characteristicdescriptions_aggregate?: InputMaybe<PokemonV2CharacteristicdescriptionAggregateBoolExp>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatBoolExp>;
  stat_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2CharacteristicMaxOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicMinOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_characteristicdescriptions_aggregate?: InputMaybe<PokemonV2CharacteristicdescriptionAggregateOrderBy>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatOrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export type PokemonV2CharacteristicSelectColumn =
  | 'gene_mod_5'
  | 'id'
  | 'stat_id';

export interface PokemonV2CharacteristicStddevOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicStddevPopOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicStddevSampOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicStreamCursorInput {
  initial_value: PokemonV2CharacteristicStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2CharacteristicStreamCursorValueInput {
  gene_mod_5?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  stat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2CharacteristicSumOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicVarPopOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicVarSampOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicVarianceOrderBy {
  gene_mod_5?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2CharacteristicdescriptionAggregateBoolExpCount>;
}

export interface PokemonV2CharacteristicdescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2CharacteristicdescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2CharacteristicdescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2CharacteristicdescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2CharacteristicdescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2CharacteristicdescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2CharacteristicdescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2CharacteristicdescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2CharacteristicdescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2CharacteristicdescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2CharacteristicdescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2CharacteristicdescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2CharacteristicdescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2CharacteristicdescriptionVarianceOrderBy>;
}

export interface PokemonV2CharacteristicdescriptionAvgOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2CharacteristicdescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2CharacteristicdescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2CharacteristicdescriptionBoolExp>>;
  characteristic_id?: InputMaybe<IntComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_characteristic?: InputMaybe<PokemonV2CharacteristicBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2CharacteristicdescriptionMaxOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionMinOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_characteristic?: InputMaybe<PokemonV2CharacteristicOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2CharacteristicdescriptionSelectColumn =
  | 'characteristic_id'
  | 'description'
  | 'id'
  | 'language_id';

export interface PokemonV2CharacteristicdescriptionStddevOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionStddevPopOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionStddevSampOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionStreamCursorInput {
  initial_value: PokemonV2CharacteristicdescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2CharacteristicdescriptionStreamCursorValueInput {
  characteristic_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2CharacteristicdescriptionSumOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionVarPopOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionVarSampOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2CharacteristicdescriptionVarianceOrderBy {
  characteristic_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboAggregateBoolExp {
  count?: InputMaybe<PokemonV2ContestcomboAggregateBoolExpCount>;
}

export interface PokemonV2ContestcomboAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ContestcomboSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ContestcomboBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ContestcomboAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ContestcomboAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ContestcomboMaxOrderBy>;
  min?: InputMaybe<PokemonV2ContestcomboMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ContestcomboStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ContestcomboStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ContestcomboStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ContestcomboSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ContestcomboVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ContestcomboVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ContestcomboVarianceOrderBy>;
}

export interface PokemonV2ContestcomboAvgOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboBoolExp {
  _and?: InputMaybe<Array<PokemonV2ContestcomboBoolExp>>;
  _not?: InputMaybe<PokemonV2ContestcomboBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ContestcomboBoolExp>>;
  first_move_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemonV2MoveBySecondMoveId?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  second_move_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2ContestcomboMaxOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboMinOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemonV2MoveBySecondMoveId?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export type PokemonV2ContestcomboSelectColumn =
  | 'first_move_id'
  | 'id'
  | 'second_move_id';

export interface PokemonV2ContestcomboStddevOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboStddevPopOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboStddevSampOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboStreamCursorInput {
  initial_value: PokemonV2ContestcomboStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ContestcomboStreamCursorValueInput {
  first_move_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  second_move_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ContestcomboSumOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboVarPopOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboVarSampOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContestcomboVarianceOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectBoolExp {
  _and?: InputMaybe<Array<PokemonV2ContesteffectBoolExp>>;
  _not?: InputMaybe<PokemonV2ContesteffectBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ContesteffectBoolExp>>;
  appeal?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  jam?: InputMaybe<IntComparisonExp>;
  pokemon_v2_contesteffecteffecttexts?: InputMaybe<PokemonV2ContesteffecteffecttextBoolExp>;
  pokemon_v2_contesteffecteffecttexts_aggregate?: InputMaybe<PokemonV2ContesteffecteffecttextAggregateBoolExp>;
  pokemon_v2_contesteffectflavortexts?: InputMaybe<PokemonV2ContesteffectflavortextBoolExp>;
  pokemon_v2_contesteffectflavortexts_aggregate?: InputMaybe<PokemonV2ContesteffectflavortextAggregateBoolExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
}

export interface PokemonV2ContesteffectOrderBy {
  appeal?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  jam?: InputMaybe<OrderBy>;
  pokemon_v2_contesteffecteffecttexts_aggregate?: InputMaybe<PokemonV2ContesteffecteffecttextAggregateOrderBy>;
  pokemon_v2_contesteffectflavortexts_aggregate?: InputMaybe<PokemonV2ContesteffectflavortextAggregateOrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
}

export type PokemonV2ContesteffectSelectColumn = 'appeal' | 'id' | 'jam';

export interface PokemonV2ContesteffectStreamCursorInput {
  initial_value: PokemonV2ContesteffectStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ContesteffectStreamCursorValueInput {
  appeal?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  jam?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ContesteffecteffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2ContesteffecteffecttextAggregateBoolExpCount>;
}

export interface PokemonV2ContesteffecteffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ContesteffecteffecttextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ContesteffecteffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ContesteffecteffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ContesteffecteffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ContesteffecteffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2ContesteffecteffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ContesteffecteffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ContesteffecteffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ContesteffecteffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ContesteffecteffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ContesteffecteffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ContesteffecteffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ContesteffecteffecttextVarianceOrderBy>;
}

export interface PokemonV2ContesteffecteffecttextAvgOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2ContesteffecteffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2ContesteffecteffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ContesteffecteffecttextBoolExp>>;
  contest_effect_id?: InputMaybe<IntComparisonExp>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_contesteffect?: InputMaybe<PokemonV2ContesteffectBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ContesteffecteffecttextMaxOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextMinOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_contesteffect?: InputMaybe<PokemonV2ContesteffectOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ContesteffecteffecttextSelectColumn =
  | 'contest_effect_id'
  | 'effect'
  | 'id'
  | 'language_id';

export interface PokemonV2ContesteffecteffecttextStddevOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextStddevPopOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextStddevSampOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextStreamCursorInput {
  initial_value: PokemonV2ContesteffecteffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ContesteffecteffecttextStreamCursorValueInput {
  contest_effect_id?: InputMaybe<Scalars['Int']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ContesteffecteffecttextSumOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextVarPopOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextVarSampOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffecteffecttextVarianceOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextAggregateBoolExp {
  count?: InputMaybe<PokemonV2ContesteffectflavortextAggregateBoolExpCount>;
}

export interface PokemonV2ContesteffectflavortextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ContesteffectflavortextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ContesteffectflavortextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ContesteffectflavortextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ContesteffectflavortextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ContesteffectflavortextMaxOrderBy>;
  min?: InputMaybe<PokemonV2ContesteffectflavortextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ContesteffectflavortextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ContesteffectflavortextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ContesteffectflavortextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ContesteffectflavortextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ContesteffectflavortextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ContesteffectflavortextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ContesteffectflavortextVarianceOrderBy>;
}

export interface PokemonV2ContesteffectflavortextAvgOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextBoolExp {
  _and?: InputMaybe<Array<PokemonV2ContesteffectflavortextBoolExp>>;
  _not?: InputMaybe<PokemonV2ContesteffectflavortextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ContesteffectflavortextBoolExp>>;
  contest_effect_id?: InputMaybe<IntComparisonExp>;
  flavor_text?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_contesteffect?: InputMaybe<PokemonV2ContesteffectBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ContesteffectflavortextMaxOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextMinOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_contesteffect?: InputMaybe<PokemonV2ContesteffectOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ContesteffectflavortextSelectColumn =
  | 'contest_effect_id'
  | 'flavor_text'
  | 'id'
  | 'language_id';

export interface PokemonV2ContesteffectflavortextStddevOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextStddevPopOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextStddevSampOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextStreamCursorInput {
  initial_value: PokemonV2ContesteffectflavortextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ContesteffectflavortextStreamCursorValueInput {
  contest_effect_id?: InputMaybe<Scalars['Int']['input']>;
  flavor_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ContesteffectflavortextSumOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextVarPopOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextVarSampOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesteffectflavortextVarianceOrderBy {
  contest_effect_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypeBoolExp {
  _and?: InputMaybe<Array<PokemonV2ContesttypeBoolExp>>;
  _not?: InputMaybe<PokemonV2ContesttypeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ContesttypeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  pokemon_v2_berryflavors?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  pokemon_v2_berryflavors_aggregate?: InputMaybe<PokemonV2BerryflavorAggregateBoolExp>;
  pokemon_v2_contesttypenames?: InputMaybe<PokemonV2ContesttypenameBoolExp>;
  pokemon_v2_contesttypenames_aggregate?: InputMaybe<PokemonV2ContesttypenameAggregateBoolExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
}

export interface PokemonV2ContesttypeOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorOrderBy>;
  pokemon_v2_berryflavors_aggregate?: InputMaybe<PokemonV2BerryflavorAggregateOrderBy>;
  pokemon_v2_contesttypenames_aggregate?: InputMaybe<PokemonV2ContesttypenameAggregateOrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
}

export type PokemonV2ContesttypeSelectColumn = 'id' | 'name';

export interface PokemonV2ContesttypeStreamCursorInput {
  initial_value: PokemonV2ContesttypeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ContesttypeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ContesttypenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2ContesttypenameAggregateBoolExpCount>;
}

export interface PokemonV2ContesttypenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ContesttypenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ContesttypenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ContesttypenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ContesttypenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ContesttypenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2ContesttypenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ContesttypenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ContesttypenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ContesttypenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ContesttypenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ContesttypenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ContesttypenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ContesttypenameVarianceOrderBy>;
}

export interface PokemonV2ContesttypenameAvgOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2ContesttypenameBoolExp>>;
  _not?: InputMaybe<PokemonV2ContesttypenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ContesttypenameBoolExp>>;
  color?: InputMaybe<StringComparisonExp>;
  contest_type_id?: InputMaybe<IntComparisonExp>;
  flavor?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_contesttype?: InputMaybe<PokemonV2ContesttypeBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ContesttypenameMaxOrderBy {
  color?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  flavor?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameMinOrderBy {
  color?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  flavor?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameOrderBy {
  color?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  flavor?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_contesttype?: InputMaybe<PokemonV2ContesttypeOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ContesttypenameSelectColumn =
  | 'color'
  | 'contest_type_id'
  | 'flavor'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2ContesttypenameStddevOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameStddevPopOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameStddevSampOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameStreamCursorInput {
  initial_value: PokemonV2ContesttypenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ContesttypenameStreamCursorValueInput {
  color?: InputMaybe<Scalars['String']['input']>;
  contest_type_id?: InputMaybe<Scalars['Int']['input']>;
  flavor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ContesttypenameSumOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameVarPopOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameVarSampOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ContesttypenameVarianceOrderBy {
  contest_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupBoolExp {
  _and?: InputMaybe<Array<PokemonV2EgggroupBoolExp>>;
  _not?: InputMaybe<PokemonV2EgggroupBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EgggroupBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_egggroupnames?: InputMaybe<PokemonV2EgggroupnameBoolExp>;
  pokemon_v2_egggroupnames_aggregate?: InputMaybe<PokemonV2EgggroupnameAggregateBoolExp>;
  pokemon_v2_pokemonegggroups?: InputMaybe<PokemonV2PokemonegggroupBoolExp>;
  pokemon_v2_pokemonegggroups_aggregate?: InputMaybe<PokemonV2PokemonegggroupAggregateBoolExp>;
}

export interface PokemonV2EgggroupOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_egggroupnames_aggregate?: InputMaybe<PokemonV2EgggroupnameAggregateOrderBy>;
  pokemon_v2_pokemonegggroups_aggregate?: InputMaybe<PokemonV2PokemonegggroupAggregateOrderBy>;
}

export type PokemonV2EgggroupSelectColumn = 'id' | 'name';

export interface PokemonV2EgggroupStreamCursorInput {
  initial_value: PokemonV2EgggroupStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EgggroupStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EgggroupnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2EgggroupnameAggregateBoolExpCount>;
}

export interface PokemonV2EgggroupnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EgggroupnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EgggroupnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EgggroupnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EgggroupnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EgggroupnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2EgggroupnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EgggroupnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EgggroupnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EgggroupnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EgggroupnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EgggroupnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EgggroupnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EgggroupnameVarianceOrderBy>;
}

export interface PokemonV2EgggroupnameAvgOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2EgggroupnameBoolExp>>;
  _not?: InputMaybe<PokemonV2EgggroupnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EgggroupnameBoolExp>>;
  egg_group_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_egggroup?: InputMaybe<PokemonV2EgggroupBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2EgggroupnameMaxOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameMinOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_egggroup?: InputMaybe<PokemonV2EgggroupOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2EgggroupnameSelectColumn =
  | 'egg_group_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2EgggroupnameStddevOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameStddevPopOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameStddevSampOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameStreamCursorInput {
  initial_value: PokemonV2EgggroupnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EgggroupnameStreamCursorValueInput {
  egg_group_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EgggroupnameSumOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameVarPopOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameVarSampOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EgggroupnameVarianceOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterAggregateBoolExp {
  count?: InputMaybe<PokemonV2EncounterAggregateBoolExpCount>;
}

export interface PokemonV2EncounterAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EncounterSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncounterAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncounterAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncounterMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncounterMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncounterStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncounterStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncounterStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncounterSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncounterVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncounterVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncounterVarianceOrderBy>;
}

export interface PokemonV2EncounterAvgOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterBoolExp>>;
  encounter_slot_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  location_area_id?: InputMaybe<IntComparisonExp>;
  max_level?: InputMaybe<IntComparisonExp>;
  min_level?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_encounterconditionvaluemaps?: InputMaybe<PokemonV2EncounterconditionvaluemapBoolExp>;
  pokemon_v2_encounterconditionvaluemaps_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluemapAggregateBoolExp>;
  pokemon_v2_encounterslot?: InputMaybe<PokemonV2EncounterslotBoolExp>;
  pokemon_v2_locationarea?: InputMaybe<PokemonV2LocationareaBoolExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionBoolExp>;
  version_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2EncounterMaxOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterMinOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_encounterconditionvaluemaps_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluemapAggregateOrderBy>;
  pokemon_v2_encounterslot?: InputMaybe<PokemonV2EncounterslotOrderBy>;
  pokemon_v2_locationarea?: InputMaybe<PokemonV2LocationareaOrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionOrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonV2EncounterSelectColumn =
  | 'encounter_slot_id'
  | 'id'
  | 'location_area_id'
  | 'max_level'
  | 'min_level'
  | 'pokemon_id'
  | 'version_id';

export interface PokemonV2EncounterStddevOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterStddevPopOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterStddevSampOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterStreamCursorInput {
  initial_value: PokemonV2EncounterStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterStreamCursorValueInput {
  encounter_slot_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location_area_id?: InputMaybe<Scalars['Int']['input']>;
  max_level?: InputMaybe<Scalars['Int']['input']>;
  min_level?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  version_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2EncounterSumOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterVarPopOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterVarSampOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterVarianceOrderBy {
  encounter_slot_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  max_level?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterconditionBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterconditionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterconditionBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encounterconditionnames?: InputMaybe<PokemonV2EncounterconditionnameBoolExp>;
  pokemon_v2_encounterconditionnames_aggregate?: InputMaybe<PokemonV2EncounterconditionnameAggregateBoolExp>;
  pokemon_v2_encounterconditionvalues?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
  pokemon_v2_encounterconditionvalues_aggregate?: InputMaybe<PokemonV2EncounterconditionvalueAggregateBoolExp>;
}

export interface PokemonV2EncounterconditionOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encounterconditionnames_aggregate?: InputMaybe<PokemonV2EncounterconditionnameAggregateOrderBy>;
  pokemon_v2_encounterconditionvalues_aggregate?: InputMaybe<PokemonV2EncounterconditionvalueAggregateOrderBy>;
}

export type PokemonV2EncounterconditionSelectColumn = 'id' | 'name';

export interface PokemonV2EncounterconditionStreamCursorInput {
  initial_value: PokemonV2EncounterconditionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterconditionStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EncounterconditionnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2EncounterconditionnameAggregateBoolExpCount>;
}

export interface PokemonV2EncounterconditionnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EncounterconditionnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterconditionnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncounterconditionnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncounterconditionnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncounterconditionnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncounterconditionnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncounterconditionnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncounterconditionnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncounterconditionnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncounterconditionnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncounterconditionnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncounterconditionnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncounterconditionnameVarianceOrderBy>;
}

export interface PokemonV2EncounterconditionnameAvgOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterconditionnameBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterconditionnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterconditionnameBoolExp>>;
  encounter_condition_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encountercondition?: InputMaybe<PokemonV2EncounterconditionBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2EncounterconditionnameMaxOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameMinOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encountercondition?: InputMaybe<PokemonV2EncounterconditionOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2EncounterconditionnameSelectColumn =
  | 'encounter_condition_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2EncounterconditionnameStddevOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameStddevPopOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameStddevSampOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameStreamCursorInput {
  initial_value: PokemonV2EncounterconditionnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterconditionnameStreamCursorValueInput {
  encounter_condition_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EncounterconditionnameSumOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameVarPopOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameVarSampOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionnameVarianceOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2EncounterconditionvalueAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2EncounterconditionvalueAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2EncounterconditionvalueAggregateBoolExpCount>;
}

export interface PokemonV2EncounterconditionvalueAggregateBoolExpBoolAnd {
  arguments: PokemonV2EncounterconditionvalueSelectColumnPokemonV2EncounterconditionvalueAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2EncounterconditionvalueAggregateBoolExpBoolOr {
  arguments: PokemonV2EncounterconditionvalueSelectColumnPokemonV2EncounterconditionvalueAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2EncounterconditionvalueAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EncounterconditionvalueSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncounterconditionvalueAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncounterconditionvalueAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncounterconditionvalueMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncounterconditionvalueMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncounterconditionvalueStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncounterconditionvalueStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncounterconditionvalueStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncounterconditionvalueSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncounterconditionvalueVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncounterconditionvalueVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncounterconditionvalueVarianceOrderBy>;
}

export interface PokemonV2EncounterconditionvalueAvgOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterconditionvalueBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterconditionvalueBoolExp>>;
  encounter_condition_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_default?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encountercondition?: InputMaybe<PokemonV2EncounterconditionBoolExp>;
  pokemon_v2_encounterconditionvaluemaps?: InputMaybe<PokemonV2EncounterconditionvaluemapBoolExp>;
  pokemon_v2_encounterconditionvaluemaps_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluemapAggregateBoolExp>;
  pokemon_v2_encounterconditionvaluenames?: InputMaybe<PokemonV2EncounterconditionvaluenameBoolExp>;
  pokemon_v2_encounterconditionvaluenames_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluenameAggregateBoolExp>;
}

export interface PokemonV2EncounterconditionvalueMaxOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueMinOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_default?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encountercondition?: InputMaybe<PokemonV2EncounterconditionOrderBy>;
  pokemon_v2_encounterconditionvaluemaps_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluemapAggregateOrderBy>;
  pokemon_v2_encounterconditionvaluenames_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluenameAggregateOrderBy>;
}

export type PokemonV2EncounterconditionvalueSelectColumn =
  | 'encounter_condition_id'
  | 'id'
  | 'is_default'
  | 'name';

export type PokemonV2EncounterconditionvalueSelectColumnPokemonV2EncounterconditionvalueAggregateBoolExpBoolAndArgumentsColumns =
  'is_default';

export type PokemonV2EncounterconditionvalueSelectColumnPokemonV2EncounterconditionvalueAggregateBoolExpBoolOrArgumentsColumns =
  'is_default';

export interface PokemonV2EncounterconditionvalueStddevOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueStddevPopOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueStddevSampOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueStreamCursorInput {
  initial_value: PokemonV2EncounterconditionvalueStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterconditionvalueStreamCursorValueInput {
  encounter_condition_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EncounterconditionvalueSumOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueVarPopOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueVarSampOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvalueVarianceOrderBy {
  encounter_condition_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapAggregateBoolExp {
  count?: InputMaybe<PokemonV2EncounterconditionvaluemapAggregateBoolExpCount>;
}

export interface PokemonV2EncounterconditionvaluemapAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2EncounterconditionvaluemapSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterconditionvaluemapBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncounterconditionvaluemapAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncounterconditionvaluemapAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncounterconditionvaluemapMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncounterconditionvaluemapMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncounterconditionvaluemapStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncounterconditionvaluemapStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncounterconditionvaluemapStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncounterconditionvaluemapSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncounterconditionvaluemapVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncounterconditionvaluemapVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncounterconditionvaluemapVarianceOrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapAvgOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterconditionvaluemapBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterconditionvaluemapBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterconditionvaluemapBoolExp>>;
  encounter_condition_value_id?: InputMaybe<IntComparisonExp>;
  encounter_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_encounter?: InputMaybe<PokemonV2EncounterBoolExp>;
  pokemon_v2_encounterconditionvalue?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
}

export interface PokemonV2EncounterconditionvaluemapMaxOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapMinOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_encounter?: InputMaybe<PokemonV2EncounterOrderBy>;
  pokemon_v2_encounterconditionvalue?: InputMaybe<PokemonV2EncounterconditionvalueOrderBy>;
}

export type PokemonV2EncounterconditionvaluemapSelectColumn =
  | 'encounter_condition_value_id'
  | 'encounter_id'
  | 'id';

export interface PokemonV2EncounterconditionvaluemapStddevOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapStddevPopOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapStddevSampOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapStreamCursorInput {
  initial_value: PokemonV2EncounterconditionvaluemapStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterconditionvaluemapStreamCursorValueInput {
  encounter_condition_value_id?: InputMaybe<Scalars['Int']['input']>;
  encounter_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2EncounterconditionvaluemapSumOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapVarPopOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapVarSampOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluemapVarianceOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  encounter_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2EncounterconditionvaluenameAggregateBoolExpCount>;
}

export interface PokemonV2EncounterconditionvaluenameAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2EncounterconditionvaluenameSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterconditionvaluenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncounterconditionvaluenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncounterconditionvaluenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncounterconditionvaluenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncounterconditionvaluenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncounterconditionvaluenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncounterconditionvaluenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncounterconditionvaluenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncounterconditionvaluenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncounterconditionvaluenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncounterconditionvaluenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncounterconditionvaluenameVarianceOrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameAvgOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterconditionvaluenameBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterconditionvaluenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterconditionvaluenameBoolExp>>;
  encounter_condition_value_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encounterconditionvalue?: InputMaybe<PokemonV2EncounterconditionvalueBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2EncounterconditionvaluenameMaxOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameMinOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encounterconditionvalue?: InputMaybe<PokemonV2EncounterconditionvalueOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2EncounterconditionvaluenameSelectColumn =
  | 'encounter_condition_value_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2EncounterconditionvaluenameStddevOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameStddevPopOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameStddevSampOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameStreamCursorInput {
  initial_value: PokemonV2EncounterconditionvaluenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterconditionvaluenameStreamCursorValueInput {
  encounter_condition_value_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EncounterconditionvaluenameSumOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameVarPopOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameVarSampOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterconditionvaluenameVarianceOrderBy {
  encounter_condition_value_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncountermethodBoolExp>>;
  _not?: InputMaybe<PokemonV2EncountermethodBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncountermethodBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemon_v2_encountermethodnames?: InputMaybe<PokemonV2EncountermethodnameBoolExp>;
  pokemon_v2_encountermethodnames_aggregate?: InputMaybe<PokemonV2EncountermethodnameAggregateBoolExp>;
  pokemon_v2_encounterslots?: InputMaybe<PokemonV2EncounterslotBoolExp>;
  pokemon_v2_encounterslots_aggregate?: InputMaybe<PokemonV2EncounterslotAggregateBoolExp>;
  pokemon_v2_locationareaencounterrates?: InputMaybe<PokemonV2LocationareaencounterrateBoolExp>;
  pokemon_v2_locationareaencounterrates_aggregate?: InputMaybe<PokemonV2LocationareaencounterrateAggregateBoolExp>;
}

export interface PokemonV2EncountermethodOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_v2_encountermethodnames_aggregate?: InputMaybe<PokemonV2EncountermethodnameAggregateOrderBy>;
  pokemon_v2_encounterslots_aggregate?: InputMaybe<PokemonV2EncounterslotAggregateOrderBy>;
  pokemon_v2_locationareaencounterrates_aggregate?: InputMaybe<PokemonV2LocationareaencounterrateAggregateOrderBy>;
}

export type PokemonV2EncountermethodSelectColumn = 'id' | 'name' | 'order';

export interface PokemonV2EncountermethodStreamCursorInput {
  initial_value: PokemonV2EncountermethodStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncountermethodStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2EncountermethodnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2EncountermethodnameAggregateBoolExpCount>;
}

export interface PokemonV2EncountermethodnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EncountermethodnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncountermethodnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncountermethodnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncountermethodnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncountermethodnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncountermethodnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncountermethodnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncountermethodnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncountermethodnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncountermethodnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncountermethodnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncountermethodnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncountermethodnameVarianceOrderBy>;
}

export interface PokemonV2EncountermethodnameAvgOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncountermethodnameBoolExp>>;
  _not?: InputMaybe<PokemonV2EncountermethodnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncountermethodnameBoolExp>>;
  encounter_method_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encountermethod?: InputMaybe<PokemonV2EncountermethodBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2EncountermethodnameMaxOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameMinOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encountermethod?: InputMaybe<PokemonV2EncountermethodOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2EncountermethodnameSelectColumn =
  | 'encounter_method_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2EncountermethodnameStddevOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameStddevPopOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameStddevSampOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameStreamCursorInput {
  initial_value: PokemonV2EncountermethodnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncountermethodnameStreamCursorValueInput {
  encounter_method_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EncountermethodnameSumOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameVarPopOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameVarSampOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncountermethodnameVarianceOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotAggregateBoolExp {
  count?: InputMaybe<PokemonV2EncounterslotAggregateBoolExpCount>;
}

export interface PokemonV2EncounterslotAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EncounterslotSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EncounterslotBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EncounterslotAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EncounterslotAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EncounterslotMaxOrderBy>;
  min?: InputMaybe<PokemonV2EncounterslotMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EncounterslotStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EncounterslotStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EncounterslotStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EncounterslotSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EncounterslotVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EncounterslotVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EncounterslotVarianceOrderBy>;
}

export interface PokemonV2EncounterslotAvgOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotBoolExp {
  _and?: InputMaybe<Array<PokemonV2EncounterslotBoolExp>>;
  _not?: InputMaybe<PokemonV2EncounterslotBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EncounterslotBoolExp>>;
  encounter_method_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_encountermethod?: InputMaybe<PokemonV2EncountermethodBoolExp>;
  pokemon_v2_encounters?: InputMaybe<PokemonV2EncounterBoolExp>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  rarity?: InputMaybe<IntComparisonExp>;
  slot?: InputMaybe<IntComparisonExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2EncounterslotMaxOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotMinOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_encountermethod?: InputMaybe<PokemonV2EncountermethodOrderBy>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2EncounterslotSelectColumn =
  | 'encounter_method_id'
  | 'id'
  | 'rarity'
  | 'slot'
  | 'version_group_id';

export interface PokemonV2EncounterslotStddevOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotStddevPopOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotStddevSampOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotStreamCursorInput {
  initial_value: PokemonV2EncounterslotStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EncounterslotStreamCursorValueInput {
  encounter_method_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rarity?: InputMaybe<Scalars['Int']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2EncounterslotSumOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotVarPopOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotVarSampOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EncounterslotVarianceOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainAggregateBoolExp {
  count?: InputMaybe<PokemonV2EvolutionchainAggregateBoolExpCount>;
}

export interface PokemonV2EvolutionchainAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EvolutionchainSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EvolutionchainBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EvolutionchainAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EvolutionchainAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EvolutionchainMaxOrderBy>;
  min?: InputMaybe<PokemonV2EvolutionchainMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EvolutionchainStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EvolutionchainStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EvolutionchainStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EvolutionchainSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EvolutionchainVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EvolutionchainVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EvolutionchainVarianceOrderBy>;
}

export interface PokemonV2EvolutionchainAvgOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainBoolExp {
  _and?: InputMaybe<Array<PokemonV2EvolutionchainBoolExp>>;
  _not?: InputMaybe<PokemonV2EvolutionchainBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EvolutionchainBoolExp>>;
  baby_trigger_item_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
}

export interface PokemonV2EvolutionchainMaxOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainMinOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
}

export type PokemonV2EvolutionchainSelectColumn = 'baby_trigger_item_id' | 'id';

export interface PokemonV2EvolutionchainStddevOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainStddevPopOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainStddevSampOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainStreamCursorInput {
  initial_value: PokemonV2EvolutionchainStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EvolutionchainStreamCursorValueInput {
  baby_trigger_item_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2EvolutionchainSumOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainVarPopOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainVarSampOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutionchainVarianceOrderBy {
  baby_trigger_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggerBoolExp {
  _and?: InputMaybe<Array<PokemonV2EvolutiontriggerBoolExp>>;
  _not?: InputMaybe<PokemonV2EvolutiontriggerBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EvolutiontriggerBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_evolutiontriggernames?: InputMaybe<PokemonV2EvolutiontriggernameBoolExp>;
  pokemon_v2_evolutiontriggernames_aggregate?: InputMaybe<PokemonV2EvolutiontriggernameAggregateBoolExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
}

export interface PokemonV2EvolutiontriggerOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_evolutiontriggernames_aggregate?: InputMaybe<PokemonV2EvolutiontriggernameAggregateOrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
}

export type PokemonV2EvolutiontriggerSelectColumn = 'id' | 'name';

export interface PokemonV2EvolutiontriggerStreamCursorInput {
  initial_value: PokemonV2EvolutiontriggerStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EvolutiontriggerStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EvolutiontriggernameAggregateBoolExp {
  count?: InputMaybe<PokemonV2EvolutiontriggernameAggregateBoolExpCount>;
}

export interface PokemonV2EvolutiontriggernameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2EvolutiontriggernameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2EvolutiontriggernameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2EvolutiontriggernameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2EvolutiontriggernameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2EvolutiontriggernameMaxOrderBy>;
  min?: InputMaybe<PokemonV2EvolutiontriggernameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2EvolutiontriggernameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2EvolutiontriggernameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2EvolutiontriggernameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2EvolutiontriggernameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2EvolutiontriggernameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2EvolutiontriggernameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2EvolutiontriggernameVarianceOrderBy>;
}

export interface PokemonV2EvolutiontriggernameAvgOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameBoolExp {
  _and?: InputMaybe<Array<PokemonV2EvolutiontriggernameBoolExp>>;
  _not?: InputMaybe<PokemonV2EvolutiontriggernameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2EvolutiontriggernameBoolExp>>;
  evolution_trigger_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_evolutiontrigger?: InputMaybe<PokemonV2EvolutiontriggerBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2EvolutiontriggernameMaxOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameMinOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_evolutiontrigger?: InputMaybe<PokemonV2EvolutiontriggerOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2EvolutiontriggernameSelectColumn =
  | 'evolution_trigger_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2EvolutiontriggernameStddevOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameStddevPopOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameStddevSampOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameStreamCursorInput {
  initial_value: PokemonV2EvolutiontriggernameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2EvolutiontriggernameStreamCursorValueInput {
  evolution_trigger_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2EvolutiontriggernameSumOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameVarPopOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameVarSampOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2EvolutiontriggernameVarianceOrderBy {
  evolution_trigger_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceAggregateBoolExp {
  count?: InputMaybe<PokemonV2ExperienceAggregateBoolExpCount>;
}

export interface PokemonV2ExperienceAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ExperienceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ExperienceBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ExperienceAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ExperienceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ExperienceMaxOrderBy>;
  min?: InputMaybe<PokemonV2ExperienceMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ExperienceStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ExperienceStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ExperienceStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ExperienceSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ExperienceVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ExperienceVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ExperienceVarianceOrderBy>;
}

export interface PokemonV2ExperienceAvgOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceBoolExp {
  _and?: InputMaybe<Array<PokemonV2ExperienceBoolExp>>;
  _not?: InputMaybe<PokemonV2ExperienceBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ExperienceBoolExp>>;
  experience?: InputMaybe<IntComparisonExp>;
  growth_rate_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  level?: InputMaybe<IntComparisonExp>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateBoolExp>;
}

export interface PokemonV2ExperienceMaxOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceMinOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateOrderBy>;
}

export type PokemonV2ExperienceSelectColumn =
  | 'experience'
  | 'growth_rate_id'
  | 'id'
  | 'level';

export interface PokemonV2ExperienceStddevOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceStddevPopOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceStddevSampOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceStreamCursorInput {
  initial_value: PokemonV2ExperienceStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ExperienceStreamCursorValueInput {
  experience?: InputMaybe<Scalars['Int']['input']>;
  growth_rate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ExperienceSumOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceVarPopOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceVarSampOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2ExperienceVarianceOrderBy {
  experience?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenderBoolExp {
  _and?: InputMaybe<Array<PokemonV2GenderBoolExp>>;
  _not?: InputMaybe<PokemonV2GenderBoolExp>;
  _or?: InputMaybe<Array<PokemonV2GenderBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
}

export interface PokemonV2GenderOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
}

export type PokemonV2GenderSelectColumn = 'id' | 'name';

export interface PokemonV2GenderStreamCursorInput {
  initial_value: PokemonV2GenderStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2GenderStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2GenerationAggregateBoolExp {
  count?: InputMaybe<PokemonV2GenerationAggregateBoolExpCount>;
}

export interface PokemonV2GenerationAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2GenerationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2GenerationBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2GenerationAggregateOrderBy {
  avg?: InputMaybe<PokemonV2GenerationAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2GenerationMaxOrderBy>;
  min?: InputMaybe<PokemonV2GenerationMinOrderBy>;
  stddev?: InputMaybe<PokemonV2GenerationStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2GenerationStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2GenerationStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2GenerationSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2GenerationVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2GenerationVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2GenerationVarianceOrderBy>;
}

export interface PokemonV2GenerationAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationBoolExp {
  _and?: InputMaybe<Array<PokemonV2GenerationBoolExp>>;
  _not?: InputMaybe<PokemonV2GenerationBoolExp>;
  _or?: InputMaybe<Array<PokemonV2GenerationBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_abilities?: InputMaybe<PokemonV2AbilityBoolExp>;
  pokemon_v2_abilities_aggregate?: InputMaybe<PokemonV2AbilityAggregateBoolExp>;
  pokemon_v2_generationnames?: InputMaybe<PokemonV2GenerationnameBoolExp>;
  pokemon_v2_generationnames_aggregate?: InputMaybe<PokemonV2GenerationnameAggregateBoolExp>;
  pokemon_v2_itemgameindices?: InputMaybe<PokemonV2ItemgameindexBoolExp>;
  pokemon_v2_itemgameindices_aggregate?: InputMaybe<PokemonV2ItemgameindexAggregateBoolExp>;
  pokemon_v2_locationgameindices?: InputMaybe<PokemonV2LocationgameindexBoolExp>;
  pokemon_v2_locationgameindices_aggregate?: InputMaybe<PokemonV2LocationgameindexAggregateBoolExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
  pokemon_v2_pokemonformgenerations?: InputMaybe<PokemonV2PokemonformgenerationBoolExp>;
  pokemon_v2_pokemonformgenerations_aggregate?: InputMaybe<PokemonV2PokemonformgenerationAggregateBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
  pokemon_v2_pokemontypepasts?: InputMaybe<PokemonV2PokemontypepastBoolExp>;
  pokemon_v2_pokemontypepasts_aggregate?: InputMaybe<PokemonV2PokemontypepastAggregateBoolExp>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionBoolExp>;
  pokemon_v2_typegameindices?: InputMaybe<PokemonV2TypegameindexBoolExp>;
  pokemon_v2_typegameindices_aggregate?: InputMaybe<PokemonV2TypegameindexAggregateBoolExp>;
  pokemon_v2_types?: InputMaybe<PokemonV2TypeBoolExp>;
  pokemon_v2_types_aggregate?: InputMaybe<PokemonV2TypeAggregateBoolExp>;
  pokemon_v2_versiongroups?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  pokemon_v2_versiongroups_aggregate?: InputMaybe<PokemonV2VersiongroupAggregateBoolExp>;
  region_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2GenerationMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationMinOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_abilities_aggregate?: InputMaybe<PokemonV2AbilityAggregateOrderBy>;
  pokemon_v2_generationnames_aggregate?: InputMaybe<PokemonV2GenerationnameAggregateOrderBy>;
  pokemon_v2_itemgameindices_aggregate?: InputMaybe<PokemonV2ItemgameindexAggregateOrderBy>;
  pokemon_v2_locationgameindices_aggregate?: InputMaybe<PokemonV2LocationgameindexAggregateOrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
  pokemon_v2_pokemonformgenerations_aggregate?: InputMaybe<PokemonV2PokemonformgenerationAggregateOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
  pokemon_v2_pokemontypepasts_aggregate?: InputMaybe<PokemonV2PokemontypepastAggregateOrderBy>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionOrderBy>;
  pokemon_v2_typegameindices_aggregate?: InputMaybe<PokemonV2TypegameindexAggregateOrderBy>;
  pokemon_v2_types_aggregate?: InputMaybe<PokemonV2TypeAggregateOrderBy>;
  pokemon_v2_versiongroups_aggregate?: InputMaybe<PokemonV2VersiongroupAggregateOrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export type PokemonV2GenerationSelectColumn = 'id' | 'name' | 'region_id';

export interface PokemonV2GenerationStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationStreamCursorInput {
  initial_value: PokemonV2GenerationStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2GenerationStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2GenerationSumOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2GenerationnameAggregateBoolExpCount>;
}

export interface PokemonV2GenerationnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2GenerationnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2GenerationnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2GenerationnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2GenerationnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2GenerationnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2GenerationnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2GenerationnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2GenerationnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2GenerationnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2GenerationnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2GenerationnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2GenerationnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2GenerationnameVarianceOrderBy>;
}

export interface PokemonV2GenerationnameAvgOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2GenerationnameBoolExp>>;
  _not?: InputMaybe<PokemonV2GenerationnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2GenerationnameBoolExp>>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2GenerationnameMaxOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameMinOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2GenerationnameSelectColumn =
  | 'generation_id'
  | 'id'
  | 'language_id'
  | 'name';

export interface PokemonV2GenerationnameStddevOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameStddevPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameStddevSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameStreamCursorInput {
  initial_value: PokemonV2GenerationnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2GenerationnameStreamCursorValueInput {
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2GenerationnameSumOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameVarPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameVarSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GenerationnameVarianceOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthrateBoolExp {
  _and?: InputMaybe<Array<PokemonV2GrowthrateBoolExp>>;
  _not?: InputMaybe<PokemonV2GrowthrateBoolExp>;
  _or?: InputMaybe<Array<PokemonV2GrowthrateBoolExp>>;
  formula?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_experiences?: InputMaybe<PokemonV2ExperienceBoolExp>;
  pokemon_v2_experiences_aggregate?: InputMaybe<PokemonV2ExperienceAggregateBoolExp>;
  pokemon_v2_growthratedescriptions?: InputMaybe<PokemonV2GrowthratedescriptionBoolExp>;
  pokemon_v2_growthratedescriptions_aggregate?: InputMaybe<PokemonV2GrowthratedescriptionAggregateBoolExp>;
  pokemon_v2_machines?: InputMaybe<PokemonV2MachineBoolExp>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
}

export interface PokemonV2GrowthrateOrderBy {
  formula?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_experiences_aggregate?: InputMaybe<PokemonV2ExperienceAggregateOrderBy>;
  pokemon_v2_growthratedescriptions_aggregate?: InputMaybe<PokemonV2GrowthratedescriptionAggregateOrderBy>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
}

export type PokemonV2GrowthrateSelectColumn = 'formula' | 'id' | 'name';

export interface PokemonV2GrowthrateStreamCursorInput {
  initial_value: PokemonV2GrowthrateStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2GrowthrateStreamCursorValueInput {
  formula?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2GrowthratedescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2GrowthratedescriptionAggregateBoolExpCount>;
}

export interface PokemonV2GrowthratedescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2GrowthratedescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2GrowthratedescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2GrowthratedescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2GrowthratedescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2GrowthratedescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2GrowthratedescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2GrowthratedescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2GrowthratedescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2GrowthratedescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2GrowthratedescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2GrowthratedescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2GrowthratedescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2GrowthratedescriptionVarianceOrderBy>;
}

export interface PokemonV2GrowthratedescriptionAvgOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2GrowthratedescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2GrowthratedescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2GrowthratedescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  growth_rate_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2GrowthratedescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2GrowthratedescriptionSelectColumn =
  | 'description'
  | 'growth_rate_id'
  | 'id'
  | 'language_id';

export interface PokemonV2GrowthratedescriptionStddevOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionStddevPopOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionStddevSampOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionStreamCursorInput {
  initial_value: PokemonV2GrowthratedescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2GrowthratedescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  growth_rate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2GrowthratedescriptionSumOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionVarPopOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionVarSampOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2GrowthratedescriptionVarianceOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemAggregateBoolExpCount>;
}

export interface PokemonV2ItemAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemVarianceOrderBy>;
}

export interface PokemonV2ItemAvgOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemBoolExp>>;
  cost?: InputMaybe<IntComparisonExp>;
  fling_power?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_category_id?: InputMaybe<IntComparisonExp>;
  item_fling_effect_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2PokemonevolutionsByHeldItemId?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemonV2PokemonevolutionsByHeldItemId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_v2_berries?: InputMaybe<PokemonV2BerryBoolExp>;
  pokemon_v2_berries_aggregate?: InputMaybe<PokemonV2BerryAggregateBoolExp>;
  pokemon_v2_evolutionchains?: InputMaybe<PokemonV2EvolutionchainBoolExp>;
  pokemon_v2_evolutionchains_aggregate?: InputMaybe<PokemonV2EvolutionchainAggregateBoolExp>;
  pokemon_v2_itemattributemaps?: InputMaybe<PokemonV2ItemattributemapBoolExp>;
  pokemon_v2_itemattributemaps_aggregate?: InputMaybe<PokemonV2ItemattributemapAggregateBoolExp>;
  pokemon_v2_itemcategory?: InputMaybe<PokemonV2ItemcategoryBoolExp>;
  pokemon_v2_itemeffecttexts?: InputMaybe<PokemonV2ItemeffecttextBoolExp>;
  pokemon_v2_itemeffecttexts_aggregate?: InputMaybe<PokemonV2ItemeffecttextAggregateBoolExp>;
  pokemon_v2_itemflavortexts?: InputMaybe<PokemonV2ItemflavortextBoolExp>;
  pokemon_v2_itemflavortexts_aggregate?: InputMaybe<PokemonV2ItemflavortextAggregateBoolExp>;
  pokemon_v2_itemflingeffect?: InputMaybe<PokemonV2ItemflingeffectBoolExp>;
  pokemon_v2_itemgameindices?: InputMaybe<PokemonV2ItemgameindexBoolExp>;
  pokemon_v2_itemgameindices_aggregate?: InputMaybe<PokemonV2ItemgameindexAggregateBoolExp>;
  pokemon_v2_itemnames?: InputMaybe<PokemonV2ItemnameBoolExp>;
  pokemon_v2_itemnames_aggregate?: InputMaybe<PokemonV2ItemnameAggregateBoolExp>;
  pokemon_v2_itemsprites?: InputMaybe<PokemonV2ItemspritesBoolExp>;
  pokemon_v2_itemsprites_aggregate?: InputMaybe<PokemonV2ItemspritesAggregateBoolExp>;
  pokemon_v2_machines?: InputMaybe<PokemonV2MachineBoolExp>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateBoolExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_v2_pokemonitems?: InputMaybe<PokemonV2PokemonitemBoolExp>;
  pokemon_v2_pokemonitems_aggregate?: InputMaybe<PokemonV2PokemonitemAggregateBoolExp>;
}

export interface PokemonV2ItemMaxOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemMinOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2PokemonevolutionsByHeldItemId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_v2_berries_aggregate?: InputMaybe<PokemonV2BerryAggregateOrderBy>;
  pokemon_v2_evolutionchains_aggregate?: InputMaybe<PokemonV2EvolutionchainAggregateOrderBy>;
  pokemon_v2_itemattributemaps_aggregate?: InputMaybe<PokemonV2ItemattributemapAggregateOrderBy>;
  pokemon_v2_itemcategory?: InputMaybe<PokemonV2ItemcategoryOrderBy>;
  pokemon_v2_itemeffecttexts_aggregate?: InputMaybe<PokemonV2ItemeffecttextAggregateOrderBy>;
  pokemon_v2_itemflavortexts_aggregate?: InputMaybe<PokemonV2ItemflavortextAggregateOrderBy>;
  pokemon_v2_itemflingeffect?: InputMaybe<PokemonV2ItemflingeffectOrderBy>;
  pokemon_v2_itemgameindices_aggregate?: InputMaybe<PokemonV2ItemgameindexAggregateOrderBy>;
  pokemon_v2_itemnames_aggregate?: InputMaybe<PokemonV2ItemnameAggregateOrderBy>;
  pokemon_v2_itemsprites_aggregate?: InputMaybe<PokemonV2ItemspritesAggregateOrderBy>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateOrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_v2_pokemonitems_aggregate?: InputMaybe<PokemonV2PokemonitemAggregateOrderBy>;
}

export type PokemonV2ItemSelectColumn =
  | 'cost'
  | 'fling_power'
  | 'id'
  | 'item_category_id'
  | 'item_fling_effect_id'
  | 'name';

export interface PokemonV2ItemStddevOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemStddevPopOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemStddevSampOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemStreamCursorInput {
  initial_value: PokemonV2ItemStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemStreamCursorValueInput {
  cost?: InputMaybe<Scalars['Int']['input']>;
  fling_power?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_category_id?: InputMaybe<Scalars['Int']['input']>;
  item_fling_effect_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemSumOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemVarPopOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemVarSampOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemVarianceOrderBy {
  cost?: InputMaybe<OrderBy>;
  fling_power?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributeBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemattributeBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemattributeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemattributeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itemattributedescriptions?: InputMaybe<PokemonV2ItemattributedescriptionBoolExp>;
  pokemon_v2_itemattributedescriptions_aggregate?: InputMaybe<PokemonV2ItemattributedescriptionAggregateBoolExp>;
  pokemon_v2_itemattributemaps?: InputMaybe<PokemonV2ItemattributemapBoolExp>;
  pokemon_v2_itemattributemaps_aggregate?: InputMaybe<PokemonV2ItemattributemapAggregateBoolExp>;
  pokemon_v2_itemattributenames?: InputMaybe<PokemonV2ItemattributenameBoolExp>;
  pokemon_v2_itemattributenames_aggregate?: InputMaybe<PokemonV2ItemattributenameAggregateBoolExp>;
}

export interface PokemonV2ItemattributeOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itemattributedescriptions_aggregate?: InputMaybe<PokemonV2ItemattributedescriptionAggregateOrderBy>;
  pokemon_v2_itemattributemaps_aggregate?: InputMaybe<PokemonV2ItemattributemapAggregateOrderBy>;
  pokemon_v2_itemattributenames_aggregate?: InputMaybe<PokemonV2ItemattributenameAggregateOrderBy>;
}

export type PokemonV2ItemattributeSelectColumn = 'id' | 'name';

export interface PokemonV2ItemattributeStreamCursorInput {
  initial_value: PokemonV2ItemattributeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemattributeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemattributedescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemattributedescriptionAggregateBoolExpCount>;
}

export interface PokemonV2ItemattributedescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemattributedescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemattributedescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemattributedescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemattributedescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemattributedescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemattributedescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemattributedescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemattributedescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemattributedescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemattributedescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemattributedescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemattributedescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemattributedescriptionVarianceOrderBy>;
}

export interface PokemonV2ItemattributedescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemattributedescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemattributedescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemattributedescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_attribute_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_itemattribute?: InputMaybe<PokemonV2ItemattributeBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ItemattributedescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_itemattribute?: InputMaybe<PokemonV2ItemattributeOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ItemattributedescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'item_attribute_id'
  | 'language_id';

export interface PokemonV2ItemattributedescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionStreamCursorInput {
  initial_value: PokemonV2ItemattributedescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemattributedescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_attribute_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ItemattributedescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributedescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemattributemapAggregateBoolExpCount>;
}

export interface PokemonV2ItemattributemapAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemattributemapSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemattributemapBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemattributemapAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemattributemapAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemattributemapMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemattributemapMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemattributemapStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemattributemapStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemattributemapStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemattributemapSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemattributemapVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemattributemapVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemattributemapVarianceOrderBy>;
}

export interface PokemonV2ItemattributemapAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemattributemapBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemattributemapBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemattributemapBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_attribute_id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_itemattribute?: InputMaybe<PokemonV2ItemattributeBoolExp>;
}

export interface PokemonV2ItemattributemapMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_itemattribute?: InputMaybe<PokemonV2ItemattributeOrderBy>;
}

export type PokemonV2ItemattributemapSelectColumn =
  | 'id'
  | 'item_attribute_id'
  | 'item_id';

export interface PokemonV2ItemattributemapStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapStreamCursorInput {
  initial_value: PokemonV2ItemattributemapStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemattributemapStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_attribute_id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ItemattributemapSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributemapVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemattributenameAggregateBoolExpCount>;
}

export interface PokemonV2ItemattributenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemattributenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemattributenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemattributenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemattributenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemattributenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemattributenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemattributenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemattributenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemattributenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemattributenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemattributenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemattributenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemattributenameVarianceOrderBy>;
}

export interface PokemonV2ItemattributenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemattributenameBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemattributenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemattributenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_attribute_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itemattribute?: InputMaybe<PokemonV2ItemattributeBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ItemattributenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itemattribute?: InputMaybe<PokemonV2ItemattributeOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ItemattributenameSelectColumn =
  | 'id'
  | 'item_attribute_id'
  | 'language_id'
  | 'name';

export interface PokemonV2ItemattributenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameStreamCursorInput {
  initial_value: PokemonV2ItemattributenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemattributenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_attribute_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemattributenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemattributenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_attribute_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemcategoryAggregateBoolExpCount>;
}

export interface PokemonV2ItemcategoryAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemcategorySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemcategoryBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemcategoryAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemcategoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemcategoryMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemcategoryMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemcategoryStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemcategoryStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemcategoryStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemcategorySumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemcategoryVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemcategoryVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemcategoryVarianceOrderBy>;
}

export interface PokemonV2ItemcategoryAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemcategoryBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemcategoryBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemcategoryBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_pocket_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itemcategorynames?: InputMaybe<PokemonV2ItemcategorynameBoolExp>;
  pokemon_v2_itemcategorynames_aggregate?: InputMaybe<PokemonV2ItemcategorynameAggregateBoolExp>;
  pokemon_v2_itempocket?: InputMaybe<PokemonV2ItempocketBoolExp>;
  pokemon_v2_items?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_items_aggregate?: InputMaybe<PokemonV2ItemAggregateBoolExp>;
}

export interface PokemonV2ItemcategoryMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itemcategorynames_aggregate?: InputMaybe<PokemonV2ItemcategorynameAggregateOrderBy>;
  pokemon_v2_itempocket?: InputMaybe<PokemonV2ItempocketOrderBy>;
  pokemon_v2_items_aggregate?: InputMaybe<PokemonV2ItemAggregateOrderBy>;
}

export type PokemonV2ItemcategorySelectColumn =
  | 'id'
  | 'item_pocket_id'
  | 'name';

export interface PokemonV2ItemcategoryStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryStreamCursorInput {
  initial_value: PokemonV2ItemcategoryStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemcategoryStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_pocket_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemcategorySumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategoryVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemcategorynameAggregateBoolExpCount>;
}

export interface PokemonV2ItemcategorynameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemcategorynameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemcategorynameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemcategorynameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemcategorynameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemcategorynameMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemcategorynameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemcategorynameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemcategorynameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemcategorynameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemcategorynameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemcategorynameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemcategorynameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemcategorynameVarianceOrderBy>;
}

export interface PokemonV2ItemcategorynameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemcategorynameBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemcategorynameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemcategorynameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_category_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itemcategory?: InputMaybe<PokemonV2ItemcategoryBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ItemcategorynameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itemcategory?: InputMaybe<PokemonV2ItemcategoryOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ItemcategorynameSelectColumn =
  | 'id'
  | 'item_category_id'
  | 'language_id'
  | 'name';

export interface PokemonV2ItemcategorynameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameStreamCursorInput {
  initial_value: PokemonV2ItemcategorynameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemcategorynameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_category_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemcategorynameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemcategorynameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_category_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemeffecttextAggregateBoolExpCount>;
}

export interface PokemonV2ItemeffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemeffecttextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemeffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemeffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemeffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemeffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemeffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemeffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemeffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemeffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemeffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemeffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemeffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemeffecttextVarianceOrderBy>;
}

export interface PokemonV2ItemeffecttextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemeffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemeffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemeffecttextBoolExp>>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  short_effect?: InputMaybe<StringComparisonExp>;
}

export interface PokemonV2ItemeffecttextMaxOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextMinOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export type PokemonV2ItemeffecttextSelectColumn =
  | 'effect'
  | 'id'
  | 'item_id'
  | 'language_id'
  | 'short_effect';

export interface PokemonV2ItemeffecttextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextStreamCursorInput {
  initial_value: PokemonV2ItemeffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemeffecttextStreamCursorValueInput {
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  short_effect?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemeffecttextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemeffecttextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemflavortextAggregateBoolExpCount>;
}

export interface PokemonV2ItemflavortextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemflavortextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemflavortextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemflavortextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemflavortextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemflavortextMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemflavortextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemflavortextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemflavortextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemflavortextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemflavortextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemflavortextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemflavortextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemflavortextVarianceOrderBy>;
}

export interface PokemonV2ItemflavortextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemflavortextBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemflavortextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemflavortextBoolExp>>;
  flavor_text?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2ItemflavortextMaxOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextMinOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2ItemflavortextSelectColumn =
  | 'flavor_text'
  | 'id'
  | 'item_id'
  | 'language_id'
  | 'version_group_id';

export interface PokemonV2ItemflavortextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextStreamCursorInput {
  initial_value: PokemonV2ItemflavortextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemflavortextStreamCursorValueInput {
  flavor_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ItemflavortextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflavortextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffectBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemflingeffectBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemflingeffectBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemflingeffectBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itemflingeffecteffecttexts?: InputMaybe<PokemonV2ItemflingeffecteffecttextBoolExp>;
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: InputMaybe<PokemonV2ItemflingeffecteffecttextAggregateBoolExp>;
  pokemon_v2_items?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_items_aggregate?: InputMaybe<PokemonV2ItemAggregateBoolExp>;
}

export interface PokemonV2ItemflingeffectOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: InputMaybe<PokemonV2ItemflingeffecteffecttextAggregateOrderBy>;
  pokemon_v2_items_aggregate?: InputMaybe<PokemonV2ItemAggregateOrderBy>;
}

export type PokemonV2ItemflingeffectSelectColumn = 'id' | 'name';

export interface PokemonV2ItemflingeffectStreamCursorInput {
  initial_value: PokemonV2ItemflingeffectStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemflingeffectStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemflingeffecteffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemflingeffecteffecttextAggregateBoolExpCount>;
}

export interface PokemonV2ItemflingeffecteffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemflingeffecteffecttextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemflingeffecteffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemflingeffecteffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemflingeffecteffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemflingeffecteffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemflingeffecteffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemflingeffecteffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemflingeffecteffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemflingeffecteffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemflingeffecteffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemflingeffecteffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemflingeffecteffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemflingeffecteffecttextVarianceOrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemflingeffecteffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemflingeffecteffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemflingeffecteffecttextBoolExp>>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_fling_effect_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_itemflingeffect?: InputMaybe<PokemonV2ItemflingeffectBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ItemflingeffecteffecttextMaxOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextMinOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_itemflingeffect?: InputMaybe<PokemonV2ItemflingeffectOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ItemflingeffecteffecttextSelectColumn =
  | 'effect'
  | 'id'
  | 'item_fling_effect_id'
  | 'language_id';

export interface PokemonV2ItemflingeffecteffecttextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextStreamCursorInput {
  initial_value: PokemonV2ItemflingeffecteffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemflingeffecteffecttextStreamCursorValueInput {
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_fling_effect_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ItemflingeffecteffecttextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemflingeffecteffecttextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_fling_effect_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemgameindexAggregateBoolExpCount>;
}

export interface PokemonV2ItemgameindexAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemgameindexSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemgameindexBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemgameindexAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemgameindexAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemgameindexMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemgameindexMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemgameindexStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemgameindexStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemgameindexStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemgameindexSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemgameindexVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemgameindexVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemgameindexVarianceOrderBy>;
}

export interface PokemonV2ItemgameindexAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemgameindexBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemgameindexBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemgameindexBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
}

export interface PokemonV2ItemgameindexMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
}

export type PokemonV2ItemgameindexSelectColumn =
  | 'game_index'
  | 'generation_id'
  | 'id'
  | 'item_id';

export interface PokemonV2ItemgameindexStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexStreamCursorInput {
  initial_value: PokemonV2ItemgameindexStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemgameindexStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2ItemgameindexSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemgameindexVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemnameAggregateBoolExpCount>;
}

export interface PokemonV2ItemnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemnameVarianceOrderBy>;
}

export interface PokemonV2ItemnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemnameBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ItemnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ItemnameSelectColumn =
  | 'id'
  | 'item_id'
  | 'language_id'
  | 'name';

export interface PokemonV2ItemnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameStreamCursorInput {
  initial_value: PokemonV2ItemnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItemnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItempocketBoolExp>>;
  _not?: InputMaybe<PokemonV2ItempocketBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItempocketBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itemcategories?: InputMaybe<PokemonV2ItemcategoryBoolExp>;
  pokemon_v2_itemcategories_aggregate?: InputMaybe<PokemonV2ItemcategoryAggregateBoolExp>;
  pokemon_v2_itempocketnames?: InputMaybe<PokemonV2ItempocketnameBoolExp>;
  pokemon_v2_itempocketnames_aggregate?: InputMaybe<PokemonV2ItempocketnameAggregateBoolExp>;
}

export interface PokemonV2ItempocketOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itemcategories_aggregate?: InputMaybe<PokemonV2ItemcategoryAggregateOrderBy>;
  pokemon_v2_itempocketnames_aggregate?: InputMaybe<PokemonV2ItempocketnameAggregateOrderBy>;
}

export type PokemonV2ItempocketSelectColumn = 'id' | 'name';

export interface PokemonV2ItempocketStreamCursorInput {
  initial_value: PokemonV2ItempocketStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItempocketStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItempocketnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItempocketnameAggregateBoolExpCount>;
}

export interface PokemonV2ItempocketnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItempocketnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItempocketnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItempocketnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItempocketnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItempocketnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItempocketnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItempocketnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItempocketnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItempocketnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItempocketnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItempocketnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItempocketnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItempocketnameVarianceOrderBy>;
}

export interface PokemonV2ItempocketnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItempocketnameBoolExp>>;
  _not?: InputMaybe<PokemonV2ItempocketnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItempocketnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_pocket_id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_itempocket?: InputMaybe<PokemonV2ItempocketBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2ItempocketnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_itempocket?: InputMaybe<PokemonV2ItempocketOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2ItempocketnameSelectColumn =
  | 'id'
  | 'item_pocket_id'
  | 'language_id'
  | 'name';

export interface PokemonV2ItempocketnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameStreamCursorInput {
  initial_value: PokemonV2ItempocketnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItempocketnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_pocket_id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2ItempocketnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItempocketnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_pocket_id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesAggregateBoolExp {
  count?: InputMaybe<PokemonV2ItemspritesAggregateBoolExpCount>;
}

export interface PokemonV2ItemspritesAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2ItemspritesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2ItemspritesBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2ItemspritesAggregateOrderBy {
  avg?: InputMaybe<PokemonV2ItemspritesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2ItemspritesMaxOrderBy>;
  min?: InputMaybe<PokemonV2ItemspritesMinOrderBy>;
  stddev?: InputMaybe<PokemonV2ItemspritesStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2ItemspritesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2ItemspritesStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2ItemspritesSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2ItemspritesVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2ItemspritesVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2ItemspritesVarianceOrderBy>;
}

export interface PokemonV2ItemspritesAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesBoolExp {
  _and?: InputMaybe<Array<PokemonV2ItemspritesBoolExp>>;
  _not?: InputMaybe<PokemonV2ItemspritesBoolExp>;
  _or?: InputMaybe<Array<PokemonV2ItemspritesBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  sprites?: InputMaybe<JsonbComparisonExp>;
}

export interface PokemonV2ItemspritesMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  sprites?: InputMaybe<OrderBy>;
}

export type PokemonV2ItemspritesSelectColumn = 'id' | 'item_id' | 'sprites';

export interface PokemonV2ItemspritesStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesStreamCursorInput {
  initial_value: PokemonV2ItemspritesStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2ItemspritesStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  sprites?: InputMaybe<Scalars['jsonb']['input']>;
}

export interface PokemonV2ItemspritesSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2ItemspritesVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguageBoolExp {
  _and?: InputMaybe<Array<PokemonV2LanguageBoolExp>>;
  _not?: InputMaybe<PokemonV2LanguageBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LanguageBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  iso639?: InputMaybe<StringComparisonExp>;
  iso3166?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  official?: InputMaybe<BooleanComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemonV2LanguagenamesByLocalLanguageId?: InputMaybe<PokemonV2LanguagenameBoolExp>;
  pokemonV2LanguagenamesByLocalLanguageId_aggregate?: InputMaybe<PokemonV2LanguagenameAggregateBoolExp>;
  pokemon_v2_abilitychangeeffecttexts?: InputMaybe<PokemonV2AbilitychangeeffecttextBoolExp>;
  pokemon_v2_abilitychangeeffecttexts_aggregate?: InputMaybe<PokemonV2AbilitychangeeffecttextAggregateBoolExp>;
  pokemon_v2_abilityeffecttexts?: InputMaybe<PokemonV2AbilityeffecttextBoolExp>;
  pokemon_v2_abilityeffecttexts_aggregate?: InputMaybe<PokemonV2AbilityeffecttextAggregateBoolExp>;
  pokemon_v2_abilityflavortexts?: InputMaybe<PokemonV2AbilityflavortextBoolExp>;
  pokemon_v2_abilityflavortexts_aggregate?: InputMaybe<PokemonV2AbilityflavortextAggregateBoolExp>;
  pokemon_v2_abilitynames?: InputMaybe<PokemonV2AbilitynameBoolExp>;
  pokemon_v2_abilitynames_aggregate?: InputMaybe<PokemonV2AbilitynameAggregateBoolExp>;
  pokemon_v2_berryfirmnessnames?: InputMaybe<PokemonV2BerryfirmnessnameBoolExp>;
  pokemon_v2_berryfirmnessnames_aggregate?: InputMaybe<PokemonV2BerryfirmnessnameAggregateBoolExp>;
  pokemon_v2_berryflavornames?: InputMaybe<PokemonV2BerryflavornameBoolExp>;
  pokemon_v2_berryflavornames_aggregate?: InputMaybe<PokemonV2BerryflavornameAggregateBoolExp>;
  pokemon_v2_characteristicdescriptions?: InputMaybe<PokemonV2CharacteristicdescriptionBoolExp>;
  pokemon_v2_characteristicdescriptions_aggregate?: InputMaybe<PokemonV2CharacteristicdescriptionAggregateBoolExp>;
  pokemon_v2_contesteffecteffecttexts?: InputMaybe<PokemonV2ContesteffecteffecttextBoolExp>;
  pokemon_v2_contesteffecteffecttexts_aggregate?: InputMaybe<PokemonV2ContesteffecteffecttextAggregateBoolExp>;
  pokemon_v2_contesteffectflavortexts?: InputMaybe<PokemonV2ContesteffectflavortextBoolExp>;
  pokemon_v2_contesteffectflavortexts_aggregate?: InputMaybe<PokemonV2ContesteffectflavortextAggregateBoolExp>;
  pokemon_v2_contesttypenames?: InputMaybe<PokemonV2ContesttypenameBoolExp>;
  pokemon_v2_contesttypenames_aggregate?: InputMaybe<PokemonV2ContesttypenameAggregateBoolExp>;
  pokemon_v2_egggroupnames?: InputMaybe<PokemonV2EgggroupnameBoolExp>;
  pokemon_v2_egggroupnames_aggregate?: InputMaybe<PokemonV2EgggroupnameAggregateBoolExp>;
  pokemon_v2_encounterconditionnames?: InputMaybe<PokemonV2EncounterconditionnameBoolExp>;
  pokemon_v2_encounterconditionnames_aggregate?: InputMaybe<PokemonV2EncounterconditionnameAggregateBoolExp>;
  pokemon_v2_encounterconditionvaluenames?: InputMaybe<PokemonV2EncounterconditionvaluenameBoolExp>;
  pokemon_v2_encounterconditionvaluenames_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluenameAggregateBoolExp>;
  pokemon_v2_encountermethodnames?: InputMaybe<PokemonV2EncountermethodnameBoolExp>;
  pokemon_v2_encountermethodnames_aggregate?: InputMaybe<PokemonV2EncountermethodnameAggregateBoolExp>;
  pokemon_v2_evolutiontriggernames?: InputMaybe<PokemonV2EvolutiontriggernameBoolExp>;
  pokemon_v2_evolutiontriggernames_aggregate?: InputMaybe<PokemonV2EvolutiontriggernameAggregateBoolExp>;
  pokemon_v2_generationnames?: InputMaybe<PokemonV2GenerationnameBoolExp>;
  pokemon_v2_generationnames_aggregate?: InputMaybe<PokemonV2GenerationnameAggregateBoolExp>;
  pokemon_v2_growthratedescriptions?: InputMaybe<PokemonV2GrowthratedescriptionBoolExp>;
  pokemon_v2_growthratedescriptions_aggregate?: InputMaybe<PokemonV2GrowthratedescriptionAggregateBoolExp>;
  pokemon_v2_itemattributedescriptions?: InputMaybe<PokemonV2ItemattributedescriptionBoolExp>;
  pokemon_v2_itemattributedescriptions_aggregate?: InputMaybe<PokemonV2ItemattributedescriptionAggregateBoolExp>;
  pokemon_v2_itemattributenames?: InputMaybe<PokemonV2ItemattributenameBoolExp>;
  pokemon_v2_itemattributenames_aggregate?: InputMaybe<PokemonV2ItemattributenameAggregateBoolExp>;
  pokemon_v2_itemcategorynames?: InputMaybe<PokemonV2ItemcategorynameBoolExp>;
  pokemon_v2_itemcategorynames_aggregate?: InputMaybe<PokemonV2ItemcategorynameAggregateBoolExp>;
  pokemon_v2_itemeffecttexts?: InputMaybe<PokemonV2ItemeffecttextBoolExp>;
  pokemon_v2_itemeffecttexts_aggregate?: InputMaybe<PokemonV2ItemeffecttextAggregateBoolExp>;
  pokemon_v2_itemflavortexts?: InputMaybe<PokemonV2ItemflavortextBoolExp>;
  pokemon_v2_itemflavortexts_aggregate?: InputMaybe<PokemonV2ItemflavortextAggregateBoolExp>;
  pokemon_v2_itemflingeffecteffecttexts?: InputMaybe<PokemonV2ItemflingeffecteffecttextBoolExp>;
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: InputMaybe<PokemonV2ItemflingeffecteffecttextAggregateBoolExp>;
  pokemon_v2_itemnames?: InputMaybe<PokemonV2ItemnameBoolExp>;
  pokemon_v2_itemnames_aggregate?: InputMaybe<PokemonV2ItemnameAggregateBoolExp>;
  pokemon_v2_itempocketnames?: InputMaybe<PokemonV2ItempocketnameBoolExp>;
  pokemon_v2_itempocketnames_aggregate?: InputMaybe<PokemonV2ItempocketnameAggregateBoolExp>;
  pokemon_v2_languagenames?: InputMaybe<PokemonV2LanguagenameBoolExp>;
  pokemon_v2_languagenames_aggregate?: InputMaybe<PokemonV2LanguagenameAggregateBoolExp>;
  pokemon_v2_locationareanames?: InputMaybe<PokemonV2LocationareanameBoolExp>;
  pokemon_v2_locationareanames_aggregate?: InputMaybe<PokemonV2LocationareanameAggregateBoolExp>;
  pokemon_v2_locationnames?: InputMaybe<PokemonV2LocationnameBoolExp>;
  pokemon_v2_locationnames_aggregate?: InputMaybe<PokemonV2LocationnameAggregateBoolExp>;
  pokemon_v2_moveattributedescriptions?: InputMaybe<PokemonV2MoveattributedescriptionBoolExp>;
  pokemon_v2_moveattributedescriptions_aggregate?: InputMaybe<PokemonV2MoveattributedescriptionAggregateBoolExp>;
  pokemon_v2_moveattributenames?: InputMaybe<PokemonV2MoveattributenameBoolExp>;
  pokemon_v2_moveattributenames_aggregate?: InputMaybe<PokemonV2MoveattributenameAggregateBoolExp>;
  pokemon_v2_movebattlestylenames?: InputMaybe<PokemonV2MovebattlestylenameBoolExp>;
  pokemon_v2_movebattlestylenames_aggregate?: InputMaybe<PokemonV2MovebattlestylenameAggregateBoolExp>;
  pokemon_v2_movedamageclassdescriptions?: InputMaybe<PokemonV2MovedamageclassdescriptionBoolExp>;
  pokemon_v2_movedamageclassdescriptions_aggregate?: InputMaybe<PokemonV2MovedamageclassdescriptionAggregateBoolExp>;
  pokemon_v2_movedamageclassnames?: InputMaybe<PokemonV2MovedamageclassnameBoolExp>;
  pokemon_v2_movedamageclassnames_aggregate?: InputMaybe<PokemonV2MovedamageclassnameAggregateBoolExp>;
  pokemon_v2_moveeffectchangeeffecttexts?: InputMaybe<PokemonV2MoveeffectchangeeffecttextBoolExp>;
  pokemon_v2_moveeffectchangeeffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffectchangeeffecttextAggregateBoolExp>;
  pokemon_v2_moveeffecteffecttexts?: InputMaybe<PokemonV2MoveeffecteffecttextBoolExp>;
  pokemon_v2_moveeffecteffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffecteffecttextAggregateBoolExp>;
  pokemon_v2_moveflavortexts?: InputMaybe<PokemonV2MoveflavortextBoolExp>;
  pokemon_v2_moveflavortexts_aggregate?: InputMaybe<PokemonV2MoveflavortextAggregateBoolExp>;
  pokemon_v2_movelearnmethoddescriptions?: InputMaybe<PokemonV2MovelearnmethoddescriptionBoolExp>;
  pokemon_v2_movelearnmethoddescriptions_aggregate?: InputMaybe<PokemonV2MovelearnmethoddescriptionAggregateBoolExp>;
  pokemon_v2_movelearnmethodnames?: InputMaybe<PokemonV2MovelearnmethodnameBoolExp>;
  pokemon_v2_movelearnmethodnames_aggregate?: InputMaybe<PokemonV2MovelearnmethodnameAggregateBoolExp>;
  pokemon_v2_movemetaailmentnames?: InputMaybe<PokemonV2MovemetaailmentnameBoolExp>;
  pokemon_v2_movemetaailmentnames_aggregate?: InputMaybe<PokemonV2MovemetaailmentnameAggregateBoolExp>;
  pokemon_v2_movemetacategorydescriptions?: InputMaybe<PokemonV2MovemetacategorydescriptionBoolExp>;
  pokemon_v2_movemetacategorydescriptions_aggregate?: InputMaybe<PokemonV2MovemetacategorydescriptionAggregateBoolExp>;
  pokemon_v2_movenames?: InputMaybe<PokemonV2MovenameBoolExp>;
  pokemon_v2_movenames_aggregate?: InputMaybe<PokemonV2MovenameAggregateBoolExp>;
  pokemon_v2_movetargetdescriptions?: InputMaybe<PokemonV2MovetargetdescriptionBoolExp>;
  pokemon_v2_movetargetdescriptions_aggregate?: InputMaybe<PokemonV2MovetargetdescriptionAggregateBoolExp>;
  pokemon_v2_movetargetnames?: InputMaybe<PokemonV2MovetargetnameBoolExp>;
  pokemon_v2_movetargetnames_aggregate?: InputMaybe<PokemonV2MovetargetnameAggregateBoolExp>;
  pokemon_v2_naturenames?: InputMaybe<PokemonV2NaturenameBoolExp>;
  pokemon_v2_naturenames_aggregate?: InputMaybe<PokemonV2NaturenameAggregateBoolExp>;
  pokemon_v2_palparkareanames?: InputMaybe<PokemonV2PalparkareanameBoolExp>;
  pokemon_v2_palparkareanames_aggregate?: InputMaybe<PokemonV2PalparkareanameAggregateBoolExp>;
  pokemon_v2_pokeathlonstatnames?: InputMaybe<PokemonV2PokeathlonstatnameBoolExp>;
  pokemon_v2_pokeathlonstatnames_aggregate?: InputMaybe<PokemonV2PokeathlonstatnameAggregateBoolExp>;
  pokemon_v2_pokedexdescriptions?: InputMaybe<PokemonV2PokedexdescriptionBoolExp>;
  pokemon_v2_pokedexdescriptions_aggregate?: InputMaybe<PokemonV2PokedexdescriptionAggregateBoolExp>;
  pokemon_v2_pokedexnames?: InputMaybe<PokemonV2PokedexnameBoolExp>;
  pokemon_v2_pokedexnames_aggregate?: InputMaybe<PokemonV2PokedexnameAggregateBoolExp>;
  pokemon_v2_pokemoncolornames?: InputMaybe<PokemonV2PokemoncolornameBoolExp>;
  pokemon_v2_pokemoncolornames_aggregate?: InputMaybe<PokemonV2PokemoncolornameAggregateBoolExp>;
  pokemon_v2_pokemonformnames?: InputMaybe<PokemonV2PokemonformnameBoolExp>;
  pokemon_v2_pokemonformnames_aggregate?: InputMaybe<PokemonV2PokemonformnameAggregateBoolExp>;
  pokemon_v2_pokemonhabitatnames?: InputMaybe<PokemonV2PokemonhabitatnameBoolExp>;
  pokemon_v2_pokemonhabitatnames_aggregate?: InputMaybe<PokemonV2PokemonhabitatnameAggregateBoolExp>;
  pokemon_v2_pokemonshapenames?: InputMaybe<PokemonV2PokemonshapenameBoolExp>;
  pokemon_v2_pokemonshapenames_aggregate?: InputMaybe<PokemonV2PokemonshapenameAggregateBoolExp>;
  pokemon_v2_pokemonspeciesdescriptions?: InputMaybe<PokemonV2PokemonspeciesdescriptionBoolExp>;
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: InputMaybe<PokemonV2PokemonspeciesdescriptionAggregateBoolExp>;
  pokemon_v2_pokemonspeciesflavortexts?: InputMaybe<PokemonV2PokemonspeciesflavortextBoolExp>;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateBoolExp>;
  pokemon_v2_pokemonspeciesnames?: InputMaybe<PokemonV2PokemonspeciesnameBoolExp>;
  pokemon_v2_pokemonspeciesnames_aggregate?: InputMaybe<PokemonV2PokemonspeciesnameAggregateBoolExp>;
  pokemon_v2_regionnames?: InputMaybe<PokemonV2RegionnameBoolExp>;
  pokemon_v2_regionnames_aggregate?: InputMaybe<PokemonV2RegionnameAggregateBoolExp>;
  pokemon_v2_statnames?: InputMaybe<PokemonV2StatnameBoolExp>;
  pokemon_v2_statnames_aggregate?: InputMaybe<PokemonV2StatnameAggregateBoolExp>;
  pokemon_v2_supercontesteffectflavortexts?: InputMaybe<PokemonV2SupercontesteffectflavortextBoolExp>;
  pokemon_v2_supercontesteffectflavortexts_aggregate?: InputMaybe<PokemonV2SupercontesteffectflavortextAggregateBoolExp>;
  pokemon_v2_typenames?: InputMaybe<PokemonV2TypenameBoolExp>;
  pokemon_v2_typenames_aggregate?: InputMaybe<PokemonV2TypenameAggregateBoolExp>;
  pokemon_v2_versionnames?: InputMaybe<PokemonV2VersionnameBoolExp>;
  pokemon_v2_versionnames_aggregate?: InputMaybe<PokemonV2VersionnameAggregateBoolExp>;
}

export interface PokemonV2LanguageOrderBy {
  id?: InputMaybe<OrderBy>;
  iso639?: InputMaybe<OrderBy>;
  iso3166?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  official?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemonV2LanguagenamesByLocalLanguageId_aggregate?: InputMaybe<PokemonV2LanguagenameAggregateOrderBy>;
  pokemon_v2_abilitychangeeffecttexts_aggregate?: InputMaybe<PokemonV2AbilitychangeeffecttextAggregateOrderBy>;
  pokemon_v2_abilityeffecttexts_aggregate?: InputMaybe<PokemonV2AbilityeffecttextAggregateOrderBy>;
  pokemon_v2_abilityflavortexts_aggregate?: InputMaybe<PokemonV2AbilityflavortextAggregateOrderBy>;
  pokemon_v2_abilitynames_aggregate?: InputMaybe<PokemonV2AbilitynameAggregateOrderBy>;
  pokemon_v2_berryfirmnessnames_aggregate?: InputMaybe<PokemonV2BerryfirmnessnameAggregateOrderBy>;
  pokemon_v2_berryflavornames_aggregate?: InputMaybe<PokemonV2BerryflavornameAggregateOrderBy>;
  pokemon_v2_characteristicdescriptions_aggregate?: InputMaybe<PokemonV2CharacteristicdescriptionAggregateOrderBy>;
  pokemon_v2_contesteffecteffecttexts_aggregate?: InputMaybe<PokemonV2ContesteffecteffecttextAggregateOrderBy>;
  pokemon_v2_contesteffectflavortexts_aggregate?: InputMaybe<PokemonV2ContesteffectflavortextAggregateOrderBy>;
  pokemon_v2_contesttypenames_aggregate?: InputMaybe<PokemonV2ContesttypenameAggregateOrderBy>;
  pokemon_v2_egggroupnames_aggregate?: InputMaybe<PokemonV2EgggroupnameAggregateOrderBy>;
  pokemon_v2_encounterconditionnames_aggregate?: InputMaybe<PokemonV2EncounterconditionnameAggregateOrderBy>;
  pokemon_v2_encounterconditionvaluenames_aggregate?: InputMaybe<PokemonV2EncounterconditionvaluenameAggregateOrderBy>;
  pokemon_v2_encountermethodnames_aggregate?: InputMaybe<PokemonV2EncountermethodnameAggregateOrderBy>;
  pokemon_v2_evolutiontriggernames_aggregate?: InputMaybe<PokemonV2EvolutiontriggernameAggregateOrderBy>;
  pokemon_v2_generationnames_aggregate?: InputMaybe<PokemonV2GenerationnameAggregateOrderBy>;
  pokemon_v2_growthratedescriptions_aggregate?: InputMaybe<PokemonV2GrowthratedescriptionAggregateOrderBy>;
  pokemon_v2_itemattributedescriptions_aggregate?: InputMaybe<PokemonV2ItemattributedescriptionAggregateOrderBy>;
  pokemon_v2_itemattributenames_aggregate?: InputMaybe<PokemonV2ItemattributenameAggregateOrderBy>;
  pokemon_v2_itemcategorynames_aggregate?: InputMaybe<PokemonV2ItemcategorynameAggregateOrderBy>;
  pokemon_v2_itemeffecttexts_aggregate?: InputMaybe<PokemonV2ItemeffecttextAggregateOrderBy>;
  pokemon_v2_itemflavortexts_aggregate?: InputMaybe<PokemonV2ItemflavortextAggregateOrderBy>;
  pokemon_v2_itemflingeffecteffecttexts_aggregate?: InputMaybe<PokemonV2ItemflingeffecteffecttextAggregateOrderBy>;
  pokemon_v2_itemnames_aggregate?: InputMaybe<PokemonV2ItemnameAggregateOrderBy>;
  pokemon_v2_itempocketnames_aggregate?: InputMaybe<PokemonV2ItempocketnameAggregateOrderBy>;
  pokemon_v2_languagenames_aggregate?: InputMaybe<PokemonV2LanguagenameAggregateOrderBy>;
  pokemon_v2_locationareanames_aggregate?: InputMaybe<PokemonV2LocationareanameAggregateOrderBy>;
  pokemon_v2_locationnames_aggregate?: InputMaybe<PokemonV2LocationnameAggregateOrderBy>;
  pokemon_v2_moveattributedescriptions_aggregate?: InputMaybe<PokemonV2MoveattributedescriptionAggregateOrderBy>;
  pokemon_v2_moveattributenames_aggregate?: InputMaybe<PokemonV2MoveattributenameAggregateOrderBy>;
  pokemon_v2_movebattlestylenames_aggregate?: InputMaybe<PokemonV2MovebattlestylenameAggregateOrderBy>;
  pokemon_v2_movedamageclassdescriptions_aggregate?: InputMaybe<PokemonV2MovedamageclassdescriptionAggregateOrderBy>;
  pokemon_v2_movedamageclassnames_aggregate?: InputMaybe<PokemonV2MovedamageclassnameAggregateOrderBy>;
  pokemon_v2_moveeffectchangeeffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffectchangeeffecttextAggregateOrderBy>;
  pokemon_v2_moveeffecteffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffecteffecttextAggregateOrderBy>;
  pokemon_v2_moveflavortexts_aggregate?: InputMaybe<PokemonV2MoveflavortextAggregateOrderBy>;
  pokemon_v2_movelearnmethoddescriptions_aggregate?: InputMaybe<PokemonV2MovelearnmethoddescriptionAggregateOrderBy>;
  pokemon_v2_movelearnmethodnames_aggregate?: InputMaybe<PokemonV2MovelearnmethodnameAggregateOrderBy>;
  pokemon_v2_movemetaailmentnames_aggregate?: InputMaybe<PokemonV2MovemetaailmentnameAggregateOrderBy>;
  pokemon_v2_movemetacategorydescriptions_aggregate?: InputMaybe<PokemonV2MovemetacategorydescriptionAggregateOrderBy>;
  pokemon_v2_movenames_aggregate?: InputMaybe<PokemonV2MovenameAggregateOrderBy>;
  pokemon_v2_movetargetdescriptions_aggregate?: InputMaybe<PokemonV2MovetargetdescriptionAggregateOrderBy>;
  pokemon_v2_movetargetnames_aggregate?: InputMaybe<PokemonV2MovetargetnameAggregateOrderBy>;
  pokemon_v2_naturenames_aggregate?: InputMaybe<PokemonV2NaturenameAggregateOrderBy>;
  pokemon_v2_palparkareanames_aggregate?: InputMaybe<PokemonV2PalparkareanameAggregateOrderBy>;
  pokemon_v2_pokeathlonstatnames_aggregate?: InputMaybe<PokemonV2PokeathlonstatnameAggregateOrderBy>;
  pokemon_v2_pokedexdescriptions_aggregate?: InputMaybe<PokemonV2PokedexdescriptionAggregateOrderBy>;
  pokemon_v2_pokedexnames_aggregate?: InputMaybe<PokemonV2PokedexnameAggregateOrderBy>;
  pokemon_v2_pokemoncolornames_aggregate?: InputMaybe<PokemonV2PokemoncolornameAggregateOrderBy>;
  pokemon_v2_pokemonformnames_aggregate?: InputMaybe<PokemonV2PokemonformnameAggregateOrderBy>;
  pokemon_v2_pokemonhabitatnames_aggregate?: InputMaybe<PokemonV2PokemonhabitatnameAggregateOrderBy>;
  pokemon_v2_pokemonshapenames_aggregate?: InputMaybe<PokemonV2PokemonshapenameAggregateOrderBy>;
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: InputMaybe<PokemonV2PokemonspeciesdescriptionAggregateOrderBy>;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateOrderBy>;
  pokemon_v2_pokemonspeciesnames_aggregate?: InputMaybe<PokemonV2PokemonspeciesnameAggregateOrderBy>;
  pokemon_v2_regionnames_aggregate?: InputMaybe<PokemonV2RegionnameAggregateOrderBy>;
  pokemon_v2_statnames_aggregate?: InputMaybe<PokemonV2StatnameAggregateOrderBy>;
  pokemon_v2_supercontesteffectflavortexts_aggregate?: InputMaybe<PokemonV2SupercontesteffectflavortextAggregateOrderBy>;
  pokemon_v2_typenames_aggregate?: InputMaybe<PokemonV2TypenameAggregateOrderBy>;
  pokemon_v2_versionnames_aggregate?: InputMaybe<PokemonV2VersionnameAggregateOrderBy>;
}

export type PokemonV2LanguageSelectColumn =
  | 'id'
  | 'iso639'
  | 'iso3166'
  | 'name'
  | 'official'
  | 'order';

export interface PokemonV2LanguageStreamCursorInput {
  initial_value: PokemonV2LanguageStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LanguageStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  iso639?: InputMaybe<Scalars['String']['input']>;
  iso3166?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  official?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2LanguagenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2LanguagenameAggregateBoolExpCount>;
}

export interface PokemonV2LanguagenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LanguagenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LanguagenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LanguagenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LanguagenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LanguagenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2LanguagenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LanguagenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LanguagenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LanguagenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LanguagenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LanguagenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LanguagenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LanguagenameVarianceOrderBy>;
}

export interface PokemonV2LanguagenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2LanguagenameBoolExp>>;
  _not?: InputMaybe<PokemonV2LanguagenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LanguagenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  local_language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2LanguageByLocalLanguageId?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
}

export interface PokemonV2LanguagenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2LanguageByLocalLanguageId?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
}

export type PokemonV2LanguagenameSelectColumn =
  | 'id'
  | 'language_id'
  | 'local_language_id'
  | 'name';

export interface PokemonV2LanguagenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameStreamCursorInput {
  initial_value: PokemonV2LanguagenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LanguagenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  local_language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2LanguagenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LanguagenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  local_language_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationAggregateBoolExp {
  count?: InputMaybe<PokemonV2LocationAggregateBoolExpCount>;
}

export interface PokemonV2LocationAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LocationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LocationBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LocationAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LocationAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LocationMaxOrderBy>;
  min?: InputMaybe<PokemonV2LocationMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LocationStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LocationStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LocationStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LocationSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LocationVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LocationVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LocationVarianceOrderBy>;
}

export interface PokemonV2LocationAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationBoolExp {
  _and?: InputMaybe<Array<PokemonV2LocationBoolExp>>;
  _not?: InputMaybe<PokemonV2LocationBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LocationBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_locationareas?: InputMaybe<PokemonV2LocationareaBoolExp>;
  pokemon_v2_locationareas_aggregate?: InputMaybe<PokemonV2LocationareaAggregateBoolExp>;
  pokemon_v2_locationgameindices?: InputMaybe<PokemonV2LocationgameindexBoolExp>;
  pokemon_v2_locationgameindices_aggregate?: InputMaybe<PokemonV2LocationgameindexAggregateBoolExp>;
  pokemon_v2_locationnames?: InputMaybe<PokemonV2LocationnameBoolExp>;
  pokemon_v2_locationnames_aggregate?: InputMaybe<PokemonV2LocationnameAggregateBoolExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionBoolExp>;
  region_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2LocationMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationMinOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_locationareas_aggregate?: InputMaybe<PokemonV2LocationareaAggregateOrderBy>;
  pokemon_v2_locationgameindices_aggregate?: InputMaybe<PokemonV2LocationgameindexAggregateOrderBy>;
  pokemon_v2_locationnames_aggregate?: InputMaybe<PokemonV2LocationnameAggregateOrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionOrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export type PokemonV2LocationSelectColumn = 'id' | 'name' | 'region_id';

export interface PokemonV2LocationStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationStreamCursorInput {
  initial_value: PokemonV2LocationStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LocationStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2LocationSumOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaAggregateBoolExp {
  count?: InputMaybe<PokemonV2LocationareaAggregateBoolExpCount>;
}

export interface PokemonV2LocationareaAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LocationareaSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LocationareaBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LocationareaAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LocationareaAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LocationareaMaxOrderBy>;
  min?: InputMaybe<PokemonV2LocationareaMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LocationareaStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LocationareaStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LocationareaStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LocationareaSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LocationareaVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LocationareaVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LocationareaVarianceOrderBy>;
}

export interface PokemonV2LocationareaAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaBoolExp {
  _and?: InputMaybe<Array<PokemonV2LocationareaBoolExp>>;
  _not?: InputMaybe<PokemonV2LocationareaBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LocationareaBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  location_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encounters?: InputMaybe<PokemonV2EncounterBoolExp>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateBoolExp>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationBoolExp>;
  pokemon_v2_locationareaencounterrates?: InputMaybe<PokemonV2LocationareaencounterrateBoolExp>;
  pokemon_v2_locationareaencounterrates_aggregate?: InputMaybe<PokemonV2LocationareaencounterrateAggregateBoolExp>;
  pokemon_v2_locationareanames?: InputMaybe<PokemonV2LocationareanameBoolExp>;
  pokemon_v2_locationareanames_aggregate?: InputMaybe<PokemonV2LocationareanameAggregateBoolExp>;
}

export interface PokemonV2LocationareaMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateOrderBy>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationOrderBy>;
  pokemon_v2_locationareaencounterrates_aggregate?: InputMaybe<PokemonV2LocationareaencounterrateAggregateOrderBy>;
  pokemon_v2_locationareanames_aggregate?: InputMaybe<PokemonV2LocationareanameAggregateOrderBy>;
}

export type PokemonV2LocationareaSelectColumn =
  | 'game_index'
  | 'id'
  | 'location_id'
  | 'name';

export interface PokemonV2LocationareaStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaStreamCursorInput {
  initial_value: PokemonV2LocationareaStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LocationareaStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2LocationareaSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateAggregateBoolExp {
  count?: InputMaybe<PokemonV2LocationareaencounterrateAggregateBoolExpCount>;
}

export interface PokemonV2LocationareaencounterrateAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LocationareaencounterrateSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LocationareaencounterrateBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LocationareaencounterrateAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LocationareaencounterrateAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LocationareaencounterrateMaxOrderBy>;
  min?: InputMaybe<PokemonV2LocationareaencounterrateMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LocationareaencounterrateStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LocationareaencounterrateStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LocationareaencounterrateStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LocationareaencounterrateSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LocationareaencounterrateVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LocationareaencounterrateVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LocationareaencounterrateVarianceOrderBy>;
}

export interface PokemonV2LocationareaencounterrateAvgOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateBoolExp {
  _and?: InputMaybe<Array<PokemonV2LocationareaencounterrateBoolExp>>;
  _not?: InputMaybe<PokemonV2LocationareaencounterrateBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LocationareaencounterrateBoolExp>>;
  encounter_method_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  location_area_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_encountermethod?: InputMaybe<PokemonV2EncountermethodBoolExp>;
  pokemon_v2_locationarea?: InputMaybe<PokemonV2LocationareaBoolExp>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionBoolExp>;
  rate?: InputMaybe<IntComparisonExp>;
  version_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2LocationareaencounterrateMaxOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateMinOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  pokemon_v2_encountermethod?: InputMaybe<PokemonV2EncountermethodOrderBy>;
  pokemon_v2_locationarea?: InputMaybe<PokemonV2LocationareaOrderBy>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionOrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonV2LocationareaencounterrateSelectColumn =
  | 'encounter_method_id'
  | 'id'
  | 'location_area_id'
  | 'rate'
  | 'version_id';

export interface PokemonV2LocationareaencounterrateStddevOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateStddevPopOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateStddevSampOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateStreamCursorInput {
  initial_value: PokemonV2LocationareaencounterrateStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LocationareaencounterrateStreamCursorValueInput {
  encounter_method_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location_area_id?: InputMaybe<Scalars['Int']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  version_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2LocationareaencounterrateSumOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateVarPopOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateVarSampOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareaencounterrateVarianceOrderBy {
  encounter_method_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameAggregateBoolExp {
  count?: InputMaybe<PokemonV2LocationareanameAggregateBoolExpCount>;
}

export interface PokemonV2LocationareanameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LocationareanameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LocationareanameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LocationareanameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LocationareanameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LocationareanameMaxOrderBy>;
  min?: InputMaybe<PokemonV2LocationareanameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LocationareanameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LocationareanameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LocationareanameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LocationareanameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LocationareanameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LocationareanameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LocationareanameVarianceOrderBy>;
}

export interface PokemonV2LocationareanameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameBoolExp {
  _and?: InputMaybe<Array<PokemonV2LocationareanameBoolExp>>;
  _not?: InputMaybe<PokemonV2LocationareanameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LocationareanameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  location_area_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_locationarea?: InputMaybe<PokemonV2LocationareaBoolExp>;
}

export interface PokemonV2LocationareanameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_locationarea?: InputMaybe<PokemonV2LocationareaOrderBy>;
}

export type PokemonV2LocationareanameSelectColumn =
  | 'id'
  | 'language_id'
  | 'location_area_id'
  | 'name';

export interface PokemonV2LocationareanameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameStreamCursorInput {
  initial_value: PokemonV2LocationareanameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LocationareanameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  location_area_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2LocationareanameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationareanameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexAggregateBoolExp {
  count?: InputMaybe<PokemonV2LocationgameindexAggregateBoolExpCount>;
}

export interface PokemonV2LocationgameindexAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LocationgameindexSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LocationgameindexBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LocationgameindexAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LocationgameindexAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LocationgameindexMaxOrderBy>;
  min?: InputMaybe<PokemonV2LocationgameindexMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LocationgameindexStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LocationgameindexStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LocationgameindexStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LocationgameindexSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LocationgameindexVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LocationgameindexVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LocationgameindexVarianceOrderBy>;
}

export interface PokemonV2LocationgameindexAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexBoolExp {
  _and?: InputMaybe<Array<PokemonV2LocationgameindexBoolExp>>;
  _not?: InputMaybe<PokemonV2LocationgameindexBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LocationgameindexBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  location_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationBoolExp>;
}

export interface PokemonV2LocationgameindexMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationOrderBy>;
}

export type PokemonV2LocationgameindexSelectColumn =
  | 'game_index'
  | 'generation_id'
  | 'id'
  | 'location_id';

export interface PokemonV2LocationgameindexStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexStreamCursorInput {
  initial_value: PokemonV2LocationgameindexStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LocationgameindexStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2LocationgameindexSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationgameindexVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2LocationnameAggregateBoolExpCount>;
}

export interface PokemonV2LocationnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2LocationnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2LocationnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2LocationnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2LocationnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2LocationnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2LocationnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2LocationnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2LocationnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2LocationnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2LocationnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2LocationnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2LocationnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2LocationnameVarianceOrderBy>;
}

export interface PokemonV2LocationnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2LocationnameBoolExp>>;
  _not?: InputMaybe<PokemonV2LocationnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2LocationnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  location_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationBoolExp>;
}

export interface PokemonV2LocationnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationOrderBy>;
}

export type PokemonV2LocationnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'location_id'
  | 'name';

export interface PokemonV2LocationnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameStreamCursorInput {
  initial_value: PokemonV2LocationnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2LocationnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2LocationnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2LocationnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineAggregateBoolExp {
  count?: InputMaybe<PokemonV2MachineAggregateBoolExpCount>;
}

export interface PokemonV2MachineAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MachineSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MachineBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MachineAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MachineAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MachineMaxOrderBy>;
  min?: InputMaybe<PokemonV2MachineMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MachineStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MachineStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MachineStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MachineSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MachineVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MachineVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MachineVarianceOrderBy>;
}

export interface PokemonV2MachineAvgOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineBoolExp {
  _and?: InputMaybe<Array<PokemonV2MachineBoolExp>>;
  _not?: InputMaybe<PokemonV2MachineBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MachineBoolExp>>;
  growth_rate_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  machine_number?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateBoolExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MachineMaxOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineMinOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateOrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2MachineSelectColumn =
  | 'growth_rate_id'
  | 'id'
  | 'item_id'
  | 'machine_number'
  | 'move_id'
  | 'version_group_id';

export interface PokemonV2MachineStddevOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineStddevPopOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineStddevSampOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineStreamCursorInput {
  initial_value: PokemonV2MachineStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MachineStreamCursorValueInput {
  growth_rate_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  machine_number?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MachineSumOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineVarPopOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineVarSampOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MachineVarianceOrderBy {
  growth_rate_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  machine_number?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveAggregateBoolExpCount>;
}

export interface PokemonV2MoveAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveVarianceOrderBy>;
}

export interface PokemonV2MoveAvgOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveBoolExp>>;
  accuracy?: InputMaybe<IntComparisonExp>;
  contest_effect_id?: InputMaybe<IntComparisonExp>;
  contest_type_id?: InputMaybe<IntComparisonExp>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  move_damage_class_id?: InputMaybe<IntComparisonExp>;
  move_effect_chance?: InputMaybe<IntComparisonExp>;
  move_effect_id?: InputMaybe<IntComparisonExp>;
  move_target_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2ContestcombosBySecondMoveId?: InputMaybe<PokemonV2ContestcomboBoolExp>;
  pokemonV2ContestcombosBySecondMoveId_aggregate?: InputMaybe<PokemonV2ContestcomboAggregateBoolExp>;
  pokemonV2SupercontestcombosBySecondMoveId?: InputMaybe<PokemonV2SupercontestcomboBoolExp>;
  pokemonV2SupercontestcombosBySecondMoveId_aggregate?: InputMaybe<PokemonV2SupercontestcomboAggregateBoolExp>;
  pokemon_v2_contestcombos?: InputMaybe<PokemonV2ContestcomboBoolExp>;
  pokemon_v2_contestcombos_aggregate?: InputMaybe<PokemonV2ContestcomboAggregateBoolExp>;
  pokemon_v2_contesteffect?: InputMaybe<PokemonV2ContesteffectBoolExp>;
  pokemon_v2_contesttype?: InputMaybe<PokemonV2ContesttypeBoolExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_machines?: InputMaybe<PokemonV2MachineBoolExp>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateBoolExp>;
  pokemon_v2_moveattributemaps?: InputMaybe<PokemonV2MoveattributemapBoolExp>;
  pokemon_v2_moveattributemaps_aggregate?: InputMaybe<PokemonV2MoveattributemapAggregateBoolExp>;
  pokemon_v2_movechanges?: InputMaybe<PokemonV2MovechangeBoolExp>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateBoolExp>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassBoolExp>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectBoolExp>;
  pokemon_v2_moveflavortexts?: InputMaybe<PokemonV2MoveflavortextBoolExp>;
  pokemon_v2_moveflavortexts_aggregate?: InputMaybe<PokemonV2MoveflavortextAggregateBoolExp>;
  pokemon_v2_movemeta?: InputMaybe<PokemonV2MovemetaBoolExp>;
  pokemon_v2_movemeta_aggregate?: InputMaybe<PokemonV2MovemetaAggregateBoolExp>;
  pokemon_v2_movemetastatchanges?: InputMaybe<PokemonV2MovemetastatchangeBoolExp>;
  pokemon_v2_movemetastatchanges_aggregate?: InputMaybe<PokemonV2MovemetastatchangeAggregateBoolExp>;
  pokemon_v2_movemetum?: InputMaybe<PokemonV2MovemetaBoolExp>;
  pokemon_v2_movenames?: InputMaybe<PokemonV2MovenameBoolExp>;
  pokemon_v2_movenames_aggregate?: InputMaybe<PokemonV2MovenameAggregateBoolExp>;
  pokemon_v2_movetarget?: InputMaybe<PokemonV2MovetargetBoolExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_v2_pokemonmoves?: InputMaybe<PokemonV2PokemonmoveBoolExp>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateBoolExp>;
  pokemon_v2_supercontestcombos?: InputMaybe<PokemonV2SupercontestcomboBoolExp>;
  pokemon_v2_supercontestcombos_aggregate?: InputMaybe<PokemonV2SupercontestcomboAggregateBoolExp>;
  pokemon_v2_supercontesteffect?: InputMaybe<PokemonV2SupercontesteffectBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  power?: InputMaybe<IntComparisonExp>;
  pp?: InputMaybe<IntComparisonExp>;
  priority?: InputMaybe<IntComparisonExp>;
  super_contest_effect_id?: InputMaybe<IntComparisonExp>;
  type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MoveMaxOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveMinOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2ContestcombosBySecondMoveId_aggregate?: InputMaybe<PokemonV2ContestcomboAggregateOrderBy>;
  pokemonV2SupercontestcombosBySecondMoveId_aggregate?: InputMaybe<PokemonV2SupercontestcomboAggregateOrderBy>;
  pokemon_v2_contestcombos_aggregate?: InputMaybe<PokemonV2ContestcomboAggregateOrderBy>;
  pokemon_v2_contesteffect?: InputMaybe<PokemonV2ContesteffectOrderBy>;
  pokemon_v2_contesttype?: InputMaybe<PokemonV2ContesttypeOrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateOrderBy>;
  pokemon_v2_moveattributemaps_aggregate?: InputMaybe<PokemonV2MoveattributemapAggregateOrderBy>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateOrderBy>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassOrderBy>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectOrderBy>;
  pokemon_v2_moveflavortexts_aggregate?: InputMaybe<PokemonV2MoveflavortextAggregateOrderBy>;
  pokemon_v2_movemeta_aggregate?: InputMaybe<PokemonV2MovemetaAggregateOrderBy>;
  pokemon_v2_movemetastatchanges_aggregate?: InputMaybe<PokemonV2MovemetastatchangeAggregateOrderBy>;
  pokemon_v2_movemetum?: InputMaybe<PokemonV2MovemetaOrderBy>;
  pokemon_v2_movenames_aggregate?: InputMaybe<PokemonV2MovenameAggregateOrderBy>;
  pokemon_v2_movetarget?: InputMaybe<PokemonV2MovetargetOrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateOrderBy>;
  pokemon_v2_supercontestcombos_aggregate?: InputMaybe<PokemonV2SupercontestcomboAggregateOrderBy>;
  pokemon_v2_supercontesteffect?: InputMaybe<PokemonV2SupercontesteffectOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2MoveSelectColumn =
  | 'accuracy'
  | 'contest_effect_id'
  | 'contest_type_id'
  | 'generation_id'
  | 'id'
  | 'move_damage_class_id'
  | 'move_effect_chance'
  | 'move_effect_id'
  | 'move_target_id'
  | 'name'
  | 'power'
  | 'pp'
  | 'priority'
  | 'super_contest_effect_id'
  | 'type_id';

export interface PokemonV2MoveStddevOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveStddevPopOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveStddevSampOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveStreamCursorInput {
  initial_value: PokemonV2MoveStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveStreamCursorValueInput {
  accuracy?: InputMaybe<Scalars['Int']['input']>;
  contest_effect_id?: InputMaybe<Scalars['Int']['input']>;
  contest_type_id?: InputMaybe<Scalars['Int']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  move_damage_class_id?: InputMaybe<Scalars['Int']['input']>;
  move_effect_chance?: InputMaybe<Scalars['Int']['input']>;
  move_effect_id?: InputMaybe<Scalars['Int']['input']>;
  move_target_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['Int']['input']>;
  pp?: InputMaybe<Scalars['Int']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  super_contest_effect_id?: InputMaybe<Scalars['Int']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveSumOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveVarPopOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveVarSampOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveVarianceOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  contest_effect_id?: InputMaybe<OrderBy>;
  contest_type_id?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  priority?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributeBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveattributeBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveattributeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveattributeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_moveattributedescriptions?: InputMaybe<PokemonV2MoveattributedescriptionBoolExp>;
  pokemon_v2_moveattributedescriptions_aggregate?: InputMaybe<PokemonV2MoveattributedescriptionAggregateBoolExp>;
  pokemon_v2_moveattributemaps?: InputMaybe<PokemonV2MoveattributemapBoolExp>;
  pokemon_v2_moveattributemaps_aggregate?: InputMaybe<PokemonV2MoveattributemapAggregateBoolExp>;
  pokemon_v2_moveattributenames?: InputMaybe<PokemonV2MoveattributenameBoolExp>;
  pokemon_v2_moveattributenames_aggregate?: InputMaybe<PokemonV2MoveattributenameAggregateBoolExp>;
}

export interface PokemonV2MoveattributeOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_moveattributedescriptions_aggregate?: InputMaybe<PokemonV2MoveattributedescriptionAggregateOrderBy>;
  pokemon_v2_moveattributemaps_aggregate?: InputMaybe<PokemonV2MoveattributemapAggregateOrderBy>;
  pokemon_v2_moveattributenames_aggregate?: InputMaybe<PokemonV2MoveattributenameAggregateOrderBy>;
}

export type PokemonV2MoveattributeSelectColumn = 'id' | 'name';

export interface PokemonV2MoveattributeStreamCursorInput {
  initial_value: PokemonV2MoveattributeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveattributeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MoveattributedescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveattributedescriptionAggregateBoolExpCount>;
}

export interface PokemonV2MoveattributedescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveattributedescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveattributedescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveattributedescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveattributedescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveattributedescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveattributedescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveattributedescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveattributedescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveattributedescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveattributedescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveattributedescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveattributedescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveattributedescriptionVarianceOrderBy>;
}

export interface PokemonV2MoveattributedescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveattributedescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveattributedescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveattributedescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_attribute_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_moveattribute?: InputMaybe<PokemonV2MoveattributeBoolExp>;
}

export interface PokemonV2MoveattributedescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_moveattribute?: InputMaybe<PokemonV2MoveattributeOrderBy>;
}

export type PokemonV2MoveattributedescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'move_attribute_id';

export interface PokemonV2MoveattributedescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionStreamCursorInput {
  initial_value: PokemonV2MoveattributedescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveattributedescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_attribute_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveattributedescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributedescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveattributemapAggregateBoolExpCount>;
}

export interface PokemonV2MoveattributemapAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveattributemapSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveattributemapBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveattributemapAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveattributemapAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveattributemapMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveattributemapMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveattributemapStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveattributemapStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveattributemapStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveattributemapSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveattributemapVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveattributemapVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveattributemapVarianceOrderBy>;
}

export interface PokemonV2MoveattributemapAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveattributemapBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveattributemapBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveattributemapBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  move_attribute_id?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moveattribute?: InputMaybe<PokemonV2MoveattributeBoolExp>;
}

export interface PokemonV2MoveattributemapMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapMinOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_moveattribute?: InputMaybe<PokemonV2MoveattributeOrderBy>;
}

export type PokemonV2MoveattributemapSelectColumn =
  | 'id'
  | 'move_attribute_id'
  | 'move_id';

export interface PokemonV2MoveattributemapStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapStreamCursorInput {
  initial_value: PokemonV2MoveattributemapStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveattributemapStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  move_attribute_id?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveattributemapSumOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributemapVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveattributenameAggregateBoolExpCount>;
}

export interface PokemonV2MoveattributenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveattributenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveattributenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveattributenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveattributenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveattributenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveattributenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveattributenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveattributenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveattributenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveattributenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveattributenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveattributenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveattributenameVarianceOrderBy>;
}

export interface PokemonV2MoveattributenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveattributenameBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveattributenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveattributenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_attribute_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_moveattribute?: InputMaybe<PokemonV2MoveattributeBoolExp>;
}

export interface PokemonV2MoveattributenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_moveattribute?: InputMaybe<PokemonV2MoveattributeOrderBy>;
}

export type PokemonV2MoveattributenameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_attribute_id'
  | 'name';

export interface PokemonV2MoveattributenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameStreamCursorInput {
  initial_value: PokemonV2MoveattributenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveattributenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_attribute_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MoveattributenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveattributenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_attribute_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestyleBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovebattlestyleBoolExp>>;
  _not?: InputMaybe<PokemonV2MovebattlestyleBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovebattlestyleBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_movebattlestylenames?: InputMaybe<PokemonV2MovebattlestylenameBoolExp>;
  pokemon_v2_movebattlestylenames_aggregate?: InputMaybe<PokemonV2MovebattlestylenameAggregateBoolExp>;
  pokemon_v2_naturebattlestylepreferences?: InputMaybe<PokemonV2NaturebattlestylepreferenceBoolExp>;
  pokemon_v2_naturebattlestylepreferences_aggregate?: InputMaybe<PokemonV2NaturebattlestylepreferenceAggregateBoolExp>;
}

export interface PokemonV2MovebattlestyleOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_movebattlestylenames_aggregate?: InputMaybe<PokemonV2MovebattlestylenameAggregateOrderBy>;
  pokemon_v2_naturebattlestylepreferences_aggregate?: InputMaybe<PokemonV2NaturebattlestylepreferenceAggregateOrderBy>;
}

export type PokemonV2MovebattlestyleSelectColumn = 'id' | 'name';

export interface PokemonV2MovebattlestyleStreamCursorInput {
  initial_value: PokemonV2MovebattlestyleStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovebattlestyleStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovebattlestylenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovebattlestylenameAggregateBoolExpCount>;
}

export interface PokemonV2MovebattlestylenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovebattlestylenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovebattlestylenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovebattlestylenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovebattlestylenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovebattlestylenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovebattlestylenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovebattlestylenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovebattlestylenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovebattlestylenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovebattlestylenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovebattlestylenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovebattlestylenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovebattlestylenameVarianceOrderBy>;
}

export interface PokemonV2MovebattlestylenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovebattlestylenameBoolExp>>;
  _not?: InputMaybe<PokemonV2MovebattlestylenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovebattlestylenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_battle_style_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movebattlestyle?: InputMaybe<PokemonV2MovebattlestyleBoolExp>;
}

export interface PokemonV2MovebattlestylenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movebattlestyle?: InputMaybe<PokemonV2MovebattlestyleOrderBy>;
}

export type PokemonV2MovebattlestylenameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_battle_style_id'
  | 'name';

export interface PokemonV2MovebattlestylenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameStreamCursorInput {
  initial_value: PokemonV2MovebattlestylenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovebattlestylenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_battle_style_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovebattlestylenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovebattlestylenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovechangeAggregateBoolExpCount>;
}

export interface PokemonV2MovechangeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovechangeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovechangeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovechangeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovechangeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovechangeMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovechangeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovechangeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovechangeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovechangeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovechangeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovechangeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovechangeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovechangeVarianceOrderBy>;
}

export interface PokemonV2MovechangeAvgOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovechangeBoolExp>>;
  _not?: InputMaybe<PokemonV2MovechangeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovechangeBoolExp>>;
  accuracy?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  move_effect_chance?: InputMaybe<IntComparisonExp>;
  move_effect_id?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  power?: InputMaybe<IntComparisonExp>;
  pp?: InputMaybe<IntComparisonExp>;
  type_id?: InputMaybe<IntComparisonExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MovechangeMaxOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeMinOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2MovechangeSelectColumn =
  | 'accuracy'
  | 'id'
  | 'move_effect_chance'
  | 'move_effect_id'
  | 'move_id'
  | 'power'
  | 'pp'
  | 'type_id'
  | 'version_group_id';

export interface PokemonV2MovechangeStddevOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeStddevPopOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeStddevSampOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeStreamCursorInput {
  initial_value: PokemonV2MovechangeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovechangeStreamCursorValueInput {
  accuracy?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  move_effect_chance?: InputMaybe<Scalars['Int']['input']>;
  move_effect_id?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  power?: InputMaybe<Scalars['Int']['input']>;
  pp?: InputMaybe<Scalars['Int']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovechangeSumOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeVarPopOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeVarSampOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovechangeVarianceOrderBy {
  accuracy?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_effect_chance?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  power?: InputMaybe<OrderBy>;
  pp?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovedamageclassBoolExp>>;
  _not?: InputMaybe<PokemonV2MovedamageclassBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovedamageclassBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_movedamageclassdescriptions?: InputMaybe<PokemonV2MovedamageclassdescriptionBoolExp>;
  pokemon_v2_movedamageclassdescriptions_aggregate?: InputMaybe<PokemonV2MovedamageclassdescriptionAggregateBoolExp>;
  pokemon_v2_movedamageclassnames?: InputMaybe<PokemonV2MovedamageclassnameBoolExp>;
  pokemon_v2_movedamageclassnames_aggregate?: InputMaybe<PokemonV2MovedamageclassnameAggregateBoolExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
  pokemon_v2_stats?: InputMaybe<PokemonV2StatBoolExp>;
  pokemon_v2_stats_aggregate?: InputMaybe<PokemonV2StatAggregateBoolExp>;
  pokemon_v2_types?: InputMaybe<PokemonV2TypeBoolExp>;
  pokemon_v2_types_aggregate?: InputMaybe<PokemonV2TypeAggregateBoolExp>;
}

export interface PokemonV2MovedamageclassOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_movedamageclassdescriptions_aggregate?: InputMaybe<PokemonV2MovedamageclassdescriptionAggregateOrderBy>;
  pokemon_v2_movedamageclassnames_aggregate?: InputMaybe<PokemonV2MovedamageclassnameAggregateOrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
  pokemon_v2_stats_aggregate?: InputMaybe<PokemonV2StatAggregateOrderBy>;
  pokemon_v2_types_aggregate?: InputMaybe<PokemonV2TypeAggregateOrderBy>;
}

export type PokemonV2MovedamageclassSelectColumn = 'id' | 'name';

export interface PokemonV2MovedamageclassStreamCursorInput {
  initial_value: PokemonV2MovedamageclassStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovedamageclassStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovedamageclassdescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovedamageclassdescriptionAggregateBoolExpCount>;
}

export interface PokemonV2MovedamageclassdescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2MovedamageclassdescriptionSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovedamageclassdescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovedamageclassdescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovedamageclassdescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovedamageclassdescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovedamageclassdescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovedamageclassdescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovedamageclassdescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovedamageclassdescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovedamageclassdescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovedamageclassdescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovedamageclassdescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovedamageclassdescriptionVarianceOrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovedamageclassdescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2MovedamageclassdescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovedamageclassdescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_damage_class_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassBoolExp>;
}

export interface PokemonV2MovedamageclassdescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassOrderBy>;
}

export type PokemonV2MovedamageclassdescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'move_damage_class_id';

export interface PokemonV2MovedamageclassdescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionStreamCursorInput {
  initial_value: PokemonV2MovedamageclassdescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovedamageclassdescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_damage_class_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovedamageclassdescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassdescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovedamageclassnameAggregateBoolExpCount>;
}

export interface PokemonV2MovedamageclassnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovedamageclassnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovedamageclassnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovedamageclassnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovedamageclassnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovedamageclassnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovedamageclassnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovedamageclassnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovedamageclassnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovedamageclassnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovedamageclassnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovedamageclassnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovedamageclassnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovedamageclassnameVarianceOrderBy>;
}

export interface PokemonV2MovedamageclassnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovedamageclassnameBoolExp>>;
  _not?: InputMaybe<PokemonV2MovedamageclassnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovedamageclassnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_damage_class_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassBoolExp>;
}

export interface PokemonV2MovedamageclassnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassOrderBy>;
}

export type PokemonV2MovedamageclassnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_damage_class_id'
  | 'name';

export interface PokemonV2MovedamageclassnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameStreamCursorInput {
  initial_value: PokemonV2MovedamageclassnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovedamageclassnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_damage_class_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovedamageclassnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovedamageclassnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveeffectBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveeffectBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveeffectBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_movechanges?: InputMaybe<PokemonV2MovechangeBoolExp>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateBoolExp>;
  pokemon_v2_moveeffectchanges?: InputMaybe<PokemonV2MoveeffectchangeBoolExp>;
  pokemon_v2_moveeffectchanges_aggregate?: InputMaybe<PokemonV2MoveeffectchangeAggregateBoolExp>;
  pokemon_v2_moveeffecteffecttexts?: InputMaybe<PokemonV2MoveeffecteffecttextBoolExp>;
  pokemon_v2_moveeffecteffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffecteffecttextAggregateBoolExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
}

export interface PokemonV2MoveeffectOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateOrderBy>;
  pokemon_v2_moveeffectchanges_aggregate?: InputMaybe<PokemonV2MoveeffectchangeAggregateOrderBy>;
  pokemon_v2_moveeffecteffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffecteffecttextAggregateOrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
}

export type PokemonV2MoveeffectSelectColumn = 'id';

export interface PokemonV2MoveeffectStreamCursorInput {
  initial_value: PokemonV2MoveeffectStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveeffectStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveeffectchangeAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveeffectchangeAggregateBoolExpCount>;
}

export interface PokemonV2MoveeffectchangeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveeffectchangeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveeffectchangeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveeffectchangeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveeffectchangeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveeffectchangeMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveeffectchangeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveeffectchangeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveeffectchangeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveeffectchangeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveeffectchangeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveeffectchangeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveeffectchangeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveeffectchangeVarianceOrderBy>;
}

export interface PokemonV2MoveeffectchangeAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveeffectchangeBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveeffectchangeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveeffectchangeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  move_effect_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectBoolExp>;
  pokemon_v2_moveeffectchangeeffecttexts?: InputMaybe<PokemonV2MoveeffectchangeeffecttextBoolExp>;
  pokemon_v2_moveeffectchangeeffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffectchangeeffecttextAggregateBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MoveeffectchangeMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeMinOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectOrderBy>;
  pokemon_v2_moveeffectchangeeffecttexts_aggregate?: InputMaybe<PokemonV2MoveeffectchangeeffecttextAggregateOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2MoveeffectchangeSelectColumn =
  | 'id'
  | 'move_effect_id'
  | 'version_group_id';

export interface PokemonV2MoveeffectchangeStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeStreamCursorInput {
  initial_value: PokemonV2MoveeffectchangeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveeffectchangeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  move_effect_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveeffectchangeSumOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveeffectchangeeffecttextAggregateBoolExpCount>;
}

export interface PokemonV2MoveeffectchangeeffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2MoveeffectchangeeffecttextSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveeffectchangeeffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveeffectchangeeffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveeffectchangeeffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveeffectchangeeffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveeffectchangeeffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveeffectchangeeffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveeffectchangeeffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveeffectchangeeffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveeffectchangeeffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveeffectchangeeffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveeffectchangeeffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveeffectchangeeffecttextVarianceOrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveeffectchangeeffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveeffectchangeeffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveeffectchangeeffecttextBoolExp>>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_effect_change_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_moveeffectchange?: InputMaybe<PokemonV2MoveeffectchangeBoolExp>;
}

export interface PokemonV2MoveeffectchangeeffecttextMaxOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextMinOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_moveeffectchange?: InputMaybe<PokemonV2MoveeffectchangeOrderBy>;
}

export type PokemonV2MoveeffectchangeeffecttextSelectColumn =
  | 'effect'
  | 'id'
  | 'language_id'
  | 'move_effect_change_id';

export interface PokemonV2MoveeffectchangeeffecttextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextStreamCursorInput {
  initial_value: PokemonV2MoveeffectchangeeffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveeffectchangeeffecttextStreamCursorValueInput {
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_effect_change_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveeffectchangeeffecttextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffectchangeeffecttextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_change_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveeffecteffecttextAggregateBoolExpCount>;
}

export interface PokemonV2MoveeffecteffecttextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveeffecteffecttextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveeffecteffecttextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveeffecteffecttextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveeffecteffecttextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveeffecteffecttextMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveeffecteffecttextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveeffecteffecttextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveeffecteffecttextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveeffecteffecttextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveeffecteffecttextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveeffecteffecttextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveeffecteffecttextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveeffecteffecttextVarianceOrderBy>;
}

export interface PokemonV2MoveeffecteffecttextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveeffecteffecttextBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveeffecteffecttextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveeffecteffecttextBoolExp>>;
  effect?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_effect_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectBoolExp>;
  short_effect?: InputMaybe<StringComparisonExp>;
}

export interface PokemonV2MoveeffecteffecttextMaxOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextMinOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextOrderBy {
  effect?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_moveeffect?: InputMaybe<PokemonV2MoveeffectOrderBy>;
  short_effect?: InputMaybe<OrderBy>;
}

export type PokemonV2MoveeffecteffecttextSelectColumn =
  | 'effect'
  | 'id'
  | 'language_id'
  | 'move_effect_id'
  | 'short_effect';

export interface PokemonV2MoveeffecteffecttextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextStreamCursorInput {
  initial_value: PokemonV2MoveeffecteffecttextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveeffecteffecttextStreamCursorValueInput {
  effect?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_effect_id?: InputMaybe<Scalars['Int']['input']>;
  short_effect?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MoveeffecteffecttextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveeffecteffecttextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextAggregateBoolExp {
  count?: InputMaybe<PokemonV2MoveflavortextAggregateBoolExpCount>;
}

export interface PokemonV2MoveflavortextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MoveflavortextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MoveflavortextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MoveflavortextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MoveflavortextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MoveflavortextMaxOrderBy>;
  min?: InputMaybe<PokemonV2MoveflavortextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MoveflavortextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MoveflavortextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MoveflavortextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MoveflavortextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MoveflavortextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MoveflavortextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MoveflavortextVarianceOrderBy>;
}

export interface PokemonV2MoveflavortextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextBoolExp {
  _and?: InputMaybe<Array<PokemonV2MoveflavortextBoolExp>>;
  _not?: InputMaybe<PokemonV2MoveflavortextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MoveflavortextBoolExp>>;
  flavor_text?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MoveflavortextMaxOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextMinOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2MoveflavortextSelectColumn =
  | 'flavor_text'
  | 'id'
  | 'language_id'
  | 'move_id'
  | 'version_group_id';

export interface PokemonV2MoveflavortextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextStreamCursorInput {
  initial_value: PokemonV2MoveflavortextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MoveflavortextStreamCursorValueInput {
  flavor_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MoveflavortextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MoveflavortextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovelearnmethodBoolExp>>;
  _not?: InputMaybe<PokemonV2MovelearnmethodBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovelearnmethodBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_movelearnmethoddescriptions?: InputMaybe<PokemonV2MovelearnmethoddescriptionBoolExp>;
  pokemon_v2_movelearnmethoddescriptions_aggregate?: InputMaybe<PokemonV2MovelearnmethoddescriptionAggregateBoolExp>;
  pokemon_v2_movelearnmethodnames?: InputMaybe<PokemonV2MovelearnmethodnameBoolExp>;
  pokemon_v2_movelearnmethodnames_aggregate?: InputMaybe<PokemonV2MovelearnmethodnameAggregateBoolExp>;
  pokemon_v2_pokemonmoves?: InputMaybe<PokemonV2PokemonmoveBoolExp>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateBoolExp>;
  pokemon_v2_versiongroupmovelearnmethods?: InputMaybe<PokemonV2VersiongroupmovelearnmethodBoolExp>;
  pokemon_v2_versiongroupmovelearnmethods_aggregate?: InputMaybe<PokemonV2VersiongroupmovelearnmethodAggregateBoolExp>;
}

export interface PokemonV2MovelearnmethodOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_movelearnmethoddescriptions_aggregate?: InputMaybe<PokemonV2MovelearnmethoddescriptionAggregateOrderBy>;
  pokemon_v2_movelearnmethodnames_aggregate?: InputMaybe<PokemonV2MovelearnmethodnameAggregateOrderBy>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateOrderBy>;
  pokemon_v2_versiongroupmovelearnmethods_aggregate?: InputMaybe<PokemonV2VersiongroupmovelearnmethodAggregateOrderBy>;
}

export type PokemonV2MovelearnmethodSelectColumn = 'id' | 'name';

export interface PokemonV2MovelearnmethodStreamCursorInput {
  initial_value: PokemonV2MovelearnmethodStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovelearnmethodStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovelearnmethoddescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovelearnmethoddescriptionAggregateBoolExpCount>;
}

export interface PokemonV2MovelearnmethoddescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2MovelearnmethoddescriptionSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovelearnmethoddescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovelearnmethoddescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovelearnmethoddescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovelearnmethoddescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovelearnmethoddescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovelearnmethoddescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovelearnmethoddescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovelearnmethoddescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovelearnmethoddescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovelearnmethoddescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovelearnmethoddescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovelearnmethoddescriptionVarianceOrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovelearnmethoddescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2MovelearnmethoddescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovelearnmethoddescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_learn_method_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodBoolExp>;
}

export interface PokemonV2MovelearnmethoddescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodOrderBy>;
}

export type PokemonV2MovelearnmethoddescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'move_learn_method_id';

export interface PokemonV2MovelearnmethoddescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionStreamCursorInput {
  initial_value: PokemonV2MovelearnmethoddescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovelearnmethoddescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_learn_method_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovelearnmethoddescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethoddescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovelearnmethodnameAggregateBoolExpCount>;
}

export interface PokemonV2MovelearnmethodnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovelearnmethodnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovelearnmethodnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovelearnmethodnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovelearnmethodnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovelearnmethodnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovelearnmethodnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovelearnmethodnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovelearnmethodnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovelearnmethodnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovelearnmethodnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovelearnmethodnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovelearnmethodnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovelearnmethodnameVarianceOrderBy>;
}

export interface PokemonV2MovelearnmethodnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovelearnmethodnameBoolExp>>;
  _not?: InputMaybe<PokemonV2MovelearnmethodnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovelearnmethodnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_learn_method_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodBoolExp>;
}

export interface PokemonV2MovelearnmethodnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodOrderBy>;
}

export type PokemonV2MovelearnmethodnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_learn_method_id'
  | 'name';

export interface PokemonV2MovelearnmethodnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameStreamCursorInput {
  initial_value: PokemonV2MovelearnmethodnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovelearnmethodnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_learn_method_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovelearnmethodnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovelearnmethodnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovemetaAggregateBoolExpCount>;
}

export interface PokemonV2MovemetaAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovemetaSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovemetaBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovemetaAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovemetaAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovemetaMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovemetaMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovemetaStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovemetaStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovemetaStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovemetaSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovemetaVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovemetaVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovemetaVarianceOrderBy>;
}

export interface PokemonV2MovemetaAvgOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovemetaBoolExp>>;
  _not?: InputMaybe<PokemonV2MovemetaBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovemetaBoolExp>>;
  ailment_chance?: InputMaybe<IntComparisonExp>;
  crit_rate?: InputMaybe<IntComparisonExp>;
  drain?: InputMaybe<IntComparisonExp>;
  flinch_chance?: InputMaybe<IntComparisonExp>;
  healing?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  max_hits?: InputMaybe<IntComparisonExp>;
  max_turns?: InputMaybe<IntComparisonExp>;
  min_hits?: InputMaybe<IntComparisonExp>;
  min_turns?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  move_meta_ailment_id?: InputMaybe<IntComparisonExp>;
  move_meta_category_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_movemetaailment?: InputMaybe<PokemonV2MovemetaailmentBoolExp>;
  pokemon_v2_movemetacategory?: InputMaybe<PokemonV2MovemetacategoryBoolExp>;
  stat_chance?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MovemetaMaxOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaMinOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_movemetaailment?: InputMaybe<PokemonV2MovemetaailmentOrderBy>;
  pokemon_v2_movemetacategory?: InputMaybe<PokemonV2MovemetacategoryOrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export type PokemonV2MovemetaSelectColumn =
  | 'ailment_chance'
  | 'crit_rate'
  | 'drain'
  | 'flinch_chance'
  | 'healing'
  | 'id'
  | 'max_hits'
  | 'max_turns'
  | 'min_hits'
  | 'min_turns'
  | 'move_id'
  | 'move_meta_ailment_id'
  | 'move_meta_category_id'
  | 'stat_chance';

export interface PokemonV2MovemetaStddevOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaStddevPopOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaStddevSampOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaStreamCursorInput {
  initial_value: PokemonV2MovemetaStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovemetaStreamCursorValueInput {
  ailment_chance?: InputMaybe<Scalars['Int']['input']>;
  crit_rate?: InputMaybe<Scalars['Int']['input']>;
  drain?: InputMaybe<Scalars['Int']['input']>;
  flinch_chance?: InputMaybe<Scalars['Int']['input']>;
  healing?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  max_hits?: InputMaybe<Scalars['Int']['input']>;
  max_turns?: InputMaybe<Scalars['Int']['input']>;
  min_hits?: InputMaybe<Scalars['Int']['input']>;
  min_turns?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  move_meta_ailment_id?: InputMaybe<Scalars['Int']['input']>;
  move_meta_category_id?: InputMaybe<Scalars['Int']['input']>;
  stat_chance?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovemetaSumOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaVarPopOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaVarSampOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaVarianceOrderBy {
  ailment_chance?: InputMaybe<OrderBy>;
  crit_rate?: InputMaybe<OrderBy>;
  drain?: InputMaybe<OrderBy>;
  flinch_chance?: InputMaybe<OrderBy>;
  healing?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  max_hits?: InputMaybe<OrderBy>;
  max_turns?: InputMaybe<OrderBy>;
  min_hits?: InputMaybe<OrderBy>;
  min_turns?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  stat_chance?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovemetaailmentBoolExp>>;
  _not?: InputMaybe<PokemonV2MovemetaailmentBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovemetaailmentBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_movemeta?: InputMaybe<PokemonV2MovemetaBoolExp>;
  pokemon_v2_movemeta_aggregate?: InputMaybe<PokemonV2MovemetaAggregateBoolExp>;
  pokemon_v2_movemetaailmentnames?: InputMaybe<PokemonV2MovemetaailmentnameBoolExp>;
  pokemon_v2_movemetaailmentnames_aggregate?: InputMaybe<PokemonV2MovemetaailmentnameAggregateBoolExp>;
}

export interface PokemonV2MovemetaailmentOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_movemeta_aggregate?: InputMaybe<PokemonV2MovemetaAggregateOrderBy>;
  pokemon_v2_movemetaailmentnames_aggregate?: InputMaybe<PokemonV2MovemetaailmentnameAggregateOrderBy>;
}

export type PokemonV2MovemetaailmentSelectColumn = 'id' | 'name';

export interface PokemonV2MovemetaailmentStreamCursorInput {
  initial_value: PokemonV2MovemetaailmentStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovemetaailmentStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovemetaailmentnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovemetaailmentnameAggregateBoolExpCount>;
}

export interface PokemonV2MovemetaailmentnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovemetaailmentnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovemetaailmentnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovemetaailmentnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovemetaailmentnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovemetaailmentnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovemetaailmentnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovemetaailmentnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovemetaailmentnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovemetaailmentnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovemetaailmentnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovemetaailmentnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovemetaailmentnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovemetaailmentnameVarianceOrderBy>;
}

export interface PokemonV2MovemetaailmentnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovemetaailmentnameBoolExp>>;
  _not?: InputMaybe<PokemonV2MovemetaailmentnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovemetaailmentnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_meta_ailment_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movemetaailment?: InputMaybe<PokemonV2MovemetaailmentBoolExp>;
}

export interface PokemonV2MovemetaailmentnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movemetaailment?: InputMaybe<PokemonV2MovemetaailmentOrderBy>;
}

export type PokemonV2MovemetaailmentnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_meta_ailment_id'
  | 'name';

export interface PokemonV2MovemetaailmentnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameStreamCursorInput {
  initial_value: PokemonV2MovemetaailmentnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovemetaailmentnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_meta_ailment_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovemetaailmentnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetaailmentnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_ailment_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategoryBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovemetacategoryBoolExp>>;
  _not?: InputMaybe<PokemonV2MovemetacategoryBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovemetacategoryBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_movemeta?: InputMaybe<PokemonV2MovemetaBoolExp>;
  pokemon_v2_movemeta_aggregate?: InputMaybe<PokemonV2MovemetaAggregateBoolExp>;
  pokemon_v2_movemetacategorydescriptions?: InputMaybe<PokemonV2MovemetacategorydescriptionBoolExp>;
  pokemon_v2_movemetacategorydescriptions_aggregate?: InputMaybe<PokemonV2MovemetacategorydescriptionAggregateBoolExp>;
}

export interface PokemonV2MovemetacategoryOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_movemeta_aggregate?: InputMaybe<PokemonV2MovemetaAggregateOrderBy>;
  pokemon_v2_movemetacategorydescriptions_aggregate?: InputMaybe<PokemonV2MovemetacategorydescriptionAggregateOrderBy>;
}

export type PokemonV2MovemetacategorySelectColumn = 'id' | 'name';

export interface PokemonV2MovemetacategoryStreamCursorInput {
  initial_value: PokemonV2MovemetacategoryStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovemetacategoryStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovemetacategorydescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovemetacategorydescriptionAggregateBoolExpCount>;
}

export interface PokemonV2MovemetacategorydescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2MovemetacategorydescriptionSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovemetacategorydescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovemetacategorydescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovemetacategorydescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovemetacategorydescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovemetacategorydescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovemetacategorydescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovemetacategorydescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovemetacategorydescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovemetacategorydescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovemetacategorydescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovemetacategorydescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovemetacategorydescriptionVarianceOrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovemetacategorydescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2MovemetacategorydescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovemetacategorydescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_meta_category_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movemetacategory?: InputMaybe<PokemonV2MovemetacategoryBoolExp>;
}

export interface PokemonV2MovemetacategorydescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movemetacategory?: InputMaybe<PokemonV2MovemetacategoryOrderBy>;
}

export type PokemonV2MovemetacategorydescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'move_meta_category_id';

export interface PokemonV2MovemetacategorydescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionStreamCursorInput {
  initial_value: PokemonV2MovemetacategorydescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovemetacategorydescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_meta_category_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovemetacategorydescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetacategorydescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_meta_category_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovemetastatchangeAggregateBoolExpCount>;
}

export interface PokemonV2MovemetastatchangeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovemetastatchangeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovemetastatchangeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovemetastatchangeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovemetastatchangeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovemetastatchangeMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovemetastatchangeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovemetastatchangeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovemetastatchangeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovemetastatchangeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovemetastatchangeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovemetastatchangeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovemetastatchangeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovemetastatchangeVarianceOrderBy>;
}

export interface PokemonV2MovemetastatchangeAvgOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovemetastatchangeBoolExp>>;
  _not?: InputMaybe<PokemonV2MovemetastatchangeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovemetastatchangeBoolExp>>;
  change?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatBoolExp>;
  stat_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2MovemetastatchangeMaxOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeMinOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatOrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export type PokemonV2MovemetastatchangeSelectColumn =
  | 'change'
  | 'id'
  | 'move_id'
  | 'stat_id';

export interface PokemonV2MovemetastatchangeStddevOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeStddevPopOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeStddevSampOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeStreamCursorInput {
  initial_value: PokemonV2MovemetastatchangeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovemetastatchangeStreamCursorValueInput {
  change?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  stat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovemetastatchangeSumOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeVarPopOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeVarSampOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovemetastatchangeVarianceOrderBy {
  change?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovenameAggregateBoolExpCount>;
}

export interface PokemonV2MovenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovenameVarianceOrderBy>;
}

export interface PokemonV2MovenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovenameBoolExp>>;
  _not?: InputMaybe<PokemonV2MovenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
}

export interface PokemonV2MovenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
}

export type PokemonV2MovenameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_id'
  | 'name';

export interface PokemonV2MovenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameStreamCursorInput {
  initial_value: PokemonV2MovenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovetargetBoolExp>>;
  _not?: InputMaybe<PokemonV2MovetargetBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovetargetBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
  pokemon_v2_movetargetdescriptions?: InputMaybe<PokemonV2MovetargetdescriptionBoolExp>;
  pokemon_v2_movetargetdescriptions_aggregate?: InputMaybe<PokemonV2MovetargetdescriptionAggregateBoolExp>;
  pokemon_v2_movetargetnames?: InputMaybe<PokemonV2MovetargetnameBoolExp>;
  pokemon_v2_movetargetnames_aggregate?: InputMaybe<PokemonV2MovetargetnameAggregateBoolExp>;
}

export interface PokemonV2MovetargetOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
  pokemon_v2_movetargetdescriptions_aggregate?: InputMaybe<PokemonV2MovetargetdescriptionAggregateOrderBy>;
  pokemon_v2_movetargetnames_aggregate?: InputMaybe<PokemonV2MovetargetnameAggregateOrderBy>;
}

export type PokemonV2MovetargetSelectColumn = 'id' | 'name';

export interface PokemonV2MovetargetStreamCursorInput {
  initial_value: PokemonV2MovetargetStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovetargetStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovetargetdescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovetargetdescriptionAggregateBoolExpCount>;
}

export interface PokemonV2MovetargetdescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovetargetdescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovetargetdescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovetargetdescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovetargetdescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovetargetdescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovetargetdescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovetargetdescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovetargetdescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovetargetdescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovetargetdescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovetargetdescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovetargetdescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovetargetdescriptionVarianceOrderBy>;
}

export interface PokemonV2MovetargetdescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovetargetdescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2MovetargetdescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovetargetdescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_target_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movetarget?: InputMaybe<PokemonV2MovetargetBoolExp>;
}

export interface PokemonV2MovetargetdescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movetarget?: InputMaybe<PokemonV2MovetargetOrderBy>;
}

export type PokemonV2MovetargetdescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'move_target_id';

export interface PokemonV2MovetargetdescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionStreamCursorInput {
  initial_value: PokemonV2MovetargetdescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovetargetdescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_target_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2MovetargetdescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetdescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2MovetargetnameAggregateBoolExpCount>;
}

export interface PokemonV2MovetargetnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2MovetargetnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2MovetargetnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2MovetargetnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2MovetargetnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2MovetargetnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2MovetargetnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2MovetargetnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2MovetargetnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2MovetargetnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2MovetargetnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2MovetargetnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2MovetargetnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2MovetargetnameVarianceOrderBy>;
}

export interface PokemonV2MovetargetnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2MovetargetnameBoolExp>>;
  _not?: InputMaybe<PokemonV2MovetargetnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2MovetargetnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  move_target_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_movetarget?: InputMaybe<PokemonV2MovetargetBoolExp>;
}

export interface PokemonV2MovetargetnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_movetarget?: InputMaybe<PokemonV2MovetargetOrderBy>;
}

export type PokemonV2MovetargetnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'move_target_id'
  | 'name';

export interface PokemonV2MovetargetnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameStreamCursorInput {
  initial_value: PokemonV2MovetargetnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2MovetargetnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  move_target_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2MovetargetnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2MovetargetnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  move_target_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureAggregateBoolExp {
  count?: InputMaybe<PokemonV2NatureAggregateBoolExpCount>;
}

export interface PokemonV2NatureAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2NatureSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2NatureBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2NatureAggregateOrderBy {
  avg?: InputMaybe<PokemonV2NatureAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2NatureMaxOrderBy>;
  min?: InputMaybe<PokemonV2NatureMinOrderBy>;
  stddev?: InputMaybe<PokemonV2NatureStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2NatureStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2NatureStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2NatureSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2NatureVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2NatureVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2NatureVarianceOrderBy>;
}

export interface PokemonV2NatureAvgOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureBoolExp {
  _and?: InputMaybe<Array<PokemonV2NatureBoolExp>>;
  _not?: InputMaybe<PokemonV2NatureBoolExp>;
  _or?: InputMaybe<Array<PokemonV2NatureBoolExp>>;
  decreased_stat_id?: InputMaybe<IntComparisonExp>;
  game_index?: InputMaybe<IntComparisonExp>;
  hates_flavor_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  increased_stat_id?: InputMaybe<IntComparisonExp>;
  likes_flavor_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2BerryflavorByLikesFlavorId?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  pokemonV2StatByIncreasedStatId?: InputMaybe<PokemonV2StatBoolExp>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorBoolExp>;
  pokemon_v2_naturebattlestylepreferences?: InputMaybe<PokemonV2NaturebattlestylepreferenceBoolExp>;
  pokemon_v2_naturebattlestylepreferences_aggregate?: InputMaybe<PokemonV2NaturebattlestylepreferenceAggregateBoolExp>;
  pokemon_v2_naturenames?: InputMaybe<PokemonV2NaturenameBoolExp>;
  pokemon_v2_naturenames_aggregate?: InputMaybe<PokemonV2NaturenameAggregateBoolExp>;
  pokemon_v2_naturepokeathlonstats?: InputMaybe<PokemonV2NaturepokeathlonstatBoolExp>;
  pokemon_v2_naturepokeathlonstats_aggregate?: InputMaybe<PokemonV2NaturepokeathlonstatAggregateBoolExp>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatBoolExp>;
}

export interface PokemonV2NatureMaxOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureMinOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2BerryflavorByLikesFlavorId?: InputMaybe<PokemonV2BerryflavorOrderBy>;
  pokemonV2StatByIncreasedStatId?: InputMaybe<PokemonV2StatOrderBy>;
  pokemon_v2_berryflavor?: InputMaybe<PokemonV2BerryflavorOrderBy>;
  pokemon_v2_naturebattlestylepreferences_aggregate?: InputMaybe<PokemonV2NaturebattlestylepreferenceAggregateOrderBy>;
  pokemon_v2_naturenames_aggregate?: InputMaybe<PokemonV2NaturenameAggregateOrderBy>;
  pokemon_v2_naturepokeathlonstats_aggregate?: InputMaybe<PokemonV2NaturepokeathlonstatAggregateOrderBy>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatOrderBy>;
}

export type PokemonV2NatureSelectColumn =
  | 'decreased_stat_id'
  | 'game_index'
  | 'hates_flavor_id'
  | 'id'
  | 'increased_stat_id'
  | 'likes_flavor_id'
  | 'name';

export interface PokemonV2NatureStddevOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureStddevPopOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureStddevSampOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureStreamCursorInput {
  initial_value: PokemonV2NatureStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2NatureStreamCursorValueInput {
  decreased_stat_id?: InputMaybe<Scalars['Int']['input']>;
  game_index?: InputMaybe<Scalars['Int']['input']>;
  hates_flavor_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  increased_stat_id?: InputMaybe<Scalars['Int']['input']>;
  likes_flavor_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2NatureSumOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureVarPopOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureVarSampOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NatureVarianceOrderBy {
  decreased_stat_id?: InputMaybe<OrderBy>;
  game_index?: InputMaybe<OrderBy>;
  hates_flavor_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  increased_stat_id?: InputMaybe<OrderBy>;
  likes_flavor_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceAggregateBoolExp {
  count?: InputMaybe<PokemonV2NaturebattlestylepreferenceAggregateBoolExpCount>;
}

export interface PokemonV2NaturebattlestylepreferenceAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2NaturebattlestylepreferenceSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2NaturebattlestylepreferenceBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2NaturebattlestylepreferenceAggregateOrderBy {
  avg?: InputMaybe<PokemonV2NaturebattlestylepreferenceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2NaturebattlestylepreferenceMaxOrderBy>;
  min?: InputMaybe<PokemonV2NaturebattlestylepreferenceMinOrderBy>;
  stddev?: InputMaybe<PokemonV2NaturebattlestylepreferenceStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2NaturebattlestylepreferenceStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2NaturebattlestylepreferenceStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2NaturebattlestylepreferenceSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2NaturebattlestylepreferenceVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2NaturebattlestylepreferenceVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2NaturebattlestylepreferenceVarianceOrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceAvgOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceBoolExp {
  _and?: InputMaybe<Array<PokemonV2NaturebattlestylepreferenceBoolExp>>;
  _not?: InputMaybe<PokemonV2NaturebattlestylepreferenceBoolExp>;
  _or?: InputMaybe<Array<PokemonV2NaturebattlestylepreferenceBoolExp>>;
  high_hp_preference?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  low_hp_preference?: InputMaybe<IntComparisonExp>;
  move_battle_style_id?: InputMaybe<IntComparisonExp>;
  nature_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_movebattlestyle?: InputMaybe<PokemonV2MovebattlestyleBoolExp>;
  pokemon_v2_nature?: InputMaybe<PokemonV2NatureBoolExp>;
}

export interface PokemonV2NaturebattlestylepreferenceMaxOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceMinOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokemon_v2_movebattlestyle?: InputMaybe<PokemonV2MovebattlestyleOrderBy>;
  pokemon_v2_nature?: InputMaybe<PokemonV2NatureOrderBy>;
}

export type PokemonV2NaturebattlestylepreferenceSelectColumn =
  | 'high_hp_preference'
  | 'id'
  | 'low_hp_preference'
  | 'move_battle_style_id'
  | 'nature_id';

export interface PokemonV2NaturebattlestylepreferenceStddevOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceStddevPopOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceStddevSampOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceStreamCursorInput {
  initial_value: PokemonV2NaturebattlestylepreferenceStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2NaturebattlestylepreferenceStreamCursorValueInput {
  high_hp_preference?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  low_hp_preference?: InputMaybe<Scalars['Int']['input']>;
  move_battle_style_id?: InputMaybe<Scalars['Int']['input']>;
  nature_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2NaturebattlestylepreferenceSumOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceVarPopOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceVarSampOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturebattlestylepreferenceVarianceOrderBy {
  high_hp_preference?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  low_hp_preference?: InputMaybe<OrderBy>;
  move_battle_style_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2NaturenameAggregateBoolExpCount>;
}

export interface PokemonV2NaturenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2NaturenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2NaturenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2NaturenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2NaturenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2NaturenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2NaturenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2NaturenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2NaturenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2NaturenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2NaturenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2NaturenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2NaturenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2NaturenameVarianceOrderBy>;
}

export interface PokemonV2NaturenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2NaturenameBoolExp>>;
  _not?: InputMaybe<PokemonV2NaturenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2NaturenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nature_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_nature?: InputMaybe<PokemonV2NatureBoolExp>;
}

export interface PokemonV2NaturenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_nature?: InputMaybe<PokemonV2NatureOrderBy>;
}

export type PokemonV2NaturenameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'nature_id';

export interface PokemonV2NaturenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameStreamCursorInput {
  initial_value: PokemonV2NaturenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2NaturenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nature_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2NaturenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatAggregateBoolExp {
  count?: InputMaybe<PokemonV2NaturepokeathlonstatAggregateBoolExpCount>;
}

export interface PokemonV2NaturepokeathlonstatAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2NaturepokeathlonstatSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2NaturepokeathlonstatBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2NaturepokeathlonstatAggregateOrderBy {
  avg?: InputMaybe<PokemonV2NaturepokeathlonstatAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2NaturepokeathlonstatMaxOrderBy>;
  min?: InputMaybe<PokemonV2NaturepokeathlonstatMinOrderBy>;
  stddev?: InputMaybe<PokemonV2NaturepokeathlonstatStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2NaturepokeathlonstatStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2NaturepokeathlonstatStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2NaturepokeathlonstatSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2NaturepokeathlonstatVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2NaturepokeathlonstatVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2NaturepokeathlonstatVarianceOrderBy>;
}

export interface PokemonV2NaturepokeathlonstatAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatBoolExp {
  _and?: InputMaybe<Array<PokemonV2NaturepokeathlonstatBoolExp>>;
  _not?: InputMaybe<PokemonV2NaturepokeathlonstatBoolExp>;
  _or?: InputMaybe<Array<PokemonV2NaturepokeathlonstatBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  max_change?: InputMaybe<IntComparisonExp>;
  nature_id?: InputMaybe<IntComparisonExp>;
  pokeathlon_stat_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_nature?: InputMaybe<PokemonV2NatureBoolExp>;
  pokemon_v2_pokeathlonstat?: InputMaybe<PokemonV2PokeathlonstatBoolExp>;
}

export interface PokemonV2NaturepokeathlonstatMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatMinOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
  pokemon_v2_nature?: InputMaybe<PokemonV2NatureOrderBy>;
  pokemon_v2_pokeathlonstat?: InputMaybe<PokemonV2PokeathlonstatOrderBy>;
}

export type PokemonV2NaturepokeathlonstatSelectColumn =
  | 'id'
  | 'max_change'
  | 'nature_id'
  | 'pokeathlon_stat_id';

export interface PokemonV2NaturepokeathlonstatStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatStreamCursorInput {
  initial_value: PokemonV2NaturepokeathlonstatStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2NaturepokeathlonstatStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  max_change?: InputMaybe<Scalars['Int']['input']>;
  nature_id?: InputMaybe<Scalars['Int']['input']>;
  pokeathlon_stat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2NaturepokeathlonstatSumOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2NaturepokeathlonstatVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  max_change?: InputMaybe<OrderBy>;
  nature_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkAggregateBoolExp {
  count?: InputMaybe<PokemonV2PalparkAggregateBoolExpCount>;
}

export interface PokemonV2PalparkAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PalparkSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PalparkBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PalparkAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PalparkAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PalparkMaxOrderBy>;
  min?: InputMaybe<PokemonV2PalparkMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PalparkStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PalparkStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PalparkStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PalparkSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PalparkVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PalparkVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PalparkVarianceOrderBy>;
}

export interface PokemonV2PalparkAvgOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkBoolExp {
  _and?: InputMaybe<Array<PokemonV2PalparkBoolExp>>;
  _not?: InputMaybe<PokemonV2PalparkBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PalparkBoolExp>>;
  base_score?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pal_park_area_id?: InputMaybe<IntComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_palparkarea?: InputMaybe<PokemonV2PalparkareaBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  rate?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PalparkMaxOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkMinOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_palparkarea?: InputMaybe<PokemonV2PalparkareaOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export type PokemonV2PalparkSelectColumn =
  | 'base_score'
  | 'id'
  | 'pal_park_area_id'
  | 'pokemon_species_id'
  | 'rate';

export interface PokemonV2PalparkStddevOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkStddevPopOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkStddevSampOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkStreamCursorInput {
  initial_value: PokemonV2PalparkStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PalparkStreamCursorValueInput {
  base_score?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pal_park_area_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
  rate?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PalparkSumOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkVarPopOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkVarSampOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkVarianceOrderBy {
  base_score?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  rate?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareaBoolExp {
  _and?: InputMaybe<Array<PokemonV2PalparkareaBoolExp>>;
  _not?: InputMaybe<PokemonV2PalparkareaBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PalparkareaBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_palparkareanames?: InputMaybe<PokemonV2PalparkareanameBoolExp>;
  pokemon_v2_palparkareanames_aggregate?: InputMaybe<PokemonV2PalparkareanameAggregateBoolExp>;
  pokemon_v2_palparks?: InputMaybe<PokemonV2PalparkBoolExp>;
  pokemon_v2_palparks_aggregate?: InputMaybe<PokemonV2PalparkAggregateBoolExp>;
}

export interface PokemonV2PalparkareaOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_palparkareanames_aggregate?: InputMaybe<PokemonV2PalparkareanameAggregateOrderBy>;
  pokemon_v2_palparks_aggregate?: InputMaybe<PokemonV2PalparkAggregateOrderBy>;
}

export type PokemonV2PalparkareaSelectColumn = 'id' | 'name';

export interface PokemonV2PalparkareaStreamCursorInput {
  initial_value: PokemonV2PalparkareaStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PalparkareaStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2PalparkareanameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PalparkareanameAggregateBoolExpCount>;
}

export interface PokemonV2PalparkareanameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PalparkareanameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PalparkareanameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PalparkareanameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PalparkareanameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PalparkareanameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PalparkareanameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PalparkareanameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PalparkareanameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PalparkareanameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PalparkareanameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PalparkareanameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PalparkareanameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PalparkareanameVarianceOrderBy>;
}

export interface PokemonV2PalparkareanameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PalparkareanameBoolExp>>;
  _not?: InputMaybe<PokemonV2PalparkareanameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PalparkareanameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pal_park_area_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_palparkarea?: InputMaybe<PokemonV2PalparkareaBoolExp>;
}

export interface PokemonV2PalparkareanameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_palparkarea?: InputMaybe<PokemonV2PalparkareaOrderBy>;
}

export type PokemonV2PalparkareanameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'pal_park_area_id';

export interface PokemonV2PalparkareanameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameStreamCursorInput {
  initial_value: PokemonV2PalparkareanameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PalparkareanameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pal_park_area_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PalparkareanameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PalparkareanameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pal_park_area_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokeathlonstatBoolExp>>;
  _not?: InputMaybe<PokemonV2PokeathlonstatBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokeathlonstatBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_naturepokeathlonstats?: InputMaybe<PokemonV2NaturepokeathlonstatBoolExp>;
  pokemon_v2_naturepokeathlonstats_aggregate?: InputMaybe<PokemonV2NaturepokeathlonstatAggregateBoolExp>;
  pokemon_v2_pokeathlonstatnames?: InputMaybe<PokemonV2PokeathlonstatnameBoolExp>;
  pokemon_v2_pokeathlonstatnames_aggregate?: InputMaybe<PokemonV2PokeathlonstatnameAggregateBoolExp>;
}

export interface PokemonV2PokeathlonstatOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_naturepokeathlonstats_aggregate?: InputMaybe<PokemonV2NaturepokeathlonstatAggregateOrderBy>;
  pokemon_v2_pokeathlonstatnames_aggregate?: InputMaybe<PokemonV2PokeathlonstatnameAggregateOrderBy>;
}

export type PokemonV2PokeathlonstatSelectColumn = 'id' | 'name';

export interface PokemonV2PokeathlonstatStreamCursorInput {
  initial_value: PokemonV2PokeathlonstatStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokeathlonstatStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2PokeathlonstatnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokeathlonstatnameAggregateBoolExpCount>;
}

export interface PokemonV2PokeathlonstatnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokeathlonstatnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokeathlonstatnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokeathlonstatnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokeathlonstatnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokeathlonstatnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokeathlonstatnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokeathlonstatnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokeathlonstatnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokeathlonstatnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokeathlonstatnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokeathlonstatnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokeathlonstatnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokeathlonstatnameVarianceOrderBy>;
}

export interface PokemonV2PokeathlonstatnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokeathlonstatnameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokeathlonstatnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokeathlonstatnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokeathlon_stat_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokeathlonstat?: InputMaybe<PokemonV2PokeathlonstatBoolExp>;
}

export interface PokemonV2PokeathlonstatnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokeathlonstat?: InputMaybe<PokemonV2PokeathlonstatOrderBy>;
}

export type PokemonV2PokeathlonstatnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokeathlon_stat_id';

export interface PokemonV2PokeathlonstatnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameStreamCursorInput {
  initial_value: PokemonV2PokeathlonstatnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokeathlonstatnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokeathlon_stat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokeathlonstatnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokeathlonstatnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokeathlon_stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2PokedexAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2PokedexAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2PokedexAggregateBoolExpCount>;
}

export interface PokemonV2PokedexAggregateBoolExpBoolAnd {
  arguments: PokemonV2PokedexSelectColumnPokemonV2PokedexAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokedexBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokedexAggregateBoolExpBoolOr {
  arguments: PokemonV2PokedexSelectColumnPokemonV2PokedexAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokedexBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokedexAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokedexSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokedexBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokedexAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokedexAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokedexMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokedexMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokedexStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokedexStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokedexStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokedexSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokedexVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokedexVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokedexVarianceOrderBy>;
}

export interface PokemonV2PokedexAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokedexBoolExp>>;
  _not?: InputMaybe<PokemonV2PokedexBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokedexBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  is_main_series?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_pokedexdescriptions?: InputMaybe<PokemonV2PokedexdescriptionBoolExp>;
  pokemon_v2_pokedexdescriptions_aggregate?: InputMaybe<PokemonV2PokedexdescriptionAggregateBoolExp>;
  pokemon_v2_pokedexnames?: InputMaybe<PokemonV2PokedexnameBoolExp>;
  pokemon_v2_pokedexnames_aggregate?: InputMaybe<PokemonV2PokedexnameAggregateBoolExp>;
  pokemon_v2_pokedexversiongroups?: InputMaybe<PokemonV2PokedexversiongroupBoolExp>;
  pokemon_v2_pokedexversiongroups_aggregate?: InputMaybe<PokemonV2PokedexversiongroupAggregateBoolExp>;
  pokemon_v2_pokemondexnumbers?: InputMaybe<PokemonV2PokemondexnumberBoolExp>;
  pokemon_v2_pokemondexnumbers_aggregate?: InputMaybe<PokemonV2PokemondexnumberAggregateBoolExp>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionBoolExp>;
  region_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokedexMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexMinOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexOrderBy {
  id?: InputMaybe<OrderBy>;
  is_main_series?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_pokedexdescriptions_aggregate?: InputMaybe<PokemonV2PokedexdescriptionAggregateOrderBy>;
  pokemon_v2_pokedexnames_aggregate?: InputMaybe<PokemonV2PokedexnameAggregateOrderBy>;
  pokemon_v2_pokedexversiongroups_aggregate?: InputMaybe<PokemonV2PokedexversiongroupAggregateOrderBy>;
  pokemon_v2_pokemondexnumbers_aggregate?: InputMaybe<PokemonV2PokemondexnumberAggregateOrderBy>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionOrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokedexSelectColumn =
  | 'id'
  | 'is_main_series'
  | 'name'
  | 'region_id';

export type PokemonV2PokedexSelectColumnPokemonV2PokedexAggregateBoolExpBoolAndArgumentsColumns =
  'is_main_series';

export type PokemonV2PokedexSelectColumnPokemonV2PokedexAggregateBoolExpBoolOrArgumentsColumns =
  'is_main_series';

export interface PokemonV2PokedexStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexStreamCursorInput {
  initial_value: PokemonV2PokedexStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokedexStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  is_main_series?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokedexSumOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokedexdescriptionAggregateBoolExpCount>;
}

export interface PokemonV2PokedexdescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokedexdescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokedexdescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokedexdescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokedexdescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokedexdescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokedexdescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokedexdescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokedexdescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokedexdescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokedexdescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokedexdescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokedexdescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokedexdescriptionVarianceOrderBy>;
}

export interface PokemonV2PokedexdescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokedexdescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2PokedexdescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokedexdescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokedex_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexBoolExp>;
}

export interface PokemonV2PokedexdescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexOrderBy>;
}

export type PokemonV2PokedexdescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'pokedex_id';

export interface PokemonV2PokedexdescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionStreamCursorInput {
  initial_value: PokemonV2PokedexdescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokedexdescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  pokedex_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokedexdescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexdescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokedexnameAggregateBoolExpCount>;
}

export interface PokemonV2PokedexnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokedexnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokedexnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokedexnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokedexnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokedexnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokedexnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokedexnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokedexnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokedexnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokedexnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokedexnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokedexnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokedexnameVarianceOrderBy>;
}

export interface PokemonV2PokedexnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokedexnameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokedexnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokedexnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokedex_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexBoolExp>;
}

export interface PokemonV2PokedexnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexOrderBy>;
}

export type PokemonV2PokedexnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokedex_id';

export interface PokemonV2PokedexnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameStreamCursorInput {
  initial_value: PokemonV2PokedexnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokedexnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokedex_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokedexnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokedexversiongroupAggregateBoolExpCount>;
}

export interface PokemonV2PokedexversiongroupAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokedexversiongroupSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokedexversiongroupBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokedexversiongroupAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokedexversiongroupAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokedexversiongroupMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokedexversiongroupMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokedexversiongroupStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokedexversiongroupStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokedexversiongroupStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokedexversiongroupSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokedexversiongroupVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokedexversiongroupVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokedexversiongroupVarianceOrderBy>;
}

export interface PokemonV2PokedexversiongroupAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokedexversiongroupBoolExp>>;
  _not?: InputMaybe<PokemonV2PokedexversiongroupBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokedexversiongroupBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokedex_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokedexversiongroupMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupMinOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokedexversiongroupSelectColumn =
  | 'id'
  | 'pokedex_id'
  | 'version_group_id';

export interface PokemonV2PokedexversiongroupStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupStreamCursorInput {
  initial_value: PokemonV2PokedexversiongroupStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokedexversiongroupStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  pokedex_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokedexversiongroupSumOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokedexversiongroupVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2PokemonAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2PokemonAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2PokemonAggregateBoolExpCount>;
}

export interface PokemonV2PokemonAggregateBoolExpBoolAnd {
  arguments: PokemonV2PokemonSelectColumnPokemonV2PokemonAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonAggregateBoolExpBoolOr {
  arguments: PokemonV2PokemonSelectColumnPokemonV2PokemonAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonVarianceOrderBy>;
}

export interface PokemonV2PokemonAvgOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonBoolExp>>;
  base_experience?: InputMaybe<IntComparisonExp>;
  height?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_default?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_encounters?: InputMaybe<PokemonV2EncounterBoolExp>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateBoolExp>;
  pokemon_v2_pokemonabilities?: InputMaybe<PokemonV2PokemonabilityBoolExp>;
  pokemon_v2_pokemonabilities_aggregate?: InputMaybe<PokemonV2PokemonabilityAggregateBoolExp>;
  pokemon_v2_pokemonforms?: InputMaybe<PokemonV2PokemonformBoolExp>;
  pokemon_v2_pokemonforms_aggregate?: InputMaybe<PokemonV2PokemonformAggregateBoolExp>;
  pokemon_v2_pokemongameindices?: InputMaybe<PokemonV2PokemongameindexBoolExp>;
  pokemon_v2_pokemongameindices_aggregate?: InputMaybe<PokemonV2PokemongameindexAggregateBoolExp>;
  pokemon_v2_pokemonitems?: InputMaybe<PokemonV2PokemonitemBoolExp>;
  pokemon_v2_pokemonitems_aggregate?: InputMaybe<PokemonV2PokemonitemAggregateBoolExp>;
  pokemon_v2_pokemonmoves?: InputMaybe<PokemonV2PokemonmoveBoolExp>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonsprites?: InputMaybe<PokemonV2PokemonspritesBoolExp>;
  pokemon_v2_pokemonsprites_aggregate?: InputMaybe<PokemonV2PokemonspritesAggregateBoolExp>;
  pokemon_v2_pokemonstats?: InputMaybe<PokemonV2PokemonstatBoolExp>;
  pokemon_v2_pokemonstats_aggregate?: InputMaybe<PokemonV2PokemonstatAggregateBoolExp>;
  pokemon_v2_pokemontypepasts?: InputMaybe<PokemonV2PokemontypepastBoolExp>;
  pokemon_v2_pokemontypepasts_aggregate?: InputMaybe<PokemonV2PokemontypepastAggregateBoolExp>;
  pokemon_v2_pokemontypes?: InputMaybe<PokemonV2PokemontypeBoolExp>;
  pokemon_v2_pokemontypes_aggregate?: InputMaybe<PokemonV2PokemontypeAggregateBoolExp>;
  weight?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonMaxOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonMinOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_default?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateOrderBy>;
  pokemon_v2_pokemonabilities_aggregate?: InputMaybe<PokemonV2PokemonabilityAggregateOrderBy>;
  pokemon_v2_pokemonforms_aggregate?: InputMaybe<PokemonV2PokemonformAggregateOrderBy>;
  pokemon_v2_pokemongameindices_aggregate?: InputMaybe<PokemonV2PokemongameindexAggregateOrderBy>;
  pokemon_v2_pokemonitems_aggregate?: InputMaybe<PokemonV2PokemonitemAggregateOrderBy>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
  pokemon_v2_pokemonsprites_aggregate?: InputMaybe<PokemonV2PokemonspritesAggregateOrderBy>;
  pokemon_v2_pokemonstats_aggregate?: InputMaybe<PokemonV2PokemonstatAggregateOrderBy>;
  pokemon_v2_pokemontypepasts_aggregate?: InputMaybe<PokemonV2PokemontypepastAggregateOrderBy>;
  pokemon_v2_pokemontypes_aggregate?: InputMaybe<PokemonV2PokemontypeAggregateOrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonSelectColumn =
  | 'base_experience'
  | 'height'
  | 'id'
  | 'is_default'
  | 'name'
  | 'order'
  | 'pokemon_species_id'
  | 'weight';

export type PokemonV2PokemonSelectColumnPokemonV2PokemonAggregateBoolExpBoolAndArgumentsColumns =
  'is_default';

export type PokemonV2PokemonSelectColumnPokemonV2PokemonAggregateBoolExpBoolOrArgumentsColumns =
  'is_default';

export interface PokemonV2PokemonStddevOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonStddevPopOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonStddevSampOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonStreamCursorInput {
  initial_value: PokemonV2PokemonStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonStreamCursorValueInput {
  base_experience?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonSumOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonVarPopOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonVarSampOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonVarianceOrderBy {
  base_experience?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  weight?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2PokemonabilityAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2PokemonabilityAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2PokemonabilityAggregateBoolExpCount>;
}

export interface PokemonV2PokemonabilityAggregateBoolExpBoolAnd {
  arguments: PokemonV2PokemonabilitySelectColumnPokemonV2PokemonabilityAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonabilityBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonabilityAggregateBoolExpBoolOr {
  arguments: PokemonV2PokemonabilitySelectColumnPokemonV2PokemonabilityAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonabilityBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonabilityAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonabilitySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonabilityBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonabilityAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonabilityAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonabilityMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonabilityMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonabilityStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonabilityStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonabilityStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonabilitySumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonabilityVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonabilityVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonabilityVarianceOrderBy>;
}

export interface PokemonV2PokemonabilityAvgOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonabilityBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonabilityBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonabilityBoolExp>>;
  ability_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_hidden?: InputMaybe<BooleanComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityBoolExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  slot?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonabilityMaxOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityMinOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_hidden?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_ability?: InputMaybe<PokemonV2AbilityOrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonabilitySelectColumn =
  | 'ability_id'
  | 'id'
  | 'is_hidden'
  | 'pokemon_id'
  | 'slot';

export type PokemonV2PokemonabilitySelectColumnPokemonV2PokemonabilityAggregateBoolExpBoolAndArgumentsColumns =
  'is_hidden';

export type PokemonV2PokemonabilitySelectColumnPokemonV2PokemonabilityAggregateBoolExpBoolOrArgumentsColumns =
  'is_hidden';

export interface PokemonV2PokemonabilityStddevOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityStddevPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityStddevSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityStreamCursorInput {
  initial_value: PokemonV2PokemonabilityStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonabilityStreamCursorValueInput {
  ability_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_hidden?: InputMaybe<Scalars['Boolean']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonabilitySumOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityVarPopOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityVarSampOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonabilityVarianceOrderBy {
  ability_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolorBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemoncolorBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemoncolorBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemoncolorBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_pokemoncolornames?: InputMaybe<PokemonV2PokemoncolornameBoolExp>;
  pokemon_v2_pokemoncolornames_aggregate?: InputMaybe<PokemonV2PokemoncolornameAggregateBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
}

export interface PokemonV2PokemoncolorOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_pokemoncolornames_aggregate?: InputMaybe<PokemonV2PokemoncolornameAggregateOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
}

export type PokemonV2PokemoncolorSelectColumn = 'id' | 'name';

export interface PokemonV2PokemoncolorStreamCursorInput {
  initial_value: PokemonV2PokemoncolorStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemoncolorStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2PokemoncolornameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemoncolornameAggregateBoolExpCount>;
}

export interface PokemonV2PokemoncolornameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemoncolornameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemoncolornameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemoncolornameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemoncolornameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemoncolornameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemoncolornameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemoncolornameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemoncolornameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemoncolornameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemoncolornameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemoncolornameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemoncolornameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemoncolornameVarianceOrderBy>;
}

export interface PokemonV2PokemoncolornameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemoncolornameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemoncolornameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemoncolornameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_color_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemoncolor?: InputMaybe<PokemonV2PokemoncolorBoolExp>;
}

export interface PokemonV2PokemoncolornameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemoncolor?: InputMaybe<PokemonV2PokemoncolorOrderBy>;
}

export type PokemonV2PokemoncolornameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokemon_color_id';

export interface PokemonV2PokemoncolornameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameStreamCursorInput {
  initial_value: PokemonV2PokemoncolornameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemoncolornameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokemon_color_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemoncolornameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemoncolornameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemondexnumberAggregateBoolExpCount>;
}

export interface PokemonV2PokemondexnumberAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemondexnumberSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemondexnumberBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemondexnumberAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemondexnumberAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemondexnumberMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemondexnumberMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemondexnumberStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemondexnumberStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemondexnumberStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemondexnumberSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemondexnumberVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemondexnumberVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemondexnumberVarianceOrderBy>;
}

export interface PokemonV2PokemondexnumberAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemondexnumberBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemondexnumberBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemondexnumberBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokedex_id?: InputMaybe<IntComparisonExp>;
  pokedex_number?: InputMaybe<IntComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
}

export interface PokemonV2PokemondexnumberMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberMinOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokedex?: InputMaybe<PokemonV2PokedexOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
}

export type PokemonV2PokemondexnumberSelectColumn =
  | 'id'
  | 'pokedex_id'
  | 'pokedex_number'
  | 'pokemon_species_id';

export interface PokemonV2PokemondexnumberStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberStreamCursorInput {
  initial_value: PokemonV2PokemondexnumberStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemondexnumberStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  pokedex_id?: InputMaybe<Scalars['Int']['input']>;
  pokedex_number?: InputMaybe<Scalars['Int']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemondexnumberSumOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemondexnumberVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  pokedex_id?: InputMaybe<OrderBy>;
  pokedex_number?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonegggroupAggregateBoolExpCount>;
}

export interface PokemonV2PokemonegggroupAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonegggroupSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonegggroupBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonegggroupAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonegggroupAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonegggroupMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonegggroupMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonegggroupStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonegggroupStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonegggroupStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonegggroupSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonegggroupVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonegggroupVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonegggroupVarianceOrderBy>;
}

export interface PokemonV2PokemonegggroupAvgOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonegggroupBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonegggroupBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonegggroupBoolExp>>;
  egg_group_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_egggroup?: InputMaybe<PokemonV2EgggroupBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
}

export interface PokemonV2PokemonegggroupMaxOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupMinOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_egggroup?: InputMaybe<PokemonV2EgggroupOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
}

export type PokemonV2PokemonegggroupSelectColumn =
  | 'egg_group_id'
  | 'id'
  | 'pokemon_species_id';

export interface PokemonV2PokemonegggroupStddevOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupStddevPopOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupStddevSampOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupStreamCursorInput {
  initial_value: PokemonV2PokemonegggroupStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonegggroupStreamCursorValueInput {
  egg_group_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonegggroupSumOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupVarPopOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupVarSampOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonegggroupVarianceOrderBy {
  egg_group_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExpCount>;
}

export interface PokemonV2PokemonevolutionAggregateBoolExpBoolAnd {
  arguments: PokemonV2PokemonevolutionSelectColumnPokemonV2PokemonevolutionAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonevolutionAggregateBoolExpBoolOr {
  arguments: PokemonV2PokemonevolutionSelectColumnPokemonV2PokemonevolutionAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonevolutionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonevolutionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonevolutionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonevolutionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonevolutionMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonevolutionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonevolutionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonevolutionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonevolutionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonevolutionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonevolutionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonevolutionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonevolutionVarianceOrderBy>;
}

export interface PokemonV2PokemonevolutionAvgOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonevolutionBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonevolutionBoolExp>>;
  evolution_item_id?: InputMaybe<IntComparisonExp>;
  evolution_trigger_id?: InputMaybe<IntComparisonExp>;
  evolved_species_id?: InputMaybe<IntComparisonExp>;
  gender_id?: InputMaybe<IntComparisonExp>;
  held_item_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  known_move_id?: InputMaybe<IntComparisonExp>;
  known_move_type_id?: InputMaybe<IntComparisonExp>;
  location_id?: InputMaybe<IntComparisonExp>;
  min_affection?: InputMaybe<IntComparisonExp>;
  min_beauty?: InputMaybe<IntComparisonExp>;
  min_happiness?: InputMaybe<IntComparisonExp>;
  min_level?: InputMaybe<IntComparisonExp>;
  needs_overworld_rain?: InputMaybe<BooleanComparisonExp>;
  party_species_id?: InputMaybe<IntComparisonExp>;
  party_type_id?: InputMaybe<IntComparisonExp>;
  pokemonV2ItemByHeldItemId?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemonV2PokemonspecyByPartySpeciesId?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemonV2PokemonspecyByTradeSpeciesId?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemonV2TypeByPartyTypeId?: InputMaybe<PokemonV2TypeBoolExp>;
  pokemon_v2_evolutiontrigger?: InputMaybe<PokemonV2EvolutiontriggerBoolExp>;
  pokemon_v2_gender?: InputMaybe<PokemonV2GenderBoolExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationBoolExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  relative_physical_stats?: InputMaybe<IntComparisonExp>;
  time_of_day?: InputMaybe<StringComparisonExp>;
  trade_species_id?: InputMaybe<IntComparisonExp>;
  turn_upside_down?: InputMaybe<BooleanComparisonExp>;
}

export interface PokemonV2PokemonevolutionMaxOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  time_of_day?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionMinOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  time_of_day?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  needs_overworld_rain?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  pokemonV2ItemByHeldItemId?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemonV2PokemonspecyByPartySpeciesId?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
  pokemonV2PokemonspecyByTradeSpeciesId?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
  pokemonV2TypeByPartyTypeId?: InputMaybe<PokemonV2TypeOrderBy>;
  pokemon_v2_evolutiontrigger?: InputMaybe<PokemonV2EvolutiontriggerOrderBy>;
  pokemon_v2_gender?: InputMaybe<PokemonV2GenderOrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_location?: InputMaybe<PokemonV2LocationOrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  time_of_day?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
  turn_upside_down?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonevolutionSelectColumn =
  | 'evolution_item_id'
  | 'evolution_trigger_id'
  | 'evolved_species_id'
  | 'gender_id'
  | 'held_item_id'
  | 'id'
  | 'known_move_id'
  | 'known_move_type_id'
  | 'location_id'
  | 'min_affection'
  | 'min_beauty'
  | 'min_happiness'
  | 'min_level'
  | 'needs_overworld_rain'
  | 'party_species_id'
  | 'party_type_id'
  | 'relative_physical_stats'
  | 'time_of_day'
  | 'trade_species_id'
  | 'turn_upside_down';

export type PokemonV2PokemonevolutionSelectColumnPokemonV2PokemonevolutionAggregateBoolExpBoolAndArgumentsColumns =
  'needs_overworld_rain' | 'turn_upside_down';

export type PokemonV2PokemonevolutionSelectColumnPokemonV2PokemonevolutionAggregateBoolExpBoolOrArgumentsColumns =
  'needs_overworld_rain' | 'turn_upside_down';

export interface PokemonV2PokemonevolutionStddevOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionStddevPopOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionStddevSampOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionStreamCursorInput {
  initial_value: PokemonV2PokemonevolutionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonevolutionStreamCursorValueInput {
  evolution_item_id?: InputMaybe<Scalars['Int']['input']>;
  evolution_trigger_id?: InputMaybe<Scalars['Int']['input']>;
  evolved_species_id?: InputMaybe<Scalars['Int']['input']>;
  gender_id?: InputMaybe<Scalars['Int']['input']>;
  held_item_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  known_move_id?: InputMaybe<Scalars['Int']['input']>;
  known_move_type_id?: InputMaybe<Scalars['Int']['input']>;
  location_id?: InputMaybe<Scalars['Int']['input']>;
  min_affection?: InputMaybe<Scalars['Int']['input']>;
  min_beauty?: InputMaybe<Scalars['Int']['input']>;
  min_happiness?: InputMaybe<Scalars['Int']['input']>;
  min_level?: InputMaybe<Scalars['Int']['input']>;
  needs_overworld_rain?: InputMaybe<Scalars['Boolean']['input']>;
  party_species_id?: InputMaybe<Scalars['Int']['input']>;
  party_type_id?: InputMaybe<Scalars['Int']['input']>;
  relative_physical_stats?: InputMaybe<Scalars['Int']['input']>;
  time_of_day?: InputMaybe<Scalars['String']['input']>;
  trade_species_id?: InputMaybe<Scalars['Int']['input']>;
  turn_upside_down?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface PokemonV2PokemonevolutionSumOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionVarPopOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionVarSampOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonevolutionVarianceOrderBy {
  evolution_item_id?: InputMaybe<OrderBy>;
  evolution_trigger_id?: InputMaybe<OrderBy>;
  evolved_species_id?: InputMaybe<OrderBy>;
  gender_id?: InputMaybe<OrderBy>;
  held_item_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  known_move_id?: InputMaybe<OrderBy>;
  known_move_type_id?: InputMaybe<OrderBy>;
  location_id?: InputMaybe<OrderBy>;
  min_affection?: InputMaybe<OrderBy>;
  min_beauty?: InputMaybe<OrderBy>;
  min_happiness?: InputMaybe<OrderBy>;
  min_level?: InputMaybe<OrderBy>;
  party_species_id?: InputMaybe<OrderBy>;
  party_type_id?: InputMaybe<OrderBy>;
  relative_physical_stats?: InputMaybe<OrderBy>;
  trade_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2PokemonformAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2PokemonformAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2PokemonformAggregateBoolExpCount>;
}

export interface PokemonV2PokemonformAggregateBoolExpBoolAnd {
  arguments: PokemonV2PokemonformSelectColumnPokemonV2PokemonformAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonformAggregateBoolExpBoolOr {
  arguments: PokemonV2PokemonformSelectColumnPokemonV2PokemonformAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonformAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonformSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonformAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonformAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonformMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonformMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonformStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonformStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonformStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonformSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonformVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonformVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonformVarianceOrderBy>;
}

export interface PokemonV2PokemonformAvgOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonformBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonformBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonformBoolExp>>;
  form_name?: InputMaybe<StringComparisonExp>;
  form_order?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_battle_only?: InputMaybe<BooleanComparisonExp>;
  is_default?: InputMaybe<BooleanComparisonExp>;
  is_mega?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_pokemonformgenerations?: InputMaybe<PokemonV2PokemonformgenerationBoolExp>;
  pokemon_v2_pokemonformgenerations_aggregate?: InputMaybe<PokemonV2PokemonformgenerationAggregateBoolExp>;
  pokemon_v2_pokemonformnames?: InputMaybe<PokemonV2PokemonformnameBoolExp>;
  pokemon_v2_pokemonformnames_aggregate?: InputMaybe<PokemonV2PokemonformnameAggregateBoolExp>;
  pokemon_v2_pokemonformsprites?: InputMaybe<PokemonV2PokemonformspritesBoolExp>;
  pokemon_v2_pokemonformsprites_aggregate?: InputMaybe<PokemonV2PokemonformspritesAggregateBoolExp>;
  pokemon_v2_pokemonformtypes?: InputMaybe<PokemonV2PokemonformtypeBoolExp>;
  pokemon_v2_pokemonformtypes_aggregate?: InputMaybe<PokemonV2PokemonformtypeAggregateBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonformMaxOrderBy {
  form_name?: InputMaybe<OrderBy>;
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformMinOrderBy {
  form_name?: InputMaybe<OrderBy>;
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformOrderBy {
  form_name?: InputMaybe<OrderBy>;
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_battle_only?: InputMaybe<OrderBy>;
  is_default?: InputMaybe<OrderBy>;
  is_mega?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_pokemonformgenerations_aggregate?: InputMaybe<PokemonV2PokemonformgenerationAggregateOrderBy>;
  pokemon_v2_pokemonformnames_aggregate?: InputMaybe<PokemonV2PokemonformnameAggregateOrderBy>;
  pokemon_v2_pokemonformsprites_aggregate?: InputMaybe<PokemonV2PokemonformspritesAggregateOrderBy>;
  pokemon_v2_pokemonformtypes_aggregate?: InputMaybe<PokemonV2PokemonformtypeAggregateOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonformSelectColumn =
  | 'form_name'
  | 'form_order'
  | 'id'
  | 'is_battle_only'
  | 'is_default'
  | 'is_mega'
  | 'name'
  | 'order'
  | 'pokemon_id'
  | 'version_group_id';

export type PokemonV2PokemonformSelectColumnPokemonV2PokemonformAggregateBoolExpBoolAndArgumentsColumns =
  'is_battle_only' | 'is_default' | 'is_mega';

export type PokemonV2PokemonformSelectColumnPokemonV2PokemonformAggregateBoolExpBoolOrArgumentsColumns =
  'is_battle_only' | 'is_default' | 'is_mega';

export interface PokemonV2PokemonformStddevOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformStddevPopOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformStddevSampOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformStreamCursorInput {
  initial_value: PokemonV2PokemonformStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonformStreamCursorValueInput {
  form_name?: InputMaybe<Scalars['String']['input']>;
  form_order?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_battle_only?: InputMaybe<Scalars['Boolean']['input']>;
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  is_mega?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonformSumOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformVarPopOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformVarSampOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformVarianceOrderBy {
  form_order?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonformgenerationAggregateBoolExpCount>;
}

export interface PokemonV2PokemonformgenerationAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonformgenerationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformgenerationBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonformgenerationAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonformgenerationAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonformgenerationMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonformgenerationMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonformgenerationStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonformgenerationStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonformgenerationStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonformgenerationSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonformgenerationVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonformgenerationVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonformgenerationVarianceOrderBy>;
}

export interface PokemonV2PokemonformgenerationAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonformgenerationBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonformgenerationBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonformgenerationBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_form_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformBoolExp>;
}

export interface PokemonV2PokemonformgenerationMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformOrderBy>;
}

export type PokemonV2PokemonformgenerationSelectColumn =
  | 'game_index'
  | 'generation_id'
  | 'id'
  | 'pokemon_form_id';

export interface PokemonV2PokemonformgenerationStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationStreamCursorInput {
  initial_value: PokemonV2PokemonformgenerationStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonformgenerationStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_form_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonformgenerationSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformgenerationVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonformnameAggregateBoolExpCount>;
}

export interface PokemonV2PokemonformnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonformnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonformnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonformnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonformnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonformnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonformnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonformnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonformnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonformnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonformnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonformnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonformnameVarianceOrderBy>;
}

export interface PokemonV2PokemonformnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonformnameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonformnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonformnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_form_id?: InputMaybe<IntComparisonExp>;
  pokemon_name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformBoolExp>;
}

export interface PokemonV2PokemonformnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  pokemon_name?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  pokemon_name?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  pokemon_name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformOrderBy>;
}

export type PokemonV2PokemonformnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokemon_form_id'
  | 'pokemon_name';

export interface PokemonV2PokemonformnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameStreamCursorInput {
  initial_value: PokemonV2PokemonformnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonformnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokemon_form_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2PokemonformnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonformspritesAggregateBoolExpCount>;
}

export interface PokemonV2PokemonformspritesAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonformspritesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformspritesBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonformspritesAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonformspritesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonformspritesMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonformspritesMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonformspritesStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonformspritesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonformspritesStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonformspritesSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonformspritesVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonformspritesVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonformspritesVarianceOrderBy>;
}

export interface PokemonV2PokemonformspritesAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonformspritesBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonformspritesBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonformspritesBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_form_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformBoolExp>;
  sprites?: InputMaybe<JsonbComparisonExp>;
}

export interface PokemonV2PokemonformspritesMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesMinOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformOrderBy>;
  sprites?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonformspritesSelectColumn =
  | 'id'
  | 'pokemon_form_id'
  | 'sprites';

export interface PokemonV2PokemonformspritesStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesStreamCursorInput {
  initial_value: PokemonV2PokemonformspritesStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonformspritesStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_form_id?: InputMaybe<Scalars['Int']['input']>;
  sprites?: InputMaybe<Scalars['jsonb']['input']>;
}

export interface PokemonV2PokemonformspritesSumOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformspritesVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonformtypeAggregateBoolExpCount>;
}

export interface PokemonV2PokemonformtypeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonformtypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonformtypeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonformtypeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonformtypeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonformtypeMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonformtypeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonformtypeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonformtypeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonformtypeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonformtypeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonformtypeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonformtypeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonformtypeVarianceOrderBy>;
}

export interface PokemonV2PokemonformtypeAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonformtypeBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonformtypeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonformtypeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_form_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  slot?: InputMaybe<IntComparisonExp>;
  type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonformtypeMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeMinOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemonform?: InputMaybe<PokemonV2PokemonformOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonformtypeSelectColumn =
  | 'id'
  | 'pokemon_form_id'
  | 'slot'
  | 'type_id';

export interface PokemonV2PokemonformtypeStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeStreamCursorInput {
  initial_value: PokemonV2PokemonformtypeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonformtypeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_form_id?: InputMaybe<Scalars['Int']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonformtypeSumOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonformtypeVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_form_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemongameindexAggregateBoolExpCount>;
}

export interface PokemonV2PokemongameindexAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemongameindexSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemongameindexBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemongameindexAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemongameindexAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemongameindexMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemongameindexMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemongameindexStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemongameindexStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemongameindexStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemongameindexSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemongameindexVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemongameindexVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemongameindexVarianceOrderBy>;
}

export interface PokemonV2PokemongameindexAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemongameindexBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemongameindexBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemongameindexBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionBoolExp>;
  version_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemongameindexMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionOrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemongameindexSelectColumn =
  | 'game_index'
  | 'id'
  | 'pokemon_id'
  | 'version_id';

export interface PokemonV2PokemongameindexStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexStreamCursorInput {
  initial_value: PokemonV2PokemongameindexStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemongameindexStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  version_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemongameindexSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemongameindexVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonhabitatBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonhabitatBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonhabitatBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_pokemonhabitatnames?: InputMaybe<PokemonV2PokemonhabitatnameBoolExp>;
  pokemon_v2_pokemonhabitatnames_aggregate?: InputMaybe<PokemonV2PokemonhabitatnameAggregateBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
}

export interface PokemonV2PokemonhabitatOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_pokemonhabitatnames_aggregate?: InputMaybe<PokemonV2PokemonhabitatnameAggregateOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
}

export type PokemonV2PokemonhabitatSelectColumn = 'id' | 'name';

export interface PokemonV2PokemonhabitatStreamCursorInput {
  initial_value: PokemonV2PokemonhabitatStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonhabitatStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2PokemonhabitatnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonhabitatnameAggregateBoolExpCount>;
}

export interface PokemonV2PokemonhabitatnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonhabitatnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonhabitatnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonhabitatnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonhabitatnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonhabitatnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonhabitatnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonhabitatnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonhabitatnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonhabitatnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonhabitatnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonhabitatnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonhabitatnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonhabitatnameVarianceOrderBy>;
}

export interface PokemonV2PokemonhabitatnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonhabitatnameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonhabitatnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonhabitatnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_habitat_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemonhabitat?: InputMaybe<PokemonV2PokemonhabitatBoolExp>;
}

export interface PokemonV2PokemonhabitatnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemonhabitat?: InputMaybe<PokemonV2PokemonhabitatOrderBy>;
}

export type PokemonV2PokemonhabitatnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokemon_habitat_id';

export interface PokemonV2PokemonhabitatnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameStreamCursorInput {
  initial_value: PokemonV2PokemonhabitatnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonhabitatnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokemon_habitat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonhabitatnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonhabitatnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonitemAggregateBoolExpCount>;
}

export interface PokemonV2PokemonitemAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonitemSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonitemBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonitemAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonitemAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonitemMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonitemMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonitemStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonitemStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonitemStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonitemSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonitemVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonitemVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonitemVarianceOrderBy>;
}

export interface PokemonV2PokemonitemAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonitemBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonitemBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonitemBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  item_id?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemBoolExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionBoolExp>;
  rarity?: InputMaybe<IntComparisonExp>;
  version_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonitemMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemMinOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_item?: InputMaybe<PokemonV2ItemOrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionOrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonitemSelectColumn =
  | 'id'
  | 'item_id'
  | 'pokemon_id'
  | 'rarity'
  | 'version_id';

export interface PokemonV2PokemonitemStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemStreamCursorInput {
  initial_value: PokemonV2PokemonitemStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonitemStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  item_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  rarity?: InputMaybe<Scalars['Int']['input']>;
  version_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonitemSumOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonitemVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  item_id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  rarity?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonmoveAggregateBoolExpCount>;
}

export interface PokemonV2PokemonmoveAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonmoveSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonmoveBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonmoveAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonmoveAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonmoveMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonmoveMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonmoveStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonmoveStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonmoveStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonmoveSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonmoveVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonmoveVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonmoveVarianceOrderBy>;
}

export interface PokemonV2PokemonmoveAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonmoveBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonmoveBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonmoveBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  level?: InputMaybe<IntComparisonExp>;
  move_id?: InputMaybe<IntComparisonExp>;
  move_learn_method_id?: InputMaybe<IntComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodBoolExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonmoveMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveMinOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodOrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonmoveSelectColumn =
  | 'id'
  | 'level'
  | 'move_id'
  | 'move_learn_method_id'
  | 'order'
  | 'pokemon_id'
  | 'version_group_id';

export interface PokemonV2PokemonmoveStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveStreamCursorInput {
  initial_value: PokemonV2PokemonmoveStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonmoveStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  move_id?: InputMaybe<Scalars['Int']['input']>;
  move_learn_method_id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonmoveSumOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonmoveVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  move_id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapeBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonshapeBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonshapeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonshapeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_pokemonshapenames?: InputMaybe<PokemonV2PokemonshapenameBoolExp>;
  pokemon_v2_pokemonshapenames_aggregate?: InputMaybe<PokemonV2PokemonshapenameAggregateBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
}

export interface PokemonV2PokemonshapeOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_pokemonshapenames_aggregate?: InputMaybe<PokemonV2PokemonshapenameAggregateOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
}

export type PokemonV2PokemonshapeSelectColumn = 'id' | 'name';

export interface PokemonV2PokemonshapeStreamCursorInput {
  initial_value: PokemonV2PokemonshapeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonshapeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2PokemonshapenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonshapenameAggregateBoolExpCount>;
}

export interface PokemonV2PokemonshapenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonshapenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonshapenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonshapenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonshapenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonshapenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonshapenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonshapenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonshapenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonshapenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonshapenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonshapenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonshapenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonshapenameVarianceOrderBy>;
}

export interface PokemonV2PokemonshapenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonshapenameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonshapenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonshapenameBoolExp>>;
  awesome_name?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_shape_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemonshape?: InputMaybe<PokemonV2PokemonshapeBoolExp>;
}

export interface PokemonV2PokemonshapenameMaxOrderBy {
  awesome_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameMinOrderBy {
  awesome_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameOrderBy {
  awesome_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemonshape?: InputMaybe<PokemonV2PokemonshapeOrderBy>;
}

export type PokemonV2PokemonshapenameSelectColumn =
  | 'awesome_name'
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokemon_shape_id';

export interface PokemonV2PokemonshapenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameStreamCursorInput {
  initial_value: PokemonV2PokemonshapenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonshapenameStreamCursorValueInput {
  awesome_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokemon_shape_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonshapenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonshapenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExpCount>;
}

export interface PokemonV2PokemonspeciesAggregateBoolExpBoolAnd {
  arguments: PokemonV2PokemonspeciesSelectColumnPokemonV2PokemonspeciesAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonspeciesAggregateBoolExpBoolOr {
  arguments: PokemonV2PokemonspeciesSelectColumnPokemonV2PokemonspeciesAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2PokemonspeciesAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonspeciesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonspeciesAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonspeciesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonspeciesMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonspeciesMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonspeciesStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonspeciesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonspeciesStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonspeciesSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonspeciesVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonspeciesVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonspeciesVarianceOrderBy>;
}

export interface PokemonV2PokemonspeciesAvgOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonspeciesBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonspeciesBoolExp>>;
  base_happiness?: InputMaybe<IntComparisonExp>;
  capture_rate?: InputMaybe<IntComparisonExp>;
  evolution_chain_id?: InputMaybe<IntComparisonExp>;
  evolves_from_species_id?: InputMaybe<IntComparisonExp>;
  forms_switchable?: InputMaybe<BooleanComparisonExp>;
  gender_rate?: InputMaybe<IntComparisonExp>;
  generation_id?: InputMaybe<IntComparisonExp>;
  growth_rate_id?: InputMaybe<IntComparisonExp>;
  has_gender_differences?: InputMaybe<BooleanComparisonExp>;
  hatch_counter?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_baby?: InputMaybe<BooleanComparisonExp>;
  is_legendary?: InputMaybe<BooleanComparisonExp>;
  is_mythical?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemonV2PokemonevolutionsByPartySpeciesId?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemonV2PokemonevolutionsByPartySpeciesId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemonV2PokemonevolutionsByTradeSpeciesId?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_color_id?: InputMaybe<IntComparisonExp>;
  pokemon_habitat_id?: InputMaybe<IntComparisonExp>;
  pokemon_shape_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_evolutionchain?: InputMaybe<PokemonV2EvolutionchainBoolExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateBoolExp>;
  pokemon_v2_palparks?: InputMaybe<PokemonV2PalparkBoolExp>;
  pokemon_v2_palparks_aggregate?: InputMaybe<PokemonV2PalparkAggregateBoolExp>;
  pokemon_v2_pokemoncolor?: InputMaybe<PokemonV2PokemoncolorBoolExp>;
  pokemon_v2_pokemondexnumbers?: InputMaybe<PokemonV2PokemondexnumberBoolExp>;
  pokemon_v2_pokemondexnumbers_aggregate?: InputMaybe<PokemonV2PokemondexnumberAggregateBoolExp>;
  pokemon_v2_pokemonegggroups?: InputMaybe<PokemonV2PokemonegggroupBoolExp>;
  pokemon_v2_pokemonegggroups_aggregate?: InputMaybe<PokemonV2PokemonegggroupAggregateBoolExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_v2_pokemonhabitat?: InputMaybe<PokemonV2PokemonhabitatBoolExp>;
  pokemon_v2_pokemons?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_pokemons_aggregate?: InputMaybe<PokemonV2PokemonAggregateBoolExp>;
  pokemon_v2_pokemonshape?: InputMaybe<PokemonV2PokemonshapeBoolExp>;
  pokemon_v2_pokemonspecies?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateBoolExp>;
  pokemon_v2_pokemonspeciesdescriptions?: InputMaybe<PokemonV2PokemonspeciesdescriptionBoolExp>;
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: InputMaybe<PokemonV2PokemonspeciesdescriptionAggregateBoolExp>;
  pokemon_v2_pokemonspeciesflavortexts?: InputMaybe<PokemonV2PokemonspeciesflavortextBoolExp>;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateBoolExp>;
  pokemon_v2_pokemonspeciesnames?: InputMaybe<PokemonV2PokemonspeciesnameBoolExp>;
  pokemon_v2_pokemonspeciesnames_aggregate?: InputMaybe<PokemonV2PokemonspeciesnameAggregateBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
}

export interface PokemonV2PokemonspeciesMaxOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesMinOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  forms_switchable?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  has_gender_differences?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_baby?: InputMaybe<OrderBy>;
  is_legendary?: InputMaybe<OrderBy>;
  is_mythical?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemonV2PokemonevolutionsByPartySpeciesId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemonV2PokemonevolutionsByTradeSpeciesId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
  pokemon_v2_evolutionchain?: InputMaybe<PokemonV2EvolutionchainOrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_growthrate?: InputMaybe<PokemonV2GrowthrateOrderBy>;
  pokemon_v2_palparks_aggregate?: InputMaybe<PokemonV2PalparkAggregateOrderBy>;
  pokemon_v2_pokemoncolor?: InputMaybe<PokemonV2PokemoncolorOrderBy>;
  pokemon_v2_pokemondexnumbers_aggregate?: InputMaybe<PokemonV2PokemondexnumberAggregateOrderBy>;
  pokemon_v2_pokemonegggroups_aggregate?: InputMaybe<PokemonV2PokemonegggroupAggregateOrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_v2_pokemonhabitat?: InputMaybe<PokemonV2PokemonhabitatOrderBy>;
  pokemon_v2_pokemons_aggregate?: InputMaybe<PokemonV2PokemonAggregateOrderBy>;
  pokemon_v2_pokemonshape?: InputMaybe<PokemonV2PokemonshapeOrderBy>;
  pokemon_v2_pokemonspecies_aggregate?: InputMaybe<PokemonV2PokemonspeciesAggregateOrderBy>;
  pokemon_v2_pokemonspeciesdescriptions_aggregate?: InputMaybe<PokemonV2PokemonspeciesdescriptionAggregateOrderBy>;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateOrderBy>;
  pokemon_v2_pokemonspeciesnames_aggregate?: InputMaybe<PokemonV2PokemonspeciesnameAggregateOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
}

export type PokemonV2PokemonspeciesSelectColumn =
  | 'base_happiness'
  | 'capture_rate'
  | 'evolution_chain_id'
  | 'evolves_from_species_id'
  | 'forms_switchable'
  | 'gender_rate'
  | 'generation_id'
  | 'growth_rate_id'
  | 'has_gender_differences'
  | 'hatch_counter'
  | 'id'
  | 'is_baby'
  | 'is_legendary'
  | 'is_mythical'
  | 'name'
  | 'order'
  | 'pokemon_color_id'
  | 'pokemon_habitat_id'
  | 'pokemon_shape_id';

export type PokemonV2PokemonspeciesSelectColumnPokemonV2PokemonspeciesAggregateBoolExpBoolAndArgumentsColumns =

    | 'forms_switchable'
    | 'has_gender_differences'
    | 'is_baby'
    | 'is_legendary'
    | 'is_mythical';

export type PokemonV2PokemonspeciesSelectColumnPokemonV2PokemonspeciesAggregateBoolExpBoolOrArgumentsColumns =

    | 'forms_switchable'
    | 'has_gender_differences'
    | 'is_baby'
    | 'is_legendary'
    | 'is_mythical';

export interface PokemonV2PokemonspeciesStddevOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesStddevPopOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesStddevSampOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesStreamCursorInput {
  initial_value: PokemonV2PokemonspeciesStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonspeciesStreamCursorValueInput {
  base_happiness?: InputMaybe<Scalars['Int']['input']>;
  capture_rate?: InputMaybe<Scalars['Int']['input']>;
  evolution_chain_id?: InputMaybe<Scalars['Int']['input']>;
  evolves_from_species_id?: InputMaybe<Scalars['Int']['input']>;
  forms_switchable?: InputMaybe<Scalars['Boolean']['input']>;
  gender_rate?: InputMaybe<Scalars['Int']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  growth_rate_id?: InputMaybe<Scalars['Int']['input']>;
  has_gender_differences?: InputMaybe<Scalars['Boolean']['input']>;
  hatch_counter?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_baby?: InputMaybe<Scalars['Boolean']['input']>;
  is_legendary?: InputMaybe<Scalars['Boolean']['input']>;
  is_mythical?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  pokemon_color_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_habitat_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_shape_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonspeciesSumOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesVarPopOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesVarSampOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesVarianceOrderBy {
  base_happiness?: InputMaybe<OrderBy>;
  capture_rate?: InputMaybe<OrderBy>;
  evolution_chain_id?: InputMaybe<OrderBy>;
  evolves_from_species_id?: InputMaybe<OrderBy>;
  gender_rate?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  growth_rate_id?: InputMaybe<OrderBy>;
  hatch_counter?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_color_id?: InputMaybe<OrderBy>;
  pokemon_habitat_id?: InputMaybe<OrderBy>;
  pokemon_shape_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonspeciesdescriptionAggregateBoolExpCount>;
}

export interface PokemonV2PokemonspeciesdescriptionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonspeciesdescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspeciesdescriptionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonspeciesdescriptionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonspeciesdescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonspeciesdescriptionMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonspeciesdescriptionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonspeciesdescriptionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonspeciesdescriptionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonspeciesdescriptionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonspeciesdescriptionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonspeciesdescriptionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonspeciesdescriptionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonspeciesdescriptionVarianceOrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonspeciesdescriptionBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonspeciesdescriptionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonspeciesdescriptionBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
}

export interface PokemonV2PokemonspeciesdescriptionMaxOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionMinOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionOrderBy {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
}

export type PokemonV2PokemonspeciesdescriptionSelectColumn =
  | 'description'
  | 'id'
  | 'language_id'
  | 'pokemon_species_id';

export interface PokemonV2PokemonspeciesdescriptionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionStreamCursorInput {
  initial_value: PokemonV2PokemonspeciesdescriptionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonspeciesdescriptionStreamCursorValueInput {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonspeciesdescriptionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesdescriptionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateBoolExpCount>;
}

export interface PokemonV2PokemonspeciesflavortextAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonspeciesflavortextSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspeciesflavortextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonspeciesflavortextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonspeciesflavortextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonspeciesflavortextMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonspeciesflavortextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonspeciesflavortextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonspeciesflavortextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonspeciesflavortextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonspeciesflavortextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonspeciesflavortextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonspeciesflavortextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonspeciesflavortextVarianceOrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonspeciesflavortextBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonspeciesflavortextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonspeciesflavortextBoolExp>>;
  flavor_text?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionBoolExp>;
  version_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonspeciesflavortextMaxOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextMinOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionOrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonspeciesflavortextSelectColumn =
  | 'flavor_text'
  | 'id'
  | 'language_id'
  | 'pokemon_species_id'
  | 'version_id';

export interface PokemonV2PokemonspeciesflavortextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextStreamCursorInput {
  initial_value: PokemonV2PokemonspeciesflavortextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonspeciesflavortextStreamCursorValueInput {
  flavor_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
  version_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonspeciesflavortextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesflavortextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonspeciesnameAggregateBoolExpCount>;
}

export interface PokemonV2PokemonspeciesnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonspeciesnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspeciesnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonspeciesnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonspeciesnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonspeciesnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonspeciesnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonspeciesnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonspeciesnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonspeciesnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonspeciesnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonspeciesnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonspeciesnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonspeciesnameVarianceOrderBy>;
}

export interface PokemonV2PokemonspeciesnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonspeciesnameBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonspeciesnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonspeciesnameBoolExp>>;
  genus?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_species_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesBoolExp>;
}

export interface PokemonV2PokemonspeciesnameMaxOrderBy {
  genus?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameMinOrderBy {
  genus?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameOrderBy {
  genus?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_pokemonspecy?: InputMaybe<PokemonV2PokemonspeciesOrderBy>;
}

export type PokemonV2PokemonspeciesnameSelectColumn =
  | 'genus'
  | 'id'
  | 'language_id'
  | 'name'
  | 'pokemon_species_id';

export interface PokemonV2PokemonspeciesnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameStreamCursorInput {
  initial_value: PokemonV2PokemonspeciesnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonspeciesnameStreamCursorValueInput {
  genus?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pokemon_species_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonspeciesnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspeciesnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_species_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonspritesAggregateBoolExpCount>;
}

export interface PokemonV2PokemonspritesAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonspritesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonspritesBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonspritesAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonspritesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonspritesMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonspritesMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonspritesStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonspritesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonspritesStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonspritesSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonspritesVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonspritesVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonspritesVarianceOrderBy>;
}

export interface PokemonV2PokemonspritesAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonspritesBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonspritesBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonspritesBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  sprites?: InputMaybe<JsonbComparisonExp>;
}

export interface PokemonV2PokemonspritesMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesMinOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  sprites?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonspritesSelectColumn =
  | 'id'
  | 'pokemon_id'
  | 'sprites';

export interface PokemonV2PokemonspritesStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesStreamCursorInput {
  initial_value: PokemonV2PokemonspritesStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonspritesStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  sprites?: InputMaybe<Scalars['jsonb']['input']>;
}

export interface PokemonV2PokemonspritesSumOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonspritesVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemonstatAggregateBoolExpCount>;
}

export interface PokemonV2PokemonstatAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemonstatSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemonstatBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemonstatAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemonstatAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemonstatMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemonstatMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemonstatStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemonstatStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemonstatStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemonstatSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemonstatVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemonstatVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemonstatVarianceOrderBy>;
}

export interface PokemonV2PokemonstatAvgOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemonstatBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemonstatBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemonstatBoolExp>>;
  base_stat?: InputMaybe<IntComparisonExp>;
  effort?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatBoolExp>;
  stat_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemonstatMaxOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatMinOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatOrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemonstatSelectColumn =
  | 'base_stat'
  | 'effort'
  | 'id'
  | 'pokemon_id'
  | 'stat_id';

export interface PokemonV2PokemonstatStddevOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatStddevPopOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatStddevSampOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatStreamCursorInput {
  initial_value: PokemonV2PokemonstatStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemonstatStreamCursorValueInput {
  base_stat?: InputMaybe<Scalars['Int']['input']>;
  effort?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  stat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemonstatSumOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatVarPopOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatVarSampOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemonstatVarianceOrderBy {
  base_stat?: InputMaybe<OrderBy>;
  effort?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemontypeAggregateBoolExpCount>;
}

export interface PokemonV2PokemontypeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemontypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemontypeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemontypeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemontypeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemontypeMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemontypeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemontypeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemontypeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemontypeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemontypeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemontypeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemontypeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemontypeVarianceOrderBy>;
}

export interface PokemonV2PokemontypeAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemontypeBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemontypeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemontypeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  slot?: InputMaybe<IntComparisonExp>;
  type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemontypeMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeMinOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemontypeSelectColumn =
  | 'id'
  | 'pokemon_id'
  | 'slot'
  | 'type_id';

export interface PokemonV2PokemontypeStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeStreamCursorInput {
  initial_value: PokemonV2PokemontypeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemontypeStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemontypeSumOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypeVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastAggregateBoolExp {
  count?: InputMaybe<PokemonV2PokemontypepastAggregateBoolExpCount>;
}

export interface PokemonV2PokemontypepastAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2PokemontypepastSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2PokemontypepastBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2PokemontypepastAggregateOrderBy {
  avg?: InputMaybe<PokemonV2PokemontypepastAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2PokemontypepastMaxOrderBy>;
  min?: InputMaybe<PokemonV2PokemontypepastMinOrderBy>;
  stddev?: InputMaybe<PokemonV2PokemontypepastStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2PokemontypepastStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2PokemontypepastStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2PokemontypepastSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2PokemontypepastVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2PokemontypepastVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2PokemontypepastVarianceOrderBy>;
}

export interface PokemonV2PokemontypepastAvgOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastBoolExp {
  _and?: InputMaybe<Array<PokemonV2PokemontypepastBoolExp>>;
  _not?: InputMaybe<PokemonV2PokemontypepastBoolExp>;
  _or?: InputMaybe<Array<PokemonV2PokemontypepastBoolExp>>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  slot?: InputMaybe<IntComparisonExp>;
  type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2PokemontypepastMaxOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastMinOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_pokemon?: InputMaybe<PokemonV2PokemonOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2PokemontypepastSelectColumn =
  | 'generation_id'
  | 'id'
  | 'pokemon_id'
  | 'slot'
  | 'type_id';

export interface PokemonV2PokemontypepastStddevOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastStddevPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastStddevSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastStreamCursorInput {
  initial_value: PokemonV2PokemontypepastStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2PokemontypepastStreamCursorValueInput {
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  pokemon_id?: InputMaybe<Scalars['Int']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2PokemontypepastSumOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastVarPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastVarSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2PokemontypepastVarianceOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_id?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionBoolExp {
  _and?: InputMaybe<Array<PokemonV2RegionBoolExp>>;
  _not?: InputMaybe<PokemonV2RegionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2RegionBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_generations?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_generations_aggregate?: InputMaybe<PokemonV2GenerationAggregateBoolExp>;
  pokemon_v2_locations?: InputMaybe<PokemonV2LocationBoolExp>;
  pokemon_v2_locations_aggregate?: InputMaybe<PokemonV2LocationAggregateBoolExp>;
  pokemon_v2_pokedexes?: InputMaybe<PokemonV2PokedexBoolExp>;
  pokemon_v2_pokedexes_aggregate?: InputMaybe<PokemonV2PokedexAggregateBoolExp>;
  pokemon_v2_regionnames?: InputMaybe<PokemonV2RegionnameBoolExp>;
  pokemon_v2_regionnames_aggregate?: InputMaybe<PokemonV2RegionnameAggregateBoolExp>;
  pokemon_v2_versiongroupregions?: InputMaybe<PokemonV2VersiongroupregionBoolExp>;
  pokemon_v2_versiongroupregions_aggregate?: InputMaybe<PokemonV2VersiongroupregionAggregateBoolExp>;
}

export interface PokemonV2RegionOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_generations_aggregate?: InputMaybe<PokemonV2GenerationAggregateOrderBy>;
  pokemon_v2_locations_aggregate?: InputMaybe<PokemonV2LocationAggregateOrderBy>;
  pokemon_v2_pokedexes_aggregate?: InputMaybe<PokemonV2PokedexAggregateOrderBy>;
  pokemon_v2_regionnames_aggregate?: InputMaybe<PokemonV2RegionnameAggregateOrderBy>;
  pokemon_v2_versiongroupregions_aggregate?: InputMaybe<PokemonV2VersiongroupregionAggregateOrderBy>;
}

export type PokemonV2RegionSelectColumn = 'id' | 'name';

export interface PokemonV2RegionStreamCursorInput {
  initial_value: PokemonV2RegionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2RegionStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2RegionnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2RegionnameAggregateBoolExpCount>;
}

export interface PokemonV2RegionnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2RegionnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2RegionnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2RegionnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2RegionnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2RegionnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2RegionnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2RegionnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2RegionnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2RegionnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2RegionnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2RegionnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2RegionnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2RegionnameVarianceOrderBy>;
}

export interface PokemonV2RegionnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2RegionnameBoolExp>>;
  _not?: InputMaybe<PokemonV2RegionnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2RegionnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionBoolExp>;
  region_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2RegionnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionOrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export type PokemonV2RegionnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'region_id';

export interface PokemonV2RegionnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameStreamCursorInput {
  initial_value: PokemonV2RegionnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2RegionnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2RegionnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2RegionnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatAggregateBoolExp {
  bool_and?: InputMaybe<PokemonV2StatAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<PokemonV2StatAggregateBoolExpBoolOr>;
  count?: InputMaybe<PokemonV2StatAggregateBoolExpCount>;
}

export interface PokemonV2StatAggregateBoolExpBoolAnd {
  arguments: PokemonV2StatSelectColumnPokemonV2StatAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2StatBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2StatAggregateBoolExpBoolOr {
  arguments: PokemonV2StatSelectColumnPokemonV2StatAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2StatBoolExp>;
  predicate: BooleanComparisonExp;
}

export interface PokemonV2StatAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2StatSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2StatBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2StatAggregateOrderBy {
  avg?: InputMaybe<PokemonV2StatAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2StatMaxOrderBy>;
  min?: InputMaybe<PokemonV2StatMinOrderBy>;
  stddev?: InputMaybe<PokemonV2StatStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2StatStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2StatStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2StatSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2StatVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2StatVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2StatVarianceOrderBy>;
}

export interface PokemonV2StatAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatBoolExp {
  _and?: InputMaybe<Array<PokemonV2StatBoolExp>>;
  _not?: InputMaybe<PokemonV2StatBoolExp>;
  _or?: InputMaybe<Array<PokemonV2StatBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  is_battle_only?: InputMaybe<BooleanComparisonExp>;
  move_damage_class_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2NaturesByIncreasedStatId?: InputMaybe<PokemonV2NatureBoolExp>;
  pokemonV2NaturesByIncreasedStatId_aggregate?: InputMaybe<PokemonV2NatureAggregateBoolExp>;
  pokemon_v2_characteristics?: InputMaybe<PokemonV2CharacteristicBoolExp>;
  pokemon_v2_characteristics_aggregate?: InputMaybe<PokemonV2CharacteristicAggregateBoolExp>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassBoolExp>;
  pokemon_v2_movemetastatchanges?: InputMaybe<PokemonV2MovemetastatchangeBoolExp>;
  pokemon_v2_movemetastatchanges_aggregate?: InputMaybe<PokemonV2MovemetastatchangeAggregateBoolExp>;
  pokemon_v2_natures?: InputMaybe<PokemonV2NatureBoolExp>;
  pokemon_v2_natures_aggregate?: InputMaybe<PokemonV2NatureAggregateBoolExp>;
  pokemon_v2_pokemonstats?: InputMaybe<PokemonV2PokemonstatBoolExp>;
  pokemon_v2_pokemonstats_aggregate?: InputMaybe<PokemonV2PokemonstatAggregateBoolExp>;
  pokemon_v2_statnames?: InputMaybe<PokemonV2StatnameBoolExp>;
  pokemon_v2_statnames_aggregate?: InputMaybe<PokemonV2StatnameAggregateBoolExp>;
}

export interface PokemonV2StatMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  is_battle_only?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2NaturesByIncreasedStatId_aggregate?: InputMaybe<PokemonV2NatureAggregateOrderBy>;
  pokemon_v2_characteristics_aggregate?: InputMaybe<PokemonV2CharacteristicAggregateOrderBy>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassOrderBy>;
  pokemon_v2_movemetastatchanges_aggregate?: InputMaybe<PokemonV2MovemetastatchangeAggregateOrderBy>;
  pokemon_v2_natures_aggregate?: InputMaybe<PokemonV2NatureAggregateOrderBy>;
  pokemon_v2_pokemonstats_aggregate?: InputMaybe<PokemonV2PokemonstatAggregateOrderBy>;
  pokemon_v2_statnames_aggregate?: InputMaybe<PokemonV2StatnameAggregateOrderBy>;
}

export type PokemonV2StatSelectColumn =
  | 'game_index'
  | 'id'
  | 'is_battle_only'
  | 'move_damage_class_id'
  | 'name';

export type PokemonV2StatSelectColumnPokemonV2StatAggregateBoolExpBoolAndArgumentsColumns =
  'is_battle_only';

export type PokemonV2StatSelectColumnPokemonV2StatAggregateBoolExpBoolOrArgumentsColumns =
  'is_battle_only';

export interface PokemonV2StatStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatStreamCursorInput {
  initial_value: PokemonV2StatStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2StatStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_battle_only?: InputMaybe<Scalars['Boolean']['input']>;
  move_damage_class_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2StatSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2StatnameAggregateBoolExpCount>;
}

export interface PokemonV2StatnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2StatnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2StatnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2StatnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2StatnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2StatnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2StatnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2StatnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2StatnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2StatnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2StatnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2StatnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2StatnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2StatnameVarianceOrderBy>;
}

export interface PokemonV2StatnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2StatnameBoolExp>>;
  _not?: InputMaybe<PokemonV2StatnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2StatnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatBoolExp>;
  stat_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2StatnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_stat?: InputMaybe<PokemonV2StatOrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export type PokemonV2StatnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'stat_id';

export interface PokemonV2StatnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameStreamCursorInput {
  initial_value: PokemonV2StatnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2StatnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stat_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2StatnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2StatnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  stat_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboAggregateBoolExp {
  count?: InputMaybe<PokemonV2SupercontestcomboAggregateBoolExpCount>;
}

export interface PokemonV2SupercontestcomboAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2SupercontestcomboSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2SupercontestcomboBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2SupercontestcomboAggregateOrderBy {
  avg?: InputMaybe<PokemonV2SupercontestcomboAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2SupercontestcomboMaxOrderBy>;
  min?: InputMaybe<PokemonV2SupercontestcomboMinOrderBy>;
  stddev?: InputMaybe<PokemonV2SupercontestcomboStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2SupercontestcomboStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2SupercontestcomboStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2SupercontestcomboSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2SupercontestcomboVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2SupercontestcomboVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2SupercontestcomboVarianceOrderBy>;
}

export interface PokemonV2SupercontestcomboAvgOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboBoolExp {
  _and?: InputMaybe<Array<PokemonV2SupercontestcomboBoolExp>>;
  _not?: InputMaybe<PokemonV2SupercontestcomboBoolExp>;
  _or?: InputMaybe<Array<PokemonV2SupercontestcomboBoolExp>>;
  first_move_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemonV2MoveBySecondMoveId?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveBoolExp>;
  second_move_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2SupercontestcomboMaxOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboMinOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemonV2MoveBySecondMoveId?: InputMaybe<PokemonV2MoveOrderBy>;
  pokemon_v2_move?: InputMaybe<PokemonV2MoveOrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export type PokemonV2SupercontestcomboSelectColumn =
  | 'first_move_id'
  | 'id'
  | 'second_move_id';

export interface PokemonV2SupercontestcomboStddevOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboStddevPopOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboStddevSampOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboStreamCursorInput {
  initial_value: PokemonV2SupercontestcomboStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2SupercontestcomboStreamCursorValueInput {
  first_move_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  second_move_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2SupercontestcomboSumOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboVarPopOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboVarSampOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontestcomboVarianceOrderBy {
  first_move_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  second_move_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectBoolExp {
  _and?: InputMaybe<Array<PokemonV2SupercontesteffectBoolExp>>;
  _not?: InputMaybe<PokemonV2SupercontesteffectBoolExp>;
  _or?: InputMaybe<Array<PokemonV2SupercontesteffectBoolExp>>;
  appeal?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
  pokemon_v2_supercontesteffectflavortexts?: InputMaybe<PokemonV2SupercontesteffectflavortextBoolExp>;
  pokemon_v2_supercontesteffectflavortexts_aggregate?: InputMaybe<PokemonV2SupercontesteffectflavortextAggregateBoolExp>;
}

export interface PokemonV2SupercontesteffectOrderBy {
  appeal?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
  pokemon_v2_supercontesteffectflavortexts_aggregate?: InputMaybe<PokemonV2SupercontesteffectflavortextAggregateOrderBy>;
}

export type PokemonV2SupercontesteffectSelectColumn = 'appeal' | 'id';

export interface PokemonV2SupercontesteffectStreamCursorInput {
  initial_value: PokemonV2SupercontesteffectStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2SupercontesteffectStreamCursorValueInput {
  appeal?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2SupercontesteffectflavortextAggregateBoolExp {
  count?: InputMaybe<PokemonV2SupercontesteffectflavortextAggregateBoolExpCount>;
}

export interface PokemonV2SupercontesteffectflavortextAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2SupercontesteffectflavortextSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2SupercontesteffectflavortextBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2SupercontesteffectflavortextAggregateOrderBy {
  avg?: InputMaybe<PokemonV2SupercontesteffectflavortextAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2SupercontesteffectflavortextMaxOrderBy>;
  min?: InputMaybe<PokemonV2SupercontesteffectflavortextMinOrderBy>;
  stddev?: InputMaybe<PokemonV2SupercontesteffectflavortextStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2SupercontesteffectflavortextStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2SupercontesteffectflavortextStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2SupercontesteffectflavortextSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2SupercontesteffectflavortextVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2SupercontesteffectflavortextVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2SupercontesteffectflavortextVarianceOrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextBoolExp {
  _and?: InputMaybe<Array<PokemonV2SupercontesteffectflavortextBoolExp>>;
  _not?: InputMaybe<PokemonV2SupercontesteffectflavortextBoolExp>;
  _or?: InputMaybe<Array<PokemonV2SupercontesteffectflavortextBoolExp>>;
  flavor_text?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_supercontesteffect?: InputMaybe<PokemonV2SupercontesteffectBoolExp>;
  super_contest_effect_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2SupercontesteffectflavortextMaxOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextMinOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextOrderBy {
  flavor_text?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_supercontesteffect?: InputMaybe<PokemonV2SupercontesteffectOrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export type PokemonV2SupercontesteffectflavortextSelectColumn =
  | 'flavor_text'
  | 'id'
  | 'language_id'
  | 'super_contest_effect_id';

export interface PokemonV2SupercontesteffectflavortextStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextStreamCursorInput {
  initial_value: PokemonV2SupercontesteffectflavortextStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2SupercontesteffectflavortextStreamCursorValueInput {
  flavor_text?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  super_contest_effect_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2SupercontesteffectflavortextSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2SupercontesteffectflavortextVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  super_contest_effect_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeAggregateBoolExp {
  count?: InputMaybe<PokemonV2TypeAggregateBoolExpCount>;
}

export interface PokemonV2TypeAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2TypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2TypeBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2TypeAggregateOrderBy {
  avg?: InputMaybe<PokemonV2TypeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2TypeMaxOrderBy>;
  min?: InputMaybe<PokemonV2TypeMinOrderBy>;
  stddev?: InputMaybe<PokemonV2TypeStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2TypeStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2TypeStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2TypeSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2TypeVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2TypeVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2TypeVarianceOrderBy>;
}

export interface PokemonV2TypeAvgOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeBoolExp {
  _and?: InputMaybe<Array<PokemonV2TypeBoolExp>>;
  _not?: InputMaybe<PokemonV2TypeBoolExp>;
  _or?: InputMaybe<Array<PokemonV2TypeBoolExp>>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  move_damage_class_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemonV2PokemonevolutionsByPartyTypeId?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemonV2PokemonevolutionsByPartyTypeId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemonV2TypeefficaciesByTargetTypeId?: InputMaybe<PokemonV2TypeefficacyBoolExp>;
  pokemonV2TypeefficaciesByTargetTypeId_aggregate?: InputMaybe<PokemonV2TypeefficacyAggregateBoolExp>;
  pokemon_v2_berries?: InputMaybe<PokemonV2BerryBoolExp>;
  pokemon_v2_berries_aggregate?: InputMaybe<PokemonV2BerryAggregateBoolExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_movechanges?: InputMaybe<PokemonV2MovechangeBoolExp>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateBoolExp>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassBoolExp>;
  pokemon_v2_moves?: InputMaybe<PokemonV2MoveBoolExp>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateBoolExp>;
  pokemon_v2_pokemonevolutions?: InputMaybe<PokemonV2PokemonevolutionBoolExp>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateBoolExp>;
  pokemon_v2_pokemonformtypes?: InputMaybe<PokemonV2PokemonformtypeBoolExp>;
  pokemon_v2_pokemonformtypes_aggregate?: InputMaybe<PokemonV2PokemonformtypeAggregateBoolExp>;
  pokemon_v2_pokemontypepasts?: InputMaybe<PokemonV2PokemontypepastBoolExp>;
  pokemon_v2_pokemontypepasts_aggregate?: InputMaybe<PokemonV2PokemontypepastAggregateBoolExp>;
  pokemon_v2_pokemontypes?: InputMaybe<PokemonV2PokemontypeBoolExp>;
  pokemon_v2_pokemontypes_aggregate?: InputMaybe<PokemonV2PokemontypeAggregateBoolExp>;
  pokemon_v2_typeefficacies?: InputMaybe<PokemonV2TypeefficacyBoolExp>;
  pokemon_v2_typeefficacies_aggregate?: InputMaybe<PokemonV2TypeefficacyAggregateBoolExp>;
  pokemon_v2_typegameindices?: InputMaybe<PokemonV2TypegameindexBoolExp>;
  pokemon_v2_typegameindices_aggregate?: InputMaybe<PokemonV2TypegameindexAggregateBoolExp>;
  pokemon_v2_typenames?: InputMaybe<PokemonV2TypenameBoolExp>;
  pokemon_v2_typenames_aggregate?: InputMaybe<PokemonV2TypenameAggregateBoolExp>;
}

export interface PokemonV2TypeMaxOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeMinOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemonV2PokemonevolutionsByPartyTypeId_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemonV2TypeefficaciesByTargetTypeId_aggregate?: InputMaybe<PokemonV2TypeefficacyAggregateOrderBy>;
  pokemon_v2_berries_aggregate?: InputMaybe<PokemonV2BerryAggregateOrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateOrderBy>;
  pokemon_v2_movedamageclass?: InputMaybe<PokemonV2MovedamageclassOrderBy>;
  pokemon_v2_moves_aggregate?: InputMaybe<PokemonV2MoveAggregateOrderBy>;
  pokemon_v2_pokemonevolutions_aggregate?: InputMaybe<PokemonV2PokemonevolutionAggregateOrderBy>;
  pokemon_v2_pokemonformtypes_aggregate?: InputMaybe<PokemonV2PokemonformtypeAggregateOrderBy>;
  pokemon_v2_pokemontypepasts_aggregate?: InputMaybe<PokemonV2PokemontypepastAggregateOrderBy>;
  pokemon_v2_pokemontypes_aggregate?: InputMaybe<PokemonV2PokemontypeAggregateOrderBy>;
  pokemon_v2_typeefficacies_aggregate?: InputMaybe<PokemonV2TypeefficacyAggregateOrderBy>;
  pokemon_v2_typegameindices_aggregate?: InputMaybe<PokemonV2TypegameindexAggregateOrderBy>;
  pokemon_v2_typenames_aggregate?: InputMaybe<PokemonV2TypenameAggregateOrderBy>;
}

export type PokemonV2TypeSelectColumn =
  | 'generation_id'
  | 'id'
  | 'move_damage_class_id'
  | 'name';

export interface PokemonV2TypeStddevOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeStddevPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeStddevSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeStreamCursorInput {
  initial_value: PokemonV2TypeStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2TypeStreamCursorValueInput {
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  move_damage_class_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface PokemonV2TypeSumOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeVarPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeVarSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeVarianceOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  move_damage_class_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyAggregateBoolExp {
  count?: InputMaybe<PokemonV2TypeefficacyAggregateBoolExpCount>;
}

export interface PokemonV2TypeefficacyAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2TypeefficacySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2TypeefficacyBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2TypeefficacyAggregateOrderBy {
  avg?: InputMaybe<PokemonV2TypeefficacyAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2TypeefficacyMaxOrderBy>;
  min?: InputMaybe<PokemonV2TypeefficacyMinOrderBy>;
  stddev?: InputMaybe<PokemonV2TypeefficacyStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2TypeefficacyStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2TypeefficacyStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2TypeefficacySumOrderBy>;
  var_pop?: InputMaybe<PokemonV2TypeefficacyVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2TypeefficacyVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2TypeefficacyVarianceOrderBy>;
}

export interface PokemonV2TypeefficacyAvgOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyBoolExp {
  _and?: InputMaybe<Array<PokemonV2TypeefficacyBoolExp>>;
  _not?: InputMaybe<PokemonV2TypeefficacyBoolExp>;
  _or?: InputMaybe<Array<PokemonV2TypeefficacyBoolExp>>;
  damage_factor?: InputMaybe<IntComparisonExp>;
  damage_type_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemonV2TypeByTargetTypeId?: InputMaybe<PokemonV2TypeBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  target_type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2TypeefficacyMaxOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyMinOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemonV2TypeByTargetTypeId?: InputMaybe<PokemonV2TypeOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2TypeefficacySelectColumn =
  | 'damage_factor'
  | 'damage_type_id'
  | 'id'
  | 'target_type_id';

export interface PokemonV2TypeefficacyStddevOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyStddevPopOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyStddevSampOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyStreamCursorInput {
  initial_value: PokemonV2TypeefficacyStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2TypeefficacyStreamCursorValueInput {
  damage_factor?: InputMaybe<Scalars['Int']['input']>;
  damage_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  target_type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2TypeefficacySumOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyVarPopOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyVarSampOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypeefficacyVarianceOrderBy {
  damage_factor?: InputMaybe<OrderBy>;
  damage_type_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  target_type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexAggregateBoolExp {
  count?: InputMaybe<PokemonV2TypegameindexAggregateBoolExpCount>;
}

export interface PokemonV2TypegameindexAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2TypegameindexSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2TypegameindexBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2TypegameindexAggregateOrderBy {
  avg?: InputMaybe<PokemonV2TypegameindexAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2TypegameindexMaxOrderBy>;
  min?: InputMaybe<PokemonV2TypegameindexMinOrderBy>;
  stddev?: InputMaybe<PokemonV2TypegameindexStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2TypegameindexStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2TypegameindexStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2TypegameindexSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2TypegameindexVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2TypegameindexVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2TypegameindexVarianceOrderBy>;
}

export interface PokemonV2TypegameindexAvgOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexBoolExp {
  _and?: InputMaybe<Array<PokemonV2TypegameindexBoolExp>>;
  _not?: InputMaybe<PokemonV2TypegameindexBoolExp>;
  _or?: InputMaybe<Array<PokemonV2TypegameindexBoolExp>>;
  game_index?: InputMaybe<IntComparisonExp>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2TypegameindexMaxOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexMinOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2TypegameindexSelectColumn =
  | 'game_index'
  | 'generation_id'
  | 'id'
  | 'type_id';

export interface PokemonV2TypegameindexStddevOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexStddevPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexStddevSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexStreamCursorInput {
  initial_value: PokemonV2TypegameindexStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2TypegameindexStreamCursorValueInput {
  game_index?: InputMaybe<Scalars['Int']['input']>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2TypegameindexSumOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexVarPopOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexVarSampOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypegameindexVarianceOrderBy {
  game_index?: InputMaybe<OrderBy>;
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameAggregateBoolExp {
  count?: InputMaybe<PokemonV2TypenameAggregateBoolExpCount>;
}

export interface PokemonV2TypenameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2TypenameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2TypenameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2TypenameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2TypenameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2TypenameMaxOrderBy>;
  min?: InputMaybe<PokemonV2TypenameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2TypenameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2TypenameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2TypenameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2TypenameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2TypenameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2TypenameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2TypenameVarianceOrderBy>;
}

export interface PokemonV2TypenameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameBoolExp {
  _and?: InputMaybe<Array<PokemonV2TypenameBoolExp>>;
  _not?: InputMaybe<PokemonV2TypenameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2TypenameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeBoolExp>;
  type_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2TypenameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_type?: InputMaybe<PokemonV2TypeOrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export type PokemonV2TypenameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'type_id';

export interface PokemonV2TypenameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameStreamCursorInput {
  initial_value: PokemonV2TypenameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2TypenameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2TypenameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2TypenameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  type_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionAggregateBoolExp {
  count?: InputMaybe<PokemonV2VersionAggregateBoolExpCount>;
}

export interface PokemonV2VersionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2VersionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2VersionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2VersionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2VersionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2VersionMaxOrderBy>;
  min?: InputMaybe<PokemonV2VersionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2VersionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2VersionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2VersionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2VersionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2VersionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2VersionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2VersionVarianceOrderBy>;
}

export interface PokemonV2VersionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionBoolExp {
  _and?: InputMaybe<Array<PokemonV2VersionBoolExp>>;
  _not?: InputMaybe<PokemonV2VersionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2VersionBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_encounters?: InputMaybe<PokemonV2EncounterBoolExp>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateBoolExp>;
  pokemon_v2_locationareaencounterrates?: InputMaybe<PokemonV2LocationareaencounterrateBoolExp>;
  pokemon_v2_locationareaencounterrates_aggregate?: InputMaybe<PokemonV2LocationareaencounterrateAggregateBoolExp>;
  pokemon_v2_pokemongameindices?: InputMaybe<PokemonV2PokemongameindexBoolExp>;
  pokemon_v2_pokemongameindices_aggregate?: InputMaybe<PokemonV2PokemongameindexAggregateBoolExp>;
  pokemon_v2_pokemonitems?: InputMaybe<PokemonV2PokemonitemBoolExp>;
  pokemon_v2_pokemonitems_aggregate?: InputMaybe<PokemonV2PokemonitemAggregateBoolExp>;
  pokemon_v2_pokemonspeciesflavortexts?: InputMaybe<PokemonV2PokemonspeciesflavortextBoolExp>;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  pokemon_v2_versionnames?: InputMaybe<PokemonV2VersionnameBoolExp>;
  pokemon_v2_versionnames_aggregate?: InputMaybe<PokemonV2VersionnameAggregateBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2VersionMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionMinOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionOrderBy {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_encounters_aggregate?: InputMaybe<PokemonV2EncounterAggregateOrderBy>;
  pokemon_v2_locationareaencounterrates_aggregate?: InputMaybe<PokemonV2LocationareaencounterrateAggregateOrderBy>;
  pokemon_v2_pokemongameindices_aggregate?: InputMaybe<PokemonV2PokemongameindexAggregateOrderBy>;
  pokemon_v2_pokemonitems_aggregate?: InputMaybe<PokemonV2PokemonitemAggregateOrderBy>;
  pokemon_v2_pokemonspeciesflavortexts_aggregate?: InputMaybe<PokemonV2PokemonspeciesflavortextAggregateOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  pokemon_v2_versionnames_aggregate?: InputMaybe<PokemonV2VersionnameAggregateOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2VersionSelectColumn = 'id' | 'name' | 'version_group_id';

export interface PokemonV2VersionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionStreamCursorInput {
  initial_value: PokemonV2VersionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2VersionStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2VersionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupAggregateBoolExp {
  count?: InputMaybe<PokemonV2VersiongroupAggregateBoolExpCount>;
}

export interface PokemonV2VersiongroupAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2VersiongroupSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2VersiongroupAggregateOrderBy {
  avg?: InputMaybe<PokemonV2VersiongroupAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2VersiongroupMaxOrderBy>;
  min?: InputMaybe<PokemonV2VersiongroupMinOrderBy>;
  stddev?: InputMaybe<PokemonV2VersiongroupStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2VersiongroupStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2VersiongroupStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2VersiongroupSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2VersiongroupVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2VersiongroupVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2VersiongroupVarianceOrderBy>;
}

export interface PokemonV2VersiongroupAvgOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupBoolExp {
  _and?: InputMaybe<Array<PokemonV2VersiongroupBoolExp>>;
  _not?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  _or?: InputMaybe<Array<PokemonV2VersiongroupBoolExp>>;
  generation_id?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  pokemon_v2_abilitychanges?: InputMaybe<PokemonV2AbilitychangeBoolExp>;
  pokemon_v2_abilitychanges_aggregate?: InputMaybe<PokemonV2AbilitychangeAggregateBoolExp>;
  pokemon_v2_abilityflavortexts?: InputMaybe<PokemonV2AbilityflavortextBoolExp>;
  pokemon_v2_abilityflavortexts_aggregate?: InputMaybe<PokemonV2AbilityflavortextAggregateBoolExp>;
  pokemon_v2_encounterslots?: InputMaybe<PokemonV2EncounterslotBoolExp>;
  pokemon_v2_encounterslots_aggregate?: InputMaybe<PokemonV2EncounterslotAggregateBoolExp>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationBoolExp>;
  pokemon_v2_itemflavortexts?: InputMaybe<PokemonV2ItemflavortextBoolExp>;
  pokemon_v2_itemflavortexts_aggregate?: InputMaybe<PokemonV2ItemflavortextAggregateBoolExp>;
  pokemon_v2_machines?: InputMaybe<PokemonV2MachineBoolExp>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateBoolExp>;
  pokemon_v2_movechanges?: InputMaybe<PokemonV2MovechangeBoolExp>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateBoolExp>;
  pokemon_v2_moveeffectchanges?: InputMaybe<PokemonV2MoveeffectchangeBoolExp>;
  pokemon_v2_moveeffectchanges_aggregate?: InputMaybe<PokemonV2MoveeffectchangeAggregateBoolExp>;
  pokemon_v2_moveflavortexts?: InputMaybe<PokemonV2MoveflavortextBoolExp>;
  pokemon_v2_moveflavortexts_aggregate?: InputMaybe<PokemonV2MoveflavortextAggregateBoolExp>;
  pokemon_v2_pokedexversiongroups?: InputMaybe<PokemonV2PokedexversiongroupBoolExp>;
  pokemon_v2_pokedexversiongroups_aggregate?: InputMaybe<PokemonV2PokedexversiongroupAggregateBoolExp>;
  pokemon_v2_pokemonforms?: InputMaybe<PokemonV2PokemonformBoolExp>;
  pokemon_v2_pokemonforms_aggregate?: InputMaybe<PokemonV2PokemonformAggregateBoolExp>;
  pokemon_v2_pokemonmoves?: InputMaybe<PokemonV2PokemonmoveBoolExp>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateBoolExp>;
  pokemon_v2_versiongroupmovelearnmethods?: InputMaybe<PokemonV2VersiongroupmovelearnmethodBoolExp>;
  pokemon_v2_versiongroupmovelearnmethods_aggregate?: InputMaybe<PokemonV2VersiongroupmovelearnmethodAggregateBoolExp>;
  pokemon_v2_versiongroupregions?: InputMaybe<PokemonV2VersiongroupregionBoolExp>;
  pokemon_v2_versiongroupregions_aggregate?: InputMaybe<PokemonV2VersiongroupregionAggregateBoolExp>;
  pokemon_v2_versions?: InputMaybe<PokemonV2VersionBoolExp>;
  pokemon_v2_versions_aggregate?: InputMaybe<PokemonV2VersionAggregateBoolExp>;
}

export interface PokemonV2VersiongroupMaxOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupMinOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  pokemon_v2_abilitychanges_aggregate?: InputMaybe<PokemonV2AbilitychangeAggregateOrderBy>;
  pokemon_v2_abilityflavortexts_aggregate?: InputMaybe<PokemonV2AbilityflavortextAggregateOrderBy>;
  pokemon_v2_encounterslots_aggregate?: InputMaybe<PokemonV2EncounterslotAggregateOrderBy>;
  pokemon_v2_generation?: InputMaybe<PokemonV2GenerationOrderBy>;
  pokemon_v2_itemflavortexts_aggregate?: InputMaybe<PokemonV2ItemflavortextAggregateOrderBy>;
  pokemon_v2_machines_aggregate?: InputMaybe<PokemonV2MachineAggregateOrderBy>;
  pokemon_v2_movechanges_aggregate?: InputMaybe<PokemonV2MovechangeAggregateOrderBy>;
  pokemon_v2_moveeffectchanges_aggregate?: InputMaybe<PokemonV2MoveeffectchangeAggregateOrderBy>;
  pokemon_v2_moveflavortexts_aggregate?: InputMaybe<PokemonV2MoveflavortextAggregateOrderBy>;
  pokemon_v2_pokedexversiongroups_aggregate?: InputMaybe<PokemonV2PokedexversiongroupAggregateOrderBy>;
  pokemon_v2_pokemonforms_aggregate?: InputMaybe<PokemonV2PokemonformAggregateOrderBy>;
  pokemon_v2_pokemonmoves_aggregate?: InputMaybe<PokemonV2PokemonmoveAggregateOrderBy>;
  pokemon_v2_versiongroupmovelearnmethods_aggregate?: InputMaybe<PokemonV2VersiongroupmovelearnmethodAggregateOrderBy>;
  pokemon_v2_versiongroupregions_aggregate?: InputMaybe<PokemonV2VersiongroupregionAggregateOrderBy>;
  pokemon_v2_versions_aggregate?: InputMaybe<PokemonV2VersionAggregateOrderBy>;
}

export type PokemonV2VersiongroupSelectColumn =
  | 'generation_id'
  | 'id'
  | 'name'
  | 'order';

export interface PokemonV2VersiongroupStddevOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupStddevPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupStddevSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupStreamCursorInput {
  initial_value: PokemonV2VersiongroupStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2VersiongroupStreamCursorValueInput {
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2VersiongroupSumOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupVarPopOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupVarSampOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupVarianceOrderBy {
  generation_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodAggregateBoolExp {
  count?: InputMaybe<PokemonV2VersiongroupmovelearnmethodAggregateBoolExpCount>;
}

export interface PokemonV2VersiongroupmovelearnmethodAggregateBoolExpCount {
  arguments?: InputMaybe<
    Array<PokemonV2VersiongroupmovelearnmethodSelectColumn>
  >;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2VersiongroupmovelearnmethodBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2VersiongroupmovelearnmethodAggregateOrderBy {
  avg?: InputMaybe<PokemonV2VersiongroupmovelearnmethodAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2VersiongroupmovelearnmethodMaxOrderBy>;
  min?: InputMaybe<PokemonV2VersiongroupmovelearnmethodMinOrderBy>;
  stddev?: InputMaybe<PokemonV2VersiongroupmovelearnmethodStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2VersiongroupmovelearnmethodStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2VersiongroupmovelearnmethodStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2VersiongroupmovelearnmethodSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2VersiongroupmovelearnmethodVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2VersiongroupmovelearnmethodVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2VersiongroupmovelearnmethodVarianceOrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodBoolExp {
  _and?: InputMaybe<Array<PokemonV2VersiongroupmovelearnmethodBoolExp>>;
  _not?: InputMaybe<PokemonV2VersiongroupmovelearnmethodBoolExp>;
  _or?: InputMaybe<Array<PokemonV2VersiongroupmovelearnmethodBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  move_learn_method_id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2VersiongroupmovelearnmethodMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodMinOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  pokemon_v2_movelearnmethod?: InputMaybe<PokemonV2MovelearnmethodOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2VersiongroupmovelearnmethodSelectColumn =
  | 'id'
  | 'move_learn_method_id'
  | 'version_group_id';

export interface PokemonV2VersiongroupmovelearnmethodStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodStreamCursorInput {
  initial_value: PokemonV2VersiongroupmovelearnmethodStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2VersiongroupmovelearnmethodStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  move_learn_method_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2VersiongroupmovelearnmethodSumOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupmovelearnmethodVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  move_learn_method_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionAggregateBoolExp {
  count?: InputMaybe<PokemonV2VersiongroupregionAggregateBoolExpCount>;
}

export interface PokemonV2VersiongroupregionAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2VersiongroupregionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2VersiongroupregionBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2VersiongroupregionAggregateOrderBy {
  avg?: InputMaybe<PokemonV2VersiongroupregionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2VersiongroupregionMaxOrderBy>;
  min?: InputMaybe<PokemonV2VersiongroupregionMinOrderBy>;
  stddev?: InputMaybe<PokemonV2VersiongroupregionStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2VersiongroupregionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2VersiongroupregionStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2VersiongroupregionSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2VersiongroupregionVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2VersiongroupregionVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2VersiongroupregionVarianceOrderBy>;
}

export interface PokemonV2VersiongroupregionAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionBoolExp {
  _and?: InputMaybe<Array<PokemonV2VersiongroupregionBoolExp>>;
  _not?: InputMaybe<PokemonV2VersiongroupregionBoolExp>;
  _or?: InputMaybe<Array<PokemonV2VersiongroupregionBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionBoolExp>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupBoolExp>;
  region_id?: InputMaybe<IntComparisonExp>;
  version_group_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2VersiongroupregionMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionMinOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionOrderBy {
  id?: InputMaybe<OrderBy>;
  pokemon_v2_region?: InputMaybe<PokemonV2RegionOrderBy>;
  pokemon_v2_versiongroup?: InputMaybe<PokemonV2VersiongroupOrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export type PokemonV2VersiongroupregionSelectColumn =
  | 'id'
  | 'region_id'
  | 'version_group_id';

export interface PokemonV2VersiongroupregionStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionStreamCursorInput {
  initial_value: PokemonV2VersiongroupregionStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2VersiongroupregionStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  region_id?: InputMaybe<Scalars['Int']['input']>;
  version_group_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2VersiongroupregionSumOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersiongroupregionVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  region_id?: InputMaybe<OrderBy>;
  version_group_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameAggregateBoolExp {
  count?: InputMaybe<PokemonV2VersionnameAggregateBoolExpCount>;
}

export interface PokemonV2VersionnameAggregateBoolExpCount {
  arguments?: InputMaybe<Array<PokemonV2VersionnameSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PokemonV2VersionnameBoolExp>;
  predicate: IntComparisonExp;
}

export interface PokemonV2VersionnameAggregateOrderBy {
  avg?: InputMaybe<PokemonV2VersionnameAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PokemonV2VersionnameMaxOrderBy>;
  min?: InputMaybe<PokemonV2VersionnameMinOrderBy>;
  stddev?: InputMaybe<PokemonV2VersionnameStddevOrderBy>;
  stddev_pop?: InputMaybe<PokemonV2VersionnameStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PokemonV2VersionnameStddevSampOrderBy>;
  sum?: InputMaybe<PokemonV2VersionnameSumOrderBy>;
  var_pop?: InputMaybe<PokemonV2VersionnameVarPopOrderBy>;
  var_samp?: InputMaybe<PokemonV2VersionnameVarSampOrderBy>;
  variance?: InputMaybe<PokemonV2VersionnameVarianceOrderBy>;
}

export interface PokemonV2VersionnameAvgOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameBoolExp {
  _and?: InputMaybe<Array<PokemonV2VersionnameBoolExp>>;
  _not?: InputMaybe<PokemonV2VersionnameBoolExp>;
  _or?: InputMaybe<Array<PokemonV2VersionnameBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  language_id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageBoolExp>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionBoolExp>;
  version_id?: InputMaybe<IntComparisonExp>;
}

export interface PokemonV2VersionnameMaxOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameMinOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pokemon_v2_language?: InputMaybe<PokemonV2LanguageOrderBy>;
  pokemon_v2_version?: InputMaybe<PokemonV2VersionOrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonV2VersionnameSelectColumn =
  | 'id'
  | 'language_id'
  | 'name'
  | 'version_id';

export interface PokemonV2VersionnameStddevOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameStddevPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameStddevSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameStreamCursorInput {
  initial_value: PokemonV2VersionnameStreamCursorValueInput;
  ordering?: InputMaybe<CursorOrdering>;
}

export interface PokemonV2VersionnameStreamCursorValueInput {
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  version_id?: InputMaybe<Scalars['Int']['input']>;
}

export interface PokemonV2VersionnameSumOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameVarPopOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameVarSampOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export interface PokemonV2VersionnameVarianceOrderBy {
  id?: InputMaybe<OrderBy>;
  language_id?: InputMaybe<OrderBy>;
  version_id?: InputMaybe<OrderBy>;
}

export type PokemonsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PokemonV2PokemonBoolExp>;
  orderBy?: InputMaybe<
    Array<PokemonV2PokemonOrderBy> | PokemonV2PokemonOrderBy
  >;
}>;

export type PokemonsQuery = {
  pokemons: Array<{
    id: number;
    name: string;
    types: Array<{id: number; type?: {id: number; name: string} | null}>;
    sprites: Array<{id: number; sprites: {[key: string]: any}}>;
  }>;
  details: {aggregate?: {count: number} | null};
};

export type PokemonIdsQueryVariables = Exact<{[key: string]: never}>;

export type PokemonIdsQuery = {pokemons: Array<{id: number}>};

export type PokemonTypesQueryVariables = Exact<{[key: string]: never}>;

export type PokemonTypesQuery = {types: Array<{id: number; name: string}>};

export type PokemonQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type PokemonQuery = {
  pokemon?: {
    id: number;
    name: string;
    height?: number | null;
    weight?: number | null;
    sprites: Array<{id: number; sprites: {[key: string]: any}}>;
    types: Array<{id: number; type?: {id: number; name: string} | null}>;
    stats: Array<{
      id: number;
      base: number;
      stat?: {id: number; name: string} | null;
    }>;
    moves: Array<{
      id: number;
      move?: {
        id: number;
        pp?: number | null;
        name: string;
        power?: number | null;
        accuracy?: number | null;
        effects?: {
          id: number;
          effectTexts: Array<{id: number; effect: string}>;
        } | null;
      } | null;
    }>;
    specy?: {
      id: number;
      genderRate?: number | null;
      hatchCounter?: number | null;
      eggroups: Array<{
        id: number;
        egggroup?: {id: number; name: string} | null;
      }>;
      evolutionChain?: {
        id: number;
        species: Array<{
          id: number;
          name: string;
          evolvesFrom?: number | null;
          evolutions: Array<{id: number; minLevel?: number | null}>;
        }>;
      } | null;
      flavorTexts: Array<{id: number; flavorText: string}>;
    } | null;
    abilities: Array<{id: number; ability?: {id: number; name: string} | null}>;
  } | null;
};

export type PokemonSpritesQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type PokemonSpritesQuery = {
  sprites: Array<{id: number; sprite: {[key: string]: any}}>;
};

export const PokemonsDocument = gql`
  query Pokemons(
    $limit: Int
    $offset: Int
    $where: pokemon_v2_pokemon_bool_exp
    $orderBy: [pokemon_v2_pokemon_order_by!]
  ) {
    pokemons: pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $orderBy
    ) {
      id
      name
      types: pokemon_v2_pokemontypes {
        id
        type: pokemon_v2_type {
          id
          name
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        id
        sprites
      }
    }
    details: pokemon_v2_pokemon_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;
export const PokemonIdsDocument = gql`
  query PokemonIds {
    pokemons: pokemon_v2_pokemon {
      id
    }
  }
`;
export const PokemonTypesDocument = gql`
  query PokemonTypes {
    types: pokemon_v2_type {
      id
      name
    }
  }
`;
export const PokemonDocument = gql`
  query Pokemon($id: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      sprites: pokemon_v2_pokemonsprites {
        id
        sprites
      }
      types: pokemon_v2_pokemontypes {
        id
        type: pokemon_v2_type {
          id
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        id
        base: base_stat
        stat: pokemon_v2_stat {
          id
          name
        }
      }
      moves: pokemon_v2_pokemonmoves(
        where: {pokemon_v2_move: {power: {_gt: 0}}}
        distinct_on: move_id
      ) {
        id
        move: pokemon_v2_move {
          id
          pp
          name
          power
          accuracy
          effects: pokemon_v2_moveeffect {
            id
            effectTexts: pokemon_v2_moveeffecteffecttexts {
              id
              effect
            }
          }
        }
      }
      specy: pokemon_v2_pokemonspecy {
        id
        genderRate: gender_rate
        hatchCounter: hatch_counter
        eggroups: pokemon_v2_pokemonegggroups {
          id
          egggroup: pokemon_v2_egggroup {
            id
            name
          }
        }
        evolutionChain: pokemon_v2_evolutionchain {
          id
          species: pokemon_v2_pokemonspecies {
            id
            name
            evolvesFrom: evolves_from_species_id
            evolutions: pokemon_v2_pokemonevolutions {
              id
              minLevel: min_level
            }
          }
        }
        flavorTexts: pokemon_v2_pokemonspeciesflavortexts(
          distinct_on: language_id
          where: {pokemon_v2_language: {name: {_eq: "en"}}}
        ) {
          id
          flavorText: flavor_text
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        id
        ability: pokemon_v2_ability {
          id
          name
        }
      }
    }
  }
`;
export const PokemonSpritesDocument = gql`
  query PokemonSprites($id: Int!) {
    sprites: pokemon_v2_pokemonsprites(where: {pokemon_id: {_eq: $id}}) {
      id
      sprite: sprites
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    Pokemons(
      variables?: PokemonsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PokemonsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PokemonsQuery>(PokemonsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Pokemons',
        'query',
        variables,
      );
    },
    PokemonIds(
      variables?: PokemonIdsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PokemonIdsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PokemonIdsQuery>(PokemonIdsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PokemonIds',
        'query',
        variables,
      );
    },
    PokemonTypes(
      variables?: PokemonTypesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PokemonTypesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PokemonTypesQuery>(PokemonTypesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PokemonTypes',
        'query',
        variables,
      );
    },
    Pokemon(
      variables: PokemonQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PokemonQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PokemonQuery>(PokemonDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Pokemon',
        'query',
        variables,
      );
    },
    PokemonSprites(
      variables: PokemonSpritesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<PokemonSpritesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PokemonSpritesQuery>(
            PokemonSpritesDocument,
            variables,
            {...requestHeaders, ...wrappedRequestHeaders},
          ),
        'PokemonSprites',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
