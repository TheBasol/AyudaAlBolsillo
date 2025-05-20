
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
 * Model Presupuesto
 * 
 */
export type Presupuesto = $Result.DefaultSelection<Prisma.$PresupuestoPayload>
/**
 * Model DetallesPresupuesto
 * 
 */
export type DetallesPresupuesto = $Result.DefaultSelection<Prisma.$DetallesPresupuestoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Presupuestos
 * const presupuestos = await prisma.presupuesto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Presupuestos
   * const presupuestos = await prisma.presupuesto.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.presupuesto`: Exposes CRUD operations for the **Presupuesto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presupuestos
    * const presupuestos = await prisma.presupuesto.findMany()
    * ```
    */
  get presupuesto(): Prisma.PresupuestoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detallesPresupuesto`: Exposes CRUD operations for the **DetallesPresupuesto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetallesPresupuestos
    * const detallesPresupuestos = await prisma.detallesPresupuesto.findMany()
    * ```
    */
  get detallesPresupuesto(): Prisma.DetallesPresupuestoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Presupuesto: 'Presupuesto',
    DetallesPresupuesto: 'DetallesPresupuesto'
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
      modelProps: "presupuesto" | "detallesPresupuesto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Presupuesto: {
        payload: Prisma.$PresupuestoPayload<ExtArgs>
        fields: Prisma.PresupuestoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresupuestoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresupuestoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>
          }
          findFirst: {
            args: Prisma.PresupuestoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresupuestoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>
          }
          findMany: {
            args: Prisma.PresupuestoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>[]
          }
          create: {
            args: Prisma.PresupuestoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>
          }
          createMany: {
            args: Prisma.PresupuestoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresupuestoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>[]
          }
          delete: {
            args: Prisma.PresupuestoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>
          }
          update: {
            args: Prisma.PresupuestoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>
          }
          deleteMany: {
            args: Prisma.PresupuestoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresupuestoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresupuestoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>[]
          }
          upsert: {
            args: Prisma.PresupuestoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoPayload>
          }
          aggregate: {
            args: Prisma.PresupuestoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresupuesto>
          }
          groupBy: {
            args: Prisma.PresupuestoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresupuestoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresupuestoCountArgs<ExtArgs>
            result: $Utils.Optional<PresupuestoCountAggregateOutputType> | number
          }
        }
      }
      DetallesPresupuesto: {
        payload: Prisma.$DetallesPresupuestoPayload<ExtArgs>
        fields: Prisma.DetallesPresupuestoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetallesPresupuestoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetallesPresupuestoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>
          }
          findFirst: {
            args: Prisma.DetallesPresupuestoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetallesPresupuestoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>
          }
          findMany: {
            args: Prisma.DetallesPresupuestoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>[]
          }
          create: {
            args: Prisma.DetallesPresupuestoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>
          }
          createMany: {
            args: Prisma.DetallesPresupuestoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetallesPresupuestoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>[]
          }
          delete: {
            args: Prisma.DetallesPresupuestoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>
          }
          update: {
            args: Prisma.DetallesPresupuestoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>
          }
          deleteMany: {
            args: Prisma.DetallesPresupuestoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetallesPresupuestoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetallesPresupuestoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>[]
          }
          upsert: {
            args: Prisma.DetallesPresupuestoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPresupuestoPayload>
          }
          aggregate: {
            args: Prisma.DetallesPresupuestoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetallesPresupuesto>
          }
          groupBy: {
            args: Prisma.DetallesPresupuestoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetallesPresupuestoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetallesPresupuestoCountArgs<ExtArgs>
            result: $Utils.Optional<DetallesPresupuestoCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    presupuesto?: PresupuestoOmit
    detallesPresupuesto?: DetallesPresupuestoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PresupuestoCountOutputType
   */

  export type PresupuestoCountOutputType = {
    datosPresupuesto: number
  }

  export type PresupuestoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datosPresupuesto?: boolean | PresupuestoCountOutputTypeCountDatosPresupuestoArgs
  }

  // Custom InputTypes
  /**
   * PresupuestoCountOutputType without action
   */
  export type PresupuestoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoCountOutputType
     */
    select?: PresupuestoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PresupuestoCountOutputType without action
   */
  export type PresupuestoCountOutputTypeCountDatosPresupuestoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetallesPresupuestoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Presupuesto
   */

  export type AggregatePresupuesto = {
    _count: PresupuestoCountAggregateOutputType | null
    _min: PresupuestoMinAggregateOutputType | null
    _max: PresupuestoMaxAggregateOutputType | null
  }

  export type PresupuestoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    isFavorite: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresupuestoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    isFavorite: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresupuestoCountAggregateOutputType = {
    id: number
    nombre: number
    isFavorite: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresupuestoMinAggregateInputType = {
    id?: true
    nombre?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresupuestoMaxAggregateInputType = {
    id?: true
    nombre?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresupuestoCountAggregateInputType = {
    id?: true
    nombre?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresupuestoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presupuesto to aggregate.
     */
    where?: PresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presupuestos to fetch.
     */
    orderBy?: PresupuestoOrderByWithRelationInput | PresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presupuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presupuestos
    **/
    _count?: true | PresupuestoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresupuestoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresupuestoMaxAggregateInputType
  }

  export type GetPresupuestoAggregateType<T extends PresupuestoAggregateArgs> = {
        [P in keyof T & keyof AggregatePresupuesto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresupuesto[P]>
      : GetScalarType<T[P], AggregatePresupuesto[P]>
  }




  export type PresupuestoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresupuestoWhereInput
    orderBy?: PresupuestoOrderByWithAggregationInput | PresupuestoOrderByWithAggregationInput[]
    by: PresupuestoScalarFieldEnum[] | PresupuestoScalarFieldEnum
    having?: PresupuestoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresupuestoCountAggregateInputType | true
    _min?: PresupuestoMinAggregateInputType
    _max?: PresupuestoMaxAggregateInputType
  }

  export type PresupuestoGroupByOutputType = {
    id: string
    nombre: string
    isFavorite: boolean
    createdAt: Date
    updatedAt: Date
    _count: PresupuestoCountAggregateOutputType | null
    _min: PresupuestoMinAggregateOutputType | null
    _max: PresupuestoMaxAggregateOutputType | null
  }

  type GetPresupuestoGroupByPayload<T extends PresupuestoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresupuestoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresupuestoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresupuestoGroupByOutputType[P]>
            : GetScalarType<T[P], PresupuestoGroupByOutputType[P]>
        }
      >
    >


  export type PresupuestoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    datosPresupuesto?: boolean | Presupuesto$datosPresupuestoArgs<ExtArgs>
    _count?: boolean | PresupuestoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presupuesto"]>

  export type PresupuestoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["presupuesto"]>

  export type PresupuestoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["presupuesto"]>

  export type PresupuestoSelectScalar = {
    id?: boolean
    nombre?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PresupuestoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "isFavorite" | "createdAt" | "updatedAt", ExtArgs["result"]["presupuesto"]>
  export type PresupuestoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datosPresupuesto?: boolean | Presupuesto$datosPresupuestoArgs<ExtArgs>
    _count?: boolean | PresupuestoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PresupuestoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PresupuestoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PresupuestoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presupuesto"
    objects: {
      datosPresupuesto: Prisma.$DetallesPresupuestoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      isFavorite: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["presupuesto"]>
    composites: {}
  }

  type PresupuestoGetPayload<S extends boolean | null | undefined | PresupuestoDefaultArgs> = $Result.GetResult<Prisma.$PresupuestoPayload, S>

  type PresupuestoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresupuestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresupuestoCountAggregateInputType | true
    }

  export interface PresupuestoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presupuesto'], meta: { name: 'Presupuesto' } }
    /**
     * Find zero or one Presupuesto that matches the filter.
     * @param {PresupuestoFindUniqueArgs} args - Arguments to find a Presupuesto
     * @example
     * // Get one Presupuesto
     * const presupuesto = await prisma.presupuesto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresupuestoFindUniqueArgs>(args: SelectSubset<T, PresupuestoFindUniqueArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presupuesto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresupuestoFindUniqueOrThrowArgs} args - Arguments to find a Presupuesto
     * @example
     * // Get one Presupuesto
     * const presupuesto = await prisma.presupuesto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresupuestoFindUniqueOrThrowArgs>(args: SelectSubset<T, PresupuestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presupuesto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoFindFirstArgs} args - Arguments to find a Presupuesto
     * @example
     * // Get one Presupuesto
     * const presupuesto = await prisma.presupuesto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresupuestoFindFirstArgs>(args?: SelectSubset<T, PresupuestoFindFirstArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presupuesto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoFindFirstOrThrowArgs} args - Arguments to find a Presupuesto
     * @example
     * // Get one Presupuesto
     * const presupuesto = await prisma.presupuesto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresupuestoFindFirstOrThrowArgs>(args?: SelectSubset<T, PresupuestoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presupuestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presupuestos
     * const presupuestos = await prisma.presupuesto.findMany()
     * 
     * // Get first 10 Presupuestos
     * const presupuestos = await prisma.presupuesto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presupuestoWithIdOnly = await prisma.presupuesto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresupuestoFindManyArgs>(args?: SelectSubset<T, PresupuestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presupuesto.
     * @param {PresupuestoCreateArgs} args - Arguments to create a Presupuesto.
     * @example
     * // Create one Presupuesto
     * const Presupuesto = await prisma.presupuesto.create({
     *   data: {
     *     // ... data to create a Presupuesto
     *   }
     * })
     * 
     */
    create<T extends PresupuestoCreateArgs>(args: SelectSubset<T, PresupuestoCreateArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presupuestos.
     * @param {PresupuestoCreateManyArgs} args - Arguments to create many Presupuestos.
     * @example
     * // Create many Presupuestos
     * const presupuesto = await prisma.presupuesto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresupuestoCreateManyArgs>(args?: SelectSubset<T, PresupuestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presupuestos and returns the data saved in the database.
     * @param {PresupuestoCreateManyAndReturnArgs} args - Arguments to create many Presupuestos.
     * @example
     * // Create many Presupuestos
     * const presupuesto = await prisma.presupuesto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presupuestos and only return the `id`
     * const presupuestoWithIdOnly = await prisma.presupuesto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresupuestoCreateManyAndReturnArgs>(args?: SelectSubset<T, PresupuestoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presupuesto.
     * @param {PresupuestoDeleteArgs} args - Arguments to delete one Presupuesto.
     * @example
     * // Delete one Presupuesto
     * const Presupuesto = await prisma.presupuesto.delete({
     *   where: {
     *     // ... filter to delete one Presupuesto
     *   }
     * })
     * 
     */
    delete<T extends PresupuestoDeleteArgs>(args: SelectSubset<T, PresupuestoDeleteArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presupuesto.
     * @param {PresupuestoUpdateArgs} args - Arguments to update one Presupuesto.
     * @example
     * // Update one Presupuesto
     * const presupuesto = await prisma.presupuesto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresupuestoUpdateArgs>(args: SelectSubset<T, PresupuestoUpdateArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presupuestos.
     * @param {PresupuestoDeleteManyArgs} args - Arguments to filter Presupuestos to delete.
     * @example
     * // Delete a few Presupuestos
     * const { count } = await prisma.presupuesto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresupuestoDeleteManyArgs>(args?: SelectSubset<T, PresupuestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presupuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presupuestos
     * const presupuesto = await prisma.presupuesto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresupuestoUpdateManyArgs>(args: SelectSubset<T, PresupuestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presupuestos and returns the data updated in the database.
     * @param {PresupuestoUpdateManyAndReturnArgs} args - Arguments to update many Presupuestos.
     * @example
     * // Update many Presupuestos
     * const presupuesto = await prisma.presupuesto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presupuestos and only return the `id`
     * const presupuestoWithIdOnly = await prisma.presupuesto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PresupuestoUpdateManyAndReturnArgs>(args: SelectSubset<T, PresupuestoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presupuesto.
     * @param {PresupuestoUpsertArgs} args - Arguments to update or create a Presupuesto.
     * @example
     * // Update or create a Presupuesto
     * const presupuesto = await prisma.presupuesto.upsert({
     *   create: {
     *     // ... data to create a Presupuesto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presupuesto we want to update
     *   }
     * })
     */
    upsert<T extends PresupuestoUpsertArgs>(args: SelectSubset<T, PresupuestoUpsertArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presupuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoCountArgs} args - Arguments to filter Presupuestos to count.
     * @example
     * // Count the number of Presupuestos
     * const count = await prisma.presupuesto.count({
     *   where: {
     *     // ... the filter for the Presupuestos we want to count
     *   }
     * })
    **/
    count<T extends PresupuestoCountArgs>(
      args?: Subset<T, PresupuestoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresupuestoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presupuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresupuestoAggregateArgs>(args: Subset<T, PresupuestoAggregateArgs>): Prisma.PrismaPromise<GetPresupuestoAggregateType<T>>

    /**
     * Group by Presupuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoGroupByArgs} args - Group by arguments.
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
      T extends PresupuestoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresupuestoGroupByArgs['orderBy'] }
        : { orderBy?: PresupuestoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresupuestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresupuestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presupuesto model
   */
  readonly fields: PresupuestoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presupuesto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresupuestoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datosPresupuesto<T extends Presupuesto$datosPresupuestoArgs<ExtArgs> = {}>(args?: Subset<T, Presupuesto$datosPresupuestoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Presupuesto model
   */
  interface PresupuestoFieldRefs {
    readonly id: FieldRef<"Presupuesto", 'String'>
    readonly nombre: FieldRef<"Presupuesto", 'String'>
    readonly isFavorite: FieldRef<"Presupuesto", 'Boolean'>
    readonly createdAt: FieldRef<"Presupuesto", 'DateTime'>
    readonly updatedAt: FieldRef<"Presupuesto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Presupuesto findUnique
   */
  export type PresupuestoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which Presupuesto to fetch.
     */
    where: PresupuestoWhereUniqueInput
  }

  /**
   * Presupuesto findUniqueOrThrow
   */
  export type PresupuestoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which Presupuesto to fetch.
     */
    where: PresupuestoWhereUniqueInput
  }

  /**
   * Presupuesto findFirst
   */
  export type PresupuestoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which Presupuesto to fetch.
     */
    where?: PresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presupuestos to fetch.
     */
    orderBy?: PresupuestoOrderByWithRelationInput | PresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presupuestos.
     */
    cursor?: PresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presupuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presupuestos.
     */
    distinct?: PresupuestoScalarFieldEnum | PresupuestoScalarFieldEnum[]
  }

  /**
   * Presupuesto findFirstOrThrow
   */
  export type PresupuestoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which Presupuesto to fetch.
     */
    where?: PresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presupuestos to fetch.
     */
    orderBy?: PresupuestoOrderByWithRelationInput | PresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presupuestos.
     */
    cursor?: PresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presupuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presupuestos.
     */
    distinct?: PresupuestoScalarFieldEnum | PresupuestoScalarFieldEnum[]
  }

  /**
   * Presupuesto findMany
   */
  export type PresupuestoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which Presupuestos to fetch.
     */
    where?: PresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presupuestos to fetch.
     */
    orderBy?: PresupuestoOrderByWithRelationInput | PresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presupuestos.
     */
    cursor?: PresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presupuestos.
     */
    skip?: number
    distinct?: PresupuestoScalarFieldEnum | PresupuestoScalarFieldEnum[]
  }

  /**
   * Presupuesto create
   */
  export type PresupuestoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * The data needed to create a Presupuesto.
     */
    data: XOR<PresupuestoCreateInput, PresupuestoUncheckedCreateInput>
  }

  /**
   * Presupuesto createMany
   */
  export type PresupuestoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presupuestos.
     */
    data: PresupuestoCreateManyInput | PresupuestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presupuesto createManyAndReturn
   */
  export type PresupuestoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * The data used to create many Presupuestos.
     */
    data: PresupuestoCreateManyInput | PresupuestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presupuesto update
   */
  export type PresupuestoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * The data needed to update a Presupuesto.
     */
    data: XOR<PresupuestoUpdateInput, PresupuestoUncheckedUpdateInput>
    /**
     * Choose, which Presupuesto to update.
     */
    where: PresupuestoWhereUniqueInput
  }

  /**
   * Presupuesto updateMany
   */
  export type PresupuestoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presupuestos.
     */
    data: XOR<PresupuestoUpdateManyMutationInput, PresupuestoUncheckedUpdateManyInput>
    /**
     * Filter which Presupuestos to update
     */
    where?: PresupuestoWhereInput
    /**
     * Limit how many Presupuestos to update.
     */
    limit?: number
  }

  /**
   * Presupuesto updateManyAndReturn
   */
  export type PresupuestoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * The data used to update Presupuestos.
     */
    data: XOR<PresupuestoUpdateManyMutationInput, PresupuestoUncheckedUpdateManyInput>
    /**
     * Filter which Presupuestos to update
     */
    where?: PresupuestoWhereInput
    /**
     * Limit how many Presupuestos to update.
     */
    limit?: number
  }

  /**
   * Presupuesto upsert
   */
  export type PresupuestoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * The filter to search for the Presupuesto to update in case it exists.
     */
    where: PresupuestoWhereUniqueInput
    /**
     * In case the Presupuesto found by the `where` argument doesn't exist, create a new Presupuesto with this data.
     */
    create: XOR<PresupuestoCreateInput, PresupuestoUncheckedCreateInput>
    /**
     * In case the Presupuesto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresupuestoUpdateInput, PresupuestoUncheckedUpdateInput>
  }

  /**
   * Presupuesto delete
   */
  export type PresupuestoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
    /**
     * Filter which Presupuesto to delete.
     */
    where: PresupuestoWhereUniqueInput
  }

  /**
   * Presupuesto deleteMany
   */
  export type PresupuestoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presupuestos to delete
     */
    where?: PresupuestoWhereInput
    /**
     * Limit how many Presupuestos to delete.
     */
    limit?: number
  }

  /**
   * Presupuesto.datosPresupuesto
   */
  export type Presupuesto$datosPresupuestoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    where?: DetallesPresupuestoWhereInput
    orderBy?: DetallesPresupuestoOrderByWithRelationInput | DetallesPresupuestoOrderByWithRelationInput[]
    cursor?: DetallesPresupuestoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetallesPresupuestoScalarFieldEnum | DetallesPresupuestoScalarFieldEnum[]
  }

  /**
   * Presupuesto without action
   */
  export type PresupuestoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presupuesto
     */
    select?: PresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presupuesto
     */
    omit?: PresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoInclude<ExtArgs> | null
  }


  /**
   * Model DetallesPresupuesto
   */

  export type AggregateDetallesPresupuesto = {
    _count: DetallesPresupuestoCountAggregateOutputType | null
    _avg: DetallesPresupuestoAvgAggregateOutputType | null
    _sum: DetallesPresupuestoSumAggregateOutputType | null
    _min: DetallesPresupuestoMinAggregateOutputType | null
    _max: DetallesPresupuestoMaxAggregateOutputType | null
  }

  export type DetallesPresupuestoAvgAggregateOutputType = {
    presupuesto: number | null
    monto: number | null
  }

  export type DetallesPresupuestoSumAggregateOutputType = {
    presupuesto: number | null
    monto: number | null
  }

  export type DetallesPresupuestoMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    mes: string | null
    tipo: string | null
    categoria: string | null
    concepto: string | null
    presupuesto: number | null
    monto: number | null
    presupuestoMainId: string | null
  }

  export type DetallesPresupuestoMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    mes: string | null
    tipo: string | null
    categoria: string | null
    concepto: string | null
    presupuesto: number | null
    monto: number | null
    presupuestoMainId: string | null
  }

  export type DetallesPresupuestoCountAggregateOutputType = {
    id: number
    fecha: number
    mes: number
    tipo: number
    categoria: number
    concepto: number
    presupuesto: number
    monto: number
    presupuestoMainId: number
    _all: number
  }


  export type DetallesPresupuestoAvgAggregateInputType = {
    presupuesto?: true
    monto?: true
  }

  export type DetallesPresupuestoSumAggregateInputType = {
    presupuesto?: true
    monto?: true
  }

  export type DetallesPresupuestoMinAggregateInputType = {
    id?: true
    fecha?: true
    mes?: true
    tipo?: true
    categoria?: true
    concepto?: true
    presupuesto?: true
    monto?: true
    presupuestoMainId?: true
  }

  export type DetallesPresupuestoMaxAggregateInputType = {
    id?: true
    fecha?: true
    mes?: true
    tipo?: true
    categoria?: true
    concepto?: true
    presupuesto?: true
    monto?: true
    presupuestoMainId?: true
  }

  export type DetallesPresupuestoCountAggregateInputType = {
    id?: true
    fecha?: true
    mes?: true
    tipo?: true
    categoria?: true
    concepto?: true
    presupuesto?: true
    monto?: true
    presupuestoMainId?: true
    _all?: true
  }

  export type DetallesPresupuestoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetallesPresupuesto to aggregate.
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallesPresupuestos to fetch.
     */
    orderBy?: DetallesPresupuestoOrderByWithRelationInput | DetallesPresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetallesPresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallesPresupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallesPresupuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetallesPresupuestos
    **/
    _count?: true | DetallesPresupuestoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetallesPresupuestoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetallesPresupuestoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetallesPresupuestoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetallesPresupuestoMaxAggregateInputType
  }

  export type GetDetallesPresupuestoAggregateType<T extends DetallesPresupuestoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetallesPresupuesto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetallesPresupuesto[P]>
      : GetScalarType<T[P], AggregateDetallesPresupuesto[P]>
  }




  export type DetallesPresupuestoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetallesPresupuestoWhereInput
    orderBy?: DetallesPresupuestoOrderByWithAggregationInput | DetallesPresupuestoOrderByWithAggregationInput[]
    by: DetallesPresupuestoScalarFieldEnum[] | DetallesPresupuestoScalarFieldEnum
    having?: DetallesPresupuestoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetallesPresupuestoCountAggregateInputType | true
    _avg?: DetallesPresupuestoAvgAggregateInputType
    _sum?: DetallesPresupuestoSumAggregateInputType
    _min?: DetallesPresupuestoMinAggregateInputType
    _max?: DetallesPresupuestoMaxAggregateInputType
  }

  export type DetallesPresupuestoGroupByOutputType = {
    id: string
    fecha: Date
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
    presupuestoMainId: string
    _count: DetallesPresupuestoCountAggregateOutputType | null
    _avg: DetallesPresupuestoAvgAggregateOutputType | null
    _sum: DetallesPresupuestoSumAggregateOutputType | null
    _min: DetallesPresupuestoMinAggregateOutputType | null
    _max: DetallesPresupuestoMaxAggregateOutputType | null
  }

  type GetDetallesPresupuestoGroupByPayload<T extends DetallesPresupuestoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetallesPresupuestoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetallesPresupuestoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetallesPresupuestoGroupByOutputType[P]>
            : GetScalarType<T[P], DetallesPresupuestoGroupByOutputType[P]>
        }
      >
    >


  export type DetallesPresupuestoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    mes?: boolean
    tipo?: boolean
    categoria?: boolean
    concepto?: boolean
    presupuesto?: boolean
    monto?: boolean
    presupuestoMainId?: boolean
    presupuestoMain?: boolean | PresupuestoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detallesPresupuesto"]>

  export type DetallesPresupuestoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    mes?: boolean
    tipo?: boolean
    categoria?: boolean
    concepto?: boolean
    presupuesto?: boolean
    monto?: boolean
    presupuestoMainId?: boolean
    presupuestoMain?: boolean | PresupuestoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detallesPresupuesto"]>

  export type DetallesPresupuestoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    mes?: boolean
    tipo?: boolean
    categoria?: boolean
    concepto?: boolean
    presupuesto?: boolean
    monto?: boolean
    presupuestoMainId?: boolean
    presupuestoMain?: boolean | PresupuestoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detallesPresupuesto"]>

  export type DetallesPresupuestoSelectScalar = {
    id?: boolean
    fecha?: boolean
    mes?: boolean
    tipo?: boolean
    categoria?: boolean
    concepto?: boolean
    presupuesto?: boolean
    monto?: boolean
    presupuestoMainId?: boolean
  }

  export type DetallesPresupuestoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "mes" | "tipo" | "categoria" | "concepto" | "presupuesto" | "monto" | "presupuestoMainId", ExtArgs["result"]["detallesPresupuesto"]>
  export type DetallesPresupuestoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presupuestoMain?: boolean | PresupuestoDefaultArgs<ExtArgs>
  }
  export type DetallesPresupuestoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presupuestoMain?: boolean | PresupuestoDefaultArgs<ExtArgs>
  }
  export type DetallesPresupuestoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    presupuestoMain?: boolean | PresupuestoDefaultArgs<ExtArgs>
  }

  export type $DetallesPresupuestoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetallesPresupuesto"
    objects: {
      presupuestoMain: Prisma.$PresupuestoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      mes: string
      tipo: string
      categoria: string
      concepto: string
      presupuesto: number
      monto: number
      presupuestoMainId: string
    }, ExtArgs["result"]["detallesPresupuesto"]>
    composites: {}
  }

  type DetallesPresupuestoGetPayload<S extends boolean | null | undefined | DetallesPresupuestoDefaultArgs> = $Result.GetResult<Prisma.$DetallesPresupuestoPayload, S>

  type DetallesPresupuestoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetallesPresupuestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetallesPresupuestoCountAggregateInputType | true
    }

  export interface DetallesPresupuestoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetallesPresupuesto'], meta: { name: 'DetallesPresupuesto' } }
    /**
     * Find zero or one DetallesPresupuesto that matches the filter.
     * @param {DetallesPresupuestoFindUniqueArgs} args - Arguments to find a DetallesPresupuesto
     * @example
     * // Get one DetallesPresupuesto
     * const detallesPresupuesto = await prisma.detallesPresupuesto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetallesPresupuestoFindUniqueArgs>(args: SelectSubset<T, DetallesPresupuestoFindUniqueArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetallesPresupuesto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetallesPresupuestoFindUniqueOrThrowArgs} args - Arguments to find a DetallesPresupuesto
     * @example
     * // Get one DetallesPresupuesto
     * const detallesPresupuesto = await prisma.detallesPresupuesto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetallesPresupuestoFindUniqueOrThrowArgs>(args: SelectSubset<T, DetallesPresupuestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetallesPresupuesto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoFindFirstArgs} args - Arguments to find a DetallesPresupuesto
     * @example
     * // Get one DetallesPresupuesto
     * const detallesPresupuesto = await prisma.detallesPresupuesto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetallesPresupuestoFindFirstArgs>(args?: SelectSubset<T, DetallesPresupuestoFindFirstArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetallesPresupuesto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoFindFirstOrThrowArgs} args - Arguments to find a DetallesPresupuesto
     * @example
     * // Get one DetallesPresupuesto
     * const detallesPresupuesto = await prisma.detallesPresupuesto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetallesPresupuestoFindFirstOrThrowArgs>(args?: SelectSubset<T, DetallesPresupuestoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetallesPresupuestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetallesPresupuestos
     * const detallesPresupuestos = await prisma.detallesPresupuesto.findMany()
     * 
     * // Get first 10 DetallesPresupuestos
     * const detallesPresupuestos = await prisma.detallesPresupuesto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detallesPresupuestoWithIdOnly = await prisma.detallesPresupuesto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetallesPresupuestoFindManyArgs>(args?: SelectSubset<T, DetallesPresupuestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetallesPresupuesto.
     * @param {DetallesPresupuestoCreateArgs} args - Arguments to create a DetallesPresupuesto.
     * @example
     * // Create one DetallesPresupuesto
     * const DetallesPresupuesto = await prisma.detallesPresupuesto.create({
     *   data: {
     *     // ... data to create a DetallesPresupuesto
     *   }
     * })
     * 
     */
    create<T extends DetallesPresupuestoCreateArgs>(args: SelectSubset<T, DetallesPresupuestoCreateArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetallesPresupuestos.
     * @param {DetallesPresupuestoCreateManyArgs} args - Arguments to create many DetallesPresupuestos.
     * @example
     * // Create many DetallesPresupuestos
     * const detallesPresupuesto = await prisma.detallesPresupuesto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetallesPresupuestoCreateManyArgs>(args?: SelectSubset<T, DetallesPresupuestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetallesPresupuestos and returns the data saved in the database.
     * @param {DetallesPresupuestoCreateManyAndReturnArgs} args - Arguments to create many DetallesPresupuestos.
     * @example
     * // Create many DetallesPresupuestos
     * const detallesPresupuesto = await prisma.detallesPresupuesto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetallesPresupuestos and only return the `id`
     * const detallesPresupuestoWithIdOnly = await prisma.detallesPresupuesto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetallesPresupuestoCreateManyAndReturnArgs>(args?: SelectSubset<T, DetallesPresupuestoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetallesPresupuesto.
     * @param {DetallesPresupuestoDeleteArgs} args - Arguments to delete one DetallesPresupuesto.
     * @example
     * // Delete one DetallesPresupuesto
     * const DetallesPresupuesto = await prisma.detallesPresupuesto.delete({
     *   where: {
     *     // ... filter to delete one DetallesPresupuesto
     *   }
     * })
     * 
     */
    delete<T extends DetallesPresupuestoDeleteArgs>(args: SelectSubset<T, DetallesPresupuestoDeleteArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetallesPresupuesto.
     * @param {DetallesPresupuestoUpdateArgs} args - Arguments to update one DetallesPresupuesto.
     * @example
     * // Update one DetallesPresupuesto
     * const detallesPresupuesto = await prisma.detallesPresupuesto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetallesPresupuestoUpdateArgs>(args: SelectSubset<T, DetallesPresupuestoUpdateArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetallesPresupuestos.
     * @param {DetallesPresupuestoDeleteManyArgs} args - Arguments to filter DetallesPresupuestos to delete.
     * @example
     * // Delete a few DetallesPresupuestos
     * const { count } = await prisma.detallesPresupuesto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetallesPresupuestoDeleteManyArgs>(args?: SelectSubset<T, DetallesPresupuestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetallesPresupuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetallesPresupuestos
     * const detallesPresupuesto = await prisma.detallesPresupuesto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetallesPresupuestoUpdateManyArgs>(args: SelectSubset<T, DetallesPresupuestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetallesPresupuestos and returns the data updated in the database.
     * @param {DetallesPresupuestoUpdateManyAndReturnArgs} args - Arguments to update many DetallesPresupuestos.
     * @example
     * // Update many DetallesPresupuestos
     * const detallesPresupuesto = await prisma.detallesPresupuesto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetallesPresupuestos and only return the `id`
     * const detallesPresupuestoWithIdOnly = await prisma.detallesPresupuesto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetallesPresupuestoUpdateManyAndReturnArgs>(args: SelectSubset<T, DetallesPresupuestoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetallesPresupuesto.
     * @param {DetallesPresupuestoUpsertArgs} args - Arguments to update or create a DetallesPresupuesto.
     * @example
     * // Update or create a DetallesPresupuesto
     * const detallesPresupuesto = await prisma.detallesPresupuesto.upsert({
     *   create: {
     *     // ... data to create a DetallesPresupuesto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetallesPresupuesto we want to update
     *   }
     * })
     */
    upsert<T extends DetallesPresupuestoUpsertArgs>(args: SelectSubset<T, DetallesPresupuestoUpsertArgs<ExtArgs>>): Prisma__DetallesPresupuestoClient<$Result.GetResult<Prisma.$DetallesPresupuestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetallesPresupuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoCountArgs} args - Arguments to filter DetallesPresupuestos to count.
     * @example
     * // Count the number of DetallesPresupuestos
     * const count = await prisma.detallesPresupuesto.count({
     *   where: {
     *     // ... the filter for the DetallesPresupuestos we want to count
     *   }
     * })
    **/
    count<T extends DetallesPresupuestoCountArgs>(
      args?: Subset<T, DetallesPresupuestoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetallesPresupuestoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetallesPresupuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetallesPresupuestoAggregateArgs>(args: Subset<T, DetallesPresupuestoAggregateArgs>): Prisma.PrismaPromise<GetDetallesPresupuestoAggregateType<T>>

    /**
     * Group by DetallesPresupuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesPresupuestoGroupByArgs} args - Group by arguments.
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
      T extends DetallesPresupuestoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetallesPresupuestoGroupByArgs['orderBy'] }
        : { orderBy?: DetallesPresupuestoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetallesPresupuestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetallesPresupuestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetallesPresupuesto model
   */
  readonly fields: DetallesPresupuestoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetallesPresupuesto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetallesPresupuestoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    presupuestoMain<T extends PresupuestoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PresupuestoDefaultArgs<ExtArgs>>): Prisma__PresupuestoClient<$Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetallesPresupuesto model
   */
  interface DetallesPresupuestoFieldRefs {
    readonly id: FieldRef<"DetallesPresupuesto", 'String'>
    readonly fecha: FieldRef<"DetallesPresupuesto", 'DateTime'>
    readonly mes: FieldRef<"DetallesPresupuesto", 'String'>
    readonly tipo: FieldRef<"DetallesPresupuesto", 'String'>
    readonly categoria: FieldRef<"DetallesPresupuesto", 'String'>
    readonly concepto: FieldRef<"DetallesPresupuesto", 'String'>
    readonly presupuesto: FieldRef<"DetallesPresupuesto", 'Float'>
    readonly monto: FieldRef<"DetallesPresupuesto", 'Float'>
    readonly presupuestoMainId: FieldRef<"DetallesPresupuesto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetallesPresupuesto findUnique
   */
  export type DetallesPresupuestoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which DetallesPresupuesto to fetch.
     */
    where: DetallesPresupuestoWhereUniqueInput
  }

  /**
   * DetallesPresupuesto findUniqueOrThrow
   */
  export type DetallesPresupuestoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which DetallesPresupuesto to fetch.
     */
    where: DetallesPresupuestoWhereUniqueInput
  }

  /**
   * DetallesPresupuesto findFirst
   */
  export type DetallesPresupuestoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which DetallesPresupuesto to fetch.
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallesPresupuestos to fetch.
     */
    orderBy?: DetallesPresupuestoOrderByWithRelationInput | DetallesPresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetallesPresupuestos.
     */
    cursor?: DetallesPresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallesPresupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallesPresupuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetallesPresupuestos.
     */
    distinct?: DetallesPresupuestoScalarFieldEnum | DetallesPresupuestoScalarFieldEnum[]
  }

  /**
   * DetallesPresupuesto findFirstOrThrow
   */
  export type DetallesPresupuestoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which DetallesPresupuesto to fetch.
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallesPresupuestos to fetch.
     */
    orderBy?: DetallesPresupuestoOrderByWithRelationInput | DetallesPresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetallesPresupuestos.
     */
    cursor?: DetallesPresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallesPresupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallesPresupuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetallesPresupuestos.
     */
    distinct?: DetallesPresupuestoScalarFieldEnum | DetallesPresupuestoScalarFieldEnum[]
  }

  /**
   * DetallesPresupuesto findMany
   */
  export type DetallesPresupuestoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * Filter, which DetallesPresupuestos to fetch.
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallesPresupuestos to fetch.
     */
    orderBy?: DetallesPresupuestoOrderByWithRelationInput | DetallesPresupuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetallesPresupuestos.
     */
    cursor?: DetallesPresupuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallesPresupuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallesPresupuestos.
     */
    skip?: number
    distinct?: DetallesPresupuestoScalarFieldEnum | DetallesPresupuestoScalarFieldEnum[]
  }

  /**
   * DetallesPresupuesto create
   */
  export type DetallesPresupuestoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * The data needed to create a DetallesPresupuesto.
     */
    data: XOR<DetallesPresupuestoCreateInput, DetallesPresupuestoUncheckedCreateInput>
  }

  /**
   * DetallesPresupuesto createMany
   */
  export type DetallesPresupuestoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetallesPresupuestos.
     */
    data: DetallesPresupuestoCreateManyInput | DetallesPresupuestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetallesPresupuesto createManyAndReturn
   */
  export type DetallesPresupuestoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * The data used to create many DetallesPresupuestos.
     */
    data: DetallesPresupuestoCreateManyInput | DetallesPresupuestoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetallesPresupuesto update
   */
  export type DetallesPresupuestoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * The data needed to update a DetallesPresupuesto.
     */
    data: XOR<DetallesPresupuestoUpdateInput, DetallesPresupuestoUncheckedUpdateInput>
    /**
     * Choose, which DetallesPresupuesto to update.
     */
    where: DetallesPresupuestoWhereUniqueInput
  }

  /**
   * DetallesPresupuesto updateMany
   */
  export type DetallesPresupuestoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetallesPresupuestos.
     */
    data: XOR<DetallesPresupuestoUpdateManyMutationInput, DetallesPresupuestoUncheckedUpdateManyInput>
    /**
     * Filter which DetallesPresupuestos to update
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * Limit how many DetallesPresupuestos to update.
     */
    limit?: number
  }

  /**
   * DetallesPresupuesto updateManyAndReturn
   */
  export type DetallesPresupuestoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * The data used to update DetallesPresupuestos.
     */
    data: XOR<DetallesPresupuestoUpdateManyMutationInput, DetallesPresupuestoUncheckedUpdateManyInput>
    /**
     * Filter which DetallesPresupuestos to update
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * Limit how many DetallesPresupuestos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetallesPresupuesto upsert
   */
  export type DetallesPresupuestoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * The filter to search for the DetallesPresupuesto to update in case it exists.
     */
    where: DetallesPresupuestoWhereUniqueInput
    /**
     * In case the DetallesPresupuesto found by the `where` argument doesn't exist, create a new DetallesPresupuesto with this data.
     */
    create: XOR<DetallesPresupuestoCreateInput, DetallesPresupuestoUncheckedCreateInput>
    /**
     * In case the DetallesPresupuesto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetallesPresupuestoUpdateInput, DetallesPresupuestoUncheckedUpdateInput>
  }

  /**
   * DetallesPresupuesto delete
   */
  export type DetallesPresupuestoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
    /**
     * Filter which DetallesPresupuesto to delete.
     */
    where: DetallesPresupuestoWhereUniqueInput
  }

  /**
   * DetallesPresupuesto deleteMany
   */
  export type DetallesPresupuestoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetallesPresupuestos to delete
     */
    where?: DetallesPresupuestoWhereInput
    /**
     * Limit how many DetallesPresupuestos to delete.
     */
    limit?: number
  }

  /**
   * DetallesPresupuesto without action
   */
  export type DetallesPresupuestoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesPresupuesto
     */
    select?: DetallesPresupuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallesPresupuesto
     */
    omit?: DetallesPresupuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesPresupuestoInclude<ExtArgs> | null
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


  export const PresupuestoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresupuestoScalarFieldEnum = (typeof PresupuestoScalarFieldEnum)[keyof typeof PresupuestoScalarFieldEnum]


  export const DetallesPresupuestoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    mes: 'mes',
    tipo: 'tipo',
    categoria: 'categoria',
    concepto: 'concepto',
    presupuesto: 'presupuesto',
    monto: 'monto',
    presupuestoMainId: 'presupuestoMainId'
  };

  export type DetallesPresupuestoScalarFieldEnum = (typeof DetallesPresupuestoScalarFieldEnum)[keyof typeof DetallesPresupuestoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PresupuestoWhereInput = {
    AND?: PresupuestoWhereInput | PresupuestoWhereInput[]
    OR?: PresupuestoWhereInput[]
    NOT?: PresupuestoWhereInput | PresupuestoWhereInput[]
    id?: StringFilter<"Presupuesto"> | string
    nombre?: StringFilter<"Presupuesto"> | string
    isFavorite?: BoolFilter<"Presupuesto"> | boolean
    createdAt?: DateTimeFilter<"Presupuesto"> | Date | string
    updatedAt?: DateTimeFilter<"Presupuesto"> | Date | string
    datosPresupuesto?: DetallesPresupuestoListRelationFilter
  }

  export type PresupuestoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    datosPresupuesto?: DetallesPresupuestoOrderByRelationAggregateInput
  }

  export type PresupuestoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PresupuestoWhereInput | PresupuestoWhereInput[]
    OR?: PresupuestoWhereInput[]
    NOT?: PresupuestoWhereInput | PresupuestoWhereInput[]
    nombre?: StringFilter<"Presupuesto"> | string
    isFavorite?: BoolFilter<"Presupuesto"> | boolean
    createdAt?: DateTimeFilter<"Presupuesto"> | Date | string
    updatedAt?: DateTimeFilter<"Presupuesto"> | Date | string
    datosPresupuesto?: DetallesPresupuestoListRelationFilter
  }, "id">

  export type PresupuestoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PresupuestoCountOrderByAggregateInput
    _max?: PresupuestoMaxOrderByAggregateInput
    _min?: PresupuestoMinOrderByAggregateInput
  }

  export type PresupuestoScalarWhereWithAggregatesInput = {
    AND?: PresupuestoScalarWhereWithAggregatesInput | PresupuestoScalarWhereWithAggregatesInput[]
    OR?: PresupuestoScalarWhereWithAggregatesInput[]
    NOT?: PresupuestoScalarWhereWithAggregatesInput | PresupuestoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Presupuesto"> | string
    nombre?: StringWithAggregatesFilter<"Presupuesto"> | string
    isFavorite?: BoolWithAggregatesFilter<"Presupuesto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Presupuesto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Presupuesto"> | Date | string
  }

  export type DetallesPresupuestoWhereInput = {
    AND?: DetallesPresupuestoWhereInput | DetallesPresupuestoWhereInput[]
    OR?: DetallesPresupuestoWhereInput[]
    NOT?: DetallesPresupuestoWhereInput | DetallesPresupuestoWhereInput[]
    id?: StringFilter<"DetallesPresupuesto"> | string
    fecha?: DateTimeFilter<"DetallesPresupuesto"> | Date | string
    mes?: StringFilter<"DetallesPresupuesto"> | string
    tipo?: StringFilter<"DetallesPresupuesto"> | string
    categoria?: StringFilter<"DetallesPresupuesto"> | string
    concepto?: StringFilter<"DetallesPresupuesto"> | string
    presupuesto?: FloatFilter<"DetallesPresupuesto"> | number
    monto?: FloatFilter<"DetallesPresupuesto"> | number
    presupuestoMainId?: StringFilter<"DetallesPresupuesto"> | string
    presupuestoMain?: XOR<PresupuestoScalarRelationFilter, PresupuestoWhereInput>
  }

  export type DetallesPresupuestoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    mes?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    concepto?: SortOrder
    presupuesto?: SortOrder
    monto?: SortOrder
    presupuestoMainId?: SortOrder
    presupuestoMain?: PresupuestoOrderByWithRelationInput
  }

  export type DetallesPresupuestoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetallesPresupuestoWhereInput | DetallesPresupuestoWhereInput[]
    OR?: DetallesPresupuestoWhereInput[]
    NOT?: DetallesPresupuestoWhereInput | DetallesPresupuestoWhereInput[]
    fecha?: DateTimeFilter<"DetallesPresupuesto"> | Date | string
    mes?: StringFilter<"DetallesPresupuesto"> | string
    tipo?: StringFilter<"DetallesPresupuesto"> | string
    categoria?: StringFilter<"DetallesPresupuesto"> | string
    concepto?: StringFilter<"DetallesPresupuesto"> | string
    presupuesto?: FloatFilter<"DetallesPresupuesto"> | number
    monto?: FloatFilter<"DetallesPresupuesto"> | number
    presupuestoMainId?: StringFilter<"DetallesPresupuesto"> | string
    presupuestoMain?: XOR<PresupuestoScalarRelationFilter, PresupuestoWhereInput>
  }, "id">

  export type DetallesPresupuestoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    mes?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    concepto?: SortOrder
    presupuesto?: SortOrder
    monto?: SortOrder
    presupuestoMainId?: SortOrder
    _count?: DetallesPresupuestoCountOrderByAggregateInput
    _avg?: DetallesPresupuestoAvgOrderByAggregateInput
    _max?: DetallesPresupuestoMaxOrderByAggregateInput
    _min?: DetallesPresupuestoMinOrderByAggregateInput
    _sum?: DetallesPresupuestoSumOrderByAggregateInput
  }

  export type DetallesPresupuestoScalarWhereWithAggregatesInput = {
    AND?: DetallesPresupuestoScalarWhereWithAggregatesInput | DetallesPresupuestoScalarWhereWithAggregatesInput[]
    OR?: DetallesPresupuestoScalarWhereWithAggregatesInput[]
    NOT?: DetallesPresupuestoScalarWhereWithAggregatesInput | DetallesPresupuestoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetallesPresupuesto"> | string
    fecha?: DateTimeWithAggregatesFilter<"DetallesPresupuesto"> | Date | string
    mes?: StringWithAggregatesFilter<"DetallesPresupuesto"> | string
    tipo?: StringWithAggregatesFilter<"DetallesPresupuesto"> | string
    categoria?: StringWithAggregatesFilter<"DetallesPresupuesto"> | string
    concepto?: StringWithAggregatesFilter<"DetallesPresupuesto"> | string
    presupuesto?: FloatWithAggregatesFilter<"DetallesPresupuesto"> | number
    monto?: FloatWithAggregatesFilter<"DetallesPresupuesto"> | number
    presupuestoMainId?: StringWithAggregatesFilter<"DetallesPresupuesto"> | string
  }

  export type PresupuestoCreateInput = {
    id?: string
    nombre: string
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datosPresupuesto?: DetallesPresupuestoCreateNestedManyWithoutPresupuestoMainInput
  }

  export type PresupuestoUncheckedCreateInput = {
    id?: string
    nombre: string
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    datosPresupuesto?: DetallesPresupuestoUncheckedCreateNestedManyWithoutPresupuestoMainInput
  }

  export type PresupuestoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datosPresupuesto?: DetallesPresupuestoUpdateManyWithoutPresupuestoMainNestedInput
  }

  export type PresupuestoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datosPresupuesto?: DetallesPresupuestoUncheckedUpdateManyWithoutPresupuestoMainNestedInput
  }

  export type PresupuestoCreateManyInput = {
    id?: string
    nombre: string
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetallesPresupuestoCreateInput = {
    id?: string
    fecha: Date | string
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
    presupuestoMain: PresupuestoCreateNestedOneWithoutDatosPresupuestoInput
  }

  export type DetallesPresupuestoUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
    presupuestoMainId: string
  }

  export type DetallesPresupuestoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    presupuestoMain?: PresupuestoUpdateOneRequiredWithoutDatosPresupuestoNestedInput
  }

  export type DetallesPresupuestoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    presupuestoMainId?: StringFieldUpdateOperationsInput | string
  }

  export type DetallesPresupuestoCreateManyInput = {
    id?: string
    fecha: Date | string
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
    presupuestoMainId: string
  }

  export type DetallesPresupuestoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type DetallesPresupuestoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    presupuestoMainId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DetallesPresupuestoListRelationFilter = {
    every?: DetallesPresupuestoWhereInput
    some?: DetallesPresupuestoWhereInput
    none?: DetallesPresupuestoWhereInput
  }

  export type DetallesPresupuestoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresupuestoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresupuestoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresupuestoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PresupuestoScalarRelationFilter = {
    is?: PresupuestoWhereInput
    isNot?: PresupuestoWhereInput
  }

  export type DetallesPresupuestoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    mes?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    concepto?: SortOrder
    presupuesto?: SortOrder
    monto?: SortOrder
    presupuestoMainId?: SortOrder
  }

  export type DetallesPresupuestoAvgOrderByAggregateInput = {
    presupuesto?: SortOrder
    monto?: SortOrder
  }

  export type DetallesPresupuestoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    mes?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    concepto?: SortOrder
    presupuesto?: SortOrder
    monto?: SortOrder
    presupuestoMainId?: SortOrder
  }

  export type DetallesPresupuestoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    mes?: SortOrder
    tipo?: SortOrder
    categoria?: SortOrder
    concepto?: SortOrder
    presupuesto?: SortOrder
    monto?: SortOrder
    presupuestoMainId?: SortOrder
  }

  export type DetallesPresupuestoSumOrderByAggregateInput = {
    presupuesto?: SortOrder
    monto?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DetallesPresupuestoCreateNestedManyWithoutPresupuestoMainInput = {
    create?: XOR<DetallesPresupuestoCreateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput> | DetallesPresupuestoCreateWithoutPresupuestoMainInput[] | DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput[]
    connectOrCreate?: DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput | DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput[]
    createMany?: DetallesPresupuestoCreateManyPresupuestoMainInputEnvelope
    connect?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
  }

  export type DetallesPresupuestoUncheckedCreateNestedManyWithoutPresupuestoMainInput = {
    create?: XOR<DetallesPresupuestoCreateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput> | DetallesPresupuestoCreateWithoutPresupuestoMainInput[] | DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput[]
    connectOrCreate?: DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput | DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput[]
    createMany?: DetallesPresupuestoCreateManyPresupuestoMainInputEnvelope
    connect?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DetallesPresupuestoUpdateManyWithoutPresupuestoMainNestedInput = {
    create?: XOR<DetallesPresupuestoCreateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput> | DetallesPresupuestoCreateWithoutPresupuestoMainInput[] | DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput[]
    connectOrCreate?: DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput | DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput[]
    upsert?: DetallesPresupuestoUpsertWithWhereUniqueWithoutPresupuestoMainInput | DetallesPresupuestoUpsertWithWhereUniqueWithoutPresupuestoMainInput[]
    createMany?: DetallesPresupuestoCreateManyPresupuestoMainInputEnvelope
    set?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    disconnect?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    delete?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    connect?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    update?: DetallesPresupuestoUpdateWithWhereUniqueWithoutPresupuestoMainInput | DetallesPresupuestoUpdateWithWhereUniqueWithoutPresupuestoMainInput[]
    updateMany?: DetallesPresupuestoUpdateManyWithWhereWithoutPresupuestoMainInput | DetallesPresupuestoUpdateManyWithWhereWithoutPresupuestoMainInput[]
    deleteMany?: DetallesPresupuestoScalarWhereInput | DetallesPresupuestoScalarWhereInput[]
  }

  export type DetallesPresupuestoUncheckedUpdateManyWithoutPresupuestoMainNestedInput = {
    create?: XOR<DetallesPresupuestoCreateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput> | DetallesPresupuestoCreateWithoutPresupuestoMainInput[] | DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput[]
    connectOrCreate?: DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput | DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput[]
    upsert?: DetallesPresupuestoUpsertWithWhereUniqueWithoutPresupuestoMainInput | DetallesPresupuestoUpsertWithWhereUniqueWithoutPresupuestoMainInput[]
    createMany?: DetallesPresupuestoCreateManyPresupuestoMainInputEnvelope
    set?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    disconnect?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    delete?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    connect?: DetallesPresupuestoWhereUniqueInput | DetallesPresupuestoWhereUniqueInput[]
    update?: DetallesPresupuestoUpdateWithWhereUniqueWithoutPresupuestoMainInput | DetallesPresupuestoUpdateWithWhereUniqueWithoutPresupuestoMainInput[]
    updateMany?: DetallesPresupuestoUpdateManyWithWhereWithoutPresupuestoMainInput | DetallesPresupuestoUpdateManyWithWhereWithoutPresupuestoMainInput[]
    deleteMany?: DetallesPresupuestoScalarWhereInput | DetallesPresupuestoScalarWhereInput[]
  }

  export type PresupuestoCreateNestedOneWithoutDatosPresupuestoInput = {
    create?: XOR<PresupuestoCreateWithoutDatosPresupuestoInput, PresupuestoUncheckedCreateWithoutDatosPresupuestoInput>
    connectOrCreate?: PresupuestoCreateOrConnectWithoutDatosPresupuestoInput
    connect?: PresupuestoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PresupuestoUpdateOneRequiredWithoutDatosPresupuestoNestedInput = {
    create?: XOR<PresupuestoCreateWithoutDatosPresupuestoInput, PresupuestoUncheckedCreateWithoutDatosPresupuestoInput>
    connectOrCreate?: PresupuestoCreateOrConnectWithoutDatosPresupuestoInput
    upsert?: PresupuestoUpsertWithoutDatosPresupuestoInput
    connect?: PresupuestoWhereUniqueInput
    update?: XOR<XOR<PresupuestoUpdateToOneWithWhereWithoutDatosPresupuestoInput, PresupuestoUpdateWithoutDatosPresupuestoInput>, PresupuestoUncheckedUpdateWithoutDatosPresupuestoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DetallesPresupuestoCreateWithoutPresupuestoMainInput = {
    id?: string
    fecha: Date | string
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
  }

  export type DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput = {
    id?: string
    fecha: Date | string
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
  }

  export type DetallesPresupuestoCreateOrConnectWithoutPresupuestoMainInput = {
    where: DetallesPresupuestoWhereUniqueInput
    create: XOR<DetallesPresupuestoCreateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput>
  }

  export type DetallesPresupuestoCreateManyPresupuestoMainInputEnvelope = {
    data: DetallesPresupuestoCreateManyPresupuestoMainInput | DetallesPresupuestoCreateManyPresupuestoMainInput[]
    skipDuplicates?: boolean
  }

  export type DetallesPresupuestoUpsertWithWhereUniqueWithoutPresupuestoMainInput = {
    where: DetallesPresupuestoWhereUniqueInput
    update: XOR<DetallesPresupuestoUpdateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedUpdateWithoutPresupuestoMainInput>
    create: XOR<DetallesPresupuestoCreateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedCreateWithoutPresupuestoMainInput>
  }

  export type DetallesPresupuestoUpdateWithWhereUniqueWithoutPresupuestoMainInput = {
    where: DetallesPresupuestoWhereUniqueInput
    data: XOR<DetallesPresupuestoUpdateWithoutPresupuestoMainInput, DetallesPresupuestoUncheckedUpdateWithoutPresupuestoMainInput>
  }

  export type DetallesPresupuestoUpdateManyWithWhereWithoutPresupuestoMainInput = {
    where: DetallesPresupuestoScalarWhereInput
    data: XOR<DetallesPresupuestoUpdateManyMutationInput, DetallesPresupuestoUncheckedUpdateManyWithoutPresupuestoMainInput>
  }

  export type DetallesPresupuestoScalarWhereInput = {
    AND?: DetallesPresupuestoScalarWhereInput | DetallesPresupuestoScalarWhereInput[]
    OR?: DetallesPresupuestoScalarWhereInput[]
    NOT?: DetallesPresupuestoScalarWhereInput | DetallesPresupuestoScalarWhereInput[]
    id?: StringFilter<"DetallesPresupuesto"> | string
    fecha?: DateTimeFilter<"DetallesPresupuesto"> | Date | string
    mes?: StringFilter<"DetallesPresupuesto"> | string
    tipo?: StringFilter<"DetallesPresupuesto"> | string
    categoria?: StringFilter<"DetallesPresupuesto"> | string
    concepto?: StringFilter<"DetallesPresupuesto"> | string
    presupuesto?: FloatFilter<"DetallesPresupuesto"> | number
    monto?: FloatFilter<"DetallesPresupuesto"> | number
    presupuestoMainId?: StringFilter<"DetallesPresupuesto"> | string
  }

  export type PresupuestoCreateWithoutDatosPresupuestoInput = {
    id?: string
    nombre: string
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoUncheckedCreateWithoutDatosPresupuestoInput = {
    id?: string
    nombre: string
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoCreateOrConnectWithoutDatosPresupuestoInput = {
    where: PresupuestoWhereUniqueInput
    create: XOR<PresupuestoCreateWithoutDatosPresupuestoInput, PresupuestoUncheckedCreateWithoutDatosPresupuestoInput>
  }

  export type PresupuestoUpsertWithoutDatosPresupuestoInput = {
    update: XOR<PresupuestoUpdateWithoutDatosPresupuestoInput, PresupuestoUncheckedUpdateWithoutDatosPresupuestoInput>
    create: XOR<PresupuestoCreateWithoutDatosPresupuestoInput, PresupuestoUncheckedCreateWithoutDatosPresupuestoInput>
    where?: PresupuestoWhereInput
  }

  export type PresupuestoUpdateToOneWithWhereWithoutDatosPresupuestoInput = {
    where?: PresupuestoWhereInput
    data: XOR<PresupuestoUpdateWithoutDatosPresupuestoInput, PresupuestoUncheckedUpdateWithoutDatosPresupuestoInput>
  }

  export type PresupuestoUpdateWithoutDatosPresupuestoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoUncheckedUpdateWithoutDatosPresupuestoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetallesPresupuestoCreateManyPresupuestoMainInput = {
    id?: string
    fecha: Date | string
    mes: string
    tipo: string
    categoria: string
    concepto: string
    presupuesto: number
    monto: number
  }

  export type DetallesPresupuestoUpdateWithoutPresupuestoMainInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type DetallesPresupuestoUncheckedUpdateWithoutPresupuestoMainInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
  }

  export type DetallesPresupuestoUncheckedUpdateManyWithoutPresupuestoMainInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    mes?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    concepto?: StringFieldUpdateOperationsInput | string
    presupuesto?: FloatFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
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