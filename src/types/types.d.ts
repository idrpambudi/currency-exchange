export type Maybe<T> = T | null;

export interface CapsulesFind {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  mission?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;
}

export interface CoresFind {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface HistoryFind {
  end?: Maybe<Date>;

  flight_number?: Maybe<number>;

  id?: Maybe<string>;

  start?: Maybe<Date>;
}

export type Date = any;

export type ObjectId = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  capsules?: Maybe<(Maybe<Capsule>)[]>;

  capsulesPast?: Maybe<(Maybe<Capsule>)[]>;

  capsulesUpcoming?: Maybe<(Maybe<Capsule>)[]>;

  capsule?: Maybe<Capsule>;

  cores?: Maybe<(Maybe<Core>)[]>;

  coresPast?: Maybe<(Maybe<Core>)[]>;

  coresUpcoming?: Maybe<(Maybe<Core>)[]>;

  core?: Maybe<Core>;

  conversionRate?: Maybe<number>;

  histories?: Maybe<(Maybe<History>)[]>;

  history?: Maybe<History>;
}

export interface Capsule {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;
}

export interface CapsuleMission {
  flight?: Maybe<number>;

  name?: Maybe<string>;
}

export interface Core {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface History {
  details?: Maybe<string>;

  event_date_unix?: Maybe<Date>;

  event_date_utc?: Maybe<Date>;

  id?: Maybe<string>;

  links?: Maybe<Link>;

  title?: Maybe<string>;
}

export interface Link {
  article?: Maybe<string>;

  reddit?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Mutation {
  syncConversionRate?: Maybe<boolean>;
}

export interface Subscription {}

export interface CoreMission {
  name?: Maybe<string>;

  flight?: Maybe<number>;
}

export interface Currency {
  id?: Maybe<string>;

  description?: Maybe<string>;
}

export interface Conversion {
  from?: Maybe<Currency>;

  to?: Maybe<Currency>;

  value?: Maybe<number>;
}

export interface Address {
  address?: Maybe<string>;

  city?: Maybe<string>;

  state?: Maybe<string>;
}

export interface Distance {
  feet?: Maybe<number>;

  meters?: Maybe<number>;
}

export interface Force {
  kN?: Maybe<number>;

  lbf?: Maybe<number>;
}

export interface Location {
  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  name?: Maybe<string>;

  region?: Maybe<string>;
}

export interface Mass {
  kg?: Maybe<number>;

  lb?: Maybe<number>;
}

export interface Volume {
  cubic_feet?: Maybe<number>;

  cubic_meters?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================

export interface CapsulesQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsulesPastQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsulesUpcomingQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsuleQueryArgs {
  id: string;
}
export interface CoresQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoresPastQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoresUpcomingQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoreQueryArgs {
  id: string;
}
export interface ConversionRateQueryArgs {
  base?: Maybe<string>;

  to?: Maybe<string>;
}
export interface HistoriesQueryArgs {
  find?: Maybe<HistoryFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface HistoryQueryArgs {
  id: string;
}
export interface SyncConversionRateMutationArgs {
  base?: Maybe<string>;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    capsules?: CapsulesResolver<Maybe<(Maybe<Capsule>)[]>, TypeParent, Context>;

    capsulesPast?: CapsulesPastResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      Context
    >;

    capsulesUpcoming?: CapsulesUpcomingResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      Context
    >;

    capsule?: CapsuleResolver<Maybe<Capsule>, TypeParent, Context>;

    cores?: CoresResolver<Maybe<(Maybe<Core>)[]>, TypeParent, Context>;

    coresPast?: CoresPastResolver<Maybe<(Maybe<Core>)[]>, TypeParent, Context>;

    coresUpcoming?: CoresUpcomingResolver<
      Maybe<(Maybe<Core>)[]>,
      TypeParent,
      Context
    >;

    core?: CoreResolver<Maybe<Core>, TypeParent, Context>;

    conversionRate?: ConversionRateResolver<Maybe<number>, TypeParent, Context>;

    histories?: HistoriesResolver<
      Maybe<(Maybe<History>)[]>,
      TypeParent,
      Context
    >;

    history?: HistoryResolver<Maybe<History>, TypeParent, Context>;
  }

  export type CapsulesResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsulesArgs>;
  export interface CapsulesArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsulesPastResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsulesPastArgs>;
  export interface CapsulesPastArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsulesUpcomingResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsulesUpcomingArgs>;
  export interface CapsulesUpcomingArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsuleResolver<
    R = Maybe<Capsule>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CapsuleArgs>;
  export interface CapsuleArgs {
    id: string;
  }

  export type CoresResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoresArgs>;
  export interface CoresArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoresPastResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoresPastArgs>;
  export interface CoresPastArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoresUpcomingResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoresUpcomingArgs>;
  export interface CoresUpcomingArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoreResolver<
    R = Maybe<Core>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CoreArgs>;
  export interface CoreArgs {
    id: string;
  }

  export type ConversionRateResolver<
    R = Maybe<number>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, ConversionRateArgs>;
  export interface ConversionRateArgs {
    base?: Maybe<string>;

    to?: Maybe<string>;
  }

  export type HistoriesResolver<
    R = Maybe<(Maybe<History>)[]>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, HistoriesArgs>;
  export interface HistoriesArgs {
    find?: Maybe<HistoryFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type HistoryResolver<
    R = Maybe<History>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, HistoryArgs>;
  export interface HistoryArgs {
    id: string;
  }
}

export namespace CapsuleResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Capsule> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    landings?: LandingsResolver<Maybe<number>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      Context
    >;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, Context>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    type?: TypeResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LandingsResolver<
    R = Maybe<number>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Capsule,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CapsuleMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = CapsuleMission> {
    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;
  }

  export type FlightResolver<
    R = Maybe<number>,
    Parent = CapsuleMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = CapsuleMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CoreResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Core> {
    asds_attempts?: AsdsAttemptsResolver<Maybe<number>, TypeParent, Context>;

    asds_landings?: AsdsLandingsResolver<Maybe<number>, TypeParent, Context>;

    block?: BlockResolver<Maybe<number>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      Context
    >;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, Context>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, Context>;

    rtls_attempts?: RtlsAttemptsResolver<Maybe<number>, TypeParent, Context>;

    rtls_landings?: RtlsLandingsResolver<Maybe<number>, TypeParent, Context>;

    status?: StatusResolver<Maybe<string>, TypeParent, Context>;

    water_landing?: WaterLandingResolver<Maybe<boolean>, TypeParent, Context>;
  }

  export type AsdsAttemptsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type AsdsLandingsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type BlockResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RtlsAttemptsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RtlsLandingsResolver<
    R = Maybe<number>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WaterLandingResolver<
    R = Maybe<boolean>,
    Parent = Core,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace HistoryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = History> {
    details?: DetailsResolver<Maybe<string>, TypeParent, Context>;

    event_date_unix?: EventDateUnixResolver<Maybe<Date>, TypeParent, Context>;

    event_date_utc?: EventDateUtcResolver<Maybe<Date>, TypeParent, Context>;

    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    links?: LinksResolver<Maybe<Link>, TypeParent, Context>;

    title?: TitleResolver<Maybe<string>, TypeParent, Context>;
  }

  export type DetailsResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EventDateUnixResolver<
    R = Maybe<Date>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EventDateUtcResolver<
    R = Maybe<Date>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LinksResolver<
    R = Maybe<Link>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = History,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LinkResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Link> {
    article?: ArticleResolver<Maybe<string>, TypeParent, Context>;

    reddit?: RedditResolver<Maybe<string>, TypeParent, Context>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, Context>;
  }

  export type ArticleResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RedditResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Link,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    syncConversionRate?: SyncConversionRateResolver<
      Maybe<boolean>,
      TypeParent,
      Context
    >;
  }

  export type SyncConversionRateResolver<
    R = Maybe<boolean>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, SyncConversionRateArgs>;
  export interface SyncConversionRateArgs {
    base?: Maybe<string>;
  }
}

export namespace SubscriptionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {}
}

export namespace CoreMissionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = CoreMission> {
    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    flight?: FlightResolver<Maybe<number>, TypeParent, Context>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = CoreMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type FlightResolver<
    R = Maybe<number>,
    Parent = CoreMission,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CurrencyResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Currency> {
    id?: IdResolver<Maybe<string>, TypeParent, Context>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Currency,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Currency,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ConversionResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Conversion> {
    from?: FromResolver<Maybe<Currency>, TypeParent, Context>;

    to?: ToResolver<Maybe<Currency>, TypeParent, Context>;

    value?: ValueResolver<Maybe<number>, TypeParent, Context>;
  }

  export type FromResolver<
    R = Maybe<Currency>,
    Parent = Conversion,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ToResolver<
    R = Maybe<Currency>,
    Parent = Conversion,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ValueResolver<
    R = Maybe<number>,
    Parent = Conversion,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace AddressResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Address> {
    address?: AddressResolver<Maybe<string>, TypeParent, Context>;

    city?: CityResolver<Maybe<string>, TypeParent, Context>;

    state?: StateResolver<Maybe<string>, TypeParent, Context>;
  }

  export type AddressResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type StateResolver<
    R = Maybe<string>,
    Parent = Address,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace DistanceResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Distance> {
    feet?: FeetResolver<Maybe<number>, TypeParent, Context>;

    meters?: MetersResolver<Maybe<number>, TypeParent, Context>;
  }

  export type FeetResolver<
    R = Maybe<number>,
    Parent = Distance,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MetersResolver<
    R = Maybe<number>,
    Parent = Distance,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ForceResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Force> {
    kN?: KNResolver<Maybe<number>, TypeParent, Context>;

    lbf?: LbfResolver<Maybe<number>, TypeParent, Context>;
  }

  export type KNResolver<
    R = Maybe<number>,
    Parent = Force,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LbfResolver<
    R = Maybe<number>,
    Parent = Force,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LocationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Location> {
    latitude?: LatitudeResolver<Maybe<number>, TypeParent, Context>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, Context>;

    name?: NameResolver<Maybe<string>, TypeParent, Context>;

    region?: RegionResolver<Maybe<string>, TypeParent, Context>;
  }

  export type LatitudeResolver<
    R = Maybe<number>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RegionResolver<
    R = Maybe<string>,
    Parent = Location,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MassResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Mass> {
    kg?: KgResolver<Maybe<number>, TypeParent, Context>;

    lb?: LbResolver<Maybe<number>, TypeParent, Context>;
  }

  export type KgResolver<
    R = Maybe<number>,
    Parent = Mass,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type LbResolver<
    R = Maybe<number>,
    Parent = Mass,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace VolumeResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Volume> {
    cubic_feet?: CubicFeetResolver<Maybe<number>, TypeParent, Context>;

    cubic_meters?: CubicMetersResolver<Maybe<number>, TypeParent, Context>;
  }

  export type CubicFeetResolver<
    R = Maybe<number>,
    Parent = Volume,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CubicMetersResolver<
    R = Maybe<number>,
    Parent = Volume,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export type RateLimitDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  RateLimitDirectiveArgs,
  MyContext
>;
export interface RateLimitDirectiveArgs {
  max?: Maybe<number>;

  window?: Maybe<string>;

  message?: Maybe<string>;

  identityArgs?: Maybe<(Maybe<string>)[]>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}
export interface ObjectIDScalarConfig
  extends GraphQLScalarTypeConfig<ObjectId, any> {
  name: "ObjectID";
}

export interface IResolvers<Context = MyContext> {
  Query?: QueryResolvers.Resolvers<Context>;
  Capsule?: CapsuleResolvers.Resolvers<Context>;
  CapsuleMission?: CapsuleMissionResolvers.Resolvers<Context>;
  Core?: CoreResolvers.Resolvers<Context>;
  History?: HistoryResolvers.Resolvers<Context>;
  Link?: LinkResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  Subscription?: SubscriptionResolvers.Resolvers<Context>;
  CoreMission?: CoreMissionResolvers.Resolvers<Context>;
  Currency?: CurrencyResolvers.Resolvers<Context>;
  Conversion?: ConversionResolvers.Resolvers<Context>;
  Address?: AddressResolvers.Resolvers<Context>;
  Distance?: DistanceResolvers.Resolvers<Context>;
  Force?: ForceResolvers.Resolvers<Context>;
  Location?: LocationResolvers.Resolvers<Context>;
  Mass?: MassResolvers.Resolvers<Context>;
  Volume?: VolumeResolvers.Resolvers<Context>;
  Date?: GraphQLScalarType;
  ObjectId?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
  rateLimit?: RateLimitDirectiveResolver<Result>;
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
