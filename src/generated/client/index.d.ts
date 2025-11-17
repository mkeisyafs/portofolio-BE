
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model portfolio
 * 
 */
export type portfolio = $Result.DefaultSelection<Prisma.$portfolioPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Portfolios
 * const portfolios = await prisma.portfolio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Portfolios
   * const portfolios = await prisma.portfolio.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.portfolio`: Exposes CRUD operations for the **portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.portfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    portfolio: 'portfolio',
    project: 'project',
    skill: 'skill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "portfolio" | "project" | "skill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      portfolio: {
        payload: Prisma.$portfolioPayload<ExtArgs>
        fields: Prisma.portfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.portfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.portfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          findFirst: {
            args: Prisma.portfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.portfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          findMany: {
            args: Prisma.portfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>[]
          }
          create: {
            args: Prisma.portfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          createMany: {
            args: Prisma.portfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.portfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          update: {
            args: Prisma.portfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          deleteMany: {
            args: Prisma.portfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.portfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.portfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$portfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.portfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.portfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    portfolio?: portfolioOmit
    project?: projectOmit
    skill?: skillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PortfolioCountOutputType
   */

  export type PortfolioCountOutputType = {
    project: number
    skill: number
  }

  export type PortfolioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | PortfolioCountOutputTypeCountProjectArgs
    skill?: boolean | PortfolioCountOutputTypeCountSkillArgs
  }

  // Custom InputTypes
  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCountOutputType
     */
    select?: PortfolioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    portfolio_id: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    portfolio_id: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    portfolio_id: number | null
    nama: string | null
    foto: string | null
    linkedin: string | null
    github: string | null
    nomor_telepon: string | null
    bio: string | null
    email: string | null
    lokasi: string | null
    deskripsi: string | null
  }

  export type PortfolioMaxAggregateOutputType = {
    portfolio_id: number | null
    nama: string | null
    foto: string | null
    linkedin: string | null
    github: string | null
    nomor_telepon: string | null
    bio: string | null
    email: string | null
    lokasi: string | null
    deskripsi: string | null
  }

  export type PortfolioCountAggregateOutputType = {
    portfolio_id: number
    nama: number
    foto: number
    linkedin: number
    github: number
    nomor_telepon: number
    bio: number
    email: number
    lokasi: number
    deskripsi: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    portfolio_id?: true
  }

  export type PortfolioSumAggregateInputType = {
    portfolio_id?: true
  }

  export type PortfolioMinAggregateInputType = {
    portfolio_id?: true
    nama?: true
    foto?: true
    linkedin?: true
    github?: true
    nomor_telepon?: true
    bio?: true
    email?: true
    lokasi?: true
    deskripsi?: true
  }

  export type PortfolioMaxAggregateInputType = {
    portfolio_id?: true
    nama?: true
    foto?: true
    linkedin?: true
    github?: true
    nomor_telepon?: true
    bio?: true
    email?: true
    lokasi?: true
    deskripsi?: true
  }

  export type PortfolioCountAggregateInputType = {
    portfolio_id?: true
    nama?: true
    foto?: true
    linkedin?: true
    github?: true
    nomor_telepon?: true
    bio?: true
    email?: true
    lokasi?: true
    deskripsi?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which portfolio to aggregate.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type portfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: portfolioWhereInput
    orderBy?: portfolioOrderByWithAggregationInput | portfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: portfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    portfolio_id: number
    nama: string
    foto: string
    linkedin: string | null
    github: string | null
    nomor_telepon: string | null
    bio: string
    email: string | null
    lokasi: string | null
    deskripsi: string | null
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends portfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type portfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    portfolio_id?: boolean
    nama?: boolean
    foto?: boolean
    linkedin?: boolean
    github?: boolean
    nomor_telepon?: boolean
    bio?: boolean
    email?: boolean
    lokasi?: boolean
    deskripsi?: boolean
    project?: boolean | portfolio$projectArgs<ExtArgs>
    skill?: boolean | portfolio$skillArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>



  export type portfolioSelectScalar = {
    portfolio_id?: boolean
    nama?: boolean
    foto?: boolean
    linkedin?: boolean
    github?: boolean
    nomor_telepon?: boolean
    bio?: boolean
    email?: boolean
    lokasi?: boolean
    deskripsi?: boolean
  }

  export type portfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"portfolio_id" | "nama" | "foto" | "linkedin" | "github" | "nomor_telepon" | "bio" | "email" | "lokasi" | "deskripsi", ExtArgs["result"]["portfolio"]>
  export type portfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | portfolio$projectArgs<ExtArgs>
    skill?: boolean | portfolio$skillArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $portfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "portfolio"
    objects: {
      project: Prisma.$projectPayload<ExtArgs>[]
      skill: Prisma.$skillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      portfolio_id: number
      nama: string
      foto: string
      linkedin: string | null
      github: string | null
      nomor_telepon: string | null
      bio: string
      email: string | null
      lokasi: string | null
      deskripsi: string | null
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type portfolioGetPayload<S extends boolean | null | undefined | portfolioDefaultArgs> = $Result.GetResult<Prisma.$portfolioPayload, S>

  type portfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<portfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface portfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['portfolio'], meta: { name: 'portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {portfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends portfolioFindUniqueArgs>(args: SelectSubset<T, portfolioFindUniqueArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {portfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends portfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, portfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends portfolioFindFirstArgs>(args?: SelectSubset<T, portfolioFindFirstArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends portfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, portfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `portfolio_id`
     * const portfolioWithPortfolio_idOnly = await prisma.portfolio.findMany({ select: { portfolio_id: true } })
     * 
     */
    findMany<T extends portfolioFindManyArgs>(args?: SelectSubset<T, portfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {portfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends portfolioCreateArgs>(args: SelectSubset<T, portfolioCreateArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {portfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends portfolioCreateManyArgs>(args?: SelectSubset<T, portfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Portfolio.
     * @param {portfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends portfolioDeleteArgs>(args: SelectSubset<T, portfolioDeleteArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {portfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends portfolioUpdateArgs>(args: SelectSubset<T, portfolioUpdateArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {portfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends portfolioDeleteManyArgs>(args?: SelectSubset<T, portfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends portfolioUpdateManyArgs>(args: SelectSubset<T, portfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Portfolio.
     * @param {portfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends portfolioUpsertArgs>(args: SelectSubset<T, portfolioUpsertArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends portfolioCountArgs>(
      args?: Subset<T, portfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {portfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends portfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: portfolioGroupByArgs['orderBy'] }
        : { orderBy?: portfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, portfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the portfolio model
   */
  readonly fields: portfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__portfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends portfolio$projectArgs<ExtArgs> = {}>(args?: Subset<T, portfolio$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skill<T extends portfolio$skillArgs<ExtArgs> = {}>(args?: Subset<T, portfolio$skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the portfolio model
   */
  interface portfolioFieldRefs {
    readonly portfolio_id: FieldRef<"portfolio", 'Int'>
    readonly nama: FieldRef<"portfolio", 'String'>
    readonly foto: FieldRef<"portfolio", 'String'>
    readonly linkedin: FieldRef<"portfolio", 'String'>
    readonly github: FieldRef<"portfolio", 'String'>
    readonly nomor_telepon: FieldRef<"portfolio", 'String'>
    readonly bio: FieldRef<"portfolio", 'String'>
    readonly email: FieldRef<"portfolio", 'String'>
    readonly lokasi: FieldRef<"portfolio", 'String'>
    readonly deskripsi: FieldRef<"portfolio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * portfolio findUnique
   */
  export type portfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio findUniqueOrThrow
   */
  export type portfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio findFirst
   */
  export type portfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for portfolios.
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * portfolio findFirstOrThrow
   */
  export type portfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * Filter, which portfolio to fetch.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for portfolios.
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * portfolio findMany
   */
  export type portfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * Filter, which portfolios to fetch.
     */
    where?: portfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of portfolios to fetch.
     */
    orderBy?: portfolioOrderByWithRelationInput | portfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing portfolios.
     */
    cursor?: portfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * portfolio create
   */
  export type portfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a portfolio.
     */
    data: XOR<portfolioCreateInput, portfolioUncheckedCreateInput>
  }

  /**
   * portfolio createMany
   */
  export type portfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many portfolios.
     */
    data: portfolioCreateManyInput | portfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * portfolio update
   */
  export type portfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a portfolio.
     */
    data: XOR<portfolioUpdateInput, portfolioUncheckedUpdateInput>
    /**
     * Choose, which portfolio to update.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio updateMany
   */
  export type portfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update portfolios.
     */
    data: XOR<portfolioUpdateManyMutationInput, portfolioUncheckedUpdateManyInput>
    /**
     * Filter which portfolios to update
     */
    where?: portfolioWhereInput
    /**
     * Limit how many portfolios to update.
     */
    limit?: number
  }

  /**
   * portfolio upsert
   */
  export type portfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the portfolio to update in case it exists.
     */
    where: portfolioWhereUniqueInput
    /**
     * In case the portfolio found by the `where` argument doesn't exist, create a new portfolio with this data.
     */
    create: XOR<portfolioCreateInput, portfolioUncheckedCreateInput>
    /**
     * In case the portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<portfolioUpdateInput, portfolioUncheckedUpdateInput>
  }

  /**
   * portfolio delete
   */
  export type portfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
    /**
     * Filter which portfolio to delete.
     */
    where: portfolioWhereUniqueInput
  }

  /**
   * portfolio deleteMany
   */
  export type portfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which portfolios to delete
     */
    where?: portfolioWhereInput
    /**
     * Limit how many portfolios to delete.
     */
    limit?: number
  }

  /**
   * portfolio.project
   */
  export type portfolio$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    where?: projectWhereInput
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    cursor?: projectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * portfolio.skill
   */
  export type portfolio$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    where?: skillWhereInput
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    cursor?: skillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * portfolio without action
   */
  export type portfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the portfolio
     */
    select?: portfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the portfolio
     */
    omit?: portfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: portfolioInclude<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    project_id: number | null
    portfolio_id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    project_id: number | null
    portfolio_id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    project_id: number | null
    portfolio_id: number | null
    judul_project: string | null
    deskripsi: string | null
    cover: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    project_id: number | null
    portfolio_id: number | null
    judul_project: string | null
    deskripsi: string | null
    cover: string | null
  }

  export type ProjectCountAggregateOutputType = {
    project_id: number
    portfolio_id: number
    judul_project: number
    deskripsi: number
    cover: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    project_id?: true
    portfolio_id?: true
  }

  export type ProjectSumAggregateInputType = {
    project_id?: true
    portfolio_id?: true
  }

  export type ProjectMinAggregateInputType = {
    project_id?: true
    portfolio_id?: true
    judul_project?: true
    deskripsi?: true
    cover?: true
  }

  export type ProjectMaxAggregateInputType = {
    project_id?: true
    portfolio_id?: true
    judul_project?: true
    deskripsi?: true
    cover?: true
  }

  export type ProjectCountAggregateInputType = {
    project_id?: true
    portfolio_id?: true
    judul_project?: true
    deskripsi?: true
    cover?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    project_id: number
    portfolio_id: number
    judul_project: string
    deskripsi: string | null
    cover: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    project_id?: boolean
    portfolio_id?: boolean
    judul_project?: boolean
    deskripsi?: boolean
    cover?: boolean
    portfolio?: boolean | portfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    project_id?: boolean
    portfolio_id?: boolean
    judul_project?: boolean
    deskripsi?: boolean
    cover?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"project_id" | "portfolio_id" | "judul_project" | "deskripsi" | "cover", ExtArgs["result"]["project"]>
  export type projectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | portfolioDefaultArgs<ExtArgs>
  }

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {
      portfolio: Prisma.$portfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      project_id: number
      portfolio_id: number
      judul_project: string
      deskripsi: string | null
      cover: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `project_id`
     * const projectWithProject_idOnly = await prisma.project.findMany({ select: { project_id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends portfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, portfolioDefaultArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly project_id: FieldRef<"project", 'Int'>
    readonly portfolio_id: FieldRef<"project", 'Int'>
    readonly judul_project: FieldRef<"project", 'String'>
    readonly deskripsi: FieldRef<"project", 'String'>
    readonly cover: FieldRef<"project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectInclude<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    skill_id: number | null
    portfolio_id: number | null
  }

  export type SkillSumAggregateOutputType = {
    skill_id: number | null
    portfolio_id: number | null
  }

  export type SkillMinAggregateOutputType = {
    skill_id: number | null
    portfolio_id: number | null
    nama_skill: string | null
  }

  export type SkillMaxAggregateOutputType = {
    skill_id: number | null
    portfolio_id: number | null
    nama_skill: string | null
  }

  export type SkillCountAggregateOutputType = {
    skill_id: number
    portfolio_id: number
    nama_skill: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    skill_id?: true
    portfolio_id?: true
  }

  export type SkillSumAggregateInputType = {
    skill_id?: true
    portfolio_id?: true
  }

  export type SkillMinAggregateInputType = {
    skill_id?: true
    portfolio_id?: true
    nama_skill?: true
  }

  export type SkillMaxAggregateInputType = {
    skill_id?: true
    portfolio_id?: true
    nama_skill?: true
  }

  export type SkillCountAggregateInputType = {
    skill_id?: true
    portfolio_id?: true
    nama_skill?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    skill_id: number
    portfolio_id: number
    nama_skill: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skill_id?: boolean
    portfolio_id?: boolean
    nama_skill?: boolean
    portfolio?: boolean | portfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>



  export type skillSelectScalar = {
    skill_id?: boolean
    portfolio_id?: boolean
    nama_skill?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"skill_id" | "portfolio_id" | "nama_skill", ExtArgs["result"]["skill"]>
  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | portfolioDefaultArgs<ExtArgs>
  }

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      portfolio: Prisma.$portfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      skill_id: number
      portfolio_id: number
      nama_skill: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `skill_id`
     * const skillWithSkill_idOnly = await prisma.skill.findMany({ select: { skill_id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends portfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, portfolioDefaultArgs<ExtArgs>>): Prisma__portfolioClient<$Result.GetResult<Prisma.$portfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skill model
   */
  interface skillFieldRefs {
    readonly skill_id: FieldRef<"skill", 'Int'>
    readonly portfolio_id: FieldRef<"skill", 'Int'>
    readonly nama_skill: FieldRef<"skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PortfolioScalarFieldEnum: {
    portfolio_id: 'portfolio_id',
    nama: 'nama',
    foto: 'foto',
    linkedin: 'linkedin',
    github: 'github',
    nomor_telepon: 'nomor_telepon',
    bio: 'bio',
    email: 'email',
    lokasi: 'lokasi',
    deskripsi: 'deskripsi'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    project_id: 'project_id',
    portfolio_id: 'portfolio_id',
    judul_project: 'judul_project',
    deskripsi: 'deskripsi',
    cover: 'cover'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    skill_id: 'skill_id',
    portfolio_id: 'portfolio_id',
    nama_skill: 'nama_skill'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const portfolioOrderByRelevanceFieldEnum: {
    nama: 'nama',
    foto: 'foto',
    linkedin: 'linkedin',
    github: 'github',
    nomor_telepon: 'nomor_telepon',
    bio: 'bio',
    email: 'email',
    lokasi: 'lokasi',
    deskripsi: 'deskripsi'
  };

  export type portfolioOrderByRelevanceFieldEnum = (typeof portfolioOrderByRelevanceFieldEnum)[keyof typeof portfolioOrderByRelevanceFieldEnum]


  export const projectOrderByRelevanceFieldEnum: {
    judul_project: 'judul_project',
    deskripsi: 'deskripsi',
    cover: 'cover'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const skillOrderByRelevanceFieldEnum: {
    nama_skill: 'nama_skill'
  };

  export type skillOrderByRelevanceFieldEnum = (typeof skillOrderByRelevanceFieldEnum)[keyof typeof skillOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type portfolioWhereInput = {
    AND?: portfolioWhereInput | portfolioWhereInput[]
    OR?: portfolioWhereInput[]
    NOT?: portfolioWhereInput | portfolioWhereInput[]
    portfolio_id?: IntFilter<"portfolio"> | number
    nama?: StringFilter<"portfolio"> | string
    foto?: StringFilter<"portfolio"> | string
    linkedin?: StringNullableFilter<"portfolio"> | string | null
    github?: StringNullableFilter<"portfolio"> | string | null
    nomor_telepon?: StringNullableFilter<"portfolio"> | string | null
    bio?: StringFilter<"portfolio"> | string
    email?: StringNullableFilter<"portfolio"> | string | null
    lokasi?: StringNullableFilter<"portfolio"> | string | null
    deskripsi?: StringNullableFilter<"portfolio"> | string | null
    project?: ProjectListRelationFilter
    skill?: SkillListRelationFilter
  }

  export type portfolioOrderByWithRelationInput = {
    portfolio_id?: SortOrder
    nama?: SortOrder
    foto?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    nomor_telepon?: SortOrderInput | SortOrder
    bio?: SortOrder
    email?: SortOrderInput | SortOrder
    lokasi?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    project?: projectOrderByRelationAggregateInput
    skill?: skillOrderByRelationAggregateInput
    _relevance?: portfolioOrderByRelevanceInput
  }

  export type portfolioWhereUniqueInput = Prisma.AtLeast<{
    portfolio_id?: number
    AND?: portfolioWhereInput | portfolioWhereInput[]
    OR?: portfolioWhereInput[]
    NOT?: portfolioWhereInput | portfolioWhereInput[]
    nama?: StringFilter<"portfolio"> | string
    foto?: StringFilter<"portfolio"> | string
    linkedin?: StringNullableFilter<"portfolio"> | string | null
    github?: StringNullableFilter<"portfolio"> | string | null
    nomor_telepon?: StringNullableFilter<"portfolio"> | string | null
    bio?: StringFilter<"portfolio"> | string
    email?: StringNullableFilter<"portfolio"> | string | null
    lokasi?: StringNullableFilter<"portfolio"> | string | null
    deskripsi?: StringNullableFilter<"portfolio"> | string | null
    project?: ProjectListRelationFilter
    skill?: SkillListRelationFilter
  }, "portfolio_id">

  export type portfolioOrderByWithAggregationInput = {
    portfolio_id?: SortOrder
    nama?: SortOrder
    foto?: SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    nomor_telepon?: SortOrderInput | SortOrder
    bio?: SortOrder
    email?: SortOrderInput | SortOrder
    lokasi?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    _count?: portfolioCountOrderByAggregateInput
    _avg?: portfolioAvgOrderByAggregateInput
    _max?: portfolioMaxOrderByAggregateInput
    _min?: portfolioMinOrderByAggregateInput
    _sum?: portfolioSumOrderByAggregateInput
  }

  export type portfolioScalarWhereWithAggregatesInput = {
    AND?: portfolioScalarWhereWithAggregatesInput | portfolioScalarWhereWithAggregatesInput[]
    OR?: portfolioScalarWhereWithAggregatesInput[]
    NOT?: portfolioScalarWhereWithAggregatesInput | portfolioScalarWhereWithAggregatesInput[]
    portfolio_id?: IntWithAggregatesFilter<"portfolio"> | number
    nama?: StringWithAggregatesFilter<"portfolio"> | string
    foto?: StringWithAggregatesFilter<"portfolio"> | string
    linkedin?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    github?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    nomor_telepon?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    bio?: StringWithAggregatesFilter<"portfolio"> | string
    email?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    lokasi?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"portfolio"> | string | null
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    project_id?: IntFilter<"project"> | number
    portfolio_id?: IntFilter<"project"> | number
    judul_project?: StringFilter<"project"> | string
    deskripsi?: StringNullableFilter<"project"> | string | null
    cover?: StringNullableFilter<"project"> | string | null
    portfolio?: XOR<PortfolioScalarRelationFilter, portfolioWhereInput>
  }

  export type projectOrderByWithRelationInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
    judul_project?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    portfolio?: portfolioOrderByWithRelationInput
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    project_id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    portfolio_id?: IntFilter<"project"> | number
    judul_project?: StringFilter<"project"> | string
    deskripsi?: StringNullableFilter<"project"> | string | null
    cover?: StringNullableFilter<"project"> | string | null
    portfolio?: XOR<PortfolioScalarRelationFilter, portfolioWhereInput>
  }, "project_id">

  export type projectOrderByWithAggregationInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
    judul_project?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    cover?: SortOrderInput | SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    project_id?: IntWithAggregatesFilter<"project"> | number
    portfolio_id?: IntWithAggregatesFilter<"project"> | number
    judul_project?: StringWithAggregatesFilter<"project"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"project"> | string | null
    cover?: StringNullableWithAggregatesFilter<"project"> | string | null
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    skill_id?: IntFilter<"skill"> | number
    portfolio_id?: IntFilter<"skill"> | number
    nama_skill?: StringFilter<"skill"> | string
    portfolio?: XOR<PortfolioScalarRelationFilter, portfolioWhereInput>
  }

  export type skillOrderByWithRelationInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
    nama_skill?: SortOrder
    portfolio?: portfolioOrderByWithRelationInput
    _relevance?: skillOrderByRelevanceInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    skill_id?: number
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    portfolio_id?: IntFilter<"skill"> | number
    nama_skill?: StringFilter<"skill"> | string
    portfolio?: XOR<PortfolioScalarRelationFilter, portfolioWhereInput>
  }, "skill_id">

  export type skillOrderByWithAggregationInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
    nama_skill?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _avg?: skillAvgOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
    _sum?: skillSumOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    skill_id?: IntWithAggregatesFilter<"skill"> | number
    portfolio_id?: IntWithAggregatesFilter<"skill"> | number
    nama_skill?: StringWithAggregatesFilter<"skill"> | string
  }

  export type portfolioCreateInput = {
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
    project?: projectCreateNestedManyWithoutPortfolioInput
    skill?: skillCreateNestedManyWithoutPortfolioInput
  }

  export type portfolioUncheckedCreateInput = {
    portfolio_id?: number
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
    project?: projectUncheckedCreateNestedManyWithoutPortfolioInput
    skill?: skillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type portfolioUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUpdateManyWithoutPortfolioNestedInput
    skill?: skillUpdateManyWithoutPortfolioNestedInput
  }

  export type portfolioUncheckedUpdateInput = {
    portfolio_id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUncheckedUpdateManyWithoutPortfolioNestedInput
    skill?: skillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type portfolioCreateManyInput = {
    portfolio_id?: number
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
  }

  export type portfolioUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type portfolioUncheckedUpdateManyInput = {
    portfolio_id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectCreateInput = {
    judul_project: string
    deskripsi?: string | null
    cover?: string | null
    portfolio: portfolioCreateNestedOneWithoutProjectInput
  }

  export type projectUncheckedCreateInput = {
    project_id?: number
    portfolio_id: number
    judul_project: string
    deskripsi?: string | null
    cover?: string | null
  }

  export type projectUpdateInput = {
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: portfolioUpdateOneRequiredWithoutProjectNestedInput
  }

  export type projectUncheckedUpdateInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    portfolio_id?: IntFieldUpdateOperationsInput | number
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectCreateManyInput = {
    project_id?: number
    portfolio_id: number
    judul_project: string
    deskripsi?: string | null
    cover?: string | null
  }

  export type projectUpdateManyMutationInput = {
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectUncheckedUpdateManyInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    portfolio_id?: IntFieldUpdateOperationsInput | number
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillCreateInput = {
    nama_skill: string
    portfolio: portfolioCreateNestedOneWithoutSkillInput
  }

  export type skillUncheckedCreateInput = {
    skill_id?: number
    portfolio_id: number
    nama_skill: string
  }

  export type skillUpdateInput = {
    nama_skill?: StringFieldUpdateOperationsInput | string
    portfolio?: portfolioUpdateOneRequiredWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
    portfolio_id?: IntFieldUpdateOperationsInput | number
    nama_skill?: StringFieldUpdateOperationsInput | string
  }

  export type skillCreateManyInput = {
    skill_id?: number
    portfolio_id: number
    nama_skill: string
  }

  export type skillUpdateManyMutationInput = {
    nama_skill?: StringFieldUpdateOperationsInput | string
  }

  export type skillUncheckedUpdateManyInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
    portfolio_id?: IntFieldUpdateOperationsInput | number
    nama_skill?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectListRelationFilter = {
    every?: projectWhereInput
    some?: projectWhereInput
    none?: projectWhereInput
  }

  export type SkillListRelationFilter = {
    every?: skillWhereInput
    some?: skillWhereInput
    none?: skillWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type portfolioOrderByRelevanceInput = {
    fields: portfolioOrderByRelevanceFieldEnum | portfolioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type portfolioCountOrderByAggregateInput = {
    portfolio_id?: SortOrder
    nama?: SortOrder
    foto?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    nomor_telepon?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrder
  }

  export type portfolioAvgOrderByAggregateInput = {
    portfolio_id?: SortOrder
  }

  export type portfolioMaxOrderByAggregateInput = {
    portfolio_id?: SortOrder
    nama?: SortOrder
    foto?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    nomor_telepon?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrder
  }

  export type portfolioMinOrderByAggregateInput = {
    portfolio_id?: SortOrder
    nama?: SortOrder
    foto?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    nomor_telepon?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    lokasi?: SortOrder
    deskripsi?: SortOrder
  }

  export type portfolioSumOrderByAggregateInput = {
    portfolio_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PortfolioScalarRelationFilter = {
    is?: portfolioWhereInput
    isNot?: portfolioWhereInput
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
    judul_project?: SortOrder
    deskripsi?: SortOrder
    cover?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
    judul_project?: SortOrder
    deskripsi?: SortOrder
    cover?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
    judul_project?: SortOrder
    deskripsi?: SortOrder
    cover?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    project_id?: SortOrder
    portfolio_id?: SortOrder
  }

  export type skillOrderByRelevanceInput = {
    fields: skillOrderByRelevanceFieldEnum | skillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type skillCountOrderByAggregateInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
    nama_skill?: SortOrder
  }

  export type skillAvgOrderByAggregateInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
    nama_skill?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
    nama_skill?: SortOrder
  }

  export type skillSumOrderByAggregateInput = {
    skill_id?: SortOrder
    portfolio_id?: SortOrder
  }

  export type projectCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<projectCreateWithoutPortfolioInput, projectUncheckedCreateWithoutPortfolioInput> | projectCreateWithoutPortfolioInput[] | projectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: projectCreateOrConnectWithoutPortfolioInput | projectCreateOrConnectWithoutPortfolioInput[]
    createMany?: projectCreateManyPortfolioInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type skillCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<skillCreateWithoutPortfolioInput, skillUncheckedCreateWithoutPortfolioInput> | skillCreateWithoutPortfolioInput[] | skillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: skillCreateOrConnectWithoutPortfolioInput | skillCreateOrConnectWithoutPortfolioInput[]
    createMany?: skillCreateManyPortfolioInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type projectUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<projectCreateWithoutPortfolioInput, projectUncheckedCreateWithoutPortfolioInput> | projectCreateWithoutPortfolioInput[] | projectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: projectCreateOrConnectWithoutPortfolioInput | projectCreateOrConnectWithoutPortfolioInput[]
    createMany?: projectCreateManyPortfolioInputEnvelope
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
  }

  export type skillUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<skillCreateWithoutPortfolioInput, skillUncheckedCreateWithoutPortfolioInput> | skillCreateWithoutPortfolioInput[] | skillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: skillCreateOrConnectWithoutPortfolioInput | skillCreateOrConnectWithoutPortfolioInput[]
    createMany?: skillCreateManyPortfolioInputEnvelope
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type projectUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<projectCreateWithoutPortfolioInput, projectUncheckedCreateWithoutPortfolioInput> | projectCreateWithoutPortfolioInput[] | projectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: projectCreateOrConnectWithoutPortfolioInput | projectCreateOrConnectWithoutPortfolioInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutPortfolioInput | projectUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: projectCreateManyPortfolioInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutPortfolioInput | projectUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: projectUpdateManyWithWhereWithoutPortfolioInput | projectUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type skillUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<skillCreateWithoutPortfolioInput, skillUncheckedCreateWithoutPortfolioInput> | skillCreateWithoutPortfolioInput[] | skillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: skillCreateOrConnectWithoutPortfolioInput | skillCreateOrConnectWithoutPortfolioInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutPortfolioInput | skillUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: skillCreateManyPortfolioInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutPortfolioInput | skillUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: skillUpdateManyWithWhereWithoutPortfolioInput | skillUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<projectCreateWithoutPortfolioInput, projectUncheckedCreateWithoutPortfolioInput> | projectCreateWithoutPortfolioInput[] | projectUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: projectCreateOrConnectWithoutPortfolioInput | projectCreateOrConnectWithoutPortfolioInput[]
    upsert?: projectUpsertWithWhereUniqueWithoutPortfolioInput | projectUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: projectCreateManyPortfolioInputEnvelope
    set?: projectWhereUniqueInput | projectWhereUniqueInput[]
    disconnect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    delete?: projectWhereUniqueInput | projectWhereUniqueInput[]
    connect?: projectWhereUniqueInput | projectWhereUniqueInput[]
    update?: projectUpdateWithWhereUniqueWithoutPortfolioInput | projectUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: projectUpdateManyWithWhereWithoutPortfolioInput | projectUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: projectScalarWhereInput | projectScalarWhereInput[]
  }

  export type skillUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<skillCreateWithoutPortfolioInput, skillUncheckedCreateWithoutPortfolioInput> | skillCreateWithoutPortfolioInput[] | skillUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: skillCreateOrConnectWithoutPortfolioInput | skillCreateOrConnectWithoutPortfolioInput[]
    upsert?: skillUpsertWithWhereUniqueWithoutPortfolioInput | skillUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: skillCreateManyPortfolioInputEnvelope
    set?: skillWhereUniqueInput | skillWhereUniqueInput[]
    disconnect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    delete?: skillWhereUniqueInput | skillWhereUniqueInput[]
    connect?: skillWhereUniqueInput | skillWhereUniqueInput[]
    update?: skillUpdateWithWhereUniqueWithoutPortfolioInput | skillUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: skillUpdateManyWithWhereWithoutPortfolioInput | skillUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: skillScalarWhereInput | skillScalarWhereInput[]
  }

  export type portfolioCreateNestedOneWithoutProjectInput = {
    create?: XOR<portfolioCreateWithoutProjectInput, portfolioUncheckedCreateWithoutProjectInput>
    connectOrCreate?: portfolioCreateOrConnectWithoutProjectInput
    connect?: portfolioWhereUniqueInput
  }

  export type portfolioUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<portfolioCreateWithoutProjectInput, portfolioUncheckedCreateWithoutProjectInput>
    connectOrCreate?: portfolioCreateOrConnectWithoutProjectInput
    upsert?: portfolioUpsertWithoutProjectInput
    connect?: portfolioWhereUniqueInput
    update?: XOR<XOR<portfolioUpdateToOneWithWhereWithoutProjectInput, portfolioUpdateWithoutProjectInput>, portfolioUncheckedUpdateWithoutProjectInput>
  }

  export type portfolioCreateNestedOneWithoutSkillInput = {
    create?: XOR<portfolioCreateWithoutSkillInput, portfolioUncheckedCreateWithoutSkillInput>
    connectOrCreate?: portfolioCreateOrConnectWithoutSkillInput
    connect?: portfolioWhereUniqueInput
  }

  export type portfolioUpdateOneRequiredWithoutSkillNestedInput = {
    create?: XOR<portfolioCreateWithoutSkillInput, portfolioUncheckedCreateWithoutSkillInput>
    connectOrCreate?: portfolioCreateOrConnectWithoutSkillInput
    upsert?: portfolioUpsertWithoutSkillInput
    connect?: portfolioWhereUniqueInput
    update?: XOR<XOR<portfolioUpdateToOneWithWhereWithoutSkillInput, portfolioUpdateWithoutSkillInput>, portfolioUncheckedUpdateWithoutSkillInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type projectCreateWithoutPortfolioInput = {
    judul_project: string
    deskripsi?: string | null
    cover?: string | null
  }

  export type projectUncheckedCreateWithoutPortfolioInput = {
    project_id?: number
    judul_project: string
    deskripsi?: string | null
    cover?: string | null
  }

  export type projectCreateOrConnectWithoutPortfolioInput = {
    where: projectWhereUniqueInput
    create: XOR<projectCreateWithoutPortfolioInput, projectUncheckedCreateWithoutPortfolioInput>
  }

  export type projectCreateManyPortfolioInputEnvelope = {
    data: projectCreateManyPortfolioInput | projectCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type skillCreateWithoutPortfolioInput = {
    nama_skill: string
  }

  export type skillUncheckedCreateWithoutPortfolioInput = {
    skill_id?: number
    nama_skill: string
  }

  export type skillCreateOrConnectWithoutPortfolioInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutPortfolioInput, skillUncheckedCreateWithoutPortfolioInput>
  }

  export type skillCreateManyPortfolioInputEnvelope = {
    data: skillCreateManyPortfolioInput | skillCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type projectUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: projectWhereUniqueInput
    update: XOR<projectUpdateWithoutPortfolioInput, projectUncheckedUpdateWithoutPortfolioInput>
    create: XOR<projectCreateWithoutPortfolioInput, projectUncheckedCreateWithoutPortfolioInput>
  }

  export type projectUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: projectWhereUniqueInput
    data: XOR<projectUpdateWithoutPortfolioInput, projectUncheckedUpdateWithoutPortfolioInput>
  }

  export type projectUpdateManyWithWhereWithoutPortfolioInput = {
    where: projectScalarWhereInput
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type projectScalarWhereInput = {
    AND?: projectScalarWhereInput | projectScalarWhereInput[]
    OR?: projectScalarWhereInput[]
    NOT?: projectScalarWhereInput | projectScalarWhereInput[]
    project_id?: IntFilter<"project"> | number
    portfolio_id?: IntFilter<"project"> | number
    judul_project?: StringFilter<"project"> | string
    deskripsi?: StringNullableFilter<"project"> | string | null
    cover?: StringNullableFilter<"project"> | string | null
  }

  export type skillUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: skillWhereUniqueInput
    update: XOR<skillUpdateWithoutPortfolioInput, skillUncheckedUpdateWithoutPortfolioInput>
    create: XOR<skillCreateWithoutPortfolioInput, skillUncheckedCreateWithoutPortfolioInput>
  }

  export type skillUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: skillWhereUniqueInput
    data: XOR<skillUpdateWithoutPortfolioInput, skillUncheckedUpdateWithoutPortfolioInput>
  }

  export type skillUpdateManyWithWhereWithoutPortfolioInput = {
    where: skillScalarWhereInput
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type skillScalarWhereInput = {
    AND?: skillScalarWhereInput | skillScalarWhereInput[]
    OR?: skillScalarWhereInput[]
    NOT?: skillScalarWhereInput | skillScalarWhereInput[]
    skill_id?: IntFilter<"skill"> | number
    portfolio_id?: IntFilter<"skill"> | number
    nama_skill?: StringFilter<"skill"> | string
  }

  export type portfolioCreateWithoutProjectInput = {
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
    skill?: skillCreateNestedManyWithoutPortfolioInput
  }

  export type portfolioUncheckedCreateWithoutProjectInput = {
    portfolio_id?: number
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
    skill?: skillUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type portfolioCreateOrConnectWithoutProjectInput = {
    where: portfolioWhereUniqueInput
    create: XOR<portfolioCreateWithoutProjectInput, portfolioUncheckedCreateWithoutProjectInput>
  }

  export type portfolioUpsertWithoutProjectInput = {
    update: XOR<portfolioUpdateWithoutProjectInput, portfolioUncheckedUpdateWithoutProjectInput>
    create: XOR<portfolioCreateWithoutProjectInput, portfolioUncheckedCreateWithoutProjectInput>
    where?: portfolioWhereInput
  }

  export type portfolioUpdateToOneWithWhereWithoutProjectInput = {
    where?: portfolioWhereInput
    data: XOR<portfolioUpdateWithoutProjectInput, portfolioUncheckedUpdateWithoutProjectInput>
  }

  export type portfolioUpdateWithoutProjectInput = {
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: skillUpdateManyWithoutPortfolioNestedInput
  }

  export type portfolioUncheckedUpdateWithoutProjectInput = {
    portfolio_id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    skill?: skillUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type portfolioCreateWithoutSkillInput = {
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
    project?: projectCreateNestedManyWithoutPortfolioInput
  }

  export type portfolioUncheckedCreateWithoutSkillInput = {
    portfolio_id?: number
    nama: string
    foto: string
    linkedin?: string | null
    github?: string | null
    nomor_telepon?: string | null
    bio: string
    email?: string | null
    lokasi?: string | null
    deskripsi?: string | null
    project?: projectUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type portfolioCreateOrConnectWithoutSkillInput = {
    where: portfolioWhereUniqueInput
    create: XOR<portfolioCreateWithoutSkillInput, portfolioUncheckedCreateWithoutSkillInput>
  }

  export type portfolioUpsertWithoutSkillInput = {
    update: XOR<portfolioUpdateWithoutSkillInput, portfolioUncheckedUpdateWithoutSkillInput>
    create: XOR<portfolioCreateWithoutSkillInput, portfolioUncheckedCreateWithoutSkillInput>
    where?: portfolioWhereInput
  }

  export type portfolioUpdateToOneWithWhereWithoutSkillInput = {
    where?: portfolioWhereInput
    data: XOR<portfolioUpdateWithoutSkillInput, portfolioUncheckedUpdateWithoutSkillInput>
  }

  export type portfolioUpdateWithoutSkillInput = {
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUpdateManyWithoutPortfolioNestedInput
  }

  export type portfolioUncheckedUpdateWithoutSkillInput = {
    portfolio_id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_telepon?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    project?: projectUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type projectCreateManyPortfolioInput = {
    project_id?: number
    judul_project: string
    deskripsi?: string | null
    cover?: string | null
  }

  export type skillCreateManyPortfolioInput = {
    skill_id?: number
    nama_skill: string
  }

  export type projectUpdateWithoutPortfolioInput = {
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectUncheckedUpdateWithoutPortfolioInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type projectUncheckedUpdateManyWithoutPortfolioInput = {
    project_id?: IntFieldUpdateOperationsInput | number
    judul_project?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillUpdateWithoutPortfolioInput = {
    nama_skill?: StringFieldUpdateOperationsInput | string
  }

  export type skillUncheckedUpdateWithoutPortfolioInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
    nama_skill?: StringFieldUpdateOperationsInput | string
  }

  export type skillUncheckedUpdateManyWithoutPortfolioInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
    nama_skill?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}